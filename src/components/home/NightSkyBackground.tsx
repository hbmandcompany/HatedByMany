'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function NightSkyBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x040406, 0.00065)

    const camera = new THREE.PerspectiveCamera(55, 1, 1, 2500)
    camera.position.set(0, 0, 420)

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance',
    })
    renderer.setClearColor(0x040406, 1)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    const starCount = 4200
    const positions = new Float32Array(starCount * 3)
    const colors = new Float32Array(starCount * 3)
    const sizes = new Float32Array(starCount)

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3
      const radius = 600 + Math.random() * 900
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.55
      positions[i3 + 2] = radius * Math.cos(phi) - 200

      const warmth = Math.random()
      colors[i3] = 0.55 + warmth * 0.35
      colors[i3 + 1] = 0.52 + warmth * 0.28
      colors[i3 + 2] = 0.62 + warmth * 0.2
      sizes[i] = Math.random() * 2.2 + 0.4
    }

    const starGeometry = new THREE.BufferGeometry()
    starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    starGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    starGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

    const starMaterial = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      uniforms: {
        uTime: { value: 0 },
        uPixelRatio: { value: renderer.getPixelRatio() },
      },
      vertexShader: `
        attribute float size;
        uniform float uTime;
        uniform float uPixelRatio;
        varying vec3 vColor;
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          float twinkle = 0.85 + 0.15 * sin(uTime * 1.2 + position.x * 0.01 + position.y * 0.01);
          gl_PointSize = size * uPixelRatio * twinkle * (280.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        void main() {
          vec2 c = gl_PointCoord - vec2(0.5);
          float d = length(c);
          if (d > 0.5) discard;
          float alpha = smoothstep(0.5, 0.05, d);
          gl_FragColor = vec4(vColor, alpha * 0.92);
        }
      `,
    })

    const stars = new THREE.Points(starGeometry, starMaterial)
    scene.add(stars)

    const moonGeometry = new THREE.SphereGeometry(72, 48, 48)
    const moonMaterial = new THREE.MeshBasicMaterial({
      color: 0xc4bcb0,
      transparent: true,
      opacity: 0.12,
    })
    const moon = new THREE.Mesh(moonGeometry, moonMaterial)
    moon.position.set(280, 160, -320)
    scene.add(moon)

    const moonGlowGeometry = new THREE.SphereGeometry(110, 32, 32)
    const moonGlowMaterial = new THREE.MeshBasicMaterial({
      color: 0x6b6256,
      transparent: true,
      opacity: 0.04,
    })
    const moonGlow = new THREE.Mesh(moonGlowGeometry, moonGlowMaterial)
    moonGlow.position.copy(moon.position)
    scene.add(moonGlow)

    const clock = new THREE.Clock()
    let animationId = 0

    const animate = () => {
      const elapsed = clock.getElapsedTime()
      starMaterial.uniforms.uTime.value = elapsed
      stars.rotation.y = elapsed * 0.012
      stars.rotation.x = Math.sin(elapsed * 0.08) * 0.02
      moon.position.y = 160 + Math.sin(elapsed * 0.15) * 8
      moonGlow.position.y = moon.position.y
      renderer.render(scene, camera)
      animationId = requestAnimationFrame(animate)
    }

    const resize = () => {
      const width = container.clientWidth
      const height = container.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
      starMaterial.uniforms.uPixelRatio.value = renderer.getPixelRatio()
    }

    resize()
    window.addEventListener('resize', resize)
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      starGeometry.dispose()
      starMaterial.dispose()
      moonGeometry.dispose()
      moonMaterial.dispose()
      moonGlowGeometry.dispose()
      moonGlowMaterial.dispose()
      renderer.dispose()
      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0" aria-hidden />
  )
}
