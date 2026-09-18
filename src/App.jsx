import { useState } from 'react';
import LetterModal from './components/LetterModal.jsx';
import ForMyLoveCard from './components/left/ForMyLoveCard.jsx';
import ApologyTeaserCard from './components/left/ApologyTeaserCard.jsx';
import CenterCard from './components/center/CenterCard.jsx';
import ClosingCard from './components/right/ClosingCard.jsx';
import { HeartIcon } from './components/ui/Icons.jsx';

export default function App() {
  const [letterOpen, setLetterOpen] = useState(false);

  return (
    <div id="top" className="relative min-h-screen bg-cream font-sans text-slate">
      {/* ── Decorations (clipped layer: never causes overflow on any screen) ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 right-[-10rem] h-96 w-96 rounded-full bg-rosy-100/50 blur-3xl" />
        <div className="absolute bottom-24 left-[-12rem] h-[28rem] w-[28rem] rounded-full bg-rosy-50 blur-3xl" />

        {/* Gold squiggles */}
        <svg
          viewBox="0 0 80 120"
          className="absolute left-[6%] top-[58%] hidden h-28 w-20 text-gold/50 lg:block"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M12 8c34 10 44 38 30 62-12 20-36 26-30 44" />
        </svg>
        <svg
          viewBox="0 0 80 120"
          className="absolute right-[5%] top-[10%] hidden h-24 w-16 text-gold/40 lg:block"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
        >
          <path d="M68 10C36 24 24 52 40 74c14 18 30 22 26 40" strokeWidth="2" />
        </svg>

        {/* Floating hearts */}
        <HeartIcon className="absolute left-[4%] top-[22%] hidden h-9 w-9 rotate-[-12deg] text-rosy-500/80 drop-shadow-[0_10px_14px_rgba(251,113,133,0.45)] animate-float-soft motion-safe-float lg:block" />
        <HeartIcon className="absolute right-[3%] bottom-[38%] hidden h-8 w-8 rotate-12 text-rosy-400/70 drop-shadow-[0_8px_12px_rgba(251,113,133,0.4)] animate-float-soft motion-safe-float [animation-delay:1.4s] lg:block" />
      </div>

      {/* ── Bento grid ── */}
      <main className="relative mx-auto grid max-w-[1400px] items-start gap-6 px-4 pb-16 pt-8 sm:px-6 lg:grid-cols-[300px_minmax(0,1fr)_320px] lg:gap-7 lg:px-8 lg:pt-12">
        {/* Left rail */}
        <div className="order-2 space-y-6 lg:order-1 lg:sticky lg:top-8">
          <ForMyLoveCard onOpenLetter={() => setLetterOpen(true)} />
          <ApologyTeaserCard onOpenLetter={() => setLetterOpen(true)} />
        </div>

        {/* Center card */}
        <div className="order-1 min-w-0 lg:order-2">
          <CenterCard onOpenLetter={() => setLetterOpen(true)} />
        </div>

        {/* Right rail */}
        <div className="order-3 space-y-6 lg:sticky lg:top-8">
          <ClosingCard />
        </div>
      </main>

      {/* Footer */}
      <footer className="relative pb-10 text-center text-sm text-slate/45">
        <p className="flex items-center justify-center gap-1.5">
          Made with
          <HeartIcon className="h-4 w-4 text-rosy-500 animate-heart-beat motion-safe-beat" />
          across the miles · {new Date().getFullYear()}
        </p>
      </footer>

      <LetterModal open={letterOpen} onClose={() => setLetterOpen(false)} />
    </div>
  );
}
