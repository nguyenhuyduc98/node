const path = require("path");
const express = require("express");
const app = express();
const { engine } = require("express-handlebars");

const port = 2000;

app.use(express.static(path.join(__dirname, "public")));

app.engine("hbs", engine({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
    res.render("home");
});

app.listen(port, () => console.log(`Port: ${port}`));
