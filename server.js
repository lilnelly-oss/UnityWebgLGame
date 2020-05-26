var express = require('express');
var app = express();
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true}));
var router = express.Router();

app.get('/', function(req, res){
   res.render(__dirname + "/views/index.ejs")
});

app.listen(3000, () => {
    console.log("Started On Port 3000");
})