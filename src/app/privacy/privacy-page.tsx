import Link from "next/link";

const sections = [
  {
    title: "1. Information we may process",
    body: [
      "When you use AI MCP Tools, information may be processed to provide the website, account sign-in, and integrations. Depending on the features you use, this may include account identifiers and basic profile information returned by Google or Telegram during sign-in.",
      "If you submit a support request or suggest a resource, the information you enter is sent to Tally, which hosts those forms. Please avoid including passwords, access tokens, bot tokens, or other secrets in form submissions.",
      "Like most websites, our hosting and security infrastructure may process technical information such as IP address, browser and device details, request logs, and diagnostic data."
    ]
  },
  {
    title: "2. How information may be used",
    body: [
      "Information may be used to operate and secure the website, authenticate users, respond to support requests, review resource suggestions, troubleshoot errors, and improve the service.",
      "If you connect an external service or use an MCP integration, the information required to perform the action you request may be processed by AI MCP Tools and by the relevant service provider."
    ]
  },
  {
    title: "3. Third-party services",
    body: [
      "Sign-in may be provided by Google and Telegram. When you choose one of these options, that provider processes information under its own privacy policy and returns the information permitted by your authorization.",
      "Support and resource suggestion forms are hosted by Tally. Website hosting and deployment are provided through Vercel. These providers may process information as needed to deliver their services, subject to their own terms and privacy policies.",
      "AI assistants and external services that you choose to connect are separate services. Review their privacy terms before connecting them or sharing information."
    ]
  },
  {
    title: "4. MCP connections and credentials",
    body: [
      "MCP integrations can involve access to third-party accounts, bots, workspaces, or other resources. Only connect services you are authorized to use, and grant only the permissions you need.",
      "Never share passwords, private keys, bot tokens, OAuth client secrets, or other credentials in public areas or support forms. The exact information handled by an integration depends on the integration's implementation and the permissions you grant."
    ]
  },
  {
    title: "5. Sharing and retention",
    body: [
      "We do not sell personal information. Information may be handled by service providers that support the operation of the website, or disclosed when required by law or reasonably necessary to protect the service, its users, or others.",
      "Information is retained only for as long as reasonably needed for the purposes described in this policy, unless a longer period is required or permitted by law. Actual retention may also depend on the settings and policies of third-party providers."
    ]
  },
  {
    title: "6. Security",
    body: [
      "We use reasonable measures intended to protect information. No website, network transmission, or storage system can be guaranteed to be completely secure."
    ]
  },
  {
    title: "7. Your choices",
    body: [
      "You can choose not to use social sign-in, forms, or particular integrations. You may also revoke an application's access through the relevant third-party provider's account settings. Revoking access may not delete information already held by that provider."
    ]
  },
  {
    title: "8. Children",
    body: [
      "AI MCP Tools is not intended for children under the age at which they can legally consent to online services in their location. If you believe a child has submitted personal information, contact us through the support form."
    ]
  },
  {
    title: "9. Changes to this policy",
    body: [
      "We may update this policy as the website and its integrations change. The revised version will be published on this page with an updated effective date."
    ]
  },
  {
    title: "10. Contact",
    body: [
      "For privacy questions or requests, contact the AI MCP Tools team through the support form."
    ]
  }
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div className="mx-auto w-[min(900px,calc(100%-40px))] py-10 md:py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[var(--muted)] transition hover:text-[var(--purple)]"
        >
          <span aria-hidden="true">←</span> Back to home
        </Link>

        <header className="mt-12 border-b border-[var(--line)] pb-9">
          <div className="font-mono text-[10px] uppercase tracking-[2px] text-[var(--purple)]">
            AI MCP Tools · Legal
          </div>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--muted)]">
            This policy explains what information may be processed when you use AI MCP Tools
            and how third-party services fit into that process.
          </p>
          <p className="mt-4 text-xs text-[var(--muted)]">
            Effective date: November 9, 2026
          </p>
        </header>

        <div className="my-8 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5 text-sm leading-7 text-[var(--muted)]">
          <strong className="text-[var(--text)]">Important:</strong> AI MCP Tools is evolving.
          The exact data handled may vary by feature and integration. This page must be reviewed
          and updated to match the service's actual data flows before public launch.
        </div>

        <div className="space-y-10 pb-16">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-lg font-bold tracking-tight md:text-xl">
                {section.title}
              </h2>
              <div className="mt-3 space-y-3">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-8 text-[var(--muted)]">
                    {paragraph}
                  </p>
                ))}
              </div>
              {section.title === "10. Contact" && (
                <a
                  href="https://tally.so/r/X5rybY"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm font-semibold text-[var(--purple)] transition hover:-translate-y-0.5"
                >
                  Contact support <span aria-hidden="true">↗</span>
                </a>
              )}
            </section>
          ))}
        </div>

        <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-[var(--line)] py-6 text-xs text-[var(--muted)]">
          <span>© {new Date().getFullYear()} AI MCP Tools</span>
          <div className="flex gap-5">
            <Link href="/terms" className="transition hover:text-[var(--purple)]">
              Terms of Service
            </Link>
            <Link href="/" className="transition hover:text-[var(--purple)]">
              Home
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
