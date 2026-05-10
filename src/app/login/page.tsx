import type { Metadata } from 'next'
import { LoginPanel } from '@/components/LoginPanel'
import { PageShell } from '@/components/PageShell'

export const metadata: Metadata = {
  title: 'Console',
  description: 'Secure access to HBM enterprise systems and treasury tooling.',
}

export default function LoginPage() {
  return (
    <PageShell
      eyebrow="Member access"
      title="Console sign-in"
      description="Authenticate to governance workspaces, compliance bundles, and non-custodial treasury views."
    >
      <LoginPanel />
    </PageShell>
  )
}
