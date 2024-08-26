'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "bf469d72822c55d51ecb302d93e9f1c7",
"assets/AssetManifest.bin.json": "c31a64a8efa8e38d411fe51be429340a",
"assets/AssetManifest.json": "e0b5bc33da3c367101928d0243be4760",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a3689fb966fb43cdc39c3d15fea5645e",
"assets/lib/assets/aishop/analytics.png": "6ef3ae218c0cf4c90047dd35dbdea768",
"assets/lib/assets/aishop/detaileditem.png": "06d6fe6d5708e06d0b244e981c3760b8",
"assets/lib/assets/aishop/homep.png": "ab5e5018da34d1bd0462ac928fc5b22b",
"assets/lib/assets/aishop/homepage.png": "3e250deeb81b5f61e9dc20a902a4efac",
"assets/lib/assets/aishop/orrders.png": "0e48fd621d0691f18e75d233e7d4fcf7",
"assets/lib/assets/aishop/useradmin.png": "b2513af6a4a12bb1bb8e5e9d0d1524f1",
"assets/lib/assets/carsale/adminpage.png": "d666e75abe7367c11533a999417b5d97",
"assets/lib/assets/carsale/adminprofile.png": "3f21f65506a61bbda47abda10de3e6ff",
"assets/lib/assets/carsale/availablecarpage.png": "f326500d26726f93467e5c4964e55884",
"assets/lib/assets/carsale/caradmin.png": "06f90b1db840e59962500db3c3cdfef8",
"assets/lib/assets/carsale/carspecification.png": "7160d8dcba840aadea8d202484234fe0",
"assets/lib/assets/carsale/detailpage.png": "d3e5a95a4906404941c81c870345afaa",
"assets/lib/assets/carsale/editbodytype.png": "f9c7540e53e374cd59586220c008206f",
"assets/lib/assets/carsale/homepage.png": "b3fbc114fed27124b4cd98104dca317f",
"assets/lib/assets/carsale/intropage.png": "4e9986b9ab0f731429d70271f04e3852",
"assets/lib/assets/carsale/loginpage.png": "5040345957a415be91ed647575a589d8",
"assets/lib/assets/carsale/profileadmin.png": "8a635f15694f0d5a35d26b1a0338f20c",
"assets/lib/assets/clinic/bloodpressure.png": "d275bcb4e384bf80b26d0251fd1f3f29",
"assets/lib/assets/clinic/homepage.png": "81c551e63c78f3118d31c985f54c2ff0",
"assets/lib/assets/clinic/loginpage.png": "22e675089c5ca604de20028903dc79a8",
"assets/lib/assets/clinic/profilepage.png": "17472f078e481f90dfe201937f31bcd5",
"assets/lib/assets/clinic/weighttracker.png": "bcc48032880b9e87729f5797accc106a",
"assets/lib/assets/eas/accountpage.png": "49821c1608ee712cc43f09693c63f64c",
"assets/lib/assets/eas/bookingpage.png": "fdba00ac4685086c68cf5676a293e5e5",
"assets/lib/assets/eas/caradmin.png": "54a47d58759372be8e80e036d49002f6",
"assets/lib/assets/eas/carspage.png": "01f4e61a0028bf711e80fc648d8b5e91",
"assets/lib/assets/eas/detailspage.png": "c61109f6d4c6c14ca1a44f5673ce37ce",
"assets/lib/assets/eas/homepage.png": "d9743151c2646be7cc938c017d25185f",
"assets/lib/assets/eas/hoteladmin.png": "938a00836a785949f2d597383aa88408",
"assets/lib/assets/eas/hoteldetailpage.png": "485ce09f849e0da58eca78c2b07c987d",
"assets/lib/assets/eas/hotelpage.png": "7ec798a1a576e25cf663e9e3043793e8",
"assets/lib/assets/eas/loginpage.png": "da317784a264ec56b6e28d4354068fa3",
"assets/lib/assets/eas/registerpage.png": "48690ade239ee959e27524b60f09133a",
"assets/lib/assets/eas/safariadmin.png": "689add3a9b1eefb1458393cfc61aaf6c",
"assets/lib/assets/eas/toolpage.png": "f53e0fa749b1593481c8d9920c5e115a",
"assets/lib/assets/eas/tools.png": "3f1c49a10d522250e0c7d23fb3cf8434",
"assets/lib/assets/eas/travelplanner.png": "f76f8cd2e07fd809dd7932ba2c4a2068",
"assets/NOTICES": "9c28cdea7d9caa6e2f5ea7423ba60734",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "01f8b14a540fd8dfe471c9f5d759a330",
"/": "01f8b14a540fd8dfe471c9f5d759a330",
"main.dart.js": "6c7ed25ed0773920cfb08acf5f74eb96",
"manifest.json": "9685166c2173dd720e321bde3ae48f4b",
"version.json": "ee68283cf4f4acb614f6fdf5512bdfab"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
