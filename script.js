
window.addEventListener("scroll", function() {
    var scrollPos = window.scrollY;
    var red = Math.floor(scrollPos %256);
    var green = Math.floor((scrollPos+128)%256);
    var blue = Math.floor((scrollPos+256)%256);

    document.querySelector(".poem").style.color = "rgb(" + red + "," + green + "," + blue + ")";
});


