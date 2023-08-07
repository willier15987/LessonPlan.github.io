'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "eb260e9ae827821beceeed4104f0ad89",
".git/config": "5dbdfcba62f8c12642999a799ea2670c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
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
".git/index": "aa62095fb33347455a9108d5002ce2e3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8a86c62e4f04349580d5635225173de4",
".git/logs/refs/heads/master": "8a86c62e4f04349580d5635225173de4",
".git/logs/refs/remotes/origin/master": "7fc5df71c81116d98cad4f26780c5709",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/17/41f6993f3af44ea0e69275be47c12550ebc03c": "78678bdfd99aa22ec738fa11e8c3eb1b",
".git/objects/1a/f2fca2f4865e38733f58e61c97cd970725b8e6": "65be7c9c81f8caf08527a5962d6abca6",
".git/objects/1b/0252a567fd91ac2a8534ed6051469622f0aca4": "66694804040c053f56025b3501a45712",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1d/c0512fb9f2c4cc46dc707e415b5fd1137b3ec3": "866a5b48b86699e0dfeeb770d0444fd1",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/29/2fb9063e1d10711c4eeb310582314463ba68bb": "1f2cccc3e8e87a66d28ad2476b0fc6ba",
".git/objects/29/b8973dbde925f82078743ebbf636cb9aa94264": "d3298510f0ad6d88723e7b04afaabfb4",
".git/objects/2e/5e2011e4e00f42856b555d7ed14e3432c5388b": "960642ac223068f7b96e4d76e9912b6f",
".git/objects/2e/7c1138f740f4ea06ff459a6579cf26a093720b": "95f25f3b77eaf2cf9c1c334e3715da02",
".git/objects/2f/7fe19cc3a388be23d42f58a5fbcfd2f71694db": "4a305a232d9572a9482d64cf21a0201f",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3b/869ca4df5e0b8e5db46cd917db5342b163898a": "8fc360315a1e26118bde860dad6062ec",
".git/objects/3c/ff07e35d922e87d8e3daffcf7a4a026513c294": "4ee74bd31efaf17ba6f21feb9dfe8f41",
".git/objects/3e/4f3fc6ad6a236d0952af5f2b75a9b2dc086bca": "04de0c31449b3fe9a1249cceb7accd99",
".git/objects/3f/a7c5940998e1ee5e78789cc53876fc17694519": "12f6bc83c1b1ea1e577a74a6bc5a7453",
".git/objects/42/eecceba5c6052b8e34801e8f71f0e156c51e67": "32f8fa7755ae17257d057fd3e7639567",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/43b68c5ef749383e6ac432c44e1f8dc6d82b3a": "0a0b7faf976c7b76a38102e96402b882",
".git/objects/49/80e41116a9e9c245e186b574fb0eb361030acd": "bd1870d4a26bb8d09ab182f5bc8c3fd9",
".git/objects/49/c695b01bb44286b90351feec19ba1d36a0b520": "d61b6b9301f29b10ce2e4e23c0b902bc",
".git/objects/4c/97a51779d2d703d822f812a9b9375c46715322": "aeb8331b1d12db249f40887bebea57d5",
".git/objects/4e/1f3e524b12b9a355d3f19b7af031f86199eee4": "7e6d7cd2f4ed9c373153bcc6644a71a0",
".git/objects/50/ed2abbe5d1bc49808f7de50584219e79c46e0f": "cf7d588f9177360511ba71ec08056cc5",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/55/7f061300ff1ad7f9a0830b246d3dd20752a7d3": "f00b41daf3fe79d2c79716764c180542",
".git/objects/5c/009279a931fcbda30eb3f1501ebf8ef324a619": "9194b9de5841dfb056b47781b14373e6",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/67/2ff8c2bfc1e392b9e82f849cf81319255194d6": "93beb51c616db123c3d7863eaa57bd0d",
".git/objects/6b/733e2e58735ed29cbcdcd8a83e3d70746d0f3b": "1c985cecb5648ea3e332c89a1bb03266",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/75/35a85a61ae925b4427f9e0e84bd3080d73ddc5": "7d346fbf787520f61db46a8199ac9aa0",
".git/objects/78/5c88f9a0274f2efe072784a1fa2d38e34200b1": "83ccbd809def21f1299b93c0f1257829",
".git/objects/79/2ed3727b9637ea46a397834b6e6acf7bf6349d": "909cb82eb07a72c4d37ce4d8dd5b7cf7",
".git/objects/7d/f5480d5fe2f53af7f4b67660bd5f2e6201fa48": "fa88108b2254110df0697a8d3e93e45c",
".git/objects/80/65b060953109dd11c7a494040767229eca5dbd": "04d7a9f5af7fb0887141b2ed8f918b99",
".git/objects/82/55cef31f33643f94b7d330df91ea84d372e994": "be8d89fb5bcc17fcfae55ba376642694",
".git/objects/84/8c092cf5c092e3c900e77eef6e08a0aa3a059f": "12329a419c89d34c3505a9b244a23762",
".git/objects/86/e5481a50f1caf87da97bcaf97ef02280194a85": "61fa3708e16b01c517c4fc85635f1738",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/155896ea0401fcf1258c76579ff9414313ebe5": "d633b9530d776da19164eaf34cddbac7",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8f/87da0d409fef4be0e07ca809903efb49f49dc3": "c0c11cf95e59a6f64b347eae8329db24",
".git/objects/94/e6398eb1a66e4c26c187b8b6885419c841235a": "f0da101d6b141d69dbd9e004aa6a3dbc",
".git/objects/9c/c645b5b3ac3b12cfefb5e7e166ae11d7ea7bb6": "7b2c3cc1d3d0366286da415d0c63b190",
".git/objects/9e/0085f8d8b5a89335091b03578c5e4f3e1e1a9a": "a911a19e04bcc8b8daf8f0b2202d4384",
".git/objects/9f/d8fdfa56fa1762fcf0323599e5c7b20dcae212": "95ee05256c212ce7cc7e6cd9c57277ae",
".git/objects/ad/b99f6cef7245c469a736c8d31dda067c7a3265": "83f7cb763f3043f5dd024bf76db7f667",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b0/96f2a27e574697a8ae42564147a22e3d3beaca": "f98aa18ea0d35fac5b4038398ee31ac3",
".git/objects/b0/ed49f31c6f7044439745429faa4403537b175c": "a10aefcc86ef59ed09990d60e962f436",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b3/80b7cbd6845c85be72dce1a5e2329ee8253d23": "f866420f46b5f89e73e6513fc7bfa4ee",
".git/objects/b5/7696f534f924242058a0f700eb2945a9219dcd": "a874e687895ffb45eb2b40f6f589e7b9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/d1d535f443d14b663724f6394b0b3123b7130f": "5ff29a404949e3eedea0b602196fee8b",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/953453b438c4217a5396a8f4dde60e53da8642": "09d24e2ddd7f4d85b5889aaaa2413b99",
".git/objects/cb/02ad2b5c52accb1cd5bb6bd18b6c6b7a65e6d8": "6b4a31ccd93d8e3b693da35000cc22cf",
".git/objects/cc/66faff552b09a8faaf8b22cf6f38a88c781394": "41cd013f9338552204c3d78672f158ad",
".git/objects/cc/a35cdd72e9ab091e80b5160a6046d46016654e": "188eb6987a1a4ee34c86979f50f40769",
".git/objects/cd/38f461e307a619109b90eb0cc528085be892a7": "3384fba100fb28429c919ca4b02adc20",
".git/objects/cd/a6a8159b20843af55d8b2dda1c51793e12bf1f": "f13082fe205591fec44c2e122293404b",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/7f5ee192f7d5c39023ccf433b377f93687c17d": "bc0a9b4cb4b4cea64961e876d73d6023",
".git/objects/dc/7dcdd34a4f7f98856c8714e9c0b738fd7944bd": "80ef83005196ad2c4c5f409fa340177e",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/032f99b3316550ad42425e3e7f5cfd488f60eb": "1aa6bc4db6849b23d1ec2f677f55ccb7",
".git/objects/f5/0df3249b54b1aa28b54798b1088f34a3b74446": "17082121943b0d7cf439039562e06b5a",
".git/objects/f9/9128c82354b08bb3eb6fd8f83d02b29589423c": "91c150ce2354940db3f835782a3f9597",
".git/objects/fb/558ff2d457fe4dbc8764c20afdab0a916ae525": "6094d215193d1344ead81e936f91269f",
".git/objects/fb/bed610ea1b5218eb238ba5dc8864bb5019532e": "c74a3f9b1746e08ddd9c0f8c75a5b71a",
".git/refs/heads/master": "26d218ca34d5ac00b2364382fadd92d8",
".git/refs/remotes/origin/master": "26d218ca34d5ac00b2364382fadd92d8",
"assets/AssetManifest.bin": "f66c38614b47fda8d90e8b13ae5a4739",
"assets/AssetManifest.json": "9d2ef0ae551bd4f3c1de5c12ff1cdd0d",
"assets/assets/images/bar.png": "61a831a768c983331f83499d40cf9d39",
"assets/assets/images/bar_login.png": "fafa71d2c998d9bddc4729820d8ff4a0",
"assets/assets/images/BG-02.png": "a1242e2ff49f884d07b4fc23361b352f",
"assets/assets/images/BG.png": "6bf62e967ce3083ae11fc056138504fe",
"assets/assets/images/BG02.png": "446ae0b89b917b7d0afdba36ebfc35a1",
"assets/assets/images/btnWhite.png": "e7ec26c72050d155d1c072df2ad631c1",
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
"assets/assets/images/lessonPlan_edit.png": "7ca7d6ed7bd69e4f2b481313e26d0deb",
"assets/assets/images/lessonPlan_list.png": "15c64be90aa7449f924e7a34aa648176",
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
"index.html": "894e0d5cd0cbd029b5a9d49718ae6634",
"/": "894e0d5cd0cbd029b5a9d49718ae6634",
"main.dart.js": "f156d2a7984fc2723bd1a2a2a788bffa",
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
