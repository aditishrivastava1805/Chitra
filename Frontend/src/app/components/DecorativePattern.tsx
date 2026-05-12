export function DecorativePattern() {
  return (
<div className="absolute inset-0 pointer-events-none opacity-30 text-brown-500">      
      {/* Top Left */}
      <svg
        className="absolute top-0 left-0 w-72 h-72"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path d="M0,50 Q25,25 50,50 T100,50" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="50" cy="50" r="3" fill="currentColor" />
        <path d="M20,80 Q30,70 40,80 Q50,90 60,80" stroke="currentColor" strokeWidth="1.5" />
      </svg>

      {/* Top Right */}
      <svg
        className="absolute top-0 right-0 w-72 h-72 rotate-90"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path d="M0,50 Q25,25 50,50 T100,50" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="50" cy="50" r="3" fill="currentColor" />
      </svg>

      {/* Bottom Left */}
      <svg
        className="absolute bottom-0 left-0 w-72 h-72 -rotate-90"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path d="M0,50 Q25,25 50,50 T100,50" stroke="currentColor" strokeWidth="1.5" />
      </svg>

      {/* Bottom Right */}
      <svg
        className="absolute bottom-0 right-0 w-72 h-72 rotate-180"
        viewBox="0 0 200 200"
        fill="none"
      >
        <path d="M0,50 Q25,25 50,50 T100,50" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="50" cy="50" r="3" fill="currentColor" />
      </svg>

    </div>
  );
}