// scrolling smooth button
const scrollSmoothlyToBottom = (to) => {
  $("html, body").animate({ scrollTop: $(`#${to}`).offset().top }, 1000);
};

// sorlling sector_2
let coppy = document.querySelector(".logos_slide").cloneNode(true);
document.querySelector(".scroll_partner").appendChild(coppy);

//sorlling sector_4
$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});

let owl = $(".owl-carousel");
console.log(owl);
owl.owlCarousel({
  items: 4,
  center: true,
  loop: true,
  margin: 12,
  autoplay: true,
  autoplayTimeout: 3500,
  autoplaySpeed: 1000,
  autoplayHoverPause: true,
  dots: true,
  dotsSpeed: 1000,
  responsive: {
    0: {
      items: 1,
      center: false,
    },
    768: {
      items: 3,
    },
    900: {
      items: 4,
    }
  },
});

$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [1000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});

