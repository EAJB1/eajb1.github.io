var btnContainer = document.getElementById("myTopnav");
var btns = btnContainer.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = btnContainer.getElementsByClassName("active");
        if (current.length > 0){
            for (var i = 0; i < current.length; i++){
                current[i].className = "btn";
            }
            this.className = "btn active";
        }
    });
}

let slideIndex = 1;
showSlides(slideIndex, "redthumb");
showSlides(slideIndex, "opengl");
showSlides(slideIndex, "criticalexposure");
showSlides(slideIndex, "spartanascent");

function plusSlides(n, id) {
    showSlides(slideIndex += n, id);
}

function currentSlide(n, id) {
    showSlides(slideIndex = n, id);
}

function showSlides(n, id) {
  let i;
  var element = document.getElementById(id);
  let slides = element.querySelectorAll(".slides");
  let dots = element.querySelectorAll(".image");
 
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}