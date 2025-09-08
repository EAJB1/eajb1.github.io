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

let slideIndices = [1, 1, 1, 1];
let ids = ["redthumb", "opengl", "criticalexposure", "spartanascent"]

showSlides(slideIndices[0], 0);
showSlides(slideIndices[1], 1);
showSlides(slideIndices[2], 2);
showSlides(slideIndices[3], 3);

function plusSlides(n, i) {
    showSlides(slideIndices[i] += n, i);
}

function currentSlide(n, i) {
    showSlides(slideIndices[i] = n, i);
}

function showSlides(n, idIndex) {
  let i;
  var element = document.getElementById(ids[idIndex]);
  let slides = element.querySelectorAll(".slides");
  let dots = element.querySelectorAll(".image");
 
  if (n > slides.length) {slideIndices[idIndex] = 1}
  if (n < 1) {slideIndices[idIndex] = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndices[idIndex]-1].style.display = "block";
  dots[slideIndices[idIndex]-1].className += " active";
}