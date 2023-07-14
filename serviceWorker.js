const staticAnimeshData = "site-cache-v1";
const assets = [
  //   "/",
  "index.html",
  "assets/css/styles.css",
  "assets/css/swiper-bundle.min.css",
  "assets/css/animate.min.css",
  "assets/js/main.js",
  "assets/js/swiper-bundle.min.js",
  "assets/js/svg-inject.min.js",
  "assets/js/smtp.js",
  "assets/pdf/emmanpbarrameda_resume.pdf",
  "assets/img/about-me.png",
  "assets/img/about-me2.png",
  "assets/img/blob.svg",
  "assets/img/code-svg.svg",
  "assets/img/emmanpbarrameda-logo-1x1-white_transparent_svg.svg",
  "assets/img/emmanpbarrameda-logo-1x1-white_transparent.png",
  "assets/img/emmanpbarrameda-logo-white_transparent.png",
  "assets/img/profile.png",
  "assets/img/skills/android.svg",
  "assets/img/skills/c.svg",
  "assets/img/skills/c++.svg",
  "assets/img/skills/css.svg",
  "assets/img/skills/git.svg",
  "assets/img/skills/github.svg",
  "assets/img/skills/html.svg",
  "assets/img/skills/java.svg",
  "assets/img/skills/javascript.svg",
  "assets/img/skills/mysql.svg",
  "assets/img/skills/photoshop.svg",
  "assets/img/skills/vb.net.svg",
];


self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticAnimeshData).then((cache) => {
      return cache.addAll(assets).catch((error) => {
        console.error("Failed to cache assets:", error);
        const failedAssets = assets.filter((asset) =>
          error.message.includes(asset)
        );
        console.log("Failed to cache these assets:", failedAssets);
      });
    })
  );
});


self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
