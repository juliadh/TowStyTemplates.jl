window.onload = function () {

    // Font family
    var myfont = localStorage.getItem("fontFamily") || "Victor mono, monospace";
    document.documentElement.style.setProperty('--font-base', myfont);
    document.getElementById("fontFamilySelect").value = myfont;
    document.getElementById("fontFamilyInput").value = myfont;
    document.getElementById("fontFamilyOption").text = myfont;

    // Font size
    var myfontsize = localStorage.getItem("fontSize") || "20px";
    document.documentElement.style.setProperty('--font-size-base', myfontsize);
    document.getElementById("fontSizeSelect").value = myfontsize;
    document.getElementById("fontSizeInput").value = myfontsize;
    document.getElementById("fontSizeOption").text = myfontsize;

    // text color
    var mytextcolor = localStorage.getItem("textColor") || "black";
    document.documentElement.style.setProperty('--color-text', mytextcolor);
    document.getElementById("textColorSelect").value = mytextcolor;
    document.getElementById("textColorInput").value = mytextcolor;
    document.getElementById("textColorOption").text = mytextcolor;

    // Link color
    var mylinkcolor = localStorage.getItem("linkColor") || "black";
    document.documentElement.style.setProperty('--color-link', mylinkcolor);
    document.getElementById("linkColorSelect").value = mylinkcolor;
    document.getElementById("linkColorInput").value = mylinkcolor;
    document.getElementById("linkColorOption").text = mylinkcolor;

    // Link color (hover)
    var mylinkhovercolor = localStorage.getItem("linkHoverColor") || "OrangeRed";
    document.documentElement.style.setProperty('--color-hover', mylinkhovercolor);
    document.getElementById("linkHoverColorSelect").value = mylinkhovercolor;
    document.getElementById("linkHoverColorInput").value = mylinkhovercolor;
    document.getElementById("linkHoverColorOption").text = mylinkhovercolor;

    // Background color
    var mybackcolor = localStorage.getItem("backgroundColor") || "white";
    document.documentElement.style.setProperty('--color-background', mybackcolor);
    document.getElementById("backgroundColorSelect").value = mybackcolor;
    document.getElementById("backgroundColorInput").value = mybackcolor;
    document.getElementById("backgroundColorOption").text = mybackcolor;

    // Border color
    var mybordercolor = localStorage.getItem("borderColor") || "black";
    document.documentElement.style.setProperty('--color-border', mybordercolor);
    document.getElementById("borderColorSelect").value = mybordercolor;
    document.getElementById("borderColorInput").value = mybordercolor;
    document.getElementById("borderColorOption").text = mybordercolor;

    // Icon color (CSS filter)
    var myiconcolor = localStorage.getItem("iconFilter") || "invert(0%) sepia(0%) saturate(100%) hue-rotate(0deg) brightness(100%) contrast(100%)";
    document.documentElement.style.setProperty('--color-icon', myiconcolor);
    document.getElementById("iconFilterInput").value = myiconcolor;

    // Background image (mvr)
    var mybgimage = localStorage.getItem("backgroundImage") || "none";
    document.documentElement.style.setProperty('--background-image', mybgimage);

    
    document.getElementById("fontFamilyInput").addEventListener("input", inputFontFamily);
    document.getElementById("fontSizeInput").addEventListener("input", inputFontSize);
    document.getElementById("textColorInput").addEventListener("input", inputTextColor);
    document.getElementById("linkHoverColorInput").addEventListener("input", inputLinkHoverColor);
    document.getElementById("backgroundColorInput").addEventListener("input", inputBackgroundColor);
    document.getElementById("linkColorInput").addEventListener("input", inputLinkColor);
    document.getElementById("borderColorInput").addEventListener("input", inputBorderColor);
    document.getElementById("iconFilterInput").addEventListener("input", inputIconFilter);

    themeList();

}

// Source - https://stackoverflow.com/a
// Posted by Peter, modified by community. See post 'Timeline' for change history
// Retrieved 2026-01-05, License - CC BY-SA 3.0
function onKonamiCode(key, cb) {
    var input = '';
    document.addEventListener('keydown', function (e) {
        input += ("" + e.keyCode);
        if (input === key) {
            return cb();
        }
        if (!key.indexOf(input)) return;
        input = ("" + e.keyCode);
    });
}

onKonamiCode('3838404065', function () {
    var bios = document.getElementById("bios");
    bios.classList.toggle('active'); 
});
