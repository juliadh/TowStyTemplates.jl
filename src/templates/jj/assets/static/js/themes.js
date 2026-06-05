const themes = {
    whiteRoom: {
        _label:         "White room",
        _log:           "In a white room with black curtains in the station",
        fontFamily:     "Victor mono, monospace",
        fontSize:       "20px",
        textColor:      "black",
        linkColor:      "black",
        linkHoverColor: "OrangeRed",
        backgroundColor:"white",
        borderColor:    "black",
        iconFilter:     "invert(0%) sepia(0%) saturate(100%) hue-rotate(0deg) brightness(100%) contrast(100%)",
        _reload:        true
    },
    paintItBlack: {
        _label:         "Paint it, black",
        _log:           "I see a red door and I want it painted black",
        fontFamily:     "Victor mono, monospace",
        fontSize:       "20px",
        textColor:      "white",
        linkColor:      "white",
        linkHoverColor: "grey",
        backgroundColor:"#121212",
        borderColor:    "grey",
        iconFilter:     "invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%)"
    },
    dracula: {
        _label:         "Dracula 🦇",
        _log:           "I never drink... wine!",
        fontFamily:     "Victor mono, monospace",
        fontSize:       "18px",
        textColor:      "#f8f8f2",
        linkColor:      "#50fa7b",
        linkHoverColor: "#bd93f9",
        backgroundColor:"#282a36",
        borderColor:    "#bd93f9",
        iconFilter:     "invert(75%) sepia(38%) saturate(4523%) hue-rotate(291deg) brightness(105%) contrast(101%)"
    },
    orangeIsTheNewBlack: {
        _label: "Orange is the new black 🍊",
        _log: "Même la plus petite main personne peut changer le cours d’un projet.",
        fontFamily: "Urbanist, Sans-serif",
        fontSize: "20px",
        textColor: "#4B2B0E",
        linkColor: "#d95f02",
        linkHoverColor: "#ff8c42",
        backgroundColor: "#FFFBF3",
        borderColor: "#214e34",
        iconFilter: "invert(0%) sepia(0%) saturate(4523%) hue-rotate(291deg) brightness(105%) contrast(101%)"
    },
};

const cssVarMap = {
    fontFamily:     "--font-base",
    fontSize:       "--font-size-base",
    textColor:      "--color-text",
    linkHoverColor: "--color-hover",
    backgroundColor:"--color-background",
    borderColor:    "--color-border",
    linkColor:      "--color-link",
    iconFilter:         "--color-icon",
    backgroundImage:    "--background-image"
};

function applyTheme(themeName) {
    const theme = themes[themeName];
    if (!theme) {
        console.warn("applyTheme : thème inconnu « " + themeName + " »");
        return;
    }
    if (!theme.backgroundImage) {
        document.documentElement.style.setProperty("--background-image", "none");
        localStorage.setItem("backgroundImage", "none");
    }
    for (const [key, value] of Object.entries(theme)) {
        if (key.startsWith("_")) continue;
        if (cssVarMap[key]) {
            document.documentElement.style.setProperty(cssVarMap[key], value);
        }
        localStorage.setItem(key, value);
    }
    if (theme._log) {
        console.log(theme._log);
    }
    if (theme._reload) {
        location.reload();
    }
}

function themeList() {
    const ul = document.getElementById("themeList");
    if (!ul) return;
    ul.innerHTML = "";
    for (const [name, theme] of Object.entries(themes)) {
        const li = document.createElement("li");
        li.className = "arrow";
        const a = document.createElement("a");
        a.href = "javascript:void(0)";
        a.tabIndex = 1;
        a.textContent = theme._label || name;
        a.addEventListener("click", function () { applyTheme(name); toggleBios(); });
        li.appendChild(a);
        ul.appendChild(li);
    }
}
