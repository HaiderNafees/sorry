import { useEffect } from 'react';
import { apology, gratitude } from '../data/content.js';
import { HeartIcon, XIcon } from './ui/Icons.jsx';

export default function LetterModal({ open, onClose }) {
  // Close on Escape and lock page scroll while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="A letter for you"
    >
      <div
        className="absolute inset-0 bg-slate/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />

      <div className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-rosy-100 bg-white p-7 shadow-lift sm:p-10">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close letter"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-rosy-50 text-rosy-700 transition hover:bg-rosy-100"
        >
          <XIcon className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-rosy-50 text-rosy-500">
            <HeartIcon className="h-5 w-5 animate-heart-beat motion-safe-beat" />
          </span>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rosy-500">
            {apology.eyebrow}
          </p>
        </div>

        <h2 className="mt-4 font-serif text-3xl font-semibold text-slate sm:text-4xl">
          {apology.title}
        </h2>

        <p className="mt-5 font-serif text-xl font-medium text-rosy-700">{apology.greeting}</p>

        <div className="mt-5 space-y-5 text-base leading-relaxed text-slate/80 sm:text-lg">
          {apology.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <ul className="mt-7 space-y-3">
          {apology.commitments.map((c, i) => (
            <li key={i} className="flex items-start gap-3 rounded-xl bg-rosy-50 p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rosy-500 text-white">
                <HeartIcon className="h-3 w-3" />
              </span>
              <span className="text-sm leading-relaxed text-slate/80 sm:text-base">{c}</span>
            </li>
          ))}
        </ul>

        <p className="mt-7 font-serif text-lg italic text-slate">{apology.closingLine}</p>

        {/* Gratitude follows the apology inside the same letter */}
        <div className="mt-10 border-t border-rosy-100 pt-8">
          <h3 className="font-serif text-2xl font-semibold text-slate">{gratitude.title}</h3>
          <div className="mt-5 space-y-5 text-base leading-relaxed text-slate/80 sm:text-lg">
            {gratitude.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
