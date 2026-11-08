"use client";

import Link from "next/link";
import { UserRound } from "lucide-react";

export default function AccountShortcut() {
  return (
    <Link className="aimcp-account-shortcut" href="/profile" aria-label="Открыть профиль">
      <UserRound size={15} />
      <span>Профиль</span>
    </Link>
  );
}
