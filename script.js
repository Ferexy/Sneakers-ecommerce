function openModal() {
    document.getElementById("light-box").style.display = "block";
}

function closeModal() {
    document.getElementById("light-box").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);
Showslides(slideIndex);

function Plus (n) {
    Showslides(slideIndex += n);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("pic");
    var thumb = document.getElementsByClassName("thumbs");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < thumb.length; i++) {
        thumb[i].className = thumb[i].className.replace ("replace", "")
    }
    slides[slideIndex-1].style.display = "block";
}
function Showslides (n) {
    var e;
    var Slide = document.getElementsByClassName("scr");
    if (n > Slide.length) {slideIndex = 1}
    // if (n < 1) {slideIndex = Slide.length}
    for (e = 0; e < Slide.length; e++) {
        Slide[e].style.display = "none"

    }
    Slide[slideIndex-1].style.display = "block";
}

var m = document.getElementById("no");
m.innerHTML = 0;
function add(run) {
   if(m.innerHTML < 10) {
    m.innerHTML++;
   }
   
}

function minus() {
    if (m.innerHTML > 0 ) {
      m.innerHTML--;  
    }
}
function stay() {
    document.getElementById("cart-msg").style.display = "block"
}
function remove () {
    document.getElementById("cart-msg").style.display = "none"
}
function del () {
    document.getElementById("basket").style.display = "none";
    document.getElementById("change").style.display = "block";
    document.getElementById("cart").className = "";
}
function cart() {
    document.getElementById("basket").style.display = "block";
    document.getElementById("change").style.display = "none";
    var y = document.getElementById("basket-no");
    y.style.display ="block";
    if (m.innerHTML > 0) {
        y.innerHTML = "$125.00" + "  " + "&times" + "  " + m.innerHTML + "  =  " + "$" + 125 * m.innerHTML ;
        document.getElementById("cart").className = "Cart";
    }else if(m.innerHTML = 0) {
        document.getElementById("change").style.display = "block"
    }
}

function openMenu() {
    document.getElementById("Menu").style.display = "block"
    document.getElementById("Menu").style.transition = "0.5s"
}
function closeMenu() {
    document.getElementById("Menu").style.display = "none"
}
