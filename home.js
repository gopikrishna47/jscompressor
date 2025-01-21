var animation = bodymovin.loadAnimation({
  container: document.getElementById("hero"),
  path: "./assets/anim/hero.json",
  renderer: "svg",
  loop: !0,
  autoplay: !0,
  name: "Hero Animation",
});
(animation = bodymovin.loadAnimation({
  container: document.getElementById("hero-mobile"),
  path: "./assets/anim/hero_mob.json",
  renderer: "svg",
  loop: !0,
  autoplay: !0,
  name: "Hero Mobile Animation",
})),
  (animation = bodymovin.loadAnimation({
    container: document.getElementById("digital-design"),
    path: "./assets/anim/digitaldesign.json",
    renderer: "svg",
    loop: !0,
    autoplay: !0,
    name: "Digital Design Animation",
  })),
  (animation = bodymovin.loadAnimation({
    container: document.getElementById("animation"),
    path: "./assets/anim/animation.json",
    renderer: "svg",
    loop: !0,
    autoplay: !0,
    name: "Animation",
  })),
  (animation = bodymovin.loadAnimation({
    container: document.getElementById("branding"),
    path: "./assets/anim/branding.json",
    renderer: "svg",
    loop: !0,
    autoplay: !0,
    name: "Branding Animation",
  })),
  (animation = bodymovin.loadAnimation({
    container: document.getElementById("team"),
    path: "./assets/anim/team.json",
    renderer: "svg",
    loop: !0,
    autoplay: !0,
    name: "Team Animation",
  })),
  (animation = bodymovin.loadAnimation({
    container: document.getElementById("social-media"),
    path: "./assets/anim/socialmedia.json",
    renderer: "svg",
    loop: !0,
    autoplay: !0,
    name: "Team Animation",
  })),
  (animation = bodymovin.loadAnimation({
    container: document.getElementById("cycle"),
    path: "./assets/anim/cycle.json",
    renderer: "svg",
    loop: !0,
    autoplay: !0,
    name: "Cycle Animation",
  })),
  (animation = bodymovin.loadAnimation({
    container: document.getElementById("cycle-mobile"),
    path: "./assets/anim/cycle.json",
    renderer: "svg",
    loop: !0,
    autoplay: !0,
    name: "Cycle mobile Animation",
  })),
  (animation = bodymovin.loadAnimation({
    container: document.getElementById("footerGrass"),
    path: "./assets/anim/footer.json",
    renderer: "svg",
    loop: !0,
    autoplay: !0,
    name: "footer Animation",
  }));
$(document).ready(function () {
  setTimeout(function () {
    $(".banner_image").addClass("activate");
  }, 0),
    setTimeout(function () {
      $(".banner_text_wrap").addClass("activate");
    }, 400),
    setTimeout(function () {
      $(".cloud").addClass("activate");
    }, 600),
    setTimeout(function () {
      $(".mousescroll").addClass("activate");
    }, 800),
    setTimeout(function () {
      $(".about_section").addClass("activate");
    }, 800);
});
