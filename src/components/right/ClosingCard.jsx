import FadeIn from '../ui/FadeIn.jsx';
import { HeartIcon } from '../ui/Icons.jsx';
import { closing } from '../../data/content.js';

export default function ClosingCard() {
  return (
    <FadeIn>
      <div className="rounded-3xl border border-rosy-100 bg-white p-6 text-center shadow-soft">
        <h2 className="font-serif text-2xl font-semibold text-slate">{closing.title}</h2>

        <div className="mx-auto mt-4 flex items-center justify-center gap-3">
          <PhotoSkip />
        </div>

        <div className="mt-4 space-y-3.5 text-left">
          {closing.paragraphs.map((p, i) => (
            <p key={i} className="text-xs leading-relaxed text-slate/65 sm:text-[13px]">
              {p}
            </p>
          ))}
        </div>

        <p className="mt-5 text-xs italic text-slate/50">{closing.signOff}</p>
        <p className="mt-1 font-serif text-lg font-semibold text-rosy-700">{closing.signName}</p>

        <button
          type="button"
          onClick={() => document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' })}
          className="mt-5 w-full rounded-full bg-gradient-to-r from-rosy-500 to-rosy-600 py-2.5 text-sm font-semibold text-white shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift"
        >
          {closing.cta}
        </button>
      </div>
    </FadeIn>
  );
}

function PhotoSkip() {
  return (
    <div className="flex items-center gap-2">
      <span className="h-px w-8 bg-rosy-200" />
      <HeartIcon className="h-4 w-4 text-rosy-500 animate-heart-beat motion-safe-beat" />
      <span className="h-px w-8 bg-rosy-200" />
    </div>
  );
}
