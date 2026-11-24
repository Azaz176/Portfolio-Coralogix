const NAV_LINKS = [
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certs" },
  { label: "Experience", href: "#experience" },
  { label: "Tech Stack", href: "#tech" },
  { label: "Contact", href: "#contact" },
];

const SKILLS = [
  {
    title: "Observability Implementation",
    desc: "Production monitoring from scratch on Coralogix. Dashboards, alerts, log analysis, and metrics exploration using DataPrime and Lucene.",
    tools: ["Coralogix", "Datadog", "Splunk", "Grafana", "CloudWatch"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
  },
  {
    title: "Alert & Dashboard Engineering",
    desc: "Alert definitions with routing labels, Notification Center pipelines, and production dashboards for AI gateway observability.",
    tools: ["DataPrime", "Lucene", "PromQL"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
  },
  {
    title: "Data Pipeline Architecture",
    desc: "OTel telemetry pipelines through Cribl Stream into multiple destinations. Multi-destination routing with Splunk HEC.",
    tools: ["Cribl Stream", "OpenTelemetry", "Splunk HEC"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
  {
    title: "Platform Integrations",
    desc: "AI platforms, ITSM tools, and security gateways into unified observability. Native connectors, API keys, bi-directional sync.",
    tools: ["ServiceNow", "OpenAI API", "Portkey", "Prisma AIRS"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
      </svg>
    ),
  },
  {
    title: "Automation & GenAI Tooling",
    desc: "Python automation for alert provisioning, dashboard templating, and integration scripting. LLM-powered workflows with LangChain and LangGraph.",
    tools: ["Python", "LangChain", "LangGraph", "Terraform"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
  },
  {
    title: "Migration & Conversion",
    desc: "End-to-end migration from Datadog, Splunk, and Grafana into Coralogix. Query translation, dashboard recreation, and alert conversion.",
    tools: ["Datadog", "Splunk", "Grafana", "Coralogix"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
      </svg>
    ),
  },
];

const CERTS = [
  { name: "Coralogix Practitioner", desc: "Platform fundamentals, log management, and query basics", link: "https://certificate.academy.coralogix.com/2a2a5896-ebed-4715-8515-ad95ad3c8c3c#acc.do1wlHeP" },
  { name: "Coralogix Super User", desc: "Advanced alerting, dashboards, and platform administration", link: "https://certificate.academy.coralogix.com/3e0e40ff-8d27-4e14-ab8f-f9143be6c17f#acc.YPZfkm46" },
  { name: "Coralogix DataPrime Advanced User", desc: "Advanced query language for observability data analysis", link: "https://certificate.academy.coralogix.com/0c8d456d-aa16-48ea-b248-c7ab75295a56#acc.cfy45luE" },
  { name: "Coralogix Administrator", desc: "Platform administration, team management, and configuration", link: "https://certificate.academy.coralogix.com/19e232b9-c5e0-410b-a87c-45efcddbb82d#acc.cDjl6oKs" },
];

const EXPERIENCE = [
  {
    role: "Observability & Monitoring Engineer, Technical Lead",
    company: "CirrusLabs Pvt. Ltd.",
    context: "Deployed at Deloitte USI, ECM Team",
    period: "Dec 2025 - Present",
    bullets: [
      "Built Coralogix observability for Deloitte's AI Control Plane (AICP), migrating the full monitoring stack from Datadog to Coralogix",
      "Designed production dashboards and alerts using DataPrime and Lucene for gateway latency, error rates, routing failures, and guardrail violations",
      "Integrated five AI platforms into Coralogix (Claude AI, Claude Code, Codex, Cowork, OpenAI API), configuring Admin, Compliance, and Analytics API telemetry",
      "Architected OTel pipeline through Cribl Stream into Coralogix and Splunk (dual destination), validating 574 audit logs in Phase 1",
      "Implemented native Coralogix-to-ServiceNow bi-directional sync with automated Incident creation and Case lifecycle management",
      "Built Python automation for integration configuration, telemetry pipeline setup, and alert provisioning workflows across multiple AI platforms",
    ],
  },
  {
    role: "Python Backend Developer",
    company: "CirrusLabs Pvt. Ltd.",
    context: "Internal Product, Parallel Role",
    period: "Dec 2025 - Present",
    bullets: [
      "Developing Python backend for an AI Evals and AI Explainability product, building evaluation pipelines for fairness, bias, and performance metrics",
      "Built LangGraph-based ReAct agent for financial portfolio analysis; integrated RAIA SDK for agent governance and trace-level auditing",
    ],
  },
  {
    role: "Junior Cloud Engineer",
    company: "LongShortLabs",
    context: "Remote",
    period: "Jan 2025 - Nov 2025",
    bullets: [
      "Managed AWS infrastructure for production services, configuring Docker containers, CI/CD pipelines, and database deployments",
      "Set up monitoring and logging for cloud workloads; gained early exposure to observability tooling and GenAI integration patterns",
    ],
  },
];

const TECH_GROUPS = [
  {
    label: "Observability",
    items: ["Coralogix", "Datadog", "Splunk", "Grafana", "CloudWatch"],
  },
  {
    label: "Query Languages",
    items: ["DataPrime", "Lucene", "PromQL"],
  },
  {
    label: "Data Pipelines",
    items: ["Cribl Stream", "OpenTelemetry (OTel)", "Splunk HEC"],
  },
  {
    label: "Integrations",
    items: ["ServiceNow", "OpenAI API", "Portkey AI Gateway", "Prisma AIRS"],
  },
  {
    label: "Languages",
    items: ["Python", "JavaScript/TypeScript", "Java", "C++"],
  },
  {
    label: "Cloud & Infra",
    items: ["AWS (Primary)", "GCP", "Azure", "Docker", "Kubernetes", "Terraform", "CI/CD"],
  },
  {
    label: "AI / ML",
    items: ["LangChain", "AI Evals", "AI Explainability", "GenAI/LLM Tooling", "RAG Pipelines"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      {/* Nav */}
      <nav className="fixed top-0 z-50 w-full border-b border-card-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
          <a href="#" className="font-mono text-sm font-bold tracking-tight text-accent">
            Azaz Ali
          </a>
          <div className="hidden gap-6 sm:flex">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-muted transition-colors hover:text-foreground">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-[80vh] items-center justify-center px-6 pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-1/4 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-accent/5 blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-2xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-sm text-accent">
            <span className="inline-block size-2 rounded-full bg-accent animate-pulse" />
            Open to opportunities
          </div>
          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl">Azaz Ali</h1>
          <p className="mt-3 text-xl text-muted sm:text-2xl">Cloud & Observability Engineer</p>
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-muted">
            Technical lead building Coralogix observability for enterprise AI platforms at Deloitte.
            All 4 Coralogix certifications. Python backend developer. Migrated from Datadog,
            integrated Cribl, Splunk, ServiceNow, and 5 AI platforms into a unified observability layer.
          </p>
          <div className="mt-7 flex items-center justify-center gap-4">
            <a href="#contact" className="rounded-lg bg-accent px-6 py-2.5 text-sm font-medium text-background transition-all hover:brightness-110">
              Get in touch
            </a>
            <a href="#experience" className="rounded-lg border border-card-border px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/40 hover:text-accent">
              View experience
            </a>
          </div>
          <div className="mt-8 flex items-center justify-center gap-5">
            <a href="https://github.com/Azaz176" target="_blank" rel="noopener noreferrer" className="text-muted transition-colors hover:text-accent">
              <svg className="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/azaz-ali-8967b8341/" target="_blank" rel="noopener noreferrer" className="text-muted transition-colors hover:text-accent">
              <svg className="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="mailto:aliazaz7296@gmail.com" className="text-muted transition-colors hover:text-accent">
              <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-sm font-medium uppercase tracking-widest text-accent">What I Do</h2>
        <p className="mt-1.5 text-3xl font-bold tracking-tight">Skills</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((s, i) => (
            <div key={s.title} className="group relative rounded-xl border border-card-border bg-card p-5 transition-all hover:border-accent/30 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/5 overflow-hidden">
              <span className="absolute top-4 right-5 font-mono text-xs text-card-border group-hover:text-accent/30 transition-colors">0{i + 1}</span>
              <div className="flex items-start gap-4">
                <div className="shrink-0 rounded-lg bg-accent/10 p-2 text-accent">{s.icon}</div>
                <div className="min-w-0">
                  <h3 className="text-[15px] font-semibold leading-tight">{s.title}</h3>
                  <p className="mt-1 text-sm leading-snug text-muted">{s.desc}</p>
                </div>
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {s.tools.map((t) => (
                  <span key={t} className="rounded-md border border-card-border bg-background px-2 py-0.5 font-mono text-[11px] text-muted">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section id="certs" className="border-y border-card-border bg-card/30 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-sm font-medium uppercase tracking-widest text-accent">Certifications</h2>
          <p className="mt-1.5 text-3xl font-bold tracking-tight">All 4 Coralogix Certifications</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CERTS.map((c) => (
              <div key={c.name} className="relative overflow-hidden rounded-xl border border-accent/20 bg-background p-5 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/5">
                <div className="absolute -right-4 -top-4 size-20 rounded-full bg-accent/5" />
                <div className="relative">
                  <div className="mb-2.5 inline-flex rounded-full bg-accent/10 p-1.5 text-accent">
                    <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"/></svg>
                  </div>
                  <h3 className="text-[15px] font-semibold">{c.name}</h3>
                  <p className="mt-1 text-sm text-muted">{c.desc}</p>
                  <a href={c.link} className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent transition-opacity hover:opacity-80">
                    View Credential
                    <svg className="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-sm font-medium uppercase tracking-widest text-accent">Experience</h2>
        <p className="mt-1.5 text-3xl font-bold tracking-tight">Where I&apos;ve Worked</p>
        <div className="mt-8 space-y-8">
          {EXPERIENCE.map((exp) => (
            <div key={exp.role} className="relative pl-7 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-card-border">
              <div className="absolute left-0 top-1.5 -translate-x-1/2 size-2.5 rounded-full border-2 border-accent bg-background" />
              <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="text-base font-semibold">{exp.role}</h3>
                  <p className="text-sm text-muted">{exp.company} <span className="text-muted/50">/</span> {exp.context}</p>
                </div>
                <span className="shrink-0 font-mono text-xs text-muted">{exp.period}</span>
              </div>
              <ul className="mt-2.5 space-y-1.5">
                {exp.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2 text-sm leading-relaxed text-muted">
                    <span className="mt-2 shrink-0 size-1 rounded-full bg-accent/40" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section id="tech" className="border-y border-card-border bg-card/30 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-sm font-medium uppercase tracking-widest text-accent">Tech Stack</h2>
          <p className="mt-1.5 text-3xl font-bold tracking-tight">Tools I Work With</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TECH_GROUPS.map((g, gi) => (
              <div key={g.label}>
                <h3 className="mb-2.5 text-xs font-medium uppercase tracking-wider text-accent/70">{g.label}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {g.items.map((t) => (
                    <span key={t} className={`rounded-md border px-2.5 py-1 text-sm transition-colors hover:border-accent/30 hover:text-foreground ${gi === 0 && t === "Coralogix" ? "border-accent/40 bg-accent/10 text-accent font-medium" : "border-card-border bg-background text-muted"}`}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="text-sm font-medium uppercase tracking-widest text-accent">Education</h2>
        <div className="mt-4 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold">Maharaja Agrasen Institute of Technology</h3>
            <p className="text-sm text-muted">B.Tech in Electronics and Computer Engineering <span className="text-muted/50">/</span> <span className="font-semibold text-foreground">CGPA: 9.3/10</span></p>
          </div>
          <span className="font-mono text-xs text-muted">2020 - 2024</span>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-2xl border border-accent/20 bg-accent/5 p-8 text-center sm:p-12">
          <h2 className="text-3xl font-bold tracking-tight">Let&apos;s Connect</h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
            Currently open to observability engineering roles. I bring production
            Coralogix experience, all 4 certifications, and hands-on migration
            expertise from Datadog, Splunk, and Cribl.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href="mailto:aliazaz7296@gmail.com" className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-2.5 text-sm font-medium text-background transition-all hover:brightness-110">
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/></svg>
              aliazaz7296@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/azaz-ali-8967b8341/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-card-border px-6 py-2.5 text-sm font-medium transition-colors hover:border-accent/40 hover:text-accent">
              <svg className="size-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-card-border py-6 text-center text-xs text-muted">
        Azaz Ali / Cloud & Observability Engineer
      </footer>
    </main>
  );
}
