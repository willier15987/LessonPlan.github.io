'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a7ccf146ed62f95c7da3696abbaee7d7",
".git/config": "d685139a3acdb287dd50bb8dd1e5ce77",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "6dea5bd06c3c4c97fb8e4a442869af23",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b8eba555a3f28ded2b37ea57c57c6b50",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "69194ff9658a74bee7fe7453f62e404d",
".git/logs/refs/heads/master": "69194ff9658a74bee7fe7453f62e404d",
".git/logs/refs/remotes/origin/master": "016bae332246d9099d085efc0e09db45",
".git/objects/01/af62f062418ff55008a05f01e331e62ba3cb18": "cc119be8276bf7331e95180c74f166dd",
".git/objects/2b/e516b57187774c5b9754f8334730f1ac227702": "3c9cdc3dd3fb80c2ff8be1ff71c7ae3d",
".git/objects/32/3a25c3110b594661821a6e8e4a21e227f5a65f": "f1d925158626eccb28f9524963a96029",
".git/objects/38/dd95efe87ac9f0d4f43c2310782bcf8c55efe8": "f9cef61dde741cc7bc9d83fdb665ca5f",
".git/objects/3c/1303ed326e27ff4f8b0df26e34faaf39aaeafe": "61e37fdcb41dbcdfec0c0099f67524b8",
".git/objects/3f/483e783e6ad65374871231463af6605cb57ad2": "51d6cb45631f362c9e94d7504d437555",
".git/objects/47/f0b618b03ec63a14a1cdc1069518103478cbda": "643428155a1bd1a98529ff74fa25aaf7",
".git/objects/52/701ed6a0147bb9dda5dd45084dbe28d4ecf579": "840e0713294859ba01a97a47d3504d51",
".git/objects/60/8e7aa0a63104dbe298742e64e5e68713ecfb8a": "7b96cd1ad579e0356452cbdec22f445b",
".git/objects/7e/5200534762667e0db0b09442de70fa6a2dde71": "640fc4aa86ab6c968faca63bb9f9cf41",
".git/objects/8f/11332f29d537c7639b3082dae9bf495d22a978": "a7a6499d6e4d1e129d0d5af70d398604",
".git/objects/8f/d2df2860ec2f754c14fc3508723e5fc4cec928": "002cb814f738bb88c6501ed899178ecb",
".git/objects/92/52cf9abad36fe0eff2dfed50fd2740a68df986": "7069ef3541f6dd704e26f92a1d2c39fa",
".git/objects/97/2ccb8140e1fa3eb8228a96cebdfddcc428e04d": "31db581b6ab45fa555fe48e061962cb4",
".git/objects/97/6d36f42cabab488c9a1a17e3cd10fffa9bb58e": "dbe8886fd68b5d7112ef90bc1301c426",
".git/objects/9e/2601fbc9a6beb192a8301038fe1c7d0f35d062": "f05fd6495e501248e1b1c1c600308902",
".git/objects/9e/c391da8ad5be879dafbe48c5e3a70e86ee3097": "687f84d61593d9aa26ceb2b5e37acb49",
".git/objects/a8/9c043f857fe96cc3eba50645f8c1e94625b3d4": "38fe4f77abd3eba5730446a4501b0c4e",
".git/objects/ae/0a09b66551c0c432a8384cc76813fccffad83a": "4dff7d70c3e671cdc8c5ecad034d726b",
".git/objects/b4/6a687348e253247577eb6a4408770c0c8d41b5": "5f6b331e148c26c41f1af0cce8aa80b6",
".git/objects/b9/a6d1d9eb8f490546c6c986e396b8156dba377a": "8b50946e450e25c475602a013b0e2e00",
".git/objects/c0/590dbbcf00955ba37f4d8da517024db7b91d52": "2080efdda4c63ef7c8827458df587fe5",
".git/objects/c4/1ebb0e9b3d05b65361b3f8e135844ad00183f2": "f407572e74633803705ecb6241896c47",
".git/objects/c5/0753ba0a38ce4bc9bb9b92e01d5e21bda1937c": "4834c9d450c099fa4542b6a2b93dc280",
".git/objects/c8/f0f34dce059f8fe2737b39bd3dfbc221b7ecfc": "029500ffecd136d3a9e482e0e1690a44",
".git/objects/d0/e94c5a7c2463d4ee6e0264da3ba9ee3f22a55a": "d0b230b654ec8814e96f8fa9d5a539a9",
".git/objects/de/30ba75fa0afb9f5528c9939cb6f945c09d8541": "ecdf164b9b14a73930fef97d69edc3dc",
".git/objects/f1/abbfdcf77556bbce7e970e4137e2c6760ea081": "bfe12ce1b5f5db2d0a20e98f1fd084a4",
".git/objects/f3/2cea89fb65ed0dd283ab951cd80224fb79fbf1": "7696db99fb0a5cbf1fa6b7318fb058c6",
".git/objects/pack/pack-3b643260742ca46caf294e7a37b690857898139a.idx": "4787b3eb0f7cc5e2cfe220225e82bfec",
".git/objects/pack/pack-3b643260742ca46caf294e7a37b690857898139a.pack": "15f574ff6446cc5b5aca9003cfe576ba",
".git/objects/pack/pack-3b643260742ca46caf294e7a37b690857898139a.rev": "50dfbc7f3d94e0d18a64acab720c592f",
".git/ORIG_HEAD": "97621852fa434b5a30256066fa2ebe56",
".git/refs/heads/master": "97621852fa434b5a30256066fa2ebe56",
".git/refs/remotes/origin/master": "97621852fa434b5a30256066fa2ebe56",
"assets/AssetManifest.bin": "cd9732eb2dda594e790155cee9bf0867",
"assets/AssetManifest.json": "369ac53c5a8bc297d66cd7dc9ebf6ade",
"assets/assets/images/bar.png": "61a831a768c983331f83499d40cf9d39",
"assets/assets/images/bar_login.png": "fafa71d2c998d9bddc4729820d8ff4a0",
"assets/assets/images/BG-02.png": "3a0917fefd34b81ed31cf09d80f9542c",
"assets/assets/images/BG.png": "6bf62e967ce3083ae11fc056138504fe",
"assets/assets/images/BG02.png": "3a0917fefd34b81ed31cf09d80f9542c",
"assets/assets/images/btnWhite.png": "e7ec26c72050d155d1c072df2ad631c1",
"assets/assets/images/button_Answer.png": "7a4ce3105b2219f5ed315f011f29b0a4",
"assets/assets/images/button_Cancel.png": "5a4b4e762410df82b4ecc18dbc19e4eb",
"assets/assets/images/button_CH.png": "61888c87b24eec4233065106d486e6c0",
"assets/assets/images/button_CH_off.png": "908791d6b913076d00789092aec4f317",
"assets/assets/images/button_comfirm.png": "05b0f5353e7181a6d7ab70a81ce09a45",
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
"assets/assets/images/lessonPlan_edit.png": "7ca7d6ed7bd69e4f2b481313e26d0deb",
"assets/assets/images/lessonPlan_edit_.png": "4e99080e34beda43b0e8cce4be12c49c",
"assets/assets/images/lessonPlan_list.png": "15c64be90aa7449f924e7a34aa648176",
"assets/assets/images/LoginBg.png": "cd70b3050c4e3d68e2433bef668b6151",
"assets/assets/images/LoginBtn.png": "1795ebf45189322636ede1072a4bdc57",
"assets/assets/images/LOGO.png": "1454c7d897ee5c99c9d21d4b438764b4",
"assets/assets/images/options.png": "ceb79cbc2198234a8475c92164994277",
"assets/assets/images/RightBtn.png": "056cfbad801d05f00eeae07786fa5fbb",
"assets/assets/images/text_Establish.png": "2b842686d8c9846a8d240b124ace1d76",
"assets/assets/images/text_list.png": "b5e732ba54da96bc61ae512a7c924363",
"assets/assets/images/text_out.png": "0b283d4e36ca8e6535e55938fccee973",
"assets/assets/images/tip2_remove.png": "b37f3b7c8e468e7cb2966e59aab347dd",
"assets/assets/images/tip2_save.png": "8afd02b04d7fe7137dedc264aff4187e",
"assets/assets/images/tip_formatWrong.png": "392f11ff3fcaed680abe2da78ec6d9be",
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
"index.html": "d071aa9c9abc21545a64c493c2e031ad",
"/": "d071aa9c9abc21545a64c493c2e031ad",
"main.dart.js": "1aa770546068e13234097d9bcaebc440",
"manifest.json": "97c3b7b8749d1a90ec96c17f126754c5",
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
