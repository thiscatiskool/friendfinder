var express = require("express");
var app = express();
var bodyparser = require ("body-parser");
var path = require("path");
var jquery = require("jquery")


var PORT = process.env.PORT || 8080;

//create an application/x-www-form-urlencoded parser
app.use(bodyparser.urlencoded({extended: true}))

//parse various different custom JSON types as JSON
app.use(bodyparser.json({type: 'application/*+json'}))

//parse some custom into a buffer
app.use(bodyparser.raw({type: 'application/vnd.custom-type'}))

//parse an HTML body into a string
app.use(bodyparser.text({type: 'text/html'}))

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function(){
    console.log("App listening on " + PORT);
});

