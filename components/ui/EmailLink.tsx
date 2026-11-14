"use client";

import type { ReactNode } from "react";
import { useEmail } from "./useEmail";

type Props = { className?: string; icon?: ReactNode };

export default function EmailLink({ className, icon }: Props) {
  const email = useEmail();
  return (
    <a href={email ? `mailto:${email}` : "#contact"} className={className}>
      {icon}
      {email || "Email us"}
    </a>
  );
}
