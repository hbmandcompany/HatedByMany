'use client'

import Link from 'next/link'
import { useState } from 'react'

export function LoginPanel() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    window.setTimeout(() => setLoading(false), 1200)
  }

  return (
    <div
      className="mx-auto max-w-md"
    >
      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8 shadow-lux"
      >
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-pearl"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@entity.com"
            className="mt-2 w-full rounded-full border border-white/15 bg-obsidian/60 px-4 py-3 text-sm text-pearl placeholder:text-mist/60 focus:border-champagne/50 focus:outline-none focus:ring-1 focus:ring-champagne/30"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-pearl"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="mt-2 w-full rounded-full border border-white/15 bg-obsidian/60 px-4 py-3 text-sm text-pearl placeholder:text-mist/60 focus:border-champagne/50 focus:outline-none focus:ring-1 focus:ring-champagne/30"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-full bg-pearl py-3 text-sm font-semibold uppercase tracking-[0.2em] text-obsidian transition-colors hover:bg-champagne disabled:opacity-60"
        >
          {loading ? 'Signing in…' : 'Enter console'}
        </button>
        <div className="space-y-3 text-center text-sm text-mist">
          <Link href="/customer-service" className="block hover:text-pearl">
            Forgot access?
          </Link>
          <p>
            Need provisioning?{' '}
            <Link href="/learn-more" className="text-pearl underline-offset-4 hover:underline">
              Request orientation
            </Link>
          </p>
        </div>
      </form>
    </div>
  )
}
