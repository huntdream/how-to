var slideIndex = 1;
var time;

showSlide(slideIndex);
intervalToggle(true);

function plusSlide(n) {
    intervalToggle(false);
    showSlide(slideIndex += n);
    intervalToggle(true);
};

function showSlide(n) {
    var i;
    var slides = document.getElementsByClassName('mySlide');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0, len = slides.length; i < len; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
};

function intervalToggle(flag) {
    if (flag) {
         time = setInterval(function () {
            plusSlide(1);
        }, 5000);
    } else {
        clearInterval(time)
    };
};