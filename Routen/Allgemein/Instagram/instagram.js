const express = require("express");
const db = require("easy-db-json");
const { application } = require("express");
const router = express.Router();
//Datenbank
db.setFile("Daten/Instagram/stats.json");
const INSTA_stats = "Daten/Instagram/stats.json";
//Routen
router.get("/profil", (req, res) => {
    res.status(200).json({
        data: {
            name: String(db.get("Stats", INSTA_stats).data.user.username),
            verifiziert: db.get("Stats", INSTA_stats).data.user.is_verified,
            gesamt_name: db.get("Stats", INSTA_stats).data.user.full_name,
            privat: db.get("Stats", INSTA_stats).data.user.is_private,
            profilbild: db.get("Stats", INSTA_stats).data.user.profile_pic_url,
            externer_link: db.get("Stats", INSTA_stats).data.user.external_url,
            biograohie: db.get("Stats", INSTA_stats).data.user.biograohy,
            kategorie: db.get("Stats", INSTA_stats).data.user.category,
            follower: db.get("Follower", INSTA_stats).data.user.edge_followed_by.count
        }
    });
});
router.get("/name", (req, res) => {
    res.status(200).json({
        data: {
            name: String(db.get("Stats", INSTA_stats).data.user.username)
        }
    })
});
router.get("/verifiziert", (req, res) => {
    res.status(200).json({
        data: {
            verifiziert: db.get("Stats", INSTA_stats).data.user.is_verified
        }
    })
});
router.get("/gesamt_name", (req, res) => {
    res.status(200).json({
        data: {
            gesamt_name: db.get("Stats", INSTA_stats).data.user.full_name
        }
    })
});
router.get("/privat", (req, res) => {
    res.status(200).json({
        data: {
            privat: db.get("Stats", INSTA_stats).data.user.is_private
        }
    })
});
router.get("/profilbild", (req, res) => {
    res.status(200).json({
        data: {
            profilbild: db.get("Stats", INSTA_stats).data.user.profile_pic_url
        }
    })
});
router.get("/externer_link", (req, res) => {
    res.status(200).json({
        data: {
            externer_link: db.get("Stats", INSTA_stats).data.user.external_url
        }
    })
});
router.get("/biographie", (req, res) => {
    res.status(200).json({
        data: {
            biograohie: db.get("Stats", INSTA_stats).data.user.biograohy
        }
    })
});
router.get("/kategorie", (req, res) => {
    res.status(200).json({
        data: {
            kategorie: db.get("Stats", INSTA_stats).data.user.category
        }
    })
});
router.get("/follower", (req, res) => {
    res.status(200).json({
        data: {
            follower: db.get("Follower", INSTA_stats).data.user.edge_followed_by.count
        }
    })
});
//Exports
module.exports = router;