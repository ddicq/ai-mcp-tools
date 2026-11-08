
"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft, ArrowRight, ArrowUpRight, Bot, Check,
  Command, MessageCircle, Search, ShieldCheck, Users
} from "lucide-react";
import { useMemo, useState } from "react";

const catalogItems = [
  {
    name: "Telegram",
    category: "Социальные сети",
    description: "Инструменты для работы с ботами, сообщениями, чатами, группами и каналами Telegram.",
    details: ["Управление ботами", "Сообщения и чаты", "Группы и каналы", "Медиа и файлы"],
    icon: MessageCircle,
    color: "telegram",
  },
];

export default function CatalogPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Все категории");

  const categories = ["Все категории", "Социальные сети"];

  const filtered = useMemo(() => {
    return catalogItems.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        category === "Все категории" || item.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <main className="catalog-page">
      <nav className="nav wrap">
        <a className="brand" href="/">
          <span className="brand-mark"><Command size={19}/></span>
          AI MCP <b>TOOLS</b>
        </a>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/#about">About</a>
          <a href="/#security">Security</a>
        </div>
        <a className="nav-cta" href="/">
          <ArrowLeft size={15}/> Back home
        </a>
      </nav>

      <section className="catalog-hero wrap">
        <motion.div
          className="eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="pulse"/> INTEGRATION DIRECTORY
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .08 }}
        >
          Explore the<br/><em>catalog.</em>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .16 }}
        >
          Find integrations for your AI assistant. Choose a category, explore available tools and discover new ways to connect your services.
        </motion.p>

        <div className="catalog-search">
          <Search size={19}/>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search integrations..."
            aria-label="Search integrations"
          />
          <span>{filtered.length} {filtered.length === 1 ? "result" : "results"}</span>
        </div>
      </section>

      <section className="catalog-content wrap">
        <aside className="category-sidebar">
          <div className="category-heading">CATEGORIES</div>
          {categories.map((item) => (
            <button
              key={item}
              className={`category-button ${category === item ? "selected" : ""}`}
              onClick={() => setCategory(item)}
            >
              <span>{item}</span>
              <ArrowRight size={14}/>
            </button>
          ))}
          <div className="category-tip">
            <ShieldCheck size={18}/>
            <p>Each integration has its own tools, access requirements and connection instructions.</p>
          </div>
        </aside>

        <div className="catalog-results">
          <div className="catalog-results-head">
            <div>
              <span className="section-label">01 / SOCIAL NETWORKS</span>
              <h2>Социальные сети</h2>
            </div>
            <span className="result-count">{filtered.length} INTEGRATION</span>
          </div>

          {filtered.length > 0 ? (
            <div className="catalog-grid">
              {filtered.map((item, i) => (
                <motion.article
                  className="catalog-card"
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * .08 }}
                >
                  <div className="catalog-card-top">
                    <div className={`catalog-app-icon ${item.color}`}>
                      <item.icon size={27}/>
                    </div>
                    <span className="catalog-category">{item.category}</span>
                  </div>

                  <h3>{item.name}</h3>
                  <p>{item.description}</p>

                  <div className="catalog-tags">
                    {item.details.map((detail) => (
                      <span key={detail}><Check size={12}/>{detail}</span>
                    ))}
                  </div>

                  <div className="catalog-card-bottom">
                    <span><ShieldCheck size={14}/> Permission-based access</span>
                    <a href="/catalog/telegram">
                      Explore <ArrowUpRight size={15}/>
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="empty-results">
              <Search size={27}/>
              <h3>Nothing found</h3>
              <p>Try another search or choose a different category.</p>
              <button onClick={() => { setSearch(""); setCategory("Все категории"); }}>
                Reset filters
              </button>
            </div>
          )}
        </div>
      </section>

      <footer className="footer wrap">
        <a className="brand" href="/">
          <span className="brand-mark"><Command size={17}/></span>
          AI MCP <b>TOOLS</b>
        </a>
        <span>© 2026 AI MCP Tools</span>
        <a href="/#security">Privacy & security</a>
      </footer>
    </main>
  );
}
