"use client";

import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, Bot, Check, ChevronLeft, ChevronRight,
  Command, Fingerprint, Globe2, Layers3, LockKeyhole, MessageCircle,
  MousePointer2, Network, Plug, ShieldCheck, Sparkles, WandSparkles,
  X, Zap, Headphones, Lightbulb, Send
} from "lucide-react";

const tour = [
  {
    label: "WELCOME TO AI MCP TOOLS",
    title: "Your AI can do more.",
    text: "Meet a platform that connects your AI assistants with the services you use every day. One place to discover tools, manage connections and build new workflows.",
    icon: Sparkles,
  },
  {
    label: "DISCOVER",
    title: "Find the tools you need.",
    text: "Explore the catalog, choose a service and see what its MCP integration can do. New categories can be added as the platform grows.",
    icon: Globe2,
  },
  {
    label: "CONNECT",
    title: "Bring everything together.",
    text: "Connect compatible AI clients to your selected integrations through MCP. You stay in control of access and permissions.",
    icon: Network,
  },
];

const benefits = [
  {
    icon: Layers3,
    color: "violet",
    title: "One control center",
    text: "Discover integrations and organize your AI-connected services in one place.",
  },
  {
    icon: Plug,
    color: "blue",
    title: "Built around MCP",
    text: "A standardized way for compatible AI assistants to work with external tools.",
  },
  {
    icon: ShieldCheck,
    color: "green",
    title: "Your access, your rules",
    text: "Clear permissions and intentional access to connected services.",
  },
];

const FOOTER_LOGO =
  "https://cdn.phototourl.com/member/2026-11-08-383f26a8-9dfb-4de1-a5a5-26c01229e09d.png";

export default function Home() {
  const [welcomeOpen, setWelcomeOpen] = useState(false);
  const [tourStep, setTourStep] = useState(0);
  const [authMessage, setAuthMessage] = useState("");
  const [showAuthMessage, setShowAuthMessage] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("aimcp-welcome-seen")) {
      setWelcomeOpen(true);
    }
  }, []);

  function closeWelcome() {
    localStorage.setItem("aimcp-welcome-seen", "1");
    setWelcomeOpen(false);
  }

  function showLoginInfo(provider: string) {
    signIn(provider.toLowerCase(), { callbackUrl: "/" });
  }

  return (
    <main className="site-shell">
      <nav className="nav wrap">
        <a className="brand" href="/">
          <span className="brand-mark"><Command size={19}/></span>
          AI MCP <b>TOOLS</b>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#how">How it works</a>
          <a href="#security">Security</a>
        </div>

        <div className="nav-actions">
          <a className="nav-cta" href="/catalog">
            Catalog <ArrowUpRight size={15}/>
          </a>
          <button className="login-small" onClick={() => setWelcomeOpen(true)}>
            Sign in
          </button>
        </div>
      </nav>

      <section className="hero wrap">
        <div className="hero-copy">
          <motion.div
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="pulse"/> THE MCP CONNECTION PLATFORM
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .08 }}
          >
            Give your AI<br/>
            <em>new possibilities.</em>
          </motion.h1>

          <motion.p
            className="hero-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .2 }}
          >
            Connect AI assistants to the tools and services you use. Discover integrations, manage access and create more powerful workflows with MCP.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .28 }}
          >
            <a className="button primary" href="/catalog">
              Explore catalog <ArrowRight size={17}/>
            </a>
            <a className="button secondary" href="#how">
              Discover how it works <ArrowUpRight size={16}/>
            </a>
          </motion.div>

          <div className="hero-note">
            <LockKeyhole size={14}/>
            Your services. Your permissions. Your control.
          </div>
        </div>

        <motion.div
          className="hero-art"
          initial={{ opacity: 0, scale: .9, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: .8 }}
        >
          <div className="art-orbit orbit-a"/>
          <div className="art-orbit orbit-b"/>
          <div className="art-orbit orbit-c"/>

          <motion.div
            className="floating-chip chip-one"
            animate={{ y: [0, -12, 0], rotate: [0, 3, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <Bot size={18}/> <span>AI assistant</span>
          </motion.div>

          <motion.div
            className="floating-chip chip-two"
            animate={{ y: [0, 10, 0], rotate: [0, -3, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            <Plug size={17}/> <span>MCP tools</span>
          </motion.div>

          <motion.div
            className="floating-chip chip-three"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <ShieldCheck size={17}/> <span>Secure access</span>
          </motion.div>

          <div className="art-core">
            <div className="core-inner">
              <Command size={48} strokeWidth={1.5}/>
              <span>AI MCP</span>
              <small>TOOLS</small>
            </div>
          </div>

          <div className="art-spark spark-one"><Sparkles size={21}/></div>
          <div className="art-spark spark-two"><Zap size={19}/></div>
          <div className="art-spark spark-three"><WandSparkles size={20}/></div>
        </motion.div>
      </section>

      <section className="ticker">
        <div className="ticker-inner">
          <span>DISCOVER</span><i>✳</i>
          <span>CONNECT</span><i>✳</i>
          <span>CONTROL</span><i>✳</i>
          <span>CREATE</span><i>✳</i>
          <span>DISCOVER</span><i>✳</i>
          <span>CONNECT</span>
        </div>
      </section>

      <section className="section wrap" id="about">
        <div className="section-label">
          <span>01 / THE PLATFORM</span>
          <span>ONE PLACE FOR YOUR AI WORKFLOWS</span>
        </div>

        <div className="section-heading">
          <h2>Make your AI<br/><em>work with you.</em></h2>
          <p>
            AI MCP Tools brings services and AI assistants closer together. Discover what is possible with a growing ecosystem of MCP connections.
          </p>
        </div>

        <div className="benefit-grid">
          {benefits.map((item, i) => (
            <motion.article
              className={`benefit-card ${item.color}`}
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * .12 }}
            >
              <div className="benefit-icon"><item.icon size={23}/></div>
              <span className="feature-num">0{i + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="card-decoration"/>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="how-section" id="how">
        <div className="wrap">
          <div className="section-label">
            <span>02 / HOW IT WORKS</span>
            <span>THREE SIMPLE IDEAS</span>
          </div>

          <div className="section-heading">
            <h2>From discovery<br/><em>to connection.</em></h2>
            <p>
              MCP creates a bridge between AI applications and external tools. AI MCP Tools helps make those connections easier to discover and manage.
            </p>
          </div>

          <div className="steps-grid">
            <article className="step-card">
              <div className="step-number">01</div>
              <div className="step-icon violet"><MousePointer2 size={22}/></div>
              <h3>Discover</h3>
              <p>Find an integration in the catalog and explore its available capabilities.</p>
            </article>
            <article className="step-card">
              <div className="step-number">02</div>
              <div className="step-icon blue"><Plug size={22}/></div>
              <h3>Connect</h3>
              <p>Set up the MCP connection in a compatible AI application.</p>
            </article>
            <article className="step-card">
              <div className="step-number">03</div>
              <div className="step-icon green"><Zap size={22}/></div>
              <h3>Use your tools</h3>
              <p>Let your AI assistant work with authorized tools and services.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="security-section wrap" id="security">
        <div className="security-visual">
          <div className="security-ring"><Fingerprint size={58}/></div>
          <div className="security-orbit-dot dot-a"/>
          <div className="security-orbit-dot dot-b"/>
          <div className="security-orbit-dot dot-c"/>
        </div>
        <div className="security-copy">
          <div className="section-label"><span>03 / SECURITY</span></div>
          <h2>Access with<br/><em>confidence.</em></h2>
          <p>
            Connecting services should never mean giving away control. Permissions, credentials and sensitive actions must be handled carefully.
          </p>
          <div className="security-points">
            <div><Check size={16}/> Clear access permissions</div>
            <div><Check size={16}/> Protected credentials</div>
            <div><Check size={16}/> Transparent actions</div>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="wrap cta-inner">
          <div className="cta-decoration"><Sparkles size={27}/></div>
          <div>
            <div className="section-label"><span>READY TO EXPLORE?</span></div>
            <h2>Find your next<br/><em>AI connection.</em></h2>
            <p>Explore the catalog and discover what your AI assistant can do.</p>
          </div>
          <a className="button primary" href="/catalog">
            Open catalog <ArrowRight size={17}/>
          </a>
        </div>
      </section>

      <footer className="footer footer-expanded">
        <div className="footer-main wrap">
          <div className="footer-brand-column">
            <a className="brand" href="/">
              <span className="brand-mark"><Command size={17}/></span>
              AI MCP <b>TOOLS</b>
            </a>
            <p>One platform. More possibilities for your AI.</p>
            <motion.div
              className="footer-logo-stage"
              animate={{ y: [0, -7, 0], rotate: [0, 1.5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="footer-logo-glow"/>
              <img src={FOOTER_LOGO} alt="AI MCP Tools logo" />
            </motion.div>
          </div>

          <div className="footer-links-column">
            <h3>Explore</h3>
            <a href="/catalog">MCP catalog <ArrowUpRight size={14}/></a>
            <a href="https://t.me/aimcptools" target="_blank" rel="noreferrer">Our Telegram channel <Send size={14}/></a>
          </div>

          <div className="footer-links-column">
            <h3>Get in touch</h3>
            <a href="https://tally.so/r/X5rybY" target="_blank" rel="noreferrer">Support <Headphones size={14}/></a>
            <a href="https://tally.so/r/OQlyNg" target="_blank" rel="noreferrer">Suggest a resource <Lightbulb size={14}/></a>
          </div>

          <div className="footer-links-column">
            <h3>Legal</h3>
            <a href="/privacy">Privacy policy <ArrowUpRight size={14}/></a>
            <a href="/terms">Terms of service <ArrowUpRight size={14}/></a>
          </div>
        </div>

        <div className="footer-bottom wrap">
          <span>© 2026 AI MCP Tools. All rights reserved.</span>
          <span>Built for a more connected AI ecosystem.</span>
        </div>
      </footer>

      <AnimatePresence>
        {welcomeOpen && (
          <motion.div
            className="welcome-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="welcome-modal"
              initial={{ opacity: 0, y: 30, scale: .96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: .98 }}
              transition={{ duration: .3 }}
            >
              <button className="modal-close" onClick={closeWelcome} aria-label="Close">
                <X size={19}/>
              </button>

              <div className="welcome-top">
                <span className="brand-mark"><Command size={21}/></span>
                <span>AI MCP <b>TOOLS</b></span>
              </div>

              <div className="tour-visual">
                {(() => {
                  const Icon = tour[tourStep].icon;
                  return <Icon size={43}/>;
                })()}
                <div className="tour-glow"/>
              </div>

              <div className="tour-label">{tour[tourStep].label}</div>
              <h2>{tour[tourStep].title}</h2>
              <p className="tour-description">{tour[tourStep].text}</p>

              <div className="tour-dots">
                {tour.map((_, i) => (
                  <button
                    key={i}
                    className={i === tourStep ? "active" : ""}
                    onClick={() => setTourStep(i)}
                    aria-label={`Step ${i + 1}`}
                  />
                ))}
              </div>

              <div className="tour-controls">
                <button
                  className="tour-back"
                  onClick={() => setTourStep(Math.max(0, tourStep - 1))}
                  disabled={tourStep === 0}
                >
                  <ChevronLeft size={16}/> Back
                </button>
                {tourStep < tour.length - 1 ? (
                  <button className="button primary" onClick={() => setTourStep(tourStep + 1)}>
                    Next <ChevronRight size={16}/>
                  </button>
                ) : (
                  <button className="button primary" onClick={closeWelcome}>
                    Get started <ArrowRight size={16}/>
                  </button>
                )}
              </div>

              <div className="welcome-divider"><span>OR SIGN IN</span></div>

              <div className="auth-buttons">
                <button onClick={() => showLoginInfo("Google")}>
                  <GoogleMark/> Continue with Google
                </button>
                <button onClick={() => showLoginInfo("Telegram")}>
                  <MessageCircle size={18}/> Continue with Telegram
                </button>
              </div>

              <button className="skip-tour" onClick={closeWelcome}>
                Skip introduction
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showAuthMessage && (
          <motion.div
            className="notice-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowAuthMessage(false)}
          >
            <motion.div
              className="notice-card"
              initial={{ opacity: 0, scale: .95 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="notice-icon"><LockKeyhole size={23}/></div>
              <h3>Authentication setup required</h3>
              <p>{authMessage}</p>
              <button className="button primary" onClick={() => setShowAuthMessage(false)}>
                Got it <Check size={16}/>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

function GoogleMark() {
  return (
    <span className="google-mark" aria-hidden="true">
      <svg viewBox="0 0 48 48" width="19" height="19">
        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.25 5.48-4.73 7.18l7.65 5.93c4.47-4.13 7.12-10.2 7.12-17.58z"/>
        <path fill="#FBBC05" d="M10.53 28.59a14.4 14.4 0 0 1 0-9.18l-7.98-6.19a23.9 23.9 0 0 0 0 21.56l7.98-6.19z"/>
        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.91-5.87l-7.65-5.93c-2.13 1.43-4.87 2.28-8.26 2.28-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
      </svg>
    </span>
  );
}
