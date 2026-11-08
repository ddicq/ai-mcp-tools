"use client";

import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

export default function ProfileActions() {
  return (
    <button className="aimcp-profile-signout" onClick={() => signOut({ callbackUrl: "/" })}>
      <LogOut size={16} />
      Выйти из аккаунта
    </button>
  );
}
