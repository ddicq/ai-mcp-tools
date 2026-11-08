"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  MessageCircle,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  Zap,
  X,
  SlidersHorizontal,
} from "lucide-react";

const integrations = [
  {
    id: "telegram",
    name: "Telegram",
    category: "Социальные сети",
    description:
      "Подключите Telegram к ИИ и управляйте ботами, сообщениями, чатами, группами и каналами через MCP.",
    icon: MessageCircle,
    color: "#229ED9",
    features: [
      "Управление Telegram-ботами",
      "Отправка и обработка сообщений",
      "Работа с чатами и группами",
      "Управление каналами",
      "Передача медиа и файлов",
    ],
    status: "Доступен для подключения",
  },
];

const categories = ["Все категории", "Социальные сети"];

export default function CatalogPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Все категории");

  const filteredIntegrations = useMemo(() => {
    return integrations.filter((item) => {
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
      <section className="catalog-hero">
        <div className="catalog-hero-glow catalog-glow-one" />
        <div className="catalog-hero-glow catalog-glow-two" />

        <motion.div
          className="catalog-hero-content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <div className="catalog-eyebrow">
            <Sparkles size={15} />
            <span>AI MCP TOOLS</span>
          </div>

          <h1>
            Explore the
            <br />
            <span className="gradient-text">MCP catalog.</span>
          </h1>

          <p>
            Discover integrations that connect your favorite services
            to AI assistants. Find the tools you need and expand what
            your AI can do.
          </p>

          <div className="catalog-hero-stats">
            <div>
              <strong>{integrations.length}</strong>
              <span>Integration</span>
            </div>
            <div className="catalog-stat-divider" />
            <div>
              <strong>{categories.length - 1}</strong>
              <span>Category</span>
            </div>
            <div className="catalog-stat-divider" />
            <div>
              <strong>MCP</strong>
              <span>Protocol</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="catalog-hero-art"
          initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="catalog-orbit orbit-one" />
          <div className="catalog-orbit orbit-two" />
          <div className="catalog-orbit orbit-three" />

          <div className="catalog-art-center">
            <Sparkles size={42} />
          </div>

          <div className="catalog-art-node node-one">
            <MessageCircle size={22} />
          </div>
          <div className="catalog-art-node node-two">
            <Zap size={21} />
          </div>
          <div className="catalog-art-node node-three">
            <ShieldCheck size={21} />
          </div>
        </motion.div>
      </section>

      <section className="catalog-content">
        <div className="catalog-section-heading">
          <div>
            <span className="catalog-overline">DISCOVER TOOLS</span>
            <h2>Integration catalog</h2>
            <p>Find the right connection for your AI assistant.</p>
          </div>
        </div>

        <div className="catalog-toolbar">
          <div className="catalog-search">
            <Search size={19} />
            <input
              type="text"
              placeholder="Search integrations..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            {search && (
              <button
                type="button"
                className="catalog-clear"
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>

          <div className="catalog-filter">
            <SlidersHorizontal size={17} />
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              aria-label="Filter by category"
            >
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="catalog-results-label">
          <span>
            {filteredIntegrations.length}{" "}
            {filteredIntegrations.length === 1 ? "integration" : "integrations"}
          </span>
          <span className="catalog-results-line" />
          <span>Available tools</span>
        </div>

        {filteredIntegrations.length > 0 ? (
          <div className="catalog-grid">
            {filteredIntegrations.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  id={item.id}
                  key={item.id}
                  className="integration-card"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -7 }}
                >
                  <div className="integration-card-top">
                    <div
                      className="integration-icon"
                      style={{
                        background: `${item.color}18`,
                        color: item.color,
                      }}
                    >
                      <Icon size={29} />
                    </div>

                    <span className="integration-status">
                      <span className="integration-status-dot" />
                      {item.status}
                    </span>
                  </div>

                  <div className="integration-card-info">
                    <div className="integration-category">
                      {item.category}
                    </div>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>

                  <div className="integration-features">
                    {item.features.map((feature) => (
                      <div key={feature} className="integration-feature">
                        <span className="integration-check">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="integration-card-bottom">
                    <span className="integration-type">
                      <Sparkles size={14} />
                      MCP Integration
                    </span>

                    <a
                      href="#telegram"
                      className="integration-explore"
                    >
                      Explore
                      <ArrowUpRight size={17} />
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </div>
        ) : (
          <motion.div
            className="catalog-empty"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="catalog-empty-icon">
              <Search size={27} />
            </div>
            <h3>No integrations found</h3>
            <p>Try changing your search or selecting another category.</p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setCategory("Все категории");
              }}
            >
              Reset filters
            </button>
          </motion.div>
        )}
      </section>

      <section className="catalog-bottom">
        <div className="catalog-bottom-icon">
          <Sparkles size={23} />
        </div>
        <div>
          <h3>One protocol. More possibilities.</h3>
          <p>
            Connect MCP-compatible tools to your AI assistant and
            build a more capable workflow.
          </p>
        </div>
      </section>
    </main>
  );
}
