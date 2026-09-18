import { useState } from 'react';

/**
 * Image with graceful fallback: if the photo file doesn't exist yet,
 * shows a soft rose placeholder with a camera icon instead of a broken image.
 */
export default function Photo({ src, alt, className = '', imgClassName = '' }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-rosy-50 to-rosy-100 ${className}`}>
      {!failed ? (
        <img
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-1.5 p-2 text-center">
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5 text-rosy-500/70"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
            <circle cx="12" cy="13.5" r="3.5" />
          </svg>
          <span className="text-[10px] font-medium leading-tight text-rosy-500/80">
            {alt}
          </span>
        </div>
      )}
    </div>
  );
}
