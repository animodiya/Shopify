const express = require('express')
const app = express()
var router = new express.Router();
var path = require('path');
var re  = require( path.resolve( __dirname, "./re.js" ) );
// var a = require('./appu/re.js')


app.get("/products", function(res){
	console.log('products fetched');
	// re.fun();
	re.fun1();

	//re.fun2(43113030985);
	// re.fun.send();
});

app.get("/orders", function(res){
	console.log('placing the order');
	// re.fun();
	re.fun2(43182889353);

	//re.fun2(43113030985);
	// re.fun.send();
});


app.listen(5001, function () {
  console.log('Example app listening on port 5001!')
})
