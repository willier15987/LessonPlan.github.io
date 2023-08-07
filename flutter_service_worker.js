'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6728c5662ff990611a032aaddc96e8ae",
"assets/AssetManifest.json": "4e84a2f4d090a3c8ff26042af2b81442",
"assets/assets/images/bar.png": "61a831a768c983331f83499d40cf9d39",
"assets/assets/images/bar_login.png": "fafa71d2c998d9bddc4729820d8ff4a0",
"assets/assets/images/BG-02.png": "60776b75f80328cac0860f86556a28f6",
"assets/assets/images/BG.png": "6bf62e967ce3083ae11fc056138504fe",
"assets/assets/images/BG02.png": "446ae0b89b917b7d0afdba36ebfc35a1",
"assets/assets/images/button_Answer.png": "7a4ce3105b2219f5ed315f011f29b0a4",
"assets/assets/images/button_Cancel.png": "5a4b4e762410df82b4ecc18dbc19e4eb",
"assets/assets/images/button_CH.png": "61888c87b24eec4233065106d486e6c0",
"assets/assets/images/button_CH_off.png": "908791d6b913076d00789092aec4f317",
"assets/assets/images/button_edit.png": "d4427c949568b13f07899cc0b79ec859",
"assets/assets/images/button_EN.png": "34b25472f357d4f2908adf9fee108fcf",
"assets/assets/images/button_EN_1.png": "bb6fae67cdce5d4135eb39cdc34da488",
"assets/assets/images/button_JP.png": "c33bf8f4c408e7f0eda4506fb0fd3c9e",
"assets/assets/images/button_JP_1.png": "804d68f3c4ade297c1ad7ea56f455e6a",
"assets/assets/images/button_login.png": "0b0af1d279176cf8cbd4b3b6370764ee",
"assets/assets/images/button_mistake.png": "2973eb5d57fb004b7efd6c1903517b15",
"assets/assets/images/button_out.png": "a491e72d447ae421baa7a4c41f4bd841",
"assets/assets/images/button_page.png": "9c2a334b34928d0123ea968812fa02b8",
"assets/assets/images/button_remove.png": "2952e931992af914d5ab279cda55f3ce",
"assets/assets/images/button_save.png": "872d91a2917dbc63f89e6e52eceb7301",
"assets/assets/images/button_save2.png": "9e0e1a7ae0b601d9251c875494086aa2",
"assets/assets/images/importing_AnswerB.png": "72e09953cf5c6bfd19b303c12c996f05",
"assets/assets/images/importing_AnswerC.png": "1938fd7ce23e0453588a04d262c67ef1",
"assets/assets/images/importing_derivative.png": "a50b7402f6e4a8102e9debea5d3db4d2",
"assets/assets/images/importing_derivative_1.png": "ba3f7d33d9377ce48fa4ee80125581c1",
"assets/assets/images/importing_text.png": "ee3c0a3c8862955bc96f55482296b1a0",
"assets/assets/images/importing_topic.png": "165c84414b972c35a02348754f94b50b",
"assets/assets/images/LeftBtn.png": "bd6e7b358de908b78f4275a15fd63b37",
"assets/assets/images/lessonPlan_edit.png": "f9134e11b19efd74c06c8eeeac13f765",
"assets/assets/images/lessonPlan_list.png": "1c2090c46d9ec3da3242d2f2add5f33b",
"assets/assets/images/LoginBg.png": "cd70b3050c4e3d68e2433bef668b6151",
"assets/assets/images/LoginBtn.png": "1795ebf45189322636ede1072a4bdc57",
"assets/assets/images/LOGO.png": "967eba249aa7c4c4c19d35d334ec1e7f",
"assets/assets/images/options.png": "ceb79cbc2198234a8475c92164994277",
"assets/assets/images/RightBtn.png": "056cfbad801d05f00eeae07786fa5fbb",
"assets/assets/images/text_Establish.png": "2b842686d8c9846a8d240b124ace1d76",
"assets/assets/images/text_list.png": "b5e732ba54da96bc61ae512a7c924363",
"assets/assets/images/text_out.png": "0b283d4e36ca8e6535e55938fccee973",
"assets/assets/images/tip2_remove.png": "b37f3b7c8e468e7cb2966e59aab347dd",
"assets/assets/images/tip2_save.png": "8afd02b04d7fe7137dedc264aff4187e",
"assets/assets/images/tip_out.png": "48988021827225a49bce27b9de460c0a",
"assets/assets/images/tip_remove.png": "04702c01688dd0968e9164a03c3ecd16",
"assets/assets/images/tip_save.png": "38cff8b11ae6c25a5053b06300303aab",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/NOTICES": "1f8c8b75a48922ca0556f97ae54b1986",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4b6c145991e0f2f7edf5283ed03936ef",
"/": "4b6c145991e0f2f7edf5283ed03936ef",
"main.dart.js": "7314611dbf53a173b5c24513c2c72621",
"manifest.json": "9dc104afd10def7f88c62df1820c42c8",
"version.json": "8baa1e1e5b5861c97d594c2337c4c497"};
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
