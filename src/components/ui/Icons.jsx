/** Small inline SVG icon set — no icon library dependency needed. */

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

export function HeartIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} fill="currentColor" stroke="none">
      <path d="M12 21s-7.5-4.7-10-9C.5 8.5 2.5 4.5 6.5 4.5c2.2 0 3.9 1.2 5.5 3.2 1.6-2 3.3-3.2 5.5-3.2 4 0 6 4 4.5 7.5-2.5 4.3-10 9-10 9z" />
    </svg>
  );
}

export function EarIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M6 8.5a6 6 0 0 1 12 0c0 3.5-2.5 4.7-3.5 6.5-.7 1.2-.8 3-2.5 3s-2.3-1.5-2.6-3" />
      <path d="M9.5 8.5a2.5 2.5 0 0 1 5 0c0 1.6-.8 2.4-1.7 3.4" />
    </svg>
  );
}

export function ChatIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.4 0-2.8-.3-4-.9L3 21l1.9-5.5A8.5 8.5 0 1 1 21 11.5z" />
      <path d="M8 10h8M8 13.5h5" />
    </svg>
  );
}

export function PlaneIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M10.5 13.5 3 11l1.5-1.5 6 .5 4.5-4.5a1.6 1.6 0 0 1 2.3 2.3L12.8 12l.5 6L11.8 19.5l-2.5-7.5z" transform="rotate(8 12 12)" />
    </svg>
  );
}

export function ClockIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function CheckIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} stroke="currentColor">
      <path d="M4.5 12.5 9.5 17.5 19.5 6.5" />
    </svg>
  );
}

export function CameraIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
      <circle cx="12" cy="13.5" r="3.5" />
    </svg>
  );
}

export function ChevronDownIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M6 9.5l6 6 6-6" />
    </svg>
  );
}

export function MenuIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function XIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function ArrowRightIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M4 12h15M13.5 6.5 19 12l-5.5 5.5" />
    </svg>
  );
}

export function ChevronRightIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M9.5 6.5 15 12l-5.5 5.5" />
    </svg>
  );
}

export function SearchIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m15.8 15.8 4 4" />
    </svg>
  );
}

export function MailIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4.5 7.5 7.5 5.5 7.5-5.5" />
    </svg>
  );
}
