"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./NavLink.scss";

interface NavLinkProps {
  href: string;
  padding?: { left?: number; right?: number; top?: number; bottom?: number };
  margin?: { left?: number; right?: number; top?: number; bottom?: number };
  children: ReactNode;
}

export default function NavLink({
  href,
  children,
  padding,
  margin,
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`nav-link ${isActive ? "nav-link--active" : ""}`}
      style={{
        paddingLeft: `${padding?.left ? padding?.left : 0}rem`,
        paddingRight: `${padding?.right ? padding?.right : 0}rem`,
        paddingTop: `${padding?.top ? padding?.top : 0}rem`,
        paddingBottom: `${padding?.bottom ? padding?.bottom : 0}rem`,

        marginLeft: `${margin?.left ? margin?.left : 0}rem`,
        marginRight: `${margin?.right ? margin?.right : 0}rem`,
        marginTop: `${margin?.top ? margin?.top : 0}rem`,
        marginBottom: `${margin?.bottom ? margin?.bottom : 0}rem`,
      }}
    >
      {children}
      <span className="nav-link__underline"></span>
    </Link>
  );
}
