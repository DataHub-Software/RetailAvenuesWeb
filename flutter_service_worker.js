'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "4c9e4bb2c66ee2c3e1d06b04679f040c",
"version.json": "863e22790dc1b78a89034df749f92f95",
"index.html": "0a7d767df6b5a58d77ecfbe0c3976a1c",
"/": "0a7d767df6b5a58d77ecfbe0c3976a1c",
"main.dart.js": "2eccb45a479f6bd33b0cf36af6181ea2",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "cca17eb5cc27ae93eeafda1d86662264",
"assets/AssetManifest.json": "34ea54f6e64f98552ccbf1e184c4fc1d",
"assets/NOTICES": "c5b1cd299e0a14502261ba7f21bd43e8",
"assets/FontManifest.json": "7df10702a8c60a62e6694f43081d46e7",
"assets/AssetManifest.bin.json": "d31830b6f54b9edde49e09197331273e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "6ebc7bc5b74956596611c6774d8beb5b",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/google_places_flutter/images/location.json": "afa33acf2c340246c901718f4efdfccf",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "e570e94727ab5bb1ae04bc6db033ed20",
"assets/fonts/MaterialIcons-Regular.otf": "1faa0a5a08fcb73285c6c3f873e72e48",
"assets/assets/images/cred_logo.png": "004e09dee4b696ccad40dfb218a1c827",
"assets/assets/images/ad.jpg": "56d5153bb38edc6f6faedf0613f9f13f",
"assets/assets/images/profile_page_background.png": "380b0ace0ec17056b0c8c2c0da2ce728",
"assets/assets/images/visa_logo.png": "b33ac72d66a07623c1a4ce655c276ab6",
"assets/assets/images/mon.png": "8647fcdad4f3684d76ae4e2fc498d227",
"assets/assets/images/destination.png": "734302b36da274ea258aa4363963a5d8",
"assets/assets/images/location_loader.gif": "f2cdc46012080e00b3071d401a136e0a",
"assets/assets/images/paytm_logo.png": "bcc83eaf9dd7e60913156ee67682193a",
"assets/assets/images/t_bg.png": "80b6ee556313cf6b6eee27e9af05f332",
"assets/assets/images/app_logo_splash.png": "c84f5db4ece0577b9d891b9c276d7c21",
"assets/assets/images/phonepe_logo.png": "5adbd980bb7ca84ec37928ea5b5cac78",
"assets/assets/images/airtel_logo.png": "de78aa0f87b75fb75d1cb09674453251",
"assets/assets/images/no_internet.svg": "ff7226b11944d6810e34eb167160585f",
"assets/assets/images/no_data.svg": "4d334a765ba34a6a553fd213ab4dfc62",
"assets/assets/images/location_loader.svg": "ad35809c021877fa9814f95db04f5b5a",
"assets/assets/images/location_enable.svg": "bfe72fe680dfa64dfc4a946c08682573",
"assets/assets/images/rider.png": "d3fa2a2e6f7f0549fdb1f1b782798242",
"assets/assets/images/ew.png": "fec0308671325640318af073dbd97e0a",
"assets/assets/images/app_logo.png": "7e206b47abee4ce3dd5d3cab885416d8",
"assets/assets/images/app_logo.svg": "a9fb729d226e1c917dbe732bcf56d575",
"assets/assets/images/coupon_background_4.png": "773a2a460e0bdbddf2515182552510da",
"assets/assets/images/google_pay_logo.png": "45e50957e722b5b48d5df39a8118a7dd",
"assets/assets/images/imobile_logo.png": "e8d30ce9cdd960e131033fc72b6f7d85",
"assets/assets/images/coupon_background_2.png": "c4866a447bc2c99a0b1f137470c9f9b9",
"assets/assets/images/coupon_background_3.png": "6eed001634be342b24ec7824d213eb90",
"assets/assets/images/earn.svg": "ec591ca8cc3839cd703180b3ae65986a",
"assets/assets/images/coupon_background_1.png": "5fc02c56cb10e7c2c6e80e2a8b386843",
"assets/assets/images/start.png": "413d00184ebbeb87db13953a4b75f5c0",
"assets/assets/images/loader_bg.png": "c9fb4ea671f0c80f938ba5712843d924",
"assets/assets/images/bg.png": "ef358388750ecaefaddf9a810b3acef7",
"assets/assets/dawath/shopping.png": "20b027e59ec71054f6222118461073d3",
"assets/assets/dawath/shopping-2.png": "64ec770e33bb8bba408085a81da9010b",
"assets/assets/dawath/shopping-3.png": "6077492334e751c0e234ecc3e2ba280c",
"assets/assets/monsoon/4.png": "7972dfd8c80119f0f5023a0f5843b287",
"assets/assets/monsoon/5.png": "954c5c8526f892350e8aa3d7a783fa99",
"assets/assets/monsoon/2.png": "4b1668d172c7453998b36c0e9abd38e6",
"assets/assets/monsoon/3.png": "2b3712cbf43d5fbc7b655472d6e56b7a",
"assets/assets/monsoon/1.png": "addbc3aaa94ce53ccae3f13d4743ebf9",
"assets/assets/icons/profile_setting.svg": "19f724a3aab0eb0f6d4d3cd994105d83",
"assets/assets/icons/search.svg": "8239fc584078250e37f3d54aa69ce991",
"assets/assets/icons/side_bar_icon.svg": "2347c44a0b6dfb7ac7afdd653fcbc2c2",
"assets/assets/icons/place_holder.png": "3561661158e68ec1772bd1ecdb5708fb",
"assets/assets/icons/reply.svg": "381400cc81036bd96e7b8192afa7a1a3",
"assets/assets/icons/apple_icon_rounded.svg": "d25e756da8591c12328228e4fe6afbc0",
"assets/assets/icons/pointer.svg": "83bad8b67e721da2246a7027f0e9c3fd",
"assets/assets/icons/truck_icon.svg": "8267f35cdf49c852bc70d6d4ff8bd88a",
"assets/assets/icons/home.svg": "6783cbc0e2c1f452d3775caf57702a0c",
"assets/assets/icons/order_processing.svg": "3e6cde65bd15c5b32ddcd1d83efcdc85",
"assets/assets/icons/shopping_bag.svg": "0b81a5f5ddaaeb113756dc816d1f1f2a",
"assets/assets/icons/daily_deal.png": "6f9072dba77b9022e45556b2bca122f0",
"assets/assets/icons/malayalam.svg": "ad1cb54f814e1964f4a22e558b4b0bab",
"assets/assets/icons/best_seller.png": "87acefec2524c7fa2847e2f2871fa06b",
"assets/assets/icons/add_rounded.svg": "b4ab8c15c908b6ec9c02eff9e28ec718",
"assets/assets/icons/dashboard_icon.svg": "2347c44a0b6dfb7ac7afdd653fcbc2c2",
"assets/assets/icons/bike-icon.svg": "2ba42fe2011327ec9c158e6f59d8e133",
"assets/assets/icons/all.svg": "0d35809c5db3e4cee57b5c3ceee377ea",
"assets/assets/icons/contact_phone.svg": "2202807fa3bfca29adf426df0860972f",
"assets/assets/icons/cart.svg": "91bed9f6c2dc78ddd46772ac1fc28969",
"assets/assets/icons/heart_outlined.svg": "89a97327519120ba1290ecd6b0cc9238",
"assets/assets/icons/google_icon.svg": "7f7e7e56dea74284dfaf09f4b8b9c1d0",
"assets/assets/icons/beauty.svg": "0ee6f9ba8032702c707e8340e62c2af1",
"assets/assets/icons/punjabi.svg": "43129f0368a2428e14cc8ef57bc99831",
"assets/assets/icons/hindhi.svg": "7c291bad0826750e11b3edd4ac7eccab",
"assets/assets/icons/kannada.svg": "df78fd5065efb0f71c7c5cdafbbfc8ee",
"assets/assets/icons/shopping_cart.svg": "8336d0aca400d00a8c6b856f5c8270a6",
"assets/assets/icons/add.svg": "1edb44f81c2a4413fe6b78a84387ea9c",
"assets/assets/icons/mic.gif": "ffb3d08f8b4bcf19e55f3a90b7feaf2a",
"assets/assets/icons/google_icon_rounded.svg": "75d2238640a7bb0e93a01423f80f00de",
"assets/assets/icons/delete_outline.svg": "e3234ac86ad50d6f2fae00ca49a7083b",
"assets/assets/icons/english.svg": "ee6174ab0f448c15821713a0cad7cac6",
"assets/assets/icons/save.svg": "a5f1cc99967e12a578cd2d54177e4a66",
"assets/assets/icons/right.svg": "5b6a64076dee494174f067426a5fb0b9",
"assets/assets/icons/twitter_icon.svg": "3aad2d36092b1e83ee806116165380ae",
"assets/assets/icons/profile_payment.svg": "96660eec017866dfd4049964127f1b24",
"assets/assets/icons/heart_active.svg": "c2581d74204cd837d382f1c8a25b18c8",
"assets/assets/icons/paypal.svg": "12e2386003aeae0b375b278109f6ee00",
"assets/assets/icons/new_product.png": "c1c41a02d974ed13b39a394e3b1600ad",
"assets/assets/icons/profile_notification.svg": "cc48c2469ec7b18bd19c3d27ebed67d5",
"assets/assets/icons/card_add.svg": "a189da8d395b0ceb8123d4fa7d605cdd",
"assets/assets/icons/contact_map.svg": "146dd7cb01135b4750570084f8d59b55",
"assets/assets/icons/edit.svg": "67aff3a40ab3bbab129579a725f0e876",
"assets/assets/icons/bangala.svg": "98ca64ae1ce35999201d3c5437ab54fa",
"assets/assets/icons/language.png": "1466ac7427d9cbec5061983630eeb443",
"assets/assets/icons/search_tile_arrow.svg": "238c3df920e3453a69e161fdd8532c0e",
"assets/assets/icons/cash_on_delivery.svg": "2306a3e54caa2343e58a0f9813d472c3",
"assets/assets/icons/language.svg": "be0ae31b1382312acb268cd4240fb8f6",
"assets/assets/icons/master_card.svg": "a3c030a9a89d76036afbf64b8817eae8",
"assets/assets/icons/telugu.svg": "3c3ae6d132e43b11aad93db7b071caf8",
"assets/assets/icons/voucher.svg": "8ba55ac77105afce92f4ec17b16f788c",
"assets/assets/icons/delete.svg": "69ca6355ec527812a326d63b313261c7",
"assets/assets/icons/facebook_icon.svg": "685028c79a53bc2d72f2db537d441a23",
"assets/assets/icons/order_shipped.svg": "48c4ef65458f65ed78c2ed248c180148",
"assets/assets/icons/eye.svg": "014abe87a34555cdddf721687da0ce57",
"assets/assets/icons/add_quantity.svg": "df0ddb475aea58d62e9358a287eb1254",
"assets/assets/icons/location.svg": "452e062df1929d052689b05a7668ca64",
"assets/assets/icons/rakhi.svg": "cd9cbcb0fdc54266a6cb781e11247bc4",
"assets/assets/icons/profile.svg": "cb6994ca09f25e96b7a1dfbb6b9d628c",
"assets/assets/icons/home_profile.svg": "eab2cd1d42aa6de1f3dca8f20fa19140",
"assets/assets/icons/profile_person.svg": "62839c738f1401122527ac920a193860",
"assets/assets/icons/filter.svg": "f39d8f5d350d7862255758a4fbe5f0f1",
"assets/assets/icons/apple_icon.svg": "e8dee3317068b27ba26540f9f0862853",
"assets/assets/icons/arrow_forward.svg": "47b29a0f26ddffd2c2468ffc7a5e45d5",
"assets/assets/icons/bhojpuri.svg": "f2fe3bd415e34daa48f68f603d63a589",
"assets/assets/icons/order_delivered.svg": "76a2229ef91b8a027e0c3a5b8c46faa1",
"assets/assets/icons/electronics.svg": "9342d0cbaf085108785ab4e5312e0f3b",
"assets/assets/icons/menu.svg": "6d09260c38f6d968485056bb29dd930a",
"assets/assets/icons/remove_quantity.svg": "5d28b3624f667d089110251d370f5eb2",
"assets/assets/icons/profile_logout.svg": "ae6c72a30b6656e6e517d9cd41cad518",
"assets/assets/icons/contact_email.svg": "15f74574d6a6acb86114f9fe3b25346e",
"assets/assets/icons/odia.svg": "e47d241890646c4f6bad5f4502a847e0",
"assets/assets/icons/order_confirm.svg": "2258324a3e5efd505dc093b7201c6350",
"assets/assets/icons/arrow_backward.svg": "e8846bba9774f34d074bc2c771e8cd0d",
"assets/assets/icons/heart.svg": "811f00ba884cb50f989e6e27d8ad51c9",
"assets/assets/lottie/failed.json": "d91698e4a95ff99a6d02a96bb1fe02f1",
"assets/assets/lottie/wheel.json": "5041b0fb17b62479868cee1275e23711",
"assets/assets/lottie/blast.json": "c01e3da7c1515e7daf4567c0ba341395",
"assets/assets/fonts/Gilroy-Medium.ttf": "c83281ae1ca703d0741a770ee7e7c091",
"assets/assets/fonts/Gilroy-Regular.ttf": "31ff7c1a62a300dbbf9656b4ba14a0d5",
"assets/assets/fonts/Gilroy-Light.ttf": "4b236c6cb4c59d66b80dde6f9c614ebd",
"assets/assets/fonts/Gilroy-Bold.ttf": "b381c2abd2972024a6a7e3d882208d9b",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
