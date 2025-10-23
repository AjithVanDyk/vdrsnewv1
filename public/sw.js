// Optimized Service Worker for Van Dyk Recycling Solutions
// Focused on performance and minimal overhead

const STATIC_CACHE_NAME = 'van-dyk-static-v4';
const DYNAMIC_CACHE_NAME = 'van-dyk-dynamic-v4';

// Critical assets only - optimized for LCP while avoiding HTML caching
const STATIC_ASSETS = [
  '/manifest.json',
  '/Images/van-dyk-logo-new.jpg',
  '/Images/image-1749759459073.png', // LCP image - critical for performance
  '/Images/vdrs-logo-icon.svg'
];

const OFFLINE_HTML = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Offline</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; margin: 0; padding: 3rem 1.5rem; background: #f8fafc; color: #0f172a; text-align: center; }
      h1 { font-size: 1.75rem; margin-bottom: 0.75rem; }
      p { margin: 0.5rem 0; }
    </style>
  </head>
  <body>
    <main>
      <h1>You&apos;re offline</h1>
      <p>Please check your connection and try again.</p>
    </main>
  </body>
</html>`;

// Install event - minimal caching
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Installing');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        return self.skipWaiting();
      })
  );
});

// Activate event - clean up
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE_NAME && cacheName !== DYNAMIC_CACHE_NAME) {
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        return self.clients.claim();
      })
  );
});

// Fetch event - optimized for performance
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip non-http requests
  if (!request.url.startsWith('http')) {
    return;
  }

  if (request.mode === 'navigate') {
    event.respondWith(
      (async () => {
        try {
          // Always prefer the network for HTML to avoid serving stale shells
          return await fetch(request);
        } catch (error) {
          const cachedPage = await caches.match(request);
          if (cachedPage) {
            return cachedPage;
          }
          return new Response(OFFLINE_HTML, {
            headers: { 'Content-Type': 'text/html; charset=utf-8' }
          });
        }
      })()
    );
    return;
  }

  event.respondWith(
    (async () => {
      const cachedResponse = await caches.match(request);
      if (cachedResponse) {
        return cachedResponse;
      }

      try {
        const networkResponse = await fetch(request);
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
          const responseToCache = networkResponse.clone();
          const cache = await caches.open(DYNAMIC_CACHE_NAME);
          cache.put(request, responseToCache);
        }
        return networkResponse;
      } catch (error) {
        return new Response('Offline', { status: 503 });
      }
    })()
  );
});
