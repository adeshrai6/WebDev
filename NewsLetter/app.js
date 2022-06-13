const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const e = require("express");
const https = require("https");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));


app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res) {
    let firstName = req.body.fName;
    let lastName = req.body.lName;
    let email = req.body.email;

    const data = {
        members: [
            {
                email_address: email,
                status: "subcribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data); 

    const url = "https://us18.api.mailchimp.com/3.0/lists/b83768305c"

    https.request(url, options, function(response) {

    })
});

app.listen(3000, function() {
    console.log("Server is running on port 3000");
});

// Api Key
f26de0052b3b99fe7e9d0eb428e4e7c6-us18

// List key
b83768305c