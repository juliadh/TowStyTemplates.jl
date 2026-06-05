// menu de personnalisation
function togglePane() {
    var customPane = document.getElementById("customPane");
    customPane.classList.toggle('active');
}

function toggleBios() {
    var bios = document.getElementById("bios");
    bios.classList.toggle('active');
}

// Font family
function setFontFamily(val) {
    if (!val) val = "Victor mono, monospace";
    document.documentElement.style.setProperty('--font-base', val);
    localStorage.setItem("fontFamily", val);
}

function selectFontFamily() {
    setFontFamily(document.getElementById("fontFamilySelect").value);
}

function inputFontFamily() {
    setFontFamily(document.getElementById("fontFamilyInput").value);
}

// Font size
function setFontSize(val) {
    if (!val) val = "20px";
    document.documentElement.style.setProperty('--font-size-base', val);
    localStorage.setItem("fontSize", val);
}

function selectFontSize() {
    setFontSize(document.getElementById("fontSizeSelect").value);
}

function inputFontSize() {
    setFontSize(document.getElementById("fontSizeInput").value);
}

// Text color
function setTextColor(val) {
    if (!val) val = "black";
    document.documentElement.style.setProperty('--color-text', val);
    localStorage.setItem("textColor", val);
}

function selectTextColor() {
    setTextColor(document.getElementById("textColorSelect").value);
}

function inputTextColor() {
    setTextColor(document.getElementById("textColorInput").value);
}

// Link color
function setLinkColor(val) {
    if (!val) val = "black";
    document.documentElement.style.setProperty('--color-link', val);
    localStorage.setItem("linkColor", val);
}

function selectLinkColor() {
    setLinkColor(document.getElementById("linkColorSelect").value);
}

function inputLinkColor() {
    setLinkColor(document.getElementById("linkColorInput").value);
}

// Link hover color
function setLinkHoverColor(val) {
    if (!val) val = "OrangeRed";
    document.documentElement.style.setProperty('--color-hover', val);
    localStorage.setItem("linkHoverColor", val);
}

function selectLinkHoverColor() {
    setLinkHoverColor(document.getElementById("linkHoverColorSelect").value);
}

function inputLinkHoverColor() {
    setLinkHoverColor(document.getElementById("linkHoverColorInput").value);
}

// Background color
function setBackgroundColor(val) {
    if (!val) val = "white";
    document.documentElement.style.setProperty('--color-background', val);
    localStorage.setItem("backgroundColor", val);
}

function selectBackgroundColor() {
    setBackgroundColor(document.getElementById("backgroundColorSelect").value);
}

function inputBackgroundColor() {
    setBackgroundColor(document.getElementById("backgroundColorInput").value);
}

// Border color
function setBorderColor(val) {
    if (!val) val = "black";
    document.documentElement.style.setProperty('--color-border', val);
    localStorage.setItem("borderColor", val);
}

function selectBorderColor() {
    setBorderColor(document.getElementById("borderColorSelect").value);
}

function inputBorderColor() {
    setBorderColor(document.getElementById("borderColorInput").value);
}

// icon color
function setIconColor(val) {
    if (!val) val = "invert(0%) sepia(0%) saturate(100%) hue-rotate(0deg) brightness(100%) contrast(100%)";
    document.documentElement.style.setProperty('--color-icon', val);
    localStorage.setItem("iconFilter", val);
    // voir https://codepen.io/sardinecan/pen/gOJGjBQ pour obtenir le filtre
}

function inputIconFilter() {
    setIconColor(document.getElementById("iconFilterInput").value.trim());
}

//Darkmode
function darkSwitch()
{
    if(document.getElementById("themebutton").value=="light") {
        document.getElementById("themebutton").value="dark",
        document.getElementById("themebutton").innerHTML="White room",
        applyTheme("paintItBlack");
    } else {
        document.getElementById("themebutton").value="light",
        document.getElementById("themebutton").innerHTML="Paint it, black",
        applyTheme("whiteRoom");
    }
}

//meta
function reset(){
    localStorage.removeItem("fontFamily");
    localStorage.removeItem("fontSize");
    localStorage.removeItem("textColor");
    localStorage.removeItem("linkColor");
    localStorage.removeItem("linkHoverColor");
    localStorage.removeItem("backgroundColor");
    localStorage.removeItem("borderColor");
    localStorage.removeItem("iconFilter");
    localStorage.removeItem("backgroundImage");

    location.reload();
}
