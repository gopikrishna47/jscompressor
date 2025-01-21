$("body").addClass("loading");
var animation = bodymovin.loadAnimation({
  container: document.getElementById("loaderAnim"),
  path: "./assets/anim/loader.json",
  renderer: "svg",
  loop: !0,
  autoplay: !0,
  name: "Animation",
});
$("body").on("click touchstart", function () {
  $(".video").get(0).play();
}),
  $(window).on("load", function () {
    $("body").removeClass("loading"), $(".pageloader").fadeOut();
    var e = $(".fadeOutContact").offset(),
      t = $(window);
    t.scroll(function () {
      t.scrollTop() >= e.top
        ? $("#contactBtn").addClass("fadeOut")
        : $("#contactBtn").removeClass("fadeOut");
    });
  }),
  butter.init({ cancelOnTouch: !0 });
var scroll =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    function (e) {
      window.setTimeout(e, 1e3 / 60);
    },
  lastPosition = -1,
  lastSection = !1,
  replaceItemTop = -1,
  replaceItemBottom = -1,
  replaceItemHeight = -1;
function loop() {
  window.pageYOffset;
  var e = document.querySelectorAll(".section"),
    t = document.querySelectorAll(".js-replace"),
    o = document.querySelectorAll(".js-replace__item");
  o.length > 0 &&
    ((replaceItemTop = parseInt(t[0].getBoundingClientRect().top)),
    (replaceItemHeight = o[0].offsetHeight),
    (replaceItemBottom = replaceItemTop + replaceItemHeight));
  var n = -1,
    a = -1,
    c = -1;
  if (lastPosition == window.pageYOffset) return scroll(loop), !1;
  (lastPosition = window.pageYOffset - 100),
    Array.prototype.forEach.call(e, function (e, o) {
      (n = parseInt(e.getBoundingClientRect().top)),
        (a = parseInt(e.getBoundingClientRect().bottom)),
        n <= replaceItemBottom &&
          a > replaceItemTop &&
          ((c = e.classList.contains("section--bg"))
            ? t[0].classList.remove("js-replace--reverse")
            : t[0].classList.add("js-replace--reverse")),
        replaceItemTop < n &&
          n <= replaceItemBottom &&
          c != lastSection &&
          document.documentElement.style.setProperty(
            "--replace-offset",
            (100 / replaceItemHeight) * parseInt(n - replaceItemTop) + "%"
          ),
        replaceItemTop >= n &&
          (document.documentElement.style.setProperty("--replace-offset", "0%"),
          (lastSection = c));
    }),
    scroll(loop);
}
loop(),
  (window.onresize = function (e) {
    loop();
  }),
  $(document).ready(function () {
    setTimeout(function () {
      $(".first").addClass("activate");
    }, 400),
      setTimeout(function () {
        $(".contact-btn").addClass("activate");
      }, 800);
  });
const app = (() => {
  let e, t, o;
  const n = () => {
      t.addEventListener("click", () => a(e, "nav-active"));
    },
    a = (e, t) => {
      e.classList.contains(t) ? e.classList.remove(t) : e.classList.add(t);
    };
  (e = document.querySelector("body")),
    (t = document.querySelector(".menu-icon")),
    (o = document.querySelectorAll(".nav__list-item")),
    n();
})();
