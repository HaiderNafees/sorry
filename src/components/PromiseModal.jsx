import { useEffect } from 'react';
import { HeartIcon, XIcon } from './ui/Icons.jsx';

const PROMISE_ICONS = {
  ear: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 8.5a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0" />
      <path d="M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 0 0 4 0" />
    </svg>
  ),
  chat: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  ),
  plane: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  ),
  clock: ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  heart: HeartIcon,
};

export default function PromiseModal({ promise, onClose }) {
  useEffect(() => {
    if (!promise) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [promise, onClose]);

  if (!promise) return null;

  const Icon = PROMISE_ICONS[promise.icon] || HeartIcon;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={promise.title}
    >
      <div
        className="absolute inset-0 bg-slate/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />

      <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-rosy-100 bg-white p-7 shadow-lift sm:p-8">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close promise"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-rosy-50 text-rosy-700 transition hover:bg-rosy-100"
        >
          <XIcon className="h-4 w-4" />
        </button>

        {/* Icon header */}
        <div className="flex items-center gap-3">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-rosy-50 text-rosy-500">
            <Icon className="h-7 w-7" />
          </span>
          <div>
            <h3 className="font-serif text-2xl font-semibold text-slate">{promise.title}</h3>
            <p className="mt-0.5 text-xs font-medium uppercase tracking-[0.18em] text-gold">
              My Promise to You
            </p>
          </div>
        </div>

        {/* Detail text */}
        <p className="mt-6 text-base leading-relaxed text-slate/80 sm:text-lg">
          {promise.detail}
        </p>

        {/* Decorative footer */}
        <div className="mt-8 flex items-center justify-center gap-2 text-rosy-400">
          <HeartIcon className="h-4 w-4 animate-heart-beat motion-safe-beat" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-rosy-500">
            With all my love
          </span>
          <HeartIcon className="h-4 w-4 animate-heart-beat motion-safe-beat" />
        </div>
      </div>
    </div>
  );
}
