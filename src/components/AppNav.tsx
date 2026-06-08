import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/boss", label: "Boss" },
  { href: "/path", label: "Path" },
  { href: "/challenge", label: "Challenge" },
  { href: "/final-boss", label: "Final Boss" },
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
