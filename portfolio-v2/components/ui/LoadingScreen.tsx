'use client'

export default function LoadingScreen() {
  return (
    <div className="flex items-center justify-center w-full h-full bg-black">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-400 text-sm">Loading Experience...</p>
      </div>
    </div>
  )
}
