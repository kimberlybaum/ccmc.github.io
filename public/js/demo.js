"use strict";
function bounceArrow() {
    var t = window.innerHeight,
        e = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
        n = /Mobi/.test(navigator.userAgent);
    e && !n && (window.outerHeight, window.innerHeight), n && ((t = window.screen.availHeight), window.screen.availHeight, window.innerHeight);
    var i = document.getElementById("arrow");
    var j = document.getElementById("bg1");

    window.addEventListener("scroll", function () {
        var e = i.parentElement.parentElement.getBoundingClientRect();

        0 <= e.top + e.height && e.top <= t && (i.getBoundingClientRect().top < e.height / 2 ? i.classList.add("arrow--hide") : i.classList.remove("arrow--hide"));
   
        0 <= e.top + e.height && e.top <= t && (i.getBoundingClientRect().top < e.height / 2 ? j.classList.add("background--stretch") : j.classList.remove("background--stretch"));

   
    });
}
bounceArrow();