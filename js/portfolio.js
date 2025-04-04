const btnTogle = document.querySelector("#toglebutton");
const linkList = document.querySelector(".portfolio .nav");
const open = document.querySelector("#toglebutton .fa-bars");
const close = document.querySelector("#toglebutton .fa-xmark");

open.addEventListener("click", function () {
  linkList.style.display = "flex";
  open.style.display = "none";
  close.style.display = "block";
});

close.addEventListener("click", function () {
  linkList.style.display = "none";
  open.style.display = "block";
  close.style.display = "none";
});

//Fixed Navbar with smooth scroll
function scroll1() {
  const scroll = new SmoothScroll('.menu .nav a[href*="#"]', {
    speed: 800,
  });
}
function scroll2() {
  const scroll2 = new SmoothScroll('.slider .layout a[href*="#"]', {
    speed: 800,
  });
}

scroll1();
scroll2();

// Slide Down a Bar on Scroll
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var element = document.getElementById("slide-down");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    element.classList.add("slide-down-scrol");
  } else {
    element.classList.remove("slide-down-scrol");
  }
}

// Slide Down all items on Scroll
$(window).scroll(function () {
  $(".slide-down-left").each(function () {
    var pos = $(this).offset().top;
    var winTop = $(window).scrollTop();

    if (pos < winTop + 600) {
      $(this).addClass("slide-left");
    }
  });
  $(".slide-down-right").each(function () {
    var pos = $(this).offset().top;
    var winTop = $(window).scrollTop();

    if (pos < winTop + 600) {
      $(this).addClass("slide-right");
    }
  });
  $(".slide-down-top").each(function () {
    var pos = $(this).offset().top;
    var winTop = $(window).scrollTop();

    if (pos < winTop + 600) {
      $(this).addClass("slide-top");
    }
  });

  $(".slide-down-bottom").each(function () {
    var pos = $(this).offset().top;
    var winTop = $(window).scrollTop();

    if (pos < winTop + 600) {
      $(this).addClass("slide-bottom");
    }
  });

  $(".slide-down-center").each(function () {
    var pos = $(this).offset().top;
    var winTop = $(window).scrollTop();

    if (pos < winTop + 900) {
      $(this).addClass("slide-center");
    }
  });
});
