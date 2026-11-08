"use client";

import { motion } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, Bot, Check, ChevronRight, Command,
  Github, HardDrive, Layers3, LockKeyhole, MessageCircle,
  Network, Plug, ShieldCheck, Sparkles, Terminal, Zap,
  MessagesSquare, Users, FileText, Smartphone, KeyRound
} from "lucide-react";

const integrations = [
  { name: "Telegram", description: "Bots, messages, chats, channels and more.", icon: MessageCircle, status: "FIRST INTEGRATION", color: "#35a9e9" },
  { name: "GitHub", description: "Repositories, issues, pull requests and code.", icon: Github, status: "PLANNED", color: "#b8aaff" },
  { name: "Google Drive", description: "Files, documents and cloud storage.", icon: HardDrive, status: "PLANNED", color: "#66b6ff" },
  { name: "Notion", description: "Pages, databases and workspace content.", icon: FileText, status: "PLANNED", color: "#d6d9e8" },
  { name: "Discord", description: "Servers, channels, messages and bots.", icon: MessagesSquare, status: "PLANNED", color: "#8995ff" },
  { name: "Custom MCP", description: "Connect other MCP-compatible services.", icon: Network, status: "PLANNED", color: "#a58bff" },
];

const telegramFeatures = [
  { icon: Bot, title: "Bot management", text: "Work with your Telegram bots, configure settings and manage available bot features." },
  { icon: MessagesSquare, title: "Messages and chats", text: "Send, read, edit, delete and search messages where the connected API permits it." },
  { icon: Users, title: "Groups and channels", text: "Manage group and channel workflows according to your account permissions." },
  { icon: FileText, title: "Media and files", text: "Work with photos, documents, videos and other supported media." },
  { icon: Smartphone, title: "Mini Apps", text: "Explore Telegram Mini Apps and Web Apps integrations." },
  { icon: KeyRound, title: "Access control", text: "Keep bot access and personal-account access separate and transparent." },
];

const steps = [
  { number: "01", title: "Choose an integration", text: "Open the integration catalog and select the service you want to connect." },
  { number: "02", title: "Configure MCP", text: "Follow the connection instructions and provide the required configuration in your AI client." },
  { number: "03", title: "Authorize access", text: "Complete the service authorization and grant only the permissions you need." },
  { number: "04", title: "Start using tools", text: "Your AI assistant can use the available tools within the granted permissions." },
];

const features = [
  { icon: Layers3, title: "One platform", text: "A growing collection of MCP integrations in one organized place." },
  { icon: Plug, title: "AI connectivity", text: "Connect compatible AI clients to services through MCP." },
  { icon: ShieldCheck, title: "Security first", text: "Transparent permissions and careful handling of credentials." },
];

export default function Home() {
  return (
    <main>
      <nav className="nav wrap">
        <a className="brand" href="#">
          <span className="brand-mark"><Command size={19}/></span>
          AI MCP <b>TOOLS</b>
        </a>
        <div className="nav-links">
          <a href="#integrations">Integrations</a>
          <a href="#telegram">Telegram</a>
          <a href="#guide">How to connect</a>
          <a href="#security">Security</a>
        </div>
        <a className="nav-cta" href="#integrations">Explore platform <ArrowRight size={15}/></a>
      </nav>

      <section className="hero wrap">
        <div className="hero-copy">
          <motion.div className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <span className="pulse"/> THE MCP INTEGRATION PLATFORM
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .08 }}>
            Connect your tools.<br/><em>Unlock your AI.</em>
          </motion.h1>
          <motion.p className="hero-text" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .18 }}>
            One platform for connecting AI assistants to the services you use. Start with Telegram and expand into an entire ecosystem of MCP integrations.
          </motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .25 }}>
            <a className="button primary" href="#integrations">Explore integrations <ArrowRight size={17}/></a>
            <a className="button secondary" href="#guide">How it works <ArrowUpRight size={16}/></a>
          </motion.div>
          <div className="hero-note"><LockKeyhole size={14}/> Built around access control and user permissions</div>
        </div>

        <motion.div className="product-window" initial={{ opacity: 0, y: 28, rotate: 1 }} animate={{ opacity: 1, y: 0, rotate: 0 }} transition={{ duration: .7, delay: .15 }}>
          <div className="window-top">
            <div className="dots"><i/><i/><i/></div>
            <span>ai-mcp-tools / dashboard</span>
            <div className="window-status"><span/> PLATFORM PREVIEW</div>
          </div>
          <div className="window-body">
            <aside className="side">
              <div className="side-logo"><Command size={17}/></div>
              <div className="side-item active"><Layers3 size={16}/></div>
              <div className="side-item"><MessageCircle size={16}/></div>
              <div className="side-item"><Terminal size={16}/></div>
              <div className="side-bottom"><div/></div>
            </aside>
            <div className="dashboard">
              <div className="dash-head">
                <div><small>YOUR MCP WORKSPACE</small><h3>Integrations</h3></div>
                <div className="avatar">AI</div>
              </div>
              <div className="metric-row">
                <div className="metric"><small>INTEGRATIONS</small><strong>06 <span>catalogued</span></strong></div>
                <div className="metric"><small>CONNECTIONS</small><strong>—</strong></div>
              </div>
              <div className="integration-card">
                <div className="telegram-icon"><MessageCircle size={20}/></div>
                <div className="integration-info"><b>Telegram MCP</b><small>First integration</small></div>
                <span className="coming">IN DEVELOPMENT</span>
                <ChevronRight size={15}/>
              </div>
              <div className="activity">
                <div className="activity-head"><b>Platform status</b><span>PREVIEW</span></div>
                <div className="activity-line">
                  <i/>
                  <div><b>Platform interface</b><small>Integration catalog is being prepared</small></div>
                  <time>BUILDING</time>
                </div>
              </div>
            </div>
          </div>
          <div className="window-glow"/>
        </motion.div>
        <div className="hero-orb orb-one"/><div className="hero-orb orb-two"/>
      </section>

      <section className="ticker">
        <div className="ticker-inner">
          <span>CONNECT</span><PlusIcon/><span>CONTROL</span><PlusIcon/><span>CREATE</span><PlusIcon/><span>EXTEND</span><PlusIcon/><span>CONNECT</span><PlusIcon/><span>CONTROL</span>
        </div>
      </section>

      <section className="section wrap" id="features">
        <div className="section-label"><span>01 / PLATFORM</span><span>ONE ECOSYSTEM</span></div>
        <div className="section-heading">
          <h2>Your AI tools.<br/><em>All connected.</em></h2>
          <p>AI MCP Tools is a platform for discovering, configuring and using MCP integrations with compatible AI assistants.</p>
        </div>
        <div className="feature-grid">
          {features.map((f, i) => (
            <motion.article className="feature-card" key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .1 }}>
              <div className="feature-icon"><f.icon size={20}/></div>
              <span className="feature-num">0{i+1}</span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="integration-section" id="integrations">
        <div className="wrap">
          <div className="section-label"><span>02 / INTEGRATIONS</span><span>GROWING ECOSYSTEM</span></div>
          <div className="section-heading" style={{ marginTop: 28 }}>
            <h2>One hub.<br/><em>Many possibilities.</em></h2>
            <p>Telegram is our first integration. More services will be added as the platform grows.</p>
          </div>
          <div className="feature-grid">
            {integrations.map((item, i) => (
              <motion.article className="feature-card" key={item.name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .06 }}>
                <div className="feature-icon" style={{ color: item.color }}><item.icon size={21}/></div>
                <span className="feature-num">{item.status}</span>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <a href={item.name === "Telegram" ? "#telegram" : "#roadmap"} className="text-link">
                  {item.name === "Telegram" ? "Explore integration" : "View roadmap"} <ArrowRight size={14}/>
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section wrap" id="telegram">
        <div className="section-label"><span>03 / FIRST INTEGRATION</span><span>TELEGRAM MCP</span></div>
        <div className="section-heading">
          <h2>Telegram.<br/><em>Beyond messaging.</em></h2>
          <p>The goal is to build a broad Telegram toolkit, with separate support for bots and personal-account workflows where technically permitted.</p>
        </div>
        <div className="feature-grid">
          {telegramFeatures.map((item, i) => (
            <motion.article className="feature-card" key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .06 }}>
              <div className="feature-icon"><item.icon size={20}/></div>
              <span className="feature-num">0{i+1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </div>
        <div className="telegram-panel" style={{ marginTop: 24 }}>
          <div className="panel-foot">
            <LockKeyhole size={15}/>
            Important: Bot API and personal-account access are different technologies. Available actions will depend on Telegram API limitations, authorization and permissions.
          </div>
        </div>
      </section>

      <section className="integration-section" id="guide">
        <div className="wrap">
          <div className="section-label"><span>04 / CONNECTION GUIDE</span><span>GETTING STARTED</span></div>
          <div className="section-heading">
            <h2>Connect MCP<br/><em>to your AI.</em></h2>
            <p>MCP allows compatible AI clients to communicate with external tools through a standardized interface.</p>
          </div>
          <div className="feature-grid">
            {steps.map((step) => (
              <article className="feature-card" key={step.number}>
                <span className="feature-num">{step.number}</span>
                <div className="feature-icon"><Check size={20}/></div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
          <div className="telegram-panel" style={{ marginTop: 24 }}>
            <div className="telegram-panel-title">
              <div><small>CONNECTION STATUS</small><h3>Setup instructions are coming</h3></div>
              <span className="status-pill"><i/> IN DEVELOPMENT</span>
            </div>
            <p className="integration-desc" style={{ marginBottom: 0 }}>
              When the MCP server is ready, this section will contain copyable configuration examples and step-by-step instructions for supported clients such as Claude, Cursor and other MCP-compatible applications. There is no working server address or connection configuration yet.
            </p>
          </div>
        </div>
      </section>

      <section className="security-section wrap" id="security">
        <div className="security-icon"><ShieldCheck size={25}/></div>
        <div>
          <div className="section-label"><span>05 / SECURITY</span></div>
          <h2>More control.<br/><em>Less uncertainty.</em></h2>
          <p>Access to connected services must be explicit. Sensitive credentials should be stored securely and never exposed in public code or shared configuration.</p>
        </div>
        <div className="security-points">
          <div><Check size={16}/> Scoped permissions</div>
          <div><Check size={16}/> Protected credentials</div>
          <div><Check size={16}/> Visible actions</div>
          <div><Check size={16}/> Separate access types</div>
        </div>
      </section>

      <section className="integration-section" id="roadmap">
        <div className="wrap">
          <div className="section-label"><span>06 / ROADMAP</span><span>WHAT'S NEXT</span></div>
          <div className="section-heading">
            <h2>Building the<br/><em>next generation.</em></h2>
            <p>The platform will grow step by step. Each integration will be developed, tested and documented before release.</p>
          </div>
          <div className="telegram-panel">
            <div className="capability"><span><Check size={14}/> Platform interface</span><span className="planned">STARTED</span></div>
            <div className="capability"><span><Zap size={14}/> Telegram MCP server</span><span className="planned">NEXT</span></div>
            <div className="capability"><span><ShieldCheck size={14}/> Authentication and permissions</span><span className="planned">PLANNED</span></div>
            <div className="capability"><span><Network size={14}/> More MCP integrations</span><span className="planned">PLANNED</span></div>
            <div className="capability"><span><Terminal size={14}/> AI client documentation</span><span className="planned">PLANNED</span></div>
          </div>
        </div>
      </section>

      <section className="final-cta" id="start">
        <div className="wrap cta-inner">
          <div className="cta-icon"><Sparkles size={23}/></div>
          <div>
            <div className="section-label"><span>AI MCP TOOLS</span></div>
            <h2>One platform.<br/><em>Infinite workflows.</em></h2>
            <p>Connect your services. Extend your AI. Build without boundaries.</p>
          </div>
          <a className="button primary" href="https://github.com/ddicq/ai-mcp-tools" target="_blank" rel="noreferrer">
            View on GitHub <Github size={17}/>
          </a>
        </div>
      </section>

      <footer className="footer wrap">
        <a className="brand" href="#"><span className="brand-mark"><Command size={17}/></span> AI MCP <b>TOOLS</b></a>
        <span>© 2026 AI MCP Tools. Built for connected workflows.</span>
        <span className="footer-tag"><Zap size={13}/> IN DEVELOPMENT</span>
      </footer>
    </main>
  );
}

function PlusIcon() {
  return <span style={{ color: "#8e7cff" }}>+</span>;
}
