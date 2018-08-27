var express = require("express");
var app = express();

app.use(express.static("./public/jquery"));


app.get("/",function(req,res){
	
});

app.listen(80,function(){
	console.log("OK 80");
})
