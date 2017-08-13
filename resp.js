const express = require('express')
var router = new express.Router();
var request = require('request');
module.exports =	{ fun1: function (){
	request.get(
        'https://8b1d9919776d3f441e42cb9ed1430bed:25a54d2d701a89e97b5ba282cfdee67a@appy-ki-dukan.myshopify.com/admin/products.json',
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
              console.log(body);
            //  console.log(response);
        }
    }
);

},
fun2: function (id){
    request.post(
        'https://8b1d9919776d3f441e42cb9ed1430bed:25a54d2d701a89e97b5ba282cfdee67a@appy-ki-dukan.myshopify.com/admin/orders.json',
    { json: {
  "order": {
    "inventory_behaviour": "decrement_obeying_policy",
    "line_items": [
      {
        "variant_id": id,
        "quantity": 1
      }
    ]
  }
  
} },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log("the order is successfully placed");
        }
        
    }
);
}

};













