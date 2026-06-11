import Link from "next/link";

const links = [
  { href: "/", label: "首页" },
  { href: "/practice", label: "开始练习" },
  { href: "/path", label: "进度" },
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
