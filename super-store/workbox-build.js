const swBuild = require('workbox-build');

swBuild.generateSW({
  navigateFallback: 'index.html',
  globDirectory: './dist',
  globPatterns: [
    'index.html',
    '**.js',
    '**.css',
    'assets/avatar.png',
    'assets/sda-control.svg',
    'assets/super-store.svg',
    'assets/games/**',
    'manifest.json'
  ],
  swDest: 'dist/sw.js',
  templatedUrls: {
    '?utm_source=pwa': ['index.html'],
  }
}).then(() => console.log('Service Worker generated')).catch(err => console.error(err, 'Service Worker failed to generate'));
