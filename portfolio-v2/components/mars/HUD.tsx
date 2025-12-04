'use client'

interface HUDProps {
  roverPosition: [number, number, number]
  nearestLocation: string | null
  distance: number | null
}

export default function HUD({ roverPosition, nearestLocation, distance }: HUDProps) {
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Top HUD */}
      <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-start">
        {/* Left side - Mission info */}
        <div className="bg-black/40 backdrop-blur-md border border-orange-500/30 rounded-lg p-4 text-white font-mono">
          <div className="text-orange-500 font-bold mb-2">MARS EXPLORATION</div>
          <div className="text-sm space-y-1">
            <div className="flex justify-between gap-4">
              <span className="text-gray-400">Rover:</span>
              <span>Daniel-1</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-gray-400">Position:</span>
              <span>
                X:{roverPosition[0].toFixed(1)} Z:{roverPosition[2].toFixed(1)}
              </span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-gray-400">Mission:</span>
              <span className="text-green-400">Active</span>
            </div>
          </div>
        </div>

        {/* Right side - Controls */}
        <div className="bg-black/40 backdrop-blur-md border border-blue-500/30 rounded-lg p-4 text-white font-mono text-sm">
          <div className="text-blue-400 font-bold mb-2">CONTROLS</div>
          <div className="space-y-1 text-gray-300">
            <div>🎮 WASD / Arrow Keys - Drive</div>
            <div>🖱️ Click + Drag - Look Around</div>
            <div>📍 Approach Markers - View Info</div>
          </div>
        </div>
      </div>

      {/* Bottom HUD - Location info */}
      {nearestLocation && distance !== null && distance < 15 && (
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 pointer-events-auto">
          <div className="bg-black/60 backdrop-blur-xl border-2 border-green-500 rounded-xl p-6 text-white text-center animate-pulse">
            <div className="text-green-400 font-bold text-lg mb-2">📍 LOCATION DETECTED</div>
            <div className="text-2xl font-bold mb-2">{nearestLocation}</div>
            <div className="text-sm text-gray-300">
              {distance < 8 ? 'Press E to interact' : `Distance: ${distance.toFixed(1)}m`}
            </div>
          </div>
        </div>
      )}

      {/* Mini-map */}
      <div className="absolute bottom-6 right-6 w-48 h-48 bg-black/60 backdrop-blur-md border border-orange-500/30 rounded-lg p-2">
        <div className="text-orange-500 text-xs font-mono mb-1">RADAR</div>
        <div className="relative w-full h-40 bg-orange-950/30 rounded">
          {/* Center dot (rover) */}
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-green-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-green-500/50"></div>
          {/* Scanning line */}
          <div className="absolute top-1/2 left-1/2 w-20 h-0.5 bg-gradient-to-r from-green-500 to-transparent transform -translate-y-1/2 origin-left animate-spin"></div>
        </div>
      </div>

      {/* Crosshair */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-8 h-8 border-2 border-white/30 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </div>
  )
}
