//Datei-Einstellungen
const express = require("express");
const db = require("easy-db-json");
const router = express.Router();
//Datenbank
db.setFile("Daten/Twitch/stats.json");
db.setFile("Daten/Twitch/messages.json");
const TTV_stats = "Daten/Twitch/stats.json";
const TTV_nachrichten = "Daten/Twitch/messages.json";
//Routen
router.get("/", (req, res) => {
    res.status(400).json({
        data: {
            error: "Diese URL ist nicht im System!"
        }
    })
});
router.get("/profil", (req, res) => {
    res.status(200).json({
            data: {
                name: db.get("Twitch", TTV_stats).data[0].display_name,
                beschreibung: db.get("Twitch", TTV_stats).data[0].description,
                follower: db.get("Follower", TTV_stats).total,
                aufrufe: db.get("Twitch", TTV_stats).data[0].view_count
            }
    });
});
router.get("/follower", (req, res) => {
    res.status(200).json({
        data: {
            follower: parseInt(db.get("Follower", TTV_stats).total)
        }
    });
});
router.get("/name", (req, res) => {
    res.status(200).json({
        data: {
            name: String(db.get("Twitch", TTV_stats).data[0].display_name)
        }
    });
});
router.get("/beschreibung", (req, res) => {
    res.status(200).json({
        data: {
            beschreibung: String(db.get("Twitch", TTV_stats).data[0].description)
        }
    });
});
router.get("/aufrufe", (req, res) => {
    res.status(200).json({
        data: {
            aufrufe: parseInt(db.get("Twitch", TTV_stats).data[0].view_count)
        }
    });
});
router.get("/nachrichten?name=:user", (req, res) => {
    if (db.has(String(req.params.user), TTV_nachrichten)) {
        res.status(200).json({
            data: {
                nachrichten: parseInt(db.get(String(req.params.user), TTV_nachrichten))
            }
        });
    } else {
        res.status(404).json({
            data: {
                error: "Dieser Nutzer existiert in der Datenbank leider nicht!"
            }
        })
    };
});
//Exports
module.exports = router