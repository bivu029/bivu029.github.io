'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "29d1103589cd0ccd985cd46556026949",
"assets/AssetManifest.bin.json": "066f9cf06dc5f56d1292f4889bb6d3f8",
"assets/AssetManifest.json": "6b290955680456a6da152b2538eabe79",
"assets/assets/icon/dart.svg": "e8f7e9dd5dfc0fa8b5b4af6adbe66aba",
"assets/assets/icon/flutter.svg": "fb9e82f4de3bbd9bbf23f8af17199313",
"assets/assets/icon/kotlin.svg": "95c7047aa6203dc97c0e8833d4e54f55",
"assets/assets/icon/nestjs.svg": "eeaafae5bb060a3a5382b4920dcd1cbe",
"assets/assets/icon/typescript-icon.svg": "b1cf8e10895971eebdb93c7ab0ed945d",
"assets/assets/image/1df2.png": "b7425cac1b722ef48c0be11ea3e6dc37",
"assets/assets/image/bg.png": "8a97041ba824ceeaa8a7ce8a7d3331f8",
"assets/assets/image/biv.JPG": "e670ac40cc8d49588dd1580316c6ac3b",
"assets/assets/image/ci.gif": "ab299017edd30a6e2d4cfee2d94ee3de",
"assets/assets/image/d.png": "75bb673602574337fef26acf3e2cef9b",
"assets/assets/image/dual.gif": "24d488f0ba1d9952e077cb23a9a3c81f",
"assets/assets/image/leaf.png": "e0cbfd24d0b7e6b26e079c20ef9b1d68",
"assets/assets/image/load.gif": "78a51e8febe2401fd80e611cee9853b0",
"assets/assets/image/p.png": "e417bd0c28344e862d8c4227d4218648",
"assets/assets/image/port.png": "3197335f27b344d9f3e6e1ab14d1c8e8",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "76a329f80bec28c412922d00927720a5",
"assets/NOTICES": "a9fa6ec2e93ac9a6c3a23063a7b9022c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "391ff5f9f24097f4f6e4406690a06243",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "63be71b3ac04c9f39367ec1f4b53965a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "ccbbc7e97c53cea4e9fcec1a4b58708f",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "99355fa3a4c02c505b3d2fa2d888a649",
"icons/Icon-192.png": "4b2cc31c3428fa59810d6813a4f2a97d",
"icons/Icon-512.png": "5f9d097da9ab24ccf220f58787fb8ad7",
"icons/Icon-maskable-192.png": "4b2cc31c3428fa59810d6813a4f2a97d",
"icons/Icon-maskable-512.png": "5f9d097da9ab24ccf220f58787fb8ad7",
"index.html": "39909c82cf0ecdb2268b74000cbaf7bb",
"/": "39909c82cf0ecdb2268b74000cbaf7bb",
"main.dart.js": "84c93fb00324a3b1768b226eff2488c5",
"main.dart.mjs": "66575a79530ebe56e54507af90febb90",
"main.dart.wasm": "7831832ad64d3fa89e4638e1f0804afe",
"manifest.json": "4288fe413b840b26a5a4c4b20365fbe1",
"splash/img/dark-1x.gif": "ef0f1b926a01b34600907519849c583e",
"splash/img/dark-2x.gif": "46ea9beab8e2c45eb58b4309b605934a",
"splash/img/dark-3x.gif": "bd4bf4177a671e6123357df5ffd32578",
"splash/img/dark-4x.gif": "be838fdf4479f4dbd3a0cd6e17a0a379",
"splash/img/light-1x.gif": "ef0f1b926a01b34600907519849c583e",
"splash/img/light-2x.gif": "46ea9beab8e2c45eb58b4309b605934a",
"splash/img/light-3x.gif": "bd4bf4177a671e6123357df5ffd32578",
"splash/img/light-4x.gif": "be838fdf4479f4dbd3a0cd6e17a0a379",
"version.json": "97aa57babf0e2b43394217eb7bf97eb9"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
