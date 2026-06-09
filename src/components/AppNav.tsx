import Link from "next/link";

const links = [
  { href: "/", label: "首页" },
  { href: "/boss", label: "Boss 段落" },
  { href: "/path", label: "逐句通关" },
  { href: "/challenge", label: "今日挑战" },
  { href: "/final-boss", label: "Boss Run" },
];

export function AppNav() {
  return (
    <nav className="app-nav" aria-label="GL-CantoSong sections">
      {links.map((link) => (
        <Link href={link.href} key={link.href}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
