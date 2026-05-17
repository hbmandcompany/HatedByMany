import fs from 'fs'

const file = process.argv[2]
let t = fs.readFileSync(file, 'utf8')

if (file.includes('HomePage')) {
  t = t.replace(
    "import { motion, useScroll, useSpring } from 'framer-motion'\nimport { useRef } from 'react'",
    "import { useRef } from 'react'",
  )
  t = t.replace('  fade,\n  MarqueeStrip,\n  MetricCard,', '  MetricCard,')
  t = t.replace(/const marqueeItems = \[[\s\S]*?\]\n\n/, '')
  t = t.replace(
    /  const \{ scrollYProgress \} = useScroll\(\{ container: rootRef \}\)\n  const scaleX = useSpring\(scrollYProgress, \{ stiffness: 120, damping: 30 \}\)\n\n/,
    '',
  )
  t = t.replace(
    /<motion\.div\n      ref=\{rootRef\}\n      initial=\{\{ opacity: 0 \}\}\n      animate=\{\{ opacity: 1 \}\}\n      transition=\{\{ duration: 0\.5 \}\}\n      className="immersive-scroll noise text-pearl"\n    >/,
    '<motion.div\n      id="main-scroll"\n      ref={rootRef}\n      className="immersive-scroll noise text-pearl"\n    >',
  )
  t = t.replace(
    /\s*<div\n        style=\{\{ scaleX \}\}\n        className="scroll-progress[^"]*"\n      \/>\n/,
    '\n',
  )
}

t = t.replace(/<motion\./g, '<').replace(/<\/motion\./g, '</')
t = t.replace(/\n\s*initial=\{[^}]*\}/g, '')
t = t.replace(/\n\s*animate=\{[^}]*\}/g, '')
t = t.replace(/\n\s*whileInView=\{[^}]*\}/g, '')
t = t.replace(/\n\s*viewport=\{[^}]*\}/g, '')
t = t.replace(/\s*\{\.\.\.fade\}/g, '')
t = t.replace(/\n\s*transition=\{\{[\s\S]*?\}\}/g, '')
t = t.replace(/\s*<MarqueeStrip items=\{marqueeItems\} \/>\s*/g, '\n')
t = t.replace(/\s*<motion.div className="vyshyvanka-border[^"]*" \/>\s*/g, '\n')
t = t.replace(/\s*<div className="vyshyvanka-border[^"]*" \/>\s*/g, '\n')
t = t.replace(/ ken-burns/g, '')
t = t.replace(/ animate-drift/g, '')
t = t.replace(/ animate-bounce/g, '')
t = t.replace(
  'className="h-0.5 bg-gradient-to-r from-belarus-red via-champagne to-accent-pine"',
  'className="h-px bg-white/10"',
)
t = t.replace(
  'className="ornament-rule mt-10 w-32"',
  'className="mt-10 h-px w-32 bg-white/15"',
)

if (file.includes('SoftwareSections')) {
  t = t.replace("import { fade } from '@/components/home/ImmersivePrimitives'\n", '')
}

if (file.includes('Footer') || file.includes('LoginPanel')) {
  t = t.replace("import { motion } from 'framer-motion'\n", '')
}

if (file.includes('LoginPanel')) {
  t = t.replace('<motion.button', '<button').replace('</motion.button>', '</button>')
}

fs.writeFileSync(file, t)
console.log('cleaned', file)
