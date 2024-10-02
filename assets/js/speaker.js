// on page load
$(document).ready(function () {
    // update description
    
// speakers slider
var multipleCardCarousel = document.querySelector("#carouselExampleControls");

if (window.matchMedia("(min-width: 576px)").matches) {
  var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false
  });
  var carouselWidth = $(".carousel-inner")[0].scrollWidth;
  var cardWidth = $(".carousel-item").width();
  var scrollPosition = 0;

  // Function to update the description
  function updateDescription() {
    var activeItem = $(".carousel-item.active");
    var description = activeItem.find(".single-speaker").data("description");
    var name = activeItem.find(".single-speaker").data("name");
    $("#speaker-description").text(description);
    $("#title-speak").text(name);

  }

  // Call updateDescription when the page loads
  updateDescription();


  $("#carouselExampleControls .carousel-control-next").on("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 2) {
      scrollPosition += cardWidth;
      
    }else{
         // Reset to the beginning when reaching the end
      scrollPosition = 0;    
         
    }
      $("#carouselExampleControls .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600 
      );
      // Update description after scrolling
      updateDescription();

  });
  $("#carouselExampleControls .carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      $("#carouselExampleControls .carousel-inner").animate(
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
        $("#carouselExampleControls .carousel-inner").animate(
            { scrollLeft: scrollPosition },
            600
          );
        updateDescription();

    }
  });
} else {
  $(multipleCardCarousel).addClass("slide");
}
// end of speakers slider

});