// Install Express with `npm install express`
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true })); // to parse URL-encoded data

app.post("/submit-form", (req, res) => {
    const { name, email } = req.body;
    console.log("Name:", name);
    console.log("Email:", email);
    // Save data to a database or send a response
    res.send("Form submitted successfully");
});

app.listen(5500, () => {
    console.log("Server is running on port 3000");
});
