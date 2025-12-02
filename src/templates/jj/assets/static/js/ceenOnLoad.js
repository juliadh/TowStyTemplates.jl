window.onload = function () {
    tempus = setInterval(push, 4000);
//gestion de l'input : écoute
document.getElementById("Input_size").addEventListener("input", font_size_input);
document.getElementById("Input_primCol").addEventListener("input", font_primcol_input);
document.getElementById("Input_secCol").addEventListener("input", font_seccol_input);
document.getElementById("Input_backCol").addEventListener("input", font_back_input);

//Chargement des variables de personnalisation
var myfont = localStorage.getItem("font_fam");
var mysize = localStorage.getItem("font_size");
var mycolor1 = localStorage.getItem("font_color1");
var mycolor2 = localStorage.getItem("font_color2");
var mybackcolor = localStorage.getItem("back_color");

document.getElementById("corps").style.fontFamily = myfont;
document.getElementById("corps").style.fontSize = mysize;
document.getElementById("corps").style.color = mycolor1;
const style_my_a = document.querySelectorAll('a');
style_my_a.forEach((a) => {
  a.style.setProperty('--color-hover', mycolor2);
});
document.getElementById("corps").style.backgroundColor = mybackcolor;


    if (myfont === null) {
        document.getElementById("choosenFont").text = "Type de police";
    }
}

