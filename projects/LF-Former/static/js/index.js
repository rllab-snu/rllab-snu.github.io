window.HELP_IMPROVE_VIDEOJS = false;

var INTERP_BASE = "./static/interpolation/stacked";
var NUM_INTERP_FRAMES = 240;

var interp_images = [];
function preloadInterpolationImages() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = INTERP_BASE + '/' + String(i).padStart(6, '0') + '.jpg';
    interp_images[i] = new Image();
    interp_images[i].src = path;
  }
}

function setInterpolationImage(i) {
  var image = interp_images[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper').empty().append(image);
}


$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });

    var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: false,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 3000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);

    // Loop on each carousel initialized
    for(var i = 0; i < carousels.length; i++) {
    	// Add listener to  event
    	carousels[i].on('before:show', state => {
    		console.log(state);
    	});
    }

    // Access to bulmaCarousel instance of an element
    var element = document.querySelector('#my-element');
    if (element && element.bulmaCarousel) {
    	// bulmaCarousel instance is available as element.bulmaCarousel
    	element.bulmaCarousel.on('before-show', function(state) {
    		console.log(state);
    	});
    }

    /*var player = document.getElementById('interpolation-video');
    player.addEventListener('loadedmetadata', function() {
      $('#interpolation-slider').on('input', function(event) {
        console.log(this.value, player.duration);
        player.currentTime = player.duration / 100 * this.value;
      })
    }, false);*/
    // preloadInterpolationImages();

    // $('#interpolation-slider').on('input', function(event) {
    //   setInterpolationImage(this.value);
    // });
    // setInterpolationImage(0);
    // $('#interpolation-slider').prop('max', NUM_INTERP_FRAMES - 1);

    // bulmaSlider.attach();

    $(".additional-visualization-toggle-input").on("change", function() {
      var targetId = $(this).data("target");
      $("#" + targetId).attr("hidden", !this.checked);
    });

    $(".additional-visualization-toggle-input").each(function() {
      var targetId = $(this).data("target");
      $("#" + targetId).attr("hidden", !this.checked);
    });

    $(".query-visualization-card").each(function() {
      var card = $(this);
      var slides = card.find(".query-visualization-slide");
      var queryIndexLabel = card.find(".query-visualization-query-index");
      var currentIndex = 0;

      function renderQuery(index) {
        slides.attr("hidden", true);
        $(slides.get(index)).removeAttr("hidden");
        queryIndexLabel.text(index + 1);
        currentIndex = index;
      }

      card.find(".query-visualization-arrow").on("click", function() {
        var direction = $(this).data("direction");
        var nextIndex = currentIndex;

        if (direction === "next") {
          nextIndex = (currentIndex + 1) % slides.length;
        } else {
          nextIndex = (currentIndex - 1 + slides.length) % slides.length;
        }

        renderQuery(nextIndex);
      });

      renderQuery(0);
    });

})
