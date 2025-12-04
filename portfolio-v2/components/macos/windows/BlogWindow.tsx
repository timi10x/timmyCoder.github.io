'use client'

export default function BlogWindow() {
  return (
    <div className="h-full flex flex-col">
      {/* Safari-like address bar */}
      <div className="bg-gray-50 border-b border-gray-200 p-3">
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <button className="w-6 h-6 rounded hover:bg-gray-200 flex items-center justify-center text-gray-600">←</button>
            <button className="w-6 h-6 rounded hover:bg-gray-200 flex items-center justify-center text-gray-600">→</button>
          </div>
          <div className="flex-1 bg-white border border-gray-300 rounded-lg px-3 py-1.5 text-sm text-gray-600 flex items-center gap-2">
            <span>🔒</span>
            <span>timmycoder.github.io/blog</span>
          </div>
          <button className="px-3 py-1.5 text-blue-600 hover:bg-gray-200 rounded text-sm">Refresh</button>
        </div>
      </div>

      {/* Blog Content */}
      <div className="flex-1 overflow-auto p-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to My Blog</h1>
          <p className="text-gray-600 mb-8">Thoughts on mobile development, architecture, and tech</p>

          {/* Blog Posts */}
          <div className="space-y-6">
            <article className="border-b border-gray-200 pb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2 hover:text-blue-600 cursor-pointer">
                Building Scalable Android Apps with Clean Architecture
              </h2>
              <p className="text-sm text-gray-500 mb-3">Published on Medium • 5 min read</p>
              <p className="text-gray-700 mb-4">
                Exploring best practices for structuring Android applications using MVVM pattern,
                Dependency Injection, and modular architecture for maintainability and testability.
              </p>
              <div className="flex gap-2">
                <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded">Android</span>
                <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">Architecture</span>
                <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded">Kotlin</span>
              </div>
            </article>

            <article className="border-b border-gray-200 pb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2 hover:text-blue-600 cursor-pointer">
                Jetpack Compose: The Future of Android UI
              </h2>
              <p className="text-sm text-gray-500 mb-3">Published on Medium • 7 min read</p>
              <p className="text-gray-700 mb-4">
                A deep dive into declarative UI development with Jetpack Compose, comparing it with
                traditional XML layouts and exploring migration strategies.
              </p>
              <div className="flex gap-2">
                <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded">Android</span>
                <span className="text-xs px-2 py-1 bg-orange-100 text-orange-700 rounded">Jetpack Compose</span>
                <span className="text-xs px-2 py-1 bg-pink-100 text-pink-700 rounded">UI</span>
              </div>
            </article>

            <article className="pb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2 hover:text-blue-600 cursor-pointer">
                Testing Strategies for Mobile Apps
              </h2>
              <p className="text-sm text-gray-500 mb-3">Published on Medium • 6 min read</p>
              <p className="text-gray-700 mb-4">
                Comprehensive guide to unit testing, integration testing, and UI testing in Android
                applications using JUnit, Mockito, and Espresso.
              </p>
              <div className="flex gap-2">
                <span className="text-xs px-2 py-1 bg-red-100 text-red-700 rounded">Testing</span>
                <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-700 rounded">Best Practices</span>
              </div>
            </article>
          </div>

          {/* External link */}
          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-gray-700 mb-2">Read more articles on my blog:</p>
            <a
              href="https://medium.com/@olatoyedaniel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-semibold"
            >
              medium.com/@olatoyedaniel →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
