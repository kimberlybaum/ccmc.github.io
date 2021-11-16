"use strict";
function bounceArrow() {
    var t = window.innerHeight,
        e = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
        n = /Mobi/.test(navigator.userAgent);
    e && !n && (window.outerHeight, window.innerHeight), n && ((t = window.screen.availHeight), window.screen.availHeight, window.innerHeight);
    var i = document.getElementById("arrow");
    var j2 = document.getElementById("2");
    var j3 = document.getElementById("3");
    var j4 = document.getElementById("4");
    var j5 = document.getElementById("5");
    var j6 = document.getElementById("6");

    window.addEventListener("scroll", function () {
        var e = i.parentElement.parentElement.getBoundingClientRect();
        var e2 = j2.parentElement.parentElement.getBoundingClientRect();
        var e3 = j3.parentElement.parentElement.getBoundingClientRect();
        var e4 = j4.parentElement.parentElement.getBoundingClientRect();
        var e5 = j5.parentElement.parentElement.getBoundingClientRect();
        var e6 = j6.parentElement.parentElement.getBoundingClientRect();



        0 <= e.top + e.height && e.top <= t && (i.getBoundingClientRect().top < e.height / 2 ? i.classList.add("arrow--hide") : i.classList.remove("arrow--hide"));
   
        0 <= e2.top + e2.height && e2.top <= t && (j2.getBoundingClientRect().top < e2.height*2 ? j2.classList.add("current_target") : j2.classList.remove("current_target"));

        0 <= e3.top + e3.height && e3.top <= t && (j3.getBoundingClientRect().top < e3.height*2 ? j3.classList.add("current_target") : j3.classList.remove("current_target"));

        0 <= e4.top + e4.height && e4.top <= t && (j4.getBoundingClientRect().top < e4.height*2 ? j4.classList.add("current_target") : j4.classList.remove("current_target"));

        0 <= e5.top + e5.height && e5.top <= t && (j5.getBoundingClientRect().top < e5.height*2 ? j5.classList.add("current_target") : j5.classList.remove("current_target"));

        0 <= e6.top + e6.height && e6.top <= t && (j6.getBoundingClientRect().top < e6.height*2 ? j6.classList.add("current_target") : j6.classList.remove("current_target"));

   
    });
}
bounceArrow();

$(document).ready(function() {
    
	$('#menulink').click(function(event) {
		event.preventDefault();
		if($('.navigation-wrapper').hasClass('show-menu')) {
			$('.navigation-wrapper').removeClass('show-menu');
			$('.navigation').hide();
			$('.navigation li').removeClass('small-padding');
		} else {
			$('.navigation-wrapper').addClass('show-menu');
			$('.navigation').fadeIn();
			$('.navigation li').addClass('small-padding');
	   }
	});
  
});

