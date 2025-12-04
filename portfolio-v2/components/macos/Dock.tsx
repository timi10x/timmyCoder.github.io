'use client'

interface DockProps {
  onAppClick: (app: string) => void
}

const apps = [
  { id: 'finder', name: 'Finder', icon: '📁', color: 'bg-blue-500' },
  { id: 'projects', name: 'Projects', icon: '💼', color: 'bg-purple-500' },
  { id: 'experience', name: 'Experience', icon: '🏢', color: 'bg-green-500' },
  { id: 'skills', name: 'Skills', icon: '⚙️', color: 'bg-orange-500' },
  { id: 'blog', name: 'Safari', icon: '🧭', color: 'bg-cyan-500' },
  { id: 'contact', name: 'Mail', icon: '✉️', color: 'bg-blue-400' },
]

export default function Dock({ onAppClick }: DockProps) {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl px-3 py-2 flex gap-2 shadow-2xl">
        {apps.map((app) => (
          <button
            key={app.id}
            onClick={() => onAppClick(app.id)}
            className="group relative"
            title={app.name}
          >
            <div className={`w-14 h-14 ${app.color} rounded-xl flex items-center justify-center text-2xl transform transition-all duration-200 hover:scale-110 hover:-translate-y-2 shadow-lg`}>
              {app.icon}
            </div>

            {/* App name on hover */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm px-2 py-1 rounded text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              {app.name}
            </div>

            {/* Active indicator */}
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100"></div>
          </button>
        ))}
      </div>
    </div>
  )
}
