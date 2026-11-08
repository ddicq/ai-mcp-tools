import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { ArrowLeft, CheckCircle2, Link2, Plug, ShieldCheck, UserRound } from "lucide-react";
import ProfileActions from "./ProfileActions";

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login?callbackUrl=%2Fprofile");
  }

  const user = session.user;

  return (
    <main className="aimcp-profile-page">
      <div className="aimcp-profile-wrap">
        <header className="aimcp-profile-header">
          <a href="/" className="aimcp-profile-back"><ArrowLeft size={16} /> На главную</a>
          <span className="aimcp-profile-brand">AI MCP <b>TOOLS</b></span>
        </header>

        <section className="aimcp-profile-intro">
          <p className="aimcp-profile-kicker">ACCOUNT CENTER</p>
          <h1>Профиль</h1>
          <p>Управление аккаунтом и подключениями AI MCP Tools.</p>
        </section>

        <section className="aimcp-profile-grid">
          <article className="aimcp-profile-card aimcp-user-card">
            <div className="aimcp-profile-card-title">
              <UserRound size={18} />
              <h2>Ваш аккаунт</h2>
            </div>
            <div className="aimcp-user-summary">
              {user.image ? (
                <img src={user.image} alt="" className="aimcp-user-avatar" />
              ) : (
                <div className="aimcp-user-avatar aimcp-user-avatar-fallback">
                  <UserRound size={28} />
                </div>
              )}
              <div className="aimcp-user-meta">
                <strong>{user.name || "Пользователь AI MCP Tools"}</strong>
                <span>{user.email || "Email не предоставлен провайдером"}</span>
              </div>
            </div>
            <div className="aimcp-account-status">
              <CheckCircle2 size={16} />
              Вы вошли в аккаунт
            </div>
            <ProfileActions />
          </article>

          <article className="aimcp-profile-card">
            <div className="aimcp-profile-card-title">
              <Plug size={18} />
              <h2>Подключённые интеграции</h2>
            </div>
            <div className="aimcp-integrations-empty">
              <span><Link2 size={23} /></span>
              <strong>Пока нет подключённых интеграций</strong>
              <p>
                Здесь будут отображаться подключённые сервисы, состояние доступа
                и настройки каждой интеграции.
              </p>
              <a href="/catalog">Открыть каталог</a>
            </div>
          </article>

          <article className="aimcp-profile-card aimcp-profile-wide">
            <div className="aimcp-profile-card-title">
              <ShieldCheck size={18} />
              <h2>Безопасность и доступ</h2>
            </div>
            <div className="aimcp-security-row">
              <div>
                <strong>Вход через сторонний аккаунт</strong>
                <p>Авторизация обрабатывается Google или Telegram. Пароли этих сервисов AI MCP Tools не получает.</p>
              </div>
              <span className="aimcp-security-badge">Активно</span>
            </div>
            <div className="aimcp-security-row">
              <div>
                <strong>Управление интеграциями</strong>
                <p>Когда интеграции будут подключены, здесь появятся управление доступом и отключение сервисов.</p>
              </div>
              <span className="aimcp-security-badge aimcp-security-pending">Ожидает подключения</span>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
