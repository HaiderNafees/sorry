import FadeIn from './FadeIn.jsx';

/**
 * Consistent heading block used by every section: small rose eyebrow,
 * large serif title, optional soft subtitle. Centered, generous spacing.
 */
export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <FadeIn className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-rosy-500">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-3xl font-semibold text-slate sm:text-4xl lg:text-[2.6rem]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-slate/70 sm:text-lg">{subtitle}</p>
      )}
      <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-rosy-500 to-transparent" />
    </FadeIn>
  );
}
