export const MobileDeveloperDesk = () => (
  <svg width="300" height="200" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Desk */}
    <path d="M20 150 L280 150" stroke="#4A90E2" strokeWidth="2" strokeLinecap="round"/>
    <path d="M40 150 L40 180" stroke="#4A90E2" strokeWidth="2" strokeLinecap="round"/>
    <path d="M260 150 L260 180" stroke="#4A90E2" strokeWidth="2" strokeLinecap="round"/>
    
    {/* Laptop */}
    <rect x="100" y="120" width="100" height="30" stroke="#4A90E2" strokeWidth="2" fill="none" rx="3"/>
    <path d="M90 150 L210 150" stroke="#4A90E2" strokeWidth="2"/>
    <rect x="110" y="125" width="80" height="20" stroke="#4A90E2" strokeWidth="1" fill="none"/>
    
    {/* Phone */}
    <rect x="220" y="130" width="30" height="20" stroke="#4A90E2" strokeWidth="2" fill="none" rx="3"/>
    <circle cx="235" cy="145" r="2" fill="#4A90E2"/>
    
    {/* Coffee Cup */}
    <ellipse cx="60" cy="150" rx="15" ry="3" stroke="#4A90E2" strokeWidth="2" fill="none"/>
    <path d="M45 150 Q45 135 60 135 Q75 135 75 150" stroke="#4A90E2" strokeWidth="2" fill="none"/>
    <path d="M75 142 Q80 142 80 137 Q80 132 75 132" stroke="#4A90E2" strokeWidth="2" fill="none"/>
    {/* Steam */}
    <path d="M55 130 Q53 125 55 120" stroke="#4A90E2" strokeWidth="1" opacity="0.5"/>
    <path d="M60 130 Q62 125 60 120" stroke="#4A90E2" strokeWidth="1" opacity="0.5"/>
    <path d="M65 130 Q63 125 65 120" stroke="#4A90E2" strokeWidth="1" opacity="0.5"/>
    
    {/* Code symbols floating */}
    <text x="120" y="100" fill="#4A90E2" fontSize="14" fontFamily="monospace">&lt;/&gt;</text>
    <text x="160" y="90" fill="#4A90E2" fontSize="14" fontFamily="monospace">{`{}`}</text>
    <text x="200" y="105" fill="#4A90E2" fontSize="14" fontFamily="monospace">[]</text>
    
    {/* Person (simplified) */}
    <circle cx="150" cy="50" r="15" stroke="#4A90E2" strokeWidth="2" fill="none"/>
    <path d="M150 65 L150 100" stroke="#4A90E2" strokeWidth="2"/>
    <path d="M150 75 L130 85" stroke="#4A90E2" strokeWidth="2"/>
    <path d="M150 75 L170 85" stroke="#4A90E2" strokeWidth="2"/>
    <path d="M150 100 L135 120" stroke="#4A90E2" strokeWidth="2"/>
    <path d="M150 100 L165 120" stroke="#4A90E2" strokeWidth="2"/>
    
    {/* Smile */}
    <circle cx="145" cy="48" r="2" fill="#4A90E2"/>
    <circle cx="155" cy="48" r="2" fill="#4A90E2"/>
    <path d="M145 55 Q150 58 155 55" stroke="#4A90E2" strokeWidth="1.5"/>
  </svg>
)

export const FloatingApps = () => (
  <svg width="250" height="250" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Central Phone */}
    <rect x="100" y="100" width="50" height="80" stroke="#4A90E2" strokeWidth="2" fill="none" rx="5"/>
    <rect x="105" y="110" width="40" height="60" stroke="#4A90E2" strokeWidth="1" fill="none"/>
    <circle cx="125" cy="175" r="3" stroke="#4A90E2" strokeWidth="1"/>
    
    {/* Floating app icons around phone */}
    {/* App 1 - Finance */}
    <rect x="40" y="60" width="35" height="35" stroke="#4A90E2" strokeWidth="2" fill="none" rx="8"/>
    <text x="48" y="82" fill="#4A90E2" fontSize="18">💰</text>
    
    {/* App 2 - Trading */}
    <rect x="175" y="50" width="35" height="35" stroke="#4A90E2" strokeWidth="2" fill="none" rx="8"/>
    <text x="183" y="72" fill="#4A90E2" fontSize="18">📈</text>
    
    {/* App 3 - Agriculture */}
    <rect x="180" y="140" width="35" height="35" stroke="#4A90E2" strokeWidth="2" fill="none" rx="8"/>
    <text x="188" y="162" fill="#4A90E2" fontSize="18">🌾</text>
    
    {/* App 4 - Banking */}
    <rect x="35" y="150" width="35" height="35" stroke="#4A90E2" strokeWidth="2" fill="none" rx="8"/>
    <text x="43" y="172" fill="#4A90E2" fontSize="18">🏦</text>
    
    {/* Connecting lines (like orbits) */}
    <path d="M75 77 Q100 90 100 120" stroke="#4A90E2" strokeWidth="1" strokeDasharray="3,3" opacity="0.5"/>
    <path d="M175 68 Q160 90 150 120" stroke="#4A90E2" strokeWidth="1" strokeDasharray="3,3" opacity="0.5"/>
    <path d="M180 157 Q165 150 150 140" stroke="#4A90E2" strokeWidth="1" strokeDasharray="3,3" opacity="0.5"/>
    <path d="M70 167 Q85 150 100 140" stroke="#4A90E2" strokeWidth="1" strokeDasharray="3,3" opacity="0.5"/>
  </svg>
)

export const MessagePaperPlane = () => (
  <svg width="200" height="150" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Paper plane */}
    <path d="M30 75 L170 30 L120 80 L170 30 L140 120 L120 80" stroke="#4A90E2" strokeWidth="2" fill="none" strokeLinejoin="round"/>
    
    {/* Motion lines */}
    <path d="M20 70 L25 70" stroke="#4A90E2" strokeWidth="1" opacity="0.5"/>
    <path d="M15 75 L22 75" stroke="#4A90E2" strokeWidth="1" opacity="0.5"/>
    <path d="M20 80 L25 80" stroke="#4A90E2" strokeWidth="1" opacity="0.5"/>
    
    {/* Trail dots */}
    <circle cx="50" cy="85" r="1" fill="#4A90E2" opacity="0.3"/>
    <circle cx="60" cy="82" r="1" fill="#4A90E2" opacity="0.4"/>
    <circle cx="70" cy="79" r="1" fill="#4A90E2" opacity="0.5"/>
    <circle cx="80" cy="76" r="1" fill="#4A90E2" opacity="0.6"/>
  </svg>
)

export const CodeReview = () => (
  <svg width="280" height="180" viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Document */}
    <rect x="80" y="40" width="120" height="100" stroke="#4A90E2" strokeWidth="2" fill="none"/>
    
    {/* Code lines */}
    <path d="M90 55 L130 55" stroke="#4A90E2" strokeWidth="1" opacity="0.7"/>
    <path d="M90 65 L150 65" stroke="#4A90E2" strokeWidth="1" opacity="0.7"/>
    <path d="M100 75 L140 75" stroke="#4A90E2" strokeWidth="1" opacity="0.7"/>
    <path d="M90 85 L160 85" stroke="#4A90E2" strokeWidth="1" opacity="0.7"/>
    <path d="M90 95 L145 95" stroke="#4A90E2" strokeWidth="1" opacity="0.7"/>
    <path d="M100 105 L155 105" stroke="#4A90E2" strokeWidth="1" opacity="0.7"/>
    <path d="M90 115 L135 115" stroke="#4A90E2" strokeWidth="1" opacity="0.7"/>
    <path d="M90 125 L170 125" stroke="#4A90E2" strokeWidth="1" opacity="0.7"/>
    
    {/* Magnifying glass */}
    <circle cx="220" cy="90" r="25" stroke="#4A90E2" strokeWidth="2" fill="none"/>
    <path d="M238 108 L255 125" stroke="#4A90E2" strokeWidth="2" strokeLinecap="round"/>
    
    {/* Checkmarks and X marks */}
    <path d="M170 65 L175 70 L185 60" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M170 95 L175 100 L185 90" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M170 120 L180 130 M180 120 L170 130" stroke="#EF4444" strokeWidth="2" strokeLinecap="round"/>
    
    {/* Comments bubble */}
    <ellipse cx="50" cy="80" rx="25" ry="20" stroke="#4A90E2" strokeWidth="2" fill="none"/>
    <path d="M50 100 L45 110 L55 105" stroke="#4A90E2" strokeWidth="2" fill="none"/>
    <text x="38" y="85" fill="#4A90E2" fontSize="20">💬</text>
  </svg>
)

export const TeamCollaboration = () => (
  <svg width="300" height="200" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Three people */}
    {/* Person 1 */}
    <circle cx="60" cy="60" r="15" stroke="#4A90E2" strokeWidth="2" fill="none"/>
    <path d="M60 75 L60 110" stroke="#4A90E2" strokeWidth="2"/>
    <path d="M60 85 L45 95" stroke="#4A90E2" strokeWidth="2"/>
    <path d="M60 85 L75 95" stroke="#4A90E2" strokeWidth="2"/>
    
    {/* Person 2 */}
    <circle cx="150" cy="60" r="15" stroke="#4A90E2" strokeWidth="2" fill="none"/>
    <path d="M150 75 L150 110" stroke="#4A90E2" strokeWidth="2"/>
    <path d="M150 85 L135 95" stroke="#4A90E2" strokeWidth="2"/>
    <path d="M150 85 L165 95" stroke="#4A90E2" strokeWidth="2"/>
    
    {/* Person 3 */}
    <circle cx="240" cy="60" r="15" stroke="#4A90E2" strokeWidth="2" fill="none"/>
    <path d="M240 75 L240 110" stroke="#4A90E2" strokeWidth="2"/>
    <path d="M240 85 L225 95" stroke="#4A90E2" strokeWidth="2"/>
    <path d="M240 85 L255 95" stroke="#4A90E2" strokeWidth="2"/>
    
    {/* Connection lines */}
    <path d="M75 70 L135 70" stroke="#4A90E2" strokeWidth="1" strokeDasharray="5,5" opacity="0.5"/>
    <path d="M165 70 L225 70" stroke="#4A90E2" strokeWidth="1" strokeDasharray="5,5" opacity="0.5"/>
    <path d="M60 45 Q150 30 240 45" stroke="#4A90E2" strokeWidth="1" strokeDasharray="5,5" opacity="0.5"/>
    
    {/* Message board */}
    <rect x="90" y="130" width="120" height="50" stroke="#4A90E2" strokeWidth="2" fill="none" rx="5"/>
    <path d="M100 145 L140 145" stroke="#4A90E2" strokeWidth="1" opacity="0.7"/>
    <path d="M100 155 L170 155" stroke="#4A90E2" strokeWidth="1" opacity="0.7"/>
    <path d="M100 165 L155 165" stroke="#4A90E2" strokeWidth="1" opacity="0.7"/>
    
    {/* Speech bubbles */}
    <ellipse cx="60" cy="35" rx="20" ry="15" stroke="#4A90E2" strokeWidth="1" fill="none" strokeDasharray="2,2"/>
    <ellipse cx="240" cy="35" rx="20" ry="15" stroke="#4A90E2" strokeWidth="1" fill="none" strokeDasharray="2,2"/>
  </svg>
)

export const AfricanImpact = () => (
  <svg width="250" height="250" viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Simplified Africa outline */}
    <path d="M125 50 Q100 60 95 80 L90 100 Q85 120 90 140 L95 160 Q100 180 115 190 L125 195 L135 190 Q150 180 155 160 L160 140 Q165 120 160 100 L155 80 Q150 60 125 50 Z" 
          stroke="#4A90E2" strokeWidth="2" fill="none"/>
    
    {/* Connection points (cities) */}
    <circle cx="125" cy="80" r="3" fill="#4A90E2"/>
    <circle cx="110" cy="110" r="3" fill="#4A90E2"/>
    <circle cx="140" cy="115" r="3" fill="#4A90E2"/>
    <circle cx="125" cy="140" r="3" fill="#4A90E2"/>
    <circle cx="115" cy="165" r="3" fill="#4A90E2"/>
    
    {/* Connection lines */}
    <path d="M125 80 L110 110 L125 140" stroke="#4A90E2" strokeWidth="1" opacity="0.5"/>
    <path d="M125 80 L140 115 L125 140" stroke="#4A90E2" strokeWidth="1" opacity="0.5"/>
    <path d="M110 110 L140 115" stroke="#4A90E2" strokeWidth="1" opacity="0.5"/>
    <path d="M125 140 L115 165" stroke="#4A90E2" strokeWidth="1" opacity="0.5"/>
    
    {/* Signal waves */}
    <circle cx="125" cy="80" r="10" stroke="#4A90E2" strokeWidth="1" fill="none" opacity="0.3"/>
    <circle cx="125" cy="80" r="20" stroke="#4A90E2" strokeWidth="1" fill="none" opacity="0.2"/>
    <circle cx="125" cy="80" r="30" stroke="#4A90E2" strokeWidth="1" fill="none" opacity="0.1"/>
  </svg>
)
