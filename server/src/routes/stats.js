const express = require("express");
const router = express.Router();
const helper = require("../helper/helper");
const statJsonFile = `${__dirname}/../model/stats.json`;
const stats = helper.readJSON(statJsonFile);

router.get("/", (req, res) => {
    return res.send(stats);
});

module.exports = router;