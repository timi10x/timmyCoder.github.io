#!/bin/bash

# Portfolio Build Script for cPanel Deployment
# Run this after installing Node.js

echo "🚀 Starting portfolio build process..."

# Navigate to portfolio directory
cd "/Users/timi10x/Desktop/my portfolio/timmyCoder.github.io/portfolio-v2"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the static site
echo "🔨 Building static site..."
npm run build

echo "✅ Build complete!"
echo ""
echo "📁 Your static files are ready in:"
echo "   portfolio-v2/out/"
echo ""
echo "📤 Next steps:"
echo "1. Open your cPanel File Manager"
echo "2. Navigate to public_html"
echo "3. Upload everything from portfolio-v2/out/ folder"
echo "   - index.html"
echo "   - 404.html"
echo "   - _next folder"
echo "   - img folder"
echo ""
echo "🌐 Your site will be live at your domain!"
