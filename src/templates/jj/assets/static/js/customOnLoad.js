window.onload = function () {

   //Carrousel
    // tempus = setInterval(push, 4000);
//gestion de l'input : écoute
document.getElementById("Input_size").addEventListener("input", font_size_input);
document.getElementById("Input_primCol").addEventListener("input", font_primcol_input);
document.getElementById("Input_secCol").addEventListener("input", font_seccol_input);
document.getElementById("Input_backCol").addEventListener("input", font_back_input);
document.getElementById("Input_borderCol").addEventListener("input", border_color_input);

//Chargement des variables de personnalisation
var myfont = localStorage.getItem("font_fam");
var mysize = localStorage.getItem("font_size");
var mycolor1 = localStorage.getItem("font_color1");
var mycolor2 = localStorage.getItem("font_color2");
var mybackcolor = localStorage.getItem("back_color");
var mybordercolor = localStorage.getItem("border_color");




   if (myfont == null) {
       document.getElementById("ChoosenFont").text = "Type de police";
       var font_fam_val = "Victor mono, monospace";
       document.getElementById("corps").style.fontFamily = font_fam_val;
       localStorage.setItem("font_fam", font_fam_val);
   } else {
       document.getElementById("ChoosenFont").text = myfont;
       document.getElementById("corps").style.fontFamily = myfont;
 }

   if (mysize == null) {
       document.getElementById("ChoosenSize").text = "Unité CSS";
       var font_size_val = "20px";
       document.getElementById("corps").style.fontSize = font_size_val;
       localStorage.setItem("font_size", font_size_val);
   } else {
       document.getElementById("ChoosenSize").text = mysize;
       document.getElementById("corps").style.fontSize = mysize;
 }

   if (mycolor1 == null) {
       document.getElementById("ChoosenColorPrime").text = "Couleur CSS";
       var font_color_prim_val = "black";
       document.getElementById("corps").style.color = font_color_prim_val;
       localStorage.setItem("font_color1", font_color_prim_val);
   } else {
       document.getElementById("ChoosenColorPrime").text = mycolor1;
       document.getElementById("corps").style.color = mycolor1;
   }

   if (mycolor2 == null) {
       document.getElementById("ChoosenColorSecond").text = "Couleur CSS";
       var font_color_sec_val = "OrangeRed";
       const style_my_a = document.querySelectorAll('a');
style_my_a.forEach((a) => {
  a.style.setProperty('--color-hover', font_color_sec_val);
});
       localStorage.setItem("font_color2", font_color_sec_val);
   } else {
       document.getElementById("ChoosenColorSecond").text = mycolor2;
const style_my_a = document.querySelectorAll('a');
style_my_a.forEach((a) => {
  a.style.setProperty('--color-hover', mycolor2);
});
const ceenbutt = document.getElementsByClassName("myceenbutton");
Array.from(ceenbutt).forEach((itemElement) => {
    itemElement.style.setProperty('--color-hover', mycolor2);
});
   }

   if (mybackcolor == null) {
       document.getElementById("ChoosenBackColor").text = "Couleur CSS";
       var back_color_val = "white";
       document.getElementById("corps").style.backgroundColor = back_color_val;
       localStorage.setItem("back_color", back_color_val);
   } else {
       document.getElementById("ChoosenBackColor").text = mybackcolor;
       document.getElementById("corps").style.backgroundColor = mybackcolor;
   }

   if (mybordercolor == null) {
       var border_color_val = "black";
       localStorage.setItem("border_color", border_color_val);
       document.getElementById("ChoosenBorderColor").text = "Couleur CSS";
const style_my_ul = document.querySelectorAll('nav ul');
style_my_ul.forEach((ul) => {
  ul.style.setProperty('--color-border', border_color_val);
});
   } else {
       const style_my_ul = document.querySelectorAll('nav ul');
style_my_ul.forEach((ul) => {
  ul.style.setProperty('--color-border', mybordercolor);
});
var mybordercolor = localStorage.getItem("border_color");
document.getElementById("ChoosenborderColor").text = mybordercolor;
   }
   
}

