export function TechIllustration({ type }: { type: "ai" | "code" | "corp" }) {
  // Bolder, clearer SVGs with simpler paths and stronger stroke widths
  if (type === "ai") {
    return (
      <svg viewBox="0 0 400 400" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
           <linearGradient id="brainGrad" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F59E0B" />
            <stop offset="1" stopColor="#EA580C" />
          </linearGradient>
        </defs>
        <g transform="translate(50, 50) scale(0.75)">
           {/* Central Brain/Chip Metaphor */}
           <path d="M150 100 C 100 100, 50 150, 50 200 C 50 280, 120 350, 200 350 C 280 350, 350 280, 350 200 C 350 150, 300 100, 250 100" stroke="url(#brainGrad)" strokeWidth="12" strokeLinecap="round" fill="none" />
           <circle cx="200" cy="200" r="60" fill="url(#brainGrad)" fillOpacity="0.1" stroke="#EA580C" strokeWidth="4" />
           
           {/* Neural Nodes */}
           <circle cx="200" cy="150" r="12" fill="#F59E0B" className="animate-pulse" />
           <circle cx="150" cy="230" r="12" fill="#EA580C" className="animate-pulse delay-75" />
           <circle cx="250" cy="230" r="12" fill="#F59E0B" className="animate-pulse delay-150" />
           
           {/* Connecting Lines */}
           <path d="M200 150 L150 230 L250 230 Z" stroke="#EA580C" strokeWidth="3" strokeOpacity="0.5" />
           
           {/* Orbiting Elements */}
           <circle cx="200" cy="200" r="110" stroke="#F59E0B" strokeWidth="2" strokeDasharray="10 10" className="animate-[spin_20s_linear_infinite]" />
        </g>
      </svg>
    );
  }

  if (type === "code") {
    return (
      <svg viewBox="0 0 400 400" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(40, 60) scale(0.8)">
          {/* Browser Window Frame */}
          <rect x="0" y="0" width="400" height="300" rx="20" fill="#EFF6FF" stroke="#2563EB" strokeWidth="6" />
          <path d="M0 60 H400" stroke="#2563EB" strokeWidth="4" />
          <circle cx="40" cy="30" r="10" fill="#EF4444" />
          <circle cx="80" cy="30" r="10" fill="#F59E0B" />
          <circle cx="120" cy="30" r="10" fill="#10B981" />
          
          {/* Code Blocks */}
          <rect x="40" y="100" width="200" height="20" rx="10" fill="#3B82F6" fillOpacity="0.8" className="animate-pulse" />
          <rect x="40" y="140" width="300" height="20" rx="10" fill="#93C5FD" className="animate-pulse delay-75" />
          <rect x="40" y="180" width="260" height="20" rx="10" fill="#3B82F6" fillOpacity="0.6" className="animate-pulse delay-150" />
          
          {/* Floating Element */}
          <rect x="280" y="220" width="80" height="80" rx="12" fill="#4F46E5" className="animate-[bounce_3s_infinite]" />
        </g>
      </svg>
    );
  }

  if (type === "corp") {
    return (
      <svg viewBox="0 0 400 400" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
         <g transform="translate(50, 50) scale(0.75)">
           {/* Bar Chart Base */}
           <line x1="50" y1="350" x2="350" y2="350" stroke="#0F766E" strokeWidth="6" strokeLinecap="round" />
           <line x1="50" y1="50" x2="50" y2="350" stroke="#0F766E" strokeWidth="6" strokeLinecap="round" />
           
           {/* Bars */}
           <rect x="80" y="250" width="40" height="100" fill="#5EEAD4" rx="4" />
           <rect x="150" y="180" width="40" height="170" fill="#2DD4BF" rx="4" />
           <rect x="220" y="100" width="40" height="250" fill="#14B8A6" rx="4" />
           
           {/* Trend Line */}
           <path d="M80 230 L170 160 L240 80 L320 40" stroke="#F59E0B" strokeWidth="8" strokeLinecap="round" fill="none" className="animate-[dash_2s_ease-out]" strokeDasharray="400" />
           <circle cx="320" cy="40" r="12" fill="#F59E0B" className="animate-ping" />
         </g>
      </svg>
    );
  }
  return null;
}
