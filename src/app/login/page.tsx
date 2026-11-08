"use client";

import { Suspense, useState } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, ShieldCheck } from "lucide-react";

function LoginContent() {
  const params = useSearchParams();
  const rawCallback = params.get("callbackUrl") || "/";
  const callbackUrl = rawCallback.startsWith("/") && !rawCallback.startsWith("//")
    ? rawCallback
    : "/";
  const [loading, setLoading] = useState<"google" | "telegram" | null>(null);

  async function start(provider: "google" | "telegram") {
    setLoading(provider);
    await signIn(provider, { callbackUrl });
  }

  return (
    <main className="aimcp-auth-page">
      <section className="aimcp-auth-card">
        <a href="/" className="aimcp-auth-back"><ArrowLeft size={16} /> На главную</a>
        <img
          className="aimcp-auth-logo"
          src="https://cdn.phototourl.com/member/2026-11-08-383f26a8-9dfb-4de1-a5a5-26c01229e09d.png"
          alt="AI MCP Tools"
        />
        <p className="aimcp-auth-kicker">AI MCP TOOLS</p>
        <h1>Войдите в аккаунт</h1>
        <p className="aimcp-auth-description">
          Авторизуйтесь, чтобы открыть каталог интеграций и управлять своим профилем.
        </p>
        <div className="aimcp-auth-providers">
          <button disabled={loading !== null} onClick={() => start("google")}>
            <span className="aimcp-google-mark">G</span>
            {loading === "google" ? "Переход к Google…" : "Продолжить с Google"}
          </button>
          <button disabled={loading !== null} onClick={() => start("telegram")}>
            <span className="aimcp-telegram-mark">➤</span>
            {loading === "telegram" ? "Переход к Telegram…" : "Продолжить с Telegram"}
          </button>
        </div>
        <div className="aimcp-auth-security">
          <ShieldCheck size={16} />
          Вход выполняется через защищённую авторизацию провайдера.
        </div>
      </section>
    </main>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<main className="aimcp-auth-page"><p>Загрузка…</p></main>}>
      <LoginContent />
    </Suspense>
  );
}
