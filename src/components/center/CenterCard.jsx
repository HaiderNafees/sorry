import { useEffect, useState } from 'react';
import Photo from '../ui/Photo.jsx';
import {
  HeartIcon,
  SearchIcon,
  MailIcon,
  EarIcon,
  ChatIcon,
  PlaneIcon,
  ClockIcon,
  ChevronRightIcon,
  MenuIcon,
  XIcon,
} from '../ui/Icons.jsx';
import {
  memories,
  promises,
  photos,
  herName,
} from '../../data/content.js';

const NAV_LINKS = [
  { label: 'Letter', href: '#letter-card', external: true },
  { label: 'Memories', href: '#memories' },
  { label: 'Promises', href: '#promises' },
];

const PROMISE_ICONS = {
  ear: EarIcon,
  chat: ChatIcon,
  plane: PlaneIcon,
  clock: ClockIcon,
  heart: HeartIcon,
};

export default function CenterCard({ onOpenLetter }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Frosted nav inside the card once the page scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navClick = (e, link) => {
    e.preventDefault();
    setMenuOpen(false);
    if (link.external) {
      onOpenLetter();
      return;
    }
    document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="overflow-hidden rounded-[2rem] border border-rosy-100 bg-white shadow-lift">
      {/* Micro top bar (like the reference's tiny window chrome) */}
      <div className="flex items-center justify-between border-b border-rosy-100/70 px-6 py-2 text-[10px] text-slate/50 sm:px-8">
        <span className="flex items-center gap-1.5">
          <HeartIcon className="h-3 w-3 text-rosy-500" />
          Made with love
        </span>
        <span className="hidden items-center gap-4 sm:flex">
          <span>[Your Name]</span>
          <MailIcon className="h-3 w-3" />
        </span>
      </div>

      {/* In-card navigation */}
      <nav
        className={`sticky top-0 z-30 border-b border-rosy-100/70 px-6 transition-all duration-300 sm:px-8 ${
          scrolled ? 'bg-white/90 backdrop-blur-md' : 'bg-white'
        }`}
      >
        <div className="flex items-center justify-between gap-2 py-3.5 sm:gap-3">
        <a href="#top" className="flex items-center gap-2" aria-label="Back to top">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-rosy-50 text-rosy-500">
            <HeartIcon className="h-4 w-4 animate-heart-beat motion-safe-beat" />
          </span>
          <span className="font-serif text-base font-semibold text-slate min-[400px]:text-lg">For My Wife</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => navClick(e, link)}
              className="rounded-full px-3.5 py-1.5 text-sm font-medium text-slate/70 transition hover:bg-rosy-50 hover:text-rosy-700"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenLetter}
            aria-label="Open letter"
            className="flex h-9 w-9 items-center justify-center rounded-full text-slate/60 transition hover:bg-rosy-50 hover:text-rosy-700"
          >
            <SearchIcon className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={onOpenLetter}
            className="rounded-full bg-rosy-500 px-3.5 py-2 text-[13px] font-semibold text-white shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-rosy-600 hover:shadow-lift sm:px-5 sm:text-sm"
          >
            Read Letter
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center rounded-full text-slate/60 transition hover:bg-rosy-50 hover:text-rosy-700 lg:hidden"
          >
            {menuOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="pb-3 lg:hidden">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => navClick(e, link)}
                className="block rounded-xl px-3 py-2.5 text-sm font-medium text-slate/70 transition hover:bg-rosy-50 hover:text-rosy-700"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      <div className="px-6 pb-10 pt-8 sm:px-10 sm:pt-10">
        {/* ── Hero row: headline left, arch photo right ── */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h1 className="font-serif text-4xl font-semibold leading-[1.12] text-slate sm:text-5xl lg:text-[3.4rem]">
              My Heart Is
              <br />
              Always With{' '}
              <span className="relative inline-block">
                You
                <svg
                  aria-hidden
                  viewBox="0 0 120 10"
                  preserveAspectRatio="none"
                  className="absolute -bottom-1 left-0 h-2.5 w-full text-gold/70"
                >
                  <path
                    d="M2 7c30-5 70-6 116-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-slate/65 sm:text-lg">
              Across every mile, my heart stays with you.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button
                type="button"
              onClick={onOpenLetter}
                className="rounded-full bg-rosy-500 px-6 py-3 text-sm font-semibold text-white shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:bg-rosy-600 hover:shadow-lift"
              >
                Open My Letter
              </button>
              <a
                href="#promises"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('promises')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-sm font-semibold text-rosy-700 underline decoration-rosy-300 decoration-2 underline-offset-4 transition hover:text-rosy-500"
              >
                My promises →
              </a>
            </div>

            {/* Signer row */}
            <div className="mt-9 flex items-center gap-3">
              <Photo src="/photos/hero.jpg" alt="us" className="h-10 w-10 rounded-full ring-2 ring-rosy-200" />
              <div className="text-xs">
                <p className="font-semibold text-slate">Signed with all my love</p>
                <p className="text-slate/50">[Your Name] · for {herName}</p>
              </div>
            </div>
          </div>

          {/* Arch photo frame */}
          <div className="relative mx-auto w-full max-w-sm">
            <HeartIcon
              aria-hidden
              className="absolute -left-6 top-8 h-8 w-8 rotate-[-10deg] text-rosy-400/90 drop-shadow-[0_8px_12px_rgba(251,113,133,0.4)]"
            />
            <HeartIcon
              aria-hidden
              className="absolute -right-3 top-1/3 h-6 w-6 rotate-12 text-rosy-500/80 drop-shadow-[0_6px_10px_rgba(251,113,133,0.4)]"
            />
            <div className="overflow-hidden rounded-t-[10rem] rounded-b-[2rem] border border-rosy-100 bg-gradient-to-br from-rosy-50 to-rosy-100 shadow-lift">
              <Photo
                src={photos.hero}
                alt="Us"
                className="aspect-[4/5] w-full"
              />
            </div>
          </div>
        </div>

        {/* ── Bottom row: Memories + Promises ── */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Memories */}
          <div id="memories" className="scroll-mt-28 rounded-3xl border border-rosy-100 bg-cream/60 p-6 sm:p-7">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="font-serif text-2xl font-semibold text-slate">{memories.title}</h2>
                <p className="mt-0.5 text-xs font-medium uppercase tracking-[0.18em] text-gold">
                  {memories.eyebrow}
                </p>
              </div>
              <HeartIcon className="mt-1 h-5 w-5 shrink-0 text-rosy-400" />
            </div>

            <div className="mt-5 grid grid-cols-2 gap-2.5 min-[420px]:grid-cols-3">
              {memories.items.map((m, i) => (
                <figure key={i} className="group relative">
                  <Photo
                    src={photos.memories[i]}
                    alt={m.caption}
                    className="aspect-[3/4] rounded-2xl shadow-soft transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <figcaption className="pointer-events-none absolute inset-x-1.5 bottom-1.5 rounded-lg bg-white/90 px-2 py-1 text-center text-[10px] font-medium leading-tight text-slate/80 opacity-0 shadow-soft backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
                    {m.caption} · {m.date}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          {/* Promises */}
          <div id="promises" className="scroll-mt-28 rounded-3xl border border-rosy-100 bg-cream/60 p-6 sm:p-7">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="font-serif text-2xl font-semibold text-slate">{promises.title}</h2>
                <p className="mt-0.5 text-xs font-medium uppercase tracking-[0.18em] text-gold">
                  {promises.eyebrow}
                </p>
              </div>
              <HeartIcon className="mt-1 h-5 w-5 shrink-0 text-rosy-400" />
            </div>

            <ul className="mt-4 divide-y divide-rosy-100">
              {promises.items.map((p, i) => {
                const Icon = PROMISE_ICONS[p.icon] || HeartIcon;
                return (
                  <li key={i} className="group flex items-center gap-3.5 py-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rosy-50 text-rosy-500 transition-colors duration-300 group-hover:bg-rosy-500 group-hover:text-white">
                      <Icon className="h-[18px] w-[18px]" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-slate">{p.title}</p>
                      <p className="mt-0.5 truncate text-xs text-slate/55">{p.text}</p>
                    </div>
                    <ChevronRightIcon className="h-4 w-4 shrink-0 text-slate/30 transition group-hover:translate-x-0.5 group-hover:text-rosy-500" />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
