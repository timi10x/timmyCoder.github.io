'use client'

import { useState } from 'react'

interface WindowProps {
  title: string
  children: React.ReactNode
  onClose: () => void
  defaultPosition?: { x: number; y: number }
  width?: string
  height?: string
}

export default function Window({
  title,
  children,
  onClose,
  defaultPosition = { x: 100, y: 100 },
  width = 'w-[800px]',
  height = 'h-[600px]',
}: WindowProps) {
  const [isMaximized, setIsMaximized] = useState(false)
  const [position] = useState(defaultPosition)

  return (
    <div
      className={`fixed ${isMaximized ? 'inset-4' : `${width} ${height}`} bg-white/95 backdrop-blur-xl rounded-lg shadow-2xl overflow-hidden border border-gray-200/50 flex flex-col`}
      style={!isMaximized ? { left: position.x, top: position.y } : {}}
    >
      {/* Title Bar */}
      <div className="h-10 bg-gray-100/80 backdrop-blur-xl border-b border-gray-200/50 flex items-center justify-between px-4 cursor-move">
        {/* Traffic lights */}
        <div className="flex gap-2">
          <button
            onClick={onClose}
            className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
          />
          <button className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors" />
          <button
            onClick={() => setIsMaximized(!isMaximized)}
            className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors"
          />
        </div>

        {/* Title */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-sm font-semibold text-gray-700">
          {title}
        </div>

        <div />
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto bg-white">
        {children}
      </div>
    </div>
  )
}
