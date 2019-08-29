const express = require("express");
const bodyParser = require("body-parser");
const chalk = require("chalk");
const cors = require("cors");
const PORT = process.env.PORT || process.argv[2] || 8080;
const statsRouter = require("./routes/stats");
const standingsRouter = require("./routes/standings")

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use("/stats", statsRouter);
app.use("/standings", standingsRouter);

app.listen(PORT, () => {
    console.log(
        chalk.italic(`Now listening on ${chalk.bold.underline.yellow(PORT)}...`)
    );
});