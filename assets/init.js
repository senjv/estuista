(function($){
  $(function(){

    AOS.init({
      easing: 'ease-in-out-sine'
    });

    setInterval(addItem, 300);

    var itemsCounter = 1;
    var container = document.getElementById('aos-demo');

    function addItem () {
      if (itemsCounter > 42) return;
      var item = document.createElement('div');
      item.classList.add('aos-item');
      item.setAttribute('data-aos', 'fade-up');
      item.innerHTML = '<div class="aos-item__inner"><h3>' + itemsCounter + '</h3></div>';
      container.appendChild(item);
      itemsCounter++;
    }
/*

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      $(".brand-logo").text(scroll);
      if (scroll > 50 || scroll < 600) {
        $(".fade-in:first-child").addClass("fade-in-focus");
      }
      if (scroll < 50 || scroll > 1300) {
        $(".fade-in:first-child").removeClass("fade-in-focus");
      }

      if (scroll > 1350 || scroll < 1900) {
        $(".fade-in:nth-child(1)").addClass("fade-in-focus");
      }
      if (scroll < 1350 || scroll > 2280) {
        $(".fade-in:nth-child(1)").removeClass("fade-in-focus");
      }
    });
*/



  }); // end of document ready
})(jQuery); // end of jQuery name space