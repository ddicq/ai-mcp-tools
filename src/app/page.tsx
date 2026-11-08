"use client";

import { motion } from "framer-motion";
import {
  ArrowDownRight, ArrowRight, Bot, Check, ChevronDown, Command, Github,
  Layers3, LockKeyhole, MessageCircle, Plus, ShieldCheck, Sparkles,
  Terminal, Zap
} from "lucide-react";

const features = [
  { icon: MessageCircle, title: "Telegram, connected", text: "Bring messaging workflows into your AI workspace with carefully scoped permissions." },
  { icon: Layers3, title: "One tools hub", text: "Keep integrations, capabilities, and connection status together in one clean interface." },
  { icon: ShieldCheck, title: "Security by design", text: "Clear permissions, protected credentials, and visibility into what an integration can do." },
];

export default function Home() {
  return (
    <main>
      <nav className="nav wrap">
        <a className="brand" href="#"><span className="brand-mark"><Command size={19}/></span> AI MCP <b>TOOLS</b></a>
        <div className="nav-links"><a href="#features">Features</a><a href="#integrations">Integrations</a><a href="#security">Security</a></div>
        <a className="nav-cta" href="#start">Get started <ArrowRight size={15}/></a>
      </nav>

      <section className="hero wrap">
        <div className="hero-copy">
          <motion.div className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}><span className="pulse"/> THE CONNECTIVITY LAYER FOR AI</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .08 }}>Your tools.<br/><em>One AI workspace.</em></motion.h1>
          <motion.p className="hero-text" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .18 }}>Connect the services you use to AI assistants through a single, thoughtfully designed control center.</motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .25 }}>
            <a className="button primary" href="#start">Explore the platform <ArrowRight size={17}/></a>
            <a className="button secondary" href="#integrations"><span className="play">↗</span> View integrations</a>
          </motion.div>
          <div className="hero-note"><LockKeyhole size={14}/> Built around explicit access and user control</div>
        </div>

        <motion.div className="product-window" initial={{ opacity: 0, y: 28, rotate: 1 }} animate={{ opacity: 1, y: 0, rotate: 0 }} transition={{ duration: .7, delay: .15 }}>
          <div className="window-top"><div className="dots"><i/><i/><i/></div><span>workspace / overview</span><div className="window-status"><span/> SYSTEM READY</div></div>
          <div className="window-body">
            <aside className="side"><div className="side-logo"><Command size={17}/></div><div className="side-item active"><Layers3 size={16}/></div><div className="side-item"><MessageCircle size={16}/></div><div className="side-item"><Terminal size={16}/></div><div className="side-bottom"><div/></div></aside>
            <div className="dashboard">
              <div className="dash-head"><div><small>MONDAY, 08 NOVEMBER</small><h3>Workspace overview</h3></div><div className="avatar">A</div></div>
              <div className="metric-row"><div className="metric"><small>CONNECTED TOOLS</small><strong>01 <span>+ soon</span></strong></div><div className="metric"><small>AVAILABLE ACTIONS</small><strong>—</strong></div></div>
              <div className="integration-card"><div className="telegram-icon"><MessageCircle size={20}/></div><div className="integration-info"><b>Telegram</b><small>Messaging integration</small></div><span className="coming">IN DEVELOPMENT</span><ChevronDown size={15}/></div>
              <div className="activity"><div className="activity-head"><b>Recent activity</b><span>PREVIEW</span></div><div className="activity-line"><i/><div><b>Workspace created</b><small>Waiting for your first connection</small></div><time>JUST NOW</time></div></div>
            </div>
          </div>
          <div className="window-glow"/>
        </motion.div>
        <div className="hero-orb orb-one"/><div className="hero-orb orb-two"/>
      </section>

      <section className="ticker"><div className="ticker-inner"><span>CONNECT</span><Plus size={14}/><span>CONTROL</span><Plus size={14}/><span>CREATE</span><Plus size={14}/><span>EXTEND</span><Plus size={14}/><span>CONNECT</span><Plus size={14}/><span>CONTROL</span></div></section>

      <section className="section wrap" id="features">
        <div className="section-label"><span>01 / PLATFORM</span><span>MADE FOR YOUR WORKFLOW</span></div>
        <div className="section-heading"><h2>Everything you need<br/>to <em>connect the dots.</em></h2><p>AI MCP Tools is being built as a bridge between your everyday services and the AI tools you rely on.</p></div>
        <div className="feature-grid">{features.map((f, i) => <motion.article className="feature-card" key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .1 }}><div className="feature-icon"><f.icon size={20}/></div><span className="feature-num">0{i+1}</span><h3>{f.title}</h3><p>{f.text}</p><ArrowDownRight className="feature-arrow" size={19}/></motion.article>)}</div>
      </section>

      <section className="integration-section" id="integrations"><div className="wrap integration-layout"><div><div className="section-label"><span>02 / INTEGRATIONS</span><span>FIRST CONNECTION</span></div><h2>Start with<br/><em>Telegram.</em></h2><p className="integration-desc">The first integration on the roadmap. The goal is to bring useful Telegram workflows into a controlled toolset — with clear boundaries between bot access and personal-account access.</p><a className="text-link" href="#start">See what’s planned <ArrowRight size={16}/></a></div><div className="telegram-panel"><div className="telegram-big"><MessageCircle size={30}/></div><div className="telegram-panel-title"><div><small>INTEGRATION 001</small><h3>Telegram</h3></div><span className="status-pill"><i/> IN DEVELOPMENT</span></div><div className="capability"><span><Check size={14}/> Message workflows</span><span className="planned">PLANNED</span></div><div className="capability"><span><Check size={14}/> Chats and search</span><span className="planned">PLANNED</span></div><div className="capability"><span><Check size={14}/> Media and files</span><span className="planned">PLANNED</span></div><div className="capability"><span><Check size={14}/> Permission controls</span><span className="planned">PLANNED</span></div><div className="panel-foot"><LockKeyhole size={14}/> No account access is active in this prototype.</div></div></div></section>

      <section className="security-section wrap" id="security"><div className="security-icon"><ShieldCheck size={25}/></div><div><div className="section-label"><span>03 / SECURITY</span></div><h2>Powerful tools.<br/><em>Clear boundaries.</em></h2><p>Integrations will be designed around explicit permissions and secure credential handling. Sensitive actions should be visible and intentional.</p></div><div className="security-points"><div><Check size={16}/> Scoped permissions</div><div><Check size={16}/> Protected secrets</div><div><Check size={16}/> Transparent actions</div></div></section>

      <section className="final-cta" id="start"><div className="wrap cta-inner"><div className="cta-icon"><Sparkles size={23}/></div><div><div className="section-label"><span>THE BEGINNING</span></div><h2>Make your AI<br/><em>more capable.</em></h2><p>AI MCP Tools is under active development. The next step is building the secure connection layer behind this interface.</p></div><a className="button primary" href="https://github.com/ddicq/ai-mcp-tools" target="_blank" rel="noreferrer">View on GitHub <Github size={17}/></a></div></section>
      <footer className="footer wrap"><a className="brand" href="#"><span className="brand-mark"><Command size={17}/></span> AI MCP <b>TOOLS</b></a><span>© 2026 AI MCP Tools. Built for connected workflows.</span><span className="footer-tag"><Zap size={13}/> IN DEVELOPMENT</span></footer>
    </main>
  );
}
