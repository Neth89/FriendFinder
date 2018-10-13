//path
var path = require("path");

//direct file to correct path
module.exports = function(app){
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });

    app.use(function(req, res){
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });
}
















/*
app.get("/survey", function(app){
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

app.get("/home", function(req, res){
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

//default path
app.get("*", function(req, res){
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

};*/