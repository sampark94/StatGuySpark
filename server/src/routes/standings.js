const express = require("express");
const router = express.Router();
const helper = require("../helper/helper");
const standingsJsonFile = `${__dirname}/../model/standings.json`;
const standings = helper.readJSON(standingsJsonFile);

router.get("/", (req, res) => {
    return res.send(standings);
});

module.exports = router;