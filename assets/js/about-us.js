   // onpage load
document.addEventListener("DOMContentLoaded", function() {
// team slider
var multipleCardCarousel = document.querySelector("#carouselControls");

if (window.matchMedia("(min-width: 576px)").matches) {
  var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false
  });
  var carouselWidth = $(".inn")[0].scrollWidth;
  var cardWidth = $(".itemm").width();
  var scrollPosition = 0;

  // Function to update the description
  function updateDescription() {
    var activeItem = $(".itemm.active");
    var description = activeItem.find(".single-speaker").data("description");
    var name = activeItem.find(".single-speaker").data("name");
    $("#speaker-description").text(description);
    $("#title-speak").text(name);

  }

  // Call updateDescription when the page loads
  updateDescription();


  $("#carouselControls .carousel-control-next").on("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 2) {
      scrollPosition += cardWidth;
      
    }else{
         // Reset to the beginning when reaching the end
      scrollPosition = 0;    
         
    }
      $("#carouselControls .inn").animate(
        { scrollLeft: scrollPosition },
        600 
      );
      // Update description after scrolling
      updateDescription();

  });
  $("#carouselControls .carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      $("#carouselControls .inn").animate(
        { scrollLeft: scrollPosition },
        600,
        function() {
            // Update description after scrolling
            updateDescription();
          }
      );
    }else{  // Update description after scrolling
        // Go to the last position when reaching the beginning
      scrollPosition = carouselWidth - cardWidth * 2;
        $("#carouselControls .inn").animate(
            { scrollLeft: scrollPosition },
            600
          );
        updateDescription();

    }
  });
} else {
  $(multipleCardCarousel).addClass("slide");
}
// end of team slider




// board slider
var multipleCardCarouselboard = document.querySelector("#carouselControls-board");

if (window.matchMedia("(min-width: 576px)").matches) {
  var carousel = new bootstrap.Carousel(multipleCardCarouselboard, {
    interval: false
  });
  var carouselWidthboard = $(".innboard")[0].scrollWidth;
  var cardWidthboard = $(".itemmboard").width();
  var scrollPositionboard = 0;

  // Function to update the description
  function updateDescriptionboard() {
    var activeItemboard = $(".itemmboard.active");
    var descriptionboard = activeItemboard.find(".singlespeakerboard").data("description");
    var nameboard = activeItemboard.find(".singlespeakerboard").data("name");
    $("#speaker-descriptionboard").text(descriptionboard);
    $("#title-speakboard").text(nameboard);

  }

  // Call updateDescriptionboard when the page loads
  updateDescriptionboard();


  $("#carouselControls-board .carousel-control-next").on("click", function () {
    if (scrollPositionboard < carouselWidthboard - cardWidthboard * 2) {
      scrollPositionboard += cardWidthboard;
      
    }else{
         // Reset to the beginning when reaching the end
      scrollPositionboard = 0;    
         
    }
      $("#carouselControls-board .innboard").animate(
        { scrollLeft: scrollPositionboard },
        600 
      );
      // Update description after scrolling
      updateDescriptionboard();

  });
  $("#carouselControls-board .carousel-control-prev").on("click", function () {
    if (scrollPositionboard > 0) {
      scrollPositionboard -= cardWidthboard;
      $("#carouselControls-board .innboard").animate(
        { scrollLeft: scrollPositionboard },
        600,
        function() {
            // Update description after scrolling
            updateDescriptionboard();
          }
      );
    }else{  // Update description after scrolling
        // Go to the last position when reaching the beginning
      scrollPositionboard = carouselWidthboard - cardWidthboard * 2;
        $("#carouselControls-board .innboard").animate(
            { scrollLeft: scrollPositionboard },
            600
          );
        updateDescriptionboard();

    }
  });
} else {
  $(multipleCardCarouselboard).addClass("slide");
}
// end of board slider










})