// Dependencies
var express = require('express');
//create epress app instance
var app = express();
//Routes
app.get("/:operation/:firstNum/:secondNum"), function(req, res) {
  //Parameters are received from the URL
  var operation  = req.params.operation;
  //Parameters are converted in to integers
  var firstNum = parseInt(req.params.firstNum);
  var secondNum = parseInt(req.params.secondNum);
  var result;
  //Switch statment choooses operation based on the operation parameter
  switch (operation){
    case "add":
      result = firstNum  + secondNum;
      break;
    case "subtract":
      result = firstNum - secondNum;
      break;
    case "multiply":
      result = firstNum * secondNum;
      break;
    case "divide":
      result: firstNum - secondNum;
      break;
    default:
      result: "Sorry the only valid operations are add ,subtract, multiply, and divide.";
                   }
  // We return the result back to the user in the form of a string
  res.send(result.toString());
});
// Initiate the listener.
app.listen(3003);
