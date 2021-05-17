const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
app.post("/", (req, res) => {
    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    var answer = n1 / (n2 * n2);
    res.send("Your BMI is: " + answer);
})
app.listen(3000, () => {
    console.log("Server has started on port 3000!");
});