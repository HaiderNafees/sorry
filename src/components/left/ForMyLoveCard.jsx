import Photo from '../ui/Photo.jsx';
import { ArrowRightIcon, HeartIcon } from '../ui/Icons.jsx';

export default function ForMyLoveCard({ onOpenLetter }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-rosy-100 bg-white p-6 shadow-soft">
      {/* Floating 3D-style heart */}
      <HeartIcon className="absolute -right-2 top-4 h-10 w-10 rotate-12 text-rosy-500 drop-shadow-[0_8px_12px_rgba(251,113,133,0.45)]" />

      <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
        Fati · forever
      </p>
      <h2 className="mt-2 font-serif text-3xl font-semibold text-slate">For My Love</h2>
      <p className="mt-2 max-w-[85%] text-sm leading-relaxed text-slate/60">
        Across every mile, my heart stays with you.
      </p>

      <div className="mt-5">
        <Photo
          src="https://iili.io/nzzf5Pa.jpg"
          alt="For you"
          className="w-full rounded-2xl shadow-soft"
        />
      </div>

      <div className="mt-4 flex items-center justify-start">
        <button
          type="button"
          onClick={onOpenLetter}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-rosy-200 text-rosy-700 transition-all duration-200 hover:translate-x-1 hover:bg-rosy-50"
          aria-label="Open my letter"
        >
          <ArrowRightIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
