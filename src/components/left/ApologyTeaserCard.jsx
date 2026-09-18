import Photo from '../ui/Photo.jsx';
import { HeartIcon } from '../ui/Icons.jsx';

export default function ApologyTeaserCard({ onOpenLetter }) {
  return (
    <div className="rounded-3xl border border-rosy-100 bg-white p-6 shadow-soft">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-serif text-xl font-semibold leading-snug text-slate">
            A Sincere Apology
          </h3>
          <p className="mt-1.5 max-w-[90%] text-xs leading-relaxed text-slate/60">
            {apologyTeaserText}
          </p>
        </div>
        <HeartIcon className="mt-1 h-4 w-4 shrink-0 text-rosy-500" />
      </div>

      <button type="button" onClick={onOpenLetter} className="mt-4 block w-full text-left">
        {/* 3-photo mini grid: tall left, two stacked right */}
        <div className="grid h-44 grid-cols-2 gap-2">
          <Photo src="/photos/memory-1.jpg" alt="[Memory Caption]" className="rounded-2xl" />
          <div className="grid grid-rows-2 gap-2">
            <Photo src="/photos/memory-2.jpg" alt="[Memory Caption]" className="rounded-2xl" />
            <Photo src="/photos/memory-3.jpg" alt="[Memory Caption]" className="rounded-2xl" />
          </div>
        </div>
      </button>
    </div>
  );
}

const apologyTeaserText =
  'I was wrong, and I am sorry. Open the letter — every word is for you.';
