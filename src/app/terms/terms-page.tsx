import Link from "next/link";

const sections = [
  {
    title: "1. Acceptance of these Terms",
    paragraphs: [
      "These Terms of Service (\"Terms\") govern your access to and use of AI MCP Tools (the \"Service\"). By accessing or using the Service, you agree to these Terms. If you do not agree, do not use the Service.",
      "If you use the Service on behalf of an organization, you confirm that you are authorized to accept these Terms on its behalf."
    ],
  },
  {
    title: "2. The Service",
    paragraphs: [
      "AI MCP Tools is a platform intended to provide access to tools and integrations using the Model Context Protocol (MCP). Features may include account access, integration setup, and tools that allow compatible AI clients to interact with third-party services.",
      "Features may be added, changed, limited, suspended, or discontinued. An integration or feature shown on the website may be experimental, unavailable, or subject to technical and third-party limitations. We do not promise that every integration, operation, or feature will always be available or will work with every AI client."
    ],
  },
  {
    title: "3. Accounts and access",
    paragraphs: [
      "Some features may require you to sign in or create an account through a supported identity provider. You are responsible for maintaining the security of your account and for activity carried out through your account.",
      "You must provide accurate information when requested, keep your sign-in methods secure, and notify us through the support form if you believe your account has been accessed without your permission. We may restrict or suspend access when reasonably necessary to protect the Service, users, or third parties."
    ],
  },
  {
    title: "4. Third-party accounts and permissions",
    paragraphs: [
      "You may connect or use third-party services only if you have the legal right and all permissions needed to do so. You are responsible for selecting the accounts, workspaces, bots, channels, groups, files, and other resources to which you grant access.",
      "You must not use the Service to access another person's account or data without authorization, bypass access controls, or exceed permissions granted by a third-party service. Your use of each third-party service is also governed by that provider's terms, policies, and technical restrictions."
    ],
  },
  {
    title: "5. AI clients, MCP tools, and actions",
    paragraphs: [
      "MCP tools may allow a compatible AI client or other connected application to request actions involving a third-party service. The actions available depend on the integration, permissions, configuration, and provider limitations.",
      "You are responsible for reviewing the actions you authorize and for checking important instructions, destinations, content, and results before and after an action is performed. AI-generated requests or outputs may be incomplete or incorrect. Do not rely on them without appropriate review, especially for actions that send messages, change settings, publish content, delete data, or affect other people.",
      "You are responsible for activity initiated through your account or connected credentials, subject to applicable law. Do not connect credentials or grant permissions unless you understand and accept the access they provide."
    ],
  },
  {
    title: "6. Acceptable use",
    paragraphs: [
      "You agree not to use the Service to violate any law or regulation; infringe another person's rights; send spam, threats, or deceptive content; distribute malware; interfere with or disrupt systems; probe or bypass security controls; access data without authorization; or abuse, overload, or impair the Service or a third-party service.",
      "You must not reverse engineer, copy, resell, or misuse the Service except where applicable law permits or we have given you written permission. You must not use the Service in a way that violates the rules of a connected platform."
    ],
  },
  {
    title: "7. Third-party services",
    paragraphs: [
      "The Service may rely on or link to third-party products and infrastructure, including identity providers, hosting providers, form services, AI clients, and platforms you connect. Those services are operated independently and may change or become unavailable.",
      "We do not control and are not responsible for third-party services, their content, security, policies, availability, or actions. You should review the applicable third-party terms and privacy notices before connecting or using them."
    ],
  },
  {
    title: "8. Privacy",
    paragraphs: [
      "Our handling of information is described in the Privacy Policy. Please review it before using the Service."
    ],
    link: { href: "/privacy", label: "Read the Privacy Policy" },
  },
  {
    title: "9. Intellectual property",
    paragraphs: [
      "The Service, including its original design, branding, text, graphics, and software, is owned by or licensed to the Service operator and is protected by applicable intellectual-property laws. These Terms do not transfer ownership of that intellectual property to you.",
      "You retain rights to content and materials that you submit, to the extent you own those rights. You grant us only the limited rights reasonably needed to operate, maintain, and provide the features you choose to use, subject to the Privacy Policy and applicable law.",
      "Third-party names, logos, and trademarks belong to their respective owners. Their appearance does not necessarily imply endorsement or affiliation."
    ],
  },
  {
    title: "10. Availability, changes, and termination",
    paragraphs: [
      "We may update, suspend, or discontinue all or part of the Service, including integrations, with or without notice where permitted by law. We may restrict or terminate access if we reasonably believe you have breached these Terms, created a security risk, or used the Service unlawfully.",
      "You may stop using the Service at any time. If you stop using it, you should also revoke permissions or disconnect credentials through the relevant third-party provider where appropriate."
    ],
  },
  {
    title: "11. Disclaimers",
    paragraphs: [
      "To the extent permitted by applicable law, the Service is provided on an \"as is\" and \"as available\" basis. We do not make warranties that the Service will be uninterrupted, error-free, secure in every circumstance, compatible with every system, or suitable for a particular purpose.",
      "We do not guarantee the accuracy or reliability of AI-generated outputs, the continued availability of third-party integrations, or that a requested third-party action will succeed."
    ],
  },
  {
    title: "12. Limitation of liability",
    paragraphs: [
      "To the extent permitted by applicable law, the Service operator will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages, or for loss of profits, revenue, data, goodwill, or business opportunities arising from or related to your use of or inability to use the Service.",
      "To the extent permitted by applicable law, the Service operator's total liability for claims arising out of or relating to the Service or these Terms will be limited to the amount, if any, that you paid directly to the Service operator for the Service during the three months before the event giving rise to the claim.",
      "Nothing in these Terms excludes or limits liability that cannot legally be excluded or limited, or affects rights that you may have under mandatory consumer-protection laws."
    ],
  },
  {
    title: "13. Changes to these Terms",
    paragraphs: [
      "We may revise these Terms from time to time. The updated version will be posted on this page with a revised effective date. Your continued use of the Service after updated Terms take effect means you accept the revised Terms, to the extent permitted by law."
    ],
  },
  {
    title: "14. Contact",
    paragraphs: [
      "For questions about these Terms or the Service, contact us using the support form."
    ],
    link: { href: "https://tally.so/r/X5rybY", label: "Contact support" },
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen px-5 pb-20 pt-28 text-[var(--foreground)]">
      <div className="mx-auto w-full max-w-4xl">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-[var(--muted-foreground)] transition hover:text-[var(--foreground)]"
        >
          <span aria-hidden="true">←</span> Back to home
        </Link>

        <header className="mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--muted-foreground)]">
            AI MCP Tools
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-[var(--muted-foreground)]">
            Effective date: November 9, 2026
          </p>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted-foreground)]">
            These terms explain the basic rules for accessing and using AI MCP
            Tools, including its MCP integrations and connected third-party
            services.
          </p>
        </header>

        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.title} className="border-t border-[var(--border)] pt-7">
              <h2 className="mb-4 text-xl font-semibold tracking-tight">
                {section.title}
              </h2>
              <div className="space-y-4 text-sm leading-7 text-[var(--muted-foreground)] sm:text-base">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.link && (
                  <p>
                    <Link
                      href={section.link.href}
                      className="font-medium text-[var(--foreground)] underline decoration-[var(--border)] underline-offset-4 transition hover:opacity-70"
                    >
                      {section.link.label}
                    </Link>
                  </p>
                )}
              </div>
            </section>
          ))}
        </div>

        <p className="mt-12 border-t border-[var(--border)] pt-6 text-xs leading-6 text-[var(--muted-foreground)]">
          This page is a general terms template, not legal advice. Before
          public launch, have it reviewed and adapt it to the actual legal
          operator, jurisdiction, product features, data flows, and applicable
          consumer-protection requirements.
        </p>
      </div>
    </main>
  );
}
