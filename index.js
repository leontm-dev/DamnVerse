//Permanete Variablen
const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const db = require("easy-db-json");
const fs = require("fs");
const path = require("path");
//Datenbank-Einstellungen
db.setFile("Daten/fehler.json");
const FEHLER = "Daten/fehler.json";
//App Einstellungen
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")))
app.listen(2000, () => {
    fs.readFile("./console.txt", function(err, data) {
        console.log(String(data));
    });
});
//Server-Router
//Stats
const STATS = require("./Routen/Server-Routen/stats");
app.use("/stats", STATS);
//Mods
const MODS = require("./Routen/Server-Routen/mods");
app.use("/mods", MODS);
//Account
const ACCOUNT = require("./Routen/Server-Routen/account");
app.use("/account", ACCOUNT);
//Points
const POINTS = require("./Routen/Server-Routen/points");
app.use("/punkte", POINTS);
//Damn
const DAMN = require("./Routen/Server-Routen/damn");
app.use("/damnchaotix", DAMN);
//Server-Routen
app.get("/", (req, res) => {
    res.render("index")
});
app.get("/api", (req, res) => {
    res.render("api")
});
//API-Router
//Brawl Stars
const BS_API = require("./Routen/Allgemein/Brawl Stars/brawl-stars");
app.use("/api/brawl_stars", BS_API);
//Discord
const DC_API = require("./Routen/Allgemein/Discord/discord");
app.use("/api/discord", DC_API);
//Instagram
const INSTA_API = require("./Routen/Allgemein/Instagram/instagram");
app.use("/api/instagram", INSTA_API);
//TikTok
const TT_API = require("./Routen/Allgemein/TikTok/tiktok");
app.use("/api/tiktok", TT_API);
//Twitch
const TTV_API = require("./Routen/Allgemein/Twitch/twitch");
app.use("/api/twitch", TTV_API);
//YouTube
const YT_API = require("./Routen/Allgemein/YouTube/youtube");
app.use("/api/youtube", YT_API);
//DamnVerse


//Intern-Router
//Brawl Stars
const BS_INTERN = require("./Routen/Intern/Brawl Stars/brawl-stars");
app.use("/intern/brawl_stars", BS_INTERN);
//Discord
const DC_INTERN = require("./Routen/Intern/Discord/discord");
app.use("/intern/discord", DC_INTERN);
//Insta
const INSTA_INTERN = require("./Routen/Intern/Instagram/instagram");
app.use("/intern/instagram", INSTA_INTERN);
//TikTok
const TT_INTERN = require("./Routen/Intern/TikTok/tiktok");
app.use("/intern/titkok", TT_INTERN);
//Twitch
const TTV_INTERN = require("./Routen/Intern/Twitch/twitch");
app.use("/intern/twitch", TTV_INTERN);
//YouTube
const YT_INTERN = require("./Routen/Intern/YouTube/youtube");
app.use("/intern/youtube", YT_INTERN);
//DamnVerse

//Settings
/*
const GENERAL_INTERN = require("./Routen/Intern/General/general");
app.use("/intern/settings", GENERAL_INTERN);*/
