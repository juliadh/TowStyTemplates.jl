let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
clearInterval(tempus);
 }

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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
function push(){
plusSlides(1);
}


// menu de personnalisation
function openPane() {
  document.getElementById("customPane").style.width = "250px";
}

function closePane() {
  document.getElementById("customPane").style.width = "0";
}

// contenu du menu de personnalisation

function ChangeMyFont() {
  var font_fam_val = document.getElementById("selectedFont").value;
document.getElementById("corps").style.fontFamily = font_fam_val;
    localStorage.setItem("font_fam", font_fam_val);  
  document.getElementById("demo").innerHTML = "You selected: " + font_fam_val;
}

function ChangeMySize() {
  var font_size_val = document.getElementById("selectedSize").value;
document.getElementById("corps").style.fontSize = font_size_val;
    localStorage.setItem("font_size", font_size_val);  
  document.getElementById("demo").innerHTML = "You selected: " + font_size_val;
}

function ChangeMyPrimaryColor() {
  var font_color_prim_val = document.getElementById("selectedColorPrime").value;
document.getElementById("corps").style.color = font_color_prim_val;
    localStorage.setItem("font_color1", font_color_prim_val);  
  document.getElementById("demo").innerHTML = "You selected: " + font_color_prim_val;
}

function ChangeMySecondaryColor() {
  var font_color_sec_val = document.getElementById("selectedColorSecond").value;
const style_my_a = document.querySelectorAll('a');
style_my_a.forEach((a) => {
  a.style.setProperty('--color-hover', font_color_sec_val);
});

    localStorage.setItem("font_color2", font_color_sec_val);  
  document.getElementById("demo").innerHTML = "You selected: " + font_color_sec_val;
}
function ChangeBackgroundColor() {
  var back_color_val = document.getElementById("selectedBackColor").value;
document.getElementById("corps").style.backgroundColor = back_color_val;
    localStorage.setItem("back_color", back_color_val);  
  document.getElementById("demo").innerHTML = "You selected: " + back_color_val;
}

//gestion de l'input
function font_size_input(){
	localStorage.removeItem("color_s");
		var vfont_size_input = document.getElementById("Input_size").value;
    localStorage.setItem("font_size", vfont_size_input);
document.getElementById("corps").style.fontSize = vfont_size_input;
}

function font_primcol_input(){
	localStorage.removeItem("font_color1");
		var vfont_primcol_input = document.getElementById("Input_primCol").value;
    localStorage.setItem("font_color1", vfont_primcol_input);
document.getElementById("corps").style.color = vfont_primcol_input;
}

function font_seccol_input(){
	localStorage.removeItem("font_color2");
		var vfont_seccol_input = document.getElementById("Input_secCol").value;
    localStorage.setItem("font_color2", vfont_seccol_input);
//document.getElementById("corps").style.color = vfont_primcol_input;

const style_my_a = document.querySelectorAll('a');
style_my_a.forEach((a) => {
  a.style.setProperty('--color-hover', vfont_seccol_input);
});
}

function font_back_input(){
	localStorage.removeItem("back_color");
		var vfont_backcol_input = document.getElementById("Input_backCol").value;
    localStorage.setItem("back_color", vfont_backcol_input);
document.getElementById("corps").style.backgroundColor = vfont_backcol_input;
}
