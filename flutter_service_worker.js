'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "eabf9b4558e3cce35a428153278ace7e",
"assets/AssetManifest.bin.json": "8a18ca9e22398fa3d42e5242f64fcc20",
"assets/AssetManifest.json": "1ad4fd833acaaa3a6a4bd9e80fcb7c99",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "6d4938ddf0b96bd67b136d63b9c3ba10",
"assets/lib/assets/aishop/analytics.png": "6ef3ae218c0cf4c90047dd35dbdea768",
"assets/lib/assets/aishop/detaileditem.png": "06d6fe6d5708e06d0b244e981c3760b8",
"assets/lib/assets/aishop/homep.png": "ab5e5018da34d1bd0462ac928fc5b22b",
"assets/lib/assets/aishop/homepage.png": "3e250deeb81b5f61e9dc20a902a4efac",
"assets/lib/assets/aishop/orrders.png": "0e48fd621d0691f18e75d233e7d4fcf7",
"assets/lib/assets/aishop/useradmin.png": "b2513af6a4a12bb1bb8e5e9d0d1524f1",
"assets/lib/assets/aishop/webaddproduct.png": "bba53acfc65317fd64e09d9cbaa7ef07",
"assets/lib/assets/aishop/webcart.png": "9354e90f2ffea32ed1625ab20d6e47b8",
"assets/lib/assets/aishop/webeditproduct.png": "02ee7fa44b03a68d29bb67f5a27d96bf",
"assets/lib/assets/aishop/webhomepage.png": "fa655b443db02d984940ee13bbf971a9",
"assets/lib/assets/aishop/webitemdetail.png": "b44a4bd6368a50cfdd069ad00a3816b8",
"assets/lib/assets/aishop/weblogin.png": "354802b9fc8ea74b69950f89b6f25949",
"assets/lib/assets/carsale/adminpage.png": "d666e75abe7367c11533a999417b5d97",
"assets/lib/assets/carsale/adminprofile.png": "3f21f65506a61bbda47abda10de3e6ff",
"assets/lib/assets/carsale/availablecarpage.png": "f326500d26726f93467e5c4964e55884",
"assets/lib/assets/carsale/caradmin.png": "06f90b1db840e59962500db3c3cdfef8",
"assets/lib/assets/carsale/carspecification.png": "7160d8dcba840aadea8d202484234fe0",
"assets/lib/assets/carsale/carwebaddcar.png": "3258e764fdb7b37d1288fe8a59a8e33f",
"assets/lib/assets/carsale/carwebadminhomepage.png": "6d70cb98362cf230327d2f4bacf2734c",
"assets/lib/assets/carsale/carwebdetails.png": "07bdd640a8645c03762cdb1310f30024",
"assets/lib/assets/carsale/carwebhomepage.png": "50738ceaf80a2f6caa92cecd52075c51",
"assets/lib/assets/carsale/carwebintro.png": "d0bfd5433da47006ed5e1245168bba54",
"assets/lib/assets/carsale/carweblogin.png": "ae688ed66f8673dc65db61c5de1bc2c6",
"assets/lib/assets/carsale/detailpage.png": "d3e5a95a4906404941c81c870345afaa",
"assets/lib/assets/carsale/editbodytype.png": "f9c7540e53e374cd59586220c008206f",
"assets/lib/assets/carsale/homepage.png": "b3fbc114fed27124b4cd98104dca317f",
"assets/lib/assets/carsale/intropage.png": "4e9986b9ab0f731429d70271f04e3852",
"assets/lib/assets/carsale/loginpage.png": "5040345957a415be91ed647575a589d8",
"assets/lib/assets/carsale/profileadmin.png": "8a635f15694f0d5a35d26b1a0338f20c",
"assets/lib/assets/church/addpledge.png": "916ae865250c878bdd4eac88f4348990",
"assets/lib/assets/church/addsermonpage.png": "be3dd830f5984227a52d35d5746c418a",
"assets/lib/assets/church/addstaffpage.png": "a69fb4a11fddcfa848957e4bb1b40d51",
"assets/lib/assets/church/admin.png": "5f408fb1354f32796c67c55a41207fb6",
"assets/lib/assets/church/detailpage.png": "bfcc8f41a0149c3e53daca6e1b2453e9",
"assets/lib/assets/church/editeventspage.png": "a936ef4348b4c433dee03ce2ef31493f",
"assets/lib/assets/church/editsongs.png": "06b9277bf003576b05563bded5c18180",
"assets/lib/assets/church/event10.jpg": "f3c97f102b3f46d2ca24e74958a4f8f7",
"assets/lib/assets/church/event2.jpg": "f4abd8ce7597cfa550381875b79b7056",
"assets/lib/assets/church/event3.jpg": "e59fde95af96c57cc39fb88b4c3ac87b",
"assets/lib/assets/church/event4.jpg": "b95005fc751e422bbb6bcc90d1540941",
"assets/lib/assets/church/event5.jpg": "aff6125569e7909895f78defcb8b031d",
"assets/lib/assets/church/event6.jpg": "a718e483ac2ff413d25f56d1ae2ec8f3",
"assets/lib/assets/church/event7.jpg": "409c7d828902b2c251fb3a5fc64b76e3",
"assets/lib/assets/church/event8.jpg": "457d1652b7fd4dfcf21fb13c96d1b0d0",
"assets/lib/assets/church/event9.jpg": "dd967bd84a488bce662eabd1cced3d04",
"assets/lib/assets/church/homepage.png": "ffc6d8e32944cb96cee2f3e39dc566ff",
"assets/lib/assets/church/login.png": "314bc6e28e547b9b9c1d27358f6290c3",
"assets/lib/assets/church/loginpage.png": "a8306b9dfe628588c8af8250947020d4",
"assets/lib/assets/church/notespage.png": "99351ffb560dbf699c46437bd9a8ebdb",
"assets/lib/assets/church/pledgepage.png": "b3e05348191117c492d78c416fa33516",
"assets/lib/assets/church/register.png": "cdf6da5a23002a02aa9eec7f2d7044ff",
"assets/lib/assets/church/searchbar.png": "b6e1a7adb04c5e193413bbf1f40b652f",
"assets/lib/assets/church/viewallstaff.png": "0c7708772f91af49b236163da0c3731e",
"assets/lib/assets/church/weblogin.png": "0427c691d44ca373a8729d78c3d8067d",
"assets/lib/assets/clinic/bloodpressure.png": "d275bcb4e384bf80b26d0251fd1f3f29",
"assets/lib/assets/clinic/homepage.png": "81c551e63c78f3118d31c985f54c2ff0",
"assets/lib/assets/clinic/loginpage.png": "22e675089c5ca604de20028903dc79a8",
"assets/lib/assets/clinic/profilepage.png": "17472f078e481f90dfe201937f31bcd5",
"assets/lib/assets/clinic/weblogin.png": "ab90a965dcb2fb1a77e710cfe22e0f70",
"assets/lib/assets/clinic/webservices.png": "13ad43610b0f9de8a3b81f800b65e9b3",
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
"assets/lib/assets/eas/webadminedithotel.png": "6eb1e5f535072e49b87995df8b43767c",
"assets/lib/assets/eas/webbookings.png": "465d1a63cb40d9c9f24ab8906a866a1c",
"assets/lib/assets/eas/webcardetails.png": "b297cba5b37565c86fbd3221326bdbd5",
"assets/lib/assets/eas/webhoteldetails.png": "51c509813e122d79cee164ab49b04980",
"assets/lib/assets/eas/weblogin.png": "b6871e5ae3daaa17b538b1a4c2a326aa",
"assets/lib/assets/eas/webplacestovisit.png": "39039d5a4477f0b76a3bbdf986fec9d9",
"assets/lib/assets/eas/webservices.png": "ec5be8b9c4766f256be73d5e91ca5401",
"assets/lib/assets/eas/webtourdetails.png": "0db373d446bfafad993c85cbce57bfc2",
"assets/lib/assets/favicon.png": "a0c8565d830dd3921c97a1f039efe261",
"assets/lib/assets/furniture/adminpage.png": "a85c4393af8f8059816080bb58c5e39a",
"assets/lib/assets/furniture/cartpage.png": "693de596d425c7e1b484df353175f1c1",
"assets/lib/assets/furniture/detailedpage.png": "93fc34102c2b3f3a15a0518fe575c098",
"assets/lib/assets/furniture/homepage.png": "f1514b8b5f30bccd7cfa77d48953cf5b",
"assets/lib/assets/furniture/login.png": "f9ffdace6853237c4d7d2c591b180c8d",
"assets/lib/assets/furniture/userpage.png": "9bc742a04f790e56469fd086d7dc26db",
"assets/lib/assets/hms/weblogin.png": "dd611f3cad792d5b21f12245b397d943",
"assets/lib/assets/movie/homepage.png": "e9e544181ed99e59e7f425879ce424e9",
"assets/lib/assets/movie/login.png": "1ee1227fe58e8a771df83403c278ca2f",
"assets/lib/assets/movie/profile.png": "5ce7a45ec4527607e252afb299d64853",
"assets/lib/assets/movie/searchpage.png": "36946d3e31e15411a0229845b9aa2d89",
"assets/lib/assets/realestate/adminpage.png": "21fe4ac02bf7340c380d7c8bd842dbc5",
"assets/lib/assets/realestate/detailedpage.png": "ff42866efefe3da6d72b8eab3873cac3",
"assets/lib/assets/realestate/homepage.png": "dacebc2162a7a3b7ea4f47a77cde5817",
"assets/lib/assets/realestate/login.png": "c93995f2c2c1b3ff2cdb788bf78f232c",
"assets/lib/assets/realestate/searchpage.png": "f0a59b1a3693d2d2358a90c5863b0325",
"assets/lib/assets/t/ecomerceapp.jpg": "437e2c21431eeebcfe3f3be7fd285c24",
"assets/lib/assets/t/fooddelivery.jpg": "bb521649da7987cc1ebf9ab3e75b5b4b",
"assets/lib/assets/t/mobileapp.jpg": "5f89030819bd15c65c3882dbac890cf6",
"assets/lib/assets/t/pickapp.jpg": "f46c8e0a08ea8d91c3e5b070365fbfc2",
"assets/lib/assets/t/realestateapp.jpg": "302a93b6beb1f8ee16f79e496a235f1d",
"assets/lib/assets/t/restaurantapp.jpg": "af6880834ba35a8ed6fb7ef4237d0631",
"assets/lib/assets/t/taxiapp.jpg": "d28f793fc6315a8b35f9c0b4597a4599",
"assets/NOTICES": "cfc8010c4cb3e8eb1e096abb2f588527",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "2c28d2a651ae97b959bb2a84fe07f399",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "f77823dd16c4cf507b7e8991e626fd85",
"icons/Icon-512.png": "ca83bdc3c813c5766c0b4ad3d8650649",
"icons/Icon-maskable-192.png": "f77823dd16c4cf507b7e8991e626fd85",
"icons/Icon-maskable-512.png": "ca83bdc3c813c5766c0b4ad3d8650649",
"index.html": "9aa081deb0822cd7ddd71785b5c06a4a",
"/": "9aa081deb0822cd7ddd71785b5c06a4a",
"main.dart.js": "f5ba0ab022165dbf225dcb905a00b9a8",
"manifest.json": "7fba201eac97ab40c089618c6887dd17",
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
