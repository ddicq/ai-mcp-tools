"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Search,
  Sparkles,
  SlidersHorizontal,
  X,
  ShieldCheck,
  Zap,
  MessageCircle,
  Globe2,
  Bot,
  MessagesSquare,
  Radio,
  Image as ImageIcon,
} from "lucide-react";

const TELEGRAM_ICON =
  "https://cdn.phototourl.com/member/2026-11-08-b1d1ec43-8e22-4257-8c06-530f95b0cc58.png";

const translations = {
  en: {
    home: "Home",
    catalog: "Catalog",
    title: "Explore the",
    titleAccent: "MCP catalog.",
    intro:
      "Connect your AI assistant to the services you use. Discover integrations and expand what your AI can do.",
    discover: "DISCOVER TOOLS",
    heading: "Integration catalog",
    subtitle: "Find the right connection for your AI assistant.",
    search: "Search integrations...",
    all: "All categories",
    social: "Social networks",
    available: "Available integration",
    telegramDescription:
      "Connect Telegram to your AI assistant. Work with bots, messages, chats, groups, channels and media through MCP.",
    capabilities: "CAPABILITIES",
    bot: "Telegram bots",
    messages: "Messages and chats",
    groups: "Groups and channels",
    media: "Media and files",
    explore: "Explore",
    protocol: "MCP integration",
    bottomTitle: "One protocol. More possibilities.",
    bottomText:
      "Connect MCP-compatible tools to your AI assistant and build more powerful workflows.",
    noResults: "No integrations found",
    noResultsText: "Try another search or change the category.",
    reset: "Reset filters",
  },
  ru: {
    home: "Главная",
    catalog: "Каталог",
    title: "Откройте",
    titleAccent: "каталог MCP.",
    intro:
      "Подключайте ИИ-ассистента к нужным сервисам. Находите интеграции и расширяйте возможности своего ИИ.",
    discover: "ИЗУЧАЙТЕ ИНСТРУМЕНТЫ",
    heading: "Каталог интеграций",
    subtitle: "Выберите подключение для своего ИИ-ассистента.",
    search: "Поиск интеграций...",
    all: "Все категории",
    social: "Социальные сети",
    available: "Доступная интеграция",
    telegramDescription:
      "Подключите Telegram к своему ИИ-ассистенту. Работайте с ботами, сообщениями, чатами, группами, каналами и медиа через MCP.",
    capabilities: "ВОЗМОЖНОСТИ",
    bot: "Telegram-боты",
    messages: "Сообщения и чаты",
    groups: "Группы и каналы",
    media: "Медиа и файлы",
    explore: "Подробнее",
    protocol: "MCP-интеграция",
    bottomTitle: "Один протокол. Больше возможностей.",
    bottomText:
      "Подключайте совместимые с MCP инструменты к своему ИИ-ассистенту.",
    noResults: "Интеграции не найдены",
    noResultsText: "Попробуйте изменить запрос или категорию.",
    reset: "Сбросить фильтры",
  },
};

export default function CatalogPage() {
  const [language, setLanguage] = useState<"en" | "ru">("en");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    const saved = localStorage.getItem("aimcp-language");
    if (saved === "ru" || saved === "en") setLanguage(saved);
  }, []);

  function changeLanguage(value: "en" | "ru") {
    setLanguage(value);
    localStorage.setItem("aimcp-language", value);
    document.documentElement.lang = value;
    window.dispatchEvent(new Event("aimcp-language-change"));
  }

  const t = translations[language];

  const matchesSearch =
    "telegram " +
    t.telegramDescription +
    " social networks социальные сети";

  const visible =
    (category === "all" || category === "social") &&
    matchesSearch.toLowerCase().includes(search.toLowerCase());

  return (
    <main className="catalog-page">
      <header className="catalog-nav">
        <a href="/" className="catalog-brand">
          <span className="catalog-brand-icon">
            <Sparkles size={19} />
          </span>
          <span>AI MCP <b>TOOLS</b></span>
        </a>

        <nav className="catalog-nav-links">
          <a href="/">{t.home}</a>
          <a href="/catalog" className="active">{t.catalog}</a>
        </nav>

        <div className="catalog-nav-right">
          <div className="language-switch">
            <Globe2 size={16} />
            <button
              className={language === "en" ? "selected" : ""}
              onClick={() => changeLanguage("en")}
            >
              EN
            </button>
            <span>/</span>
            <button
              className={language === "ru" ? "selected" : ""}
              onClick={() => changeLanguage("ru")}
            >
              RU
            </button>
          </div>
        </div>
      </header>

      <section className="catalog-hero-new">
        <div className="catalog-hero-glow glow-a" />
        <div className="catalog-hero-glow glow-b" />

        <motion.div
          className="catalog-hero-copy"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <div className="catalog-eyebrow">
            <Sparkles size={14} />
            AI MCP TOOLS / DISCOVERY
          </div>

          <h1>
            {t.title}
            <br />
            <span>{t.titleAccent}</span>
          </h1>

          <p>{t.intro}</p>

          <div className="catalog-hero-tags">
            <span><ShieldCheck size={15} /> MCP protocol</span>
            <span><Zap size={15} /> AI integrations</span>
          </div>
        </motion.div>

        <motion.div
          className="catalog-hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="catalog-visual-orbit orbit-a" />
          <div className="catalog-visual-orbit orbit-b" />
          <div className="catalog-visual-orbit orbit-c" />

          <div className="catalog-visual-core">
            <Sparkles size={42} />
            <span>AI MCP</span>
          </div>

          <div className="catalog-floating telegram-float">
            <img src={TELEGRAM_ICON} alt="Telegram" />
          </div>
          <div className="catalog-floating shield-float">
            <ShieldCheck size={22} />
          </div>
          <div className="catalog-floating zap-float">
            <Zap size={22} />
          </div>
        </motion.div>
      </section>

      <section className="catalog-main-new">
        <div className="catalog-heading-new">
          <div>
            <span className="catalog-overline">{t.discover}</span>
            <h2>{t.heading}</h2>
            <p>{t.subtitle}</p>
          </div>
          <div className="catalog-count">
            <strong>{visible ? "01" : "00"}</strong>
            <span>INTEGRATIONS</span>
          </div>
        </div>

        <div className="catalog-tools">
          <label className="catalog-search-new">
            <Search size={19} />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t.search}
            />
            {search && (
              <button onClick={() => setSearch("")} aria-label="Clear search">
                <X size={16} />
              </button>
            )}
          </label>

          <label className="catalog-category-select">
            <SlidersHorizontal size={17} />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="all">{t.all}</option>
              <option value="social">{t.social}</option>
            </select>
          </label>
        </div>

        <div className="catalog-category-title">
          <span>{t.social}</span>
          <div />
        </div>

        {visible ? (
          <motion.article
            id="telegram"
            className="telegram-integration-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="telegram-card-top">
              <div className="telegram-logo-frame">
                <img src={TELEGRAM_ICON} alt="Telegram logo" />
              </div>
              <div className="telegram-card-status">
                <span />
                {t.available}
              </div>
            </div>

            <div className="telegram-card-content">
              <span className="telegram-card-category">{t.social}</span>
              <h3>Telegram</h3>
              <p>{t.telegramDescription}</p>
            </div>

            <div className="telegram-capabilities">
              <span className="capabilities-label">{t.capabilities}</span>
              <div className="telegram-capability-grid">
                <div><Bot size={17} /> {t.bot}</div>
                <div><MessagesSquare size={17} /> {t.messages}</div>
                <div><Radio size={17} /> {t.groups}</div>
                <div><ImageIcon size={17} /> {t.media}</div>
              </div>
            </div>

            <div className="telegram-card-footer">
              <span><Sparkles size={14} /> {t.protocol}</span>
              <a href="#telegram">
                {t.explore} <ArrowUpRight size={17} />
              </a>
            </div>
          </motion.article>
        ) : (
          <div className="catalog-empty-new">
            <Search size={28} />
            <h3>{t.noResults}</h3>
            <p>{t.noResultsText}</p>
            <button
              onClick={() => {
                setSearch("");
                setCategory("all");
              }}
            >
              {t.reset}
            </button>
          </div>
        )}
      </section>

      <section className="catalog-bottom-new">
        <div className="catalog-bottom-symbol">
          <Sparkles size={25} />
        </div>
        <div>
          <h3>{t.bottomTitle}</h3>
          <p>{t.bottomText}</p>
        </div>
      </section>

      <footer className="catalog-footer-new">
        <a href="/" className="catalog-brand">
          <span className="catalog-brand-icon"><Sparkles size={17} /></span>
          AI MCP <b>TOOLS</b>
        </a>
        <span>© 2026 AI MCP Tools</span>
      </footer>
    </main>
  );
}
