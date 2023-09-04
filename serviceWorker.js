const staticMovies = "new-releases";
const assets = [
    "/",
    "/index.html",
    "/style.css",
    "/app.js",
    "/dark.jpg",
    "/fast.jpg",
    "/gadar2.jpg",
];

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticMovies).then(cache => {
            return cache.addAll(assets)
                .then(() => {
                    console.log("Assets cached successfully");
                })
                .catch(error => {
                    console.error("Error caching assets:", error);
                });
        })
    );
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request);
        })
    );
});

// self.addEventListener('fetch', (event) => {});