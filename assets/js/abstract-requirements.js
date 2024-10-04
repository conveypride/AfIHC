// const multipleItemCarousel = document.querySelector("#testimonialCarousel");

// if (window.matchMedia("(min-width:576px)").matches) {
//   const carousel = new bootstrap.Carousel(multipleItemCarousel, {
//     interval: false
//   });

//   var carouselWidth = $(".carousel-inner")[0].scrollWidth;
//   var cardWidth = $(".carousel-item").width();

//   var scrollPosition = 0;

//   $(".nexti").on("click", function () {
//     if (scrollPosition < carouselWidth - cardWidth * 3) {
//       console.log("next");
//       scrollPosition = scrollPosition + cardWidth;
//       $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 800);
//     }
//   });
//   $(".previ").on("click", function () {
//     if (scrollPosition > 0) {
//       scrollPosition = scrollPosition - cardWidth;
//       $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 800);
//     }
//   });
// } else {
//   $(multipleItemCarousel).addClass("slide");
// }


// // hotel accomodation
// $(".custom-carousel").owlCarousel({
//   autoWidth: true,
//   loop: true
// });
// $(document).ready(function () {
//   $(".custom-carousel .item").click(function () {
//     $(".custom-carousel .item").not($(this)).removeClass("active");
//     $(this).toggleClass("active");
//   });
// });
