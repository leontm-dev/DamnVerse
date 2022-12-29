//Variablen
const MAINURL = "https://DamnVerse.leontm-official.repl.co";
//Funktionen
function openHome() {
    window.location.href = `${MAINURL}`;
};
function openStats() {
    window.location.href = `${MAINURL}/stats`;
};
function openAccount() {
    window.location.href = `${MAINURL}/account`;
};
function openPunkte() {
    window.location.href = `${MAINURL}/punkte`;
};
function openMods() {
    window.location.href = `${MAINURL}/mods`;
};
function openDamn() {
    window.location.href = `${MAINURL}/damnchaotix`;
};
function showMenu() {
    document.getElementById("nav-bar").classList.add("hide");
    document.getElementById("nav-menu").classList.remove("hide");
    document.getElementById("nav-menu").classList.add("showMenu");
    setTimeout(() => {
        document.getElementById("nav-menu-item-1").classList.remove("hide");
        document.getElementById("nav-menu-item-2").classList.remove("hide");
        document.getElementById("nav-menu-item-3").classList.remove("hide");
        document.getElementById("nav-menu-item-4").classList.remove("hide");
        document.getElementById("nav-menu-item-5").classList.remove("hide");
        document.getElementById("nav-menu-item-6").classList.remove("hide");
        document.getElementById("nav-menu-title").classList.remove("hide");
        document.getElementById("nav-menu-close").classList.remove("hide");
        document.getElementById("nav-menu").classList.remove("showMenu");
    }, 2000)
};
function closeMenu() {
    document.getElementById("nav-menu-item-1").classList.add("hide");
    document.getElementById("nav-menu-item-2").classList.add("hide");
    document.getElementById("nav-menu-item-3").classList.add("hide");
    document.getElementById("nav-menu-item-4").classList.add("hide");
    document.getElementById("nav-menu-item-5").classList.add("hide");
    document.getElementById("nav-menu-item-6").classList.add("hide");
    document.getElementById("nav-menu-title").classList.add("hide");
    document.getElementById("nav-menu-close").classList.add("hide");
    document.getElementById("nav-menu").classList.add("closeMenu");
    setTimeout(() => {
        document.getElementById("nav-bar").classList.remove("hide");
        document.getElementById("nav-menu").classList.remove("closeMenu");
        document.getElementById("nav-menu").classList.add("hide");
    }, 2000);
};
function startPlayground() {
    document.getElementById("opener").classList.add("hide");
    document.getElementById("api").classList.remove("hide");
}
//Konstant
setInterval(() => {
    if (window.innerWidth <= 910) {
        document.getElementById("nav-item-1").classList.add("hide");
        document.getElementById("nav-item-2").classList.add("hide");
        document.getElementById("nav-item-3").classList.add("hide");
        document.getElementById("nav-item-4").classList.add("hide");
        document.getElementById("nav-item-5").classList.add("hide");
        document.getElementById("nav-item-6").classList.add("hide");
        document.getElementById("nav-menu-burger").classList.remove("hide");
    } else {
        document.getElementById("nav-item-1").classList.remove("hide");
        document.getElementById("nav-item-2").classList.remove("hide");
        document.getElementById("nav-item-3").classList.remove("hide");
        document.getElementById("nav-item-4").classList.remove("hide");
        document.getElementById("nav-item-5").classList.remove("hide");
        document.getElementById("nav-item-6").classList.remove("hide");
        document.getElementById("nav-menu-burger").classList.add("hide");
    };
    if (window.innerWidth <= 300) {
        document.getElementById("nav-menu").style.width = "100%";
    } else {
        document.getElementById("nav-menu").style.width = "300px";
    };
}, 1);