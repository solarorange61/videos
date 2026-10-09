window.MEDIA_BASE = "https://github.com/solarorange61/SO/releases/download/videos/";

window.CLIPS = {
  feel: ["feel1.mp4", "feel2.mp4", "feel3.mp4"],
  edge: ["edge1.mp4"],
  wash: ["wash-gong2.mp4", "wash-gong3.mp4", "wash1.mp4", "wash2.mp4", "wash3.mp4", "wash4a.mp4", "wash4b.mp4"]
};

function mountClips(key) {
  var box = document.getElementById("clips");
  var list = (window.CLIPS && window.CLIPS[key]) || [];
  if (!box) return;
  var base = window.MEDIA_BASE || "";
  list.forEach(function (name) {
    var wrap = document.createElement("div");
    wrap.className = "clip";
    var video = document.createElement("video");
    video.controls = true;
    video.playsInline = true;
    video.setAttribute("playsinline", "");
    video.preload = "metadata";
    video.src = base + encodeURIComponent(name);
    wrap.appendChild(video);
    box.appendChild(wrap);
  });
}
