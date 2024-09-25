   //========= glightbox
   GLightbox({
    'href': 'https://www.youtube.com/watch?v=Gxw45q3Ga3k',
    'type': 'video',
    'source': 'youtube', //vimeo, youtube or local
    'width': 900,
    'autoplayVideos': true,
});

//========= testimonial 
tns({
    container: '.testimonial-slider',
    items: 3,
    slideBy: 'page',
    autoplay: false,
    mouseDrag: true,
    lazyload: true,
    gutter: 0,
    nav: true,
    controls: false,
    controlsText: ['<i class="lni lni-arrow-left"></i>', '<i class="lni lni-arrow-right"></i>'],
    responsive: {
        0: {
            items: 1,
        },
        540: {
            items: 1,
        },
        768: {
            items: 2,
        },
        992: {
            items: 2,
        },
        1170: {
            items: 3,
        }
    }
});
 
const finaleDate = new Date("December 15, 2024 00:00:00").getTime();

const timer = () => {
    const now = new Date().getTime();
    let diff = finaleDate - now;
    if (diff < 0) {
        document.querySelector('.alert').style.display = 'block';
        document.querySelector('.container').style.display = 'none';
    }

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(diff % (1000 * 60) / 1000);

    days <= 99 ? days = `0${days}` : days;
    days <= 9 ? days = `00${days}` : days;
    hours <= 9 ? hours = `0${hours}` : hours;
    minutes <= 9 ? minutes = `0${minutes}` : minutes;
    seconds <= 9 ? seconds = `0${seconds}` : seconds;

    document.querySelector('#days').textContent = days;
    document.querySelector('#hours').textContent = hours;
    document.querySelector('#minutes').textContent = minutes;
    document.querySelector('#seconds').textContent = seconds;

}
timer();
setInterval(timer, 1000);
 

 
const heroData = [
{
location: "Johannesburg, South Africa",
title: "AfIHC 2024: The Biggest Event of the Year",
description: "AfIHC 2024 | August 21-23, 2024 |Theme: Healthcare in Africa: Collaboration, Innovation and Sustainability.",
buttonText: "Register Now",
buttonLink: "pricing.html"
},
{
location: "Sunset Conference Hall, Ghana",
title: "Next big event of the year",
description: "Join us for an unforgettable experience filled with knowledge and networking.",
buttonText: "Register Now",
buttonLink: "register.html"
},
{
location: "Innovation Center, Nigeria",
title: "Join the innovative workshops",
description: "Experience groundbreaking workshops led by industry experts.",
buttonText: "Learn More",
buttonLink: "workshops.html"
},
{
location: "Tech Hub, Togo",
title: "Don't miss the biggest speakers",
description: "Hear from the most influential thought leaders in the industry.",
buttonText: "Get Tickets",
buttonLink: "tickets.html"
}
];

let currentIndex = 0;
const heroContent = document.getElementById('hero-content');
const heroArea = document.querySelector('.hero-area');

function updateHeroContent() {
const { location, title, description, buttonText, buttonLink } = heroData[currentIndex];

// Update background image
heroArea.style.backgroundImage = `url('assets/images/hero/hero-bg-${currentIndex + 1}.jpg')`;

// Update hero content
heroContent.innerHTML = `
<h5 class="wow zoomIn" data-wow-delay=".2s"><i class="lni lni-map-marker"></i> ${location}</h5>
<h2 class="wow fadeInUp" data-wow-delay=".4s">${title}</h2>
<p class="wow fadeInUp" data-wow-delay=".6s">${description}</p>
<div class="button wow fadeInUp" data-wow-delay=".8s">
    <a href="${buttonLink}" class="btn ">${buttonText}</a>
</div>
`;

// Move to the next slide
currentIndex = (currentIndex + 1) % heroData.length;
}

// Change content every 5 seconds
setInterval(updateHeroContent, 5000);

// Initial content
updateHeroContent();


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


// early bird countdown:
var end = new Date('10/25/2024 00:00 AM');
var options = { day: 'numeric', month: 'long', year: 'numeric' };
var dayt = end.getDate();
 
var formattedDate =  end.toLocaleDateString('en-GB', options);


  document.getElementById('earlybirdsdate').innerHTML = formattedDate;  
var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timerr;

function showRemaining() {
    var now = new Date();
    var distance = end - now;
    if (distance < 0) {

        clearInterval(timerr);
        document.getElementById('days').innerHTML = '0';

        return;
    }
    var earlybirdsdays = Math.floor(distance / _day);

    document.getElementById('earlybirdsdays').innerHTML = earlybirdsdays;    
    
}

timerr = setInterval(showRemaining, 1000);