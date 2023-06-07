var express = require('express');
// const session = require("express-session");
var router = express.Router();

 router.get('/', async (req, res) => {
  let arg = req.body.zip;
  console.log(arg);
  //req.session.zipCode = arg;
  const monster = await getMonster(arg);
   console.log(monster);

   res.render('index', monster);
 });

 router.post('/', async (req, res) => {
  let arg = 97303;
  console.log(req.body.zip);
  //req.session.zipCode = arg;
  const monster = await getMonster(arg);
   console.log(monster);

   res.render('index', monster);
 });

module.exports = router;

let fetch = require("node-fetch");

async function getMonster(arg) {
  let responsePromise = await fetch(
    "https://www.zipcodeapi.com/rest/8XRXxtq7l39FKLUCXdNP6mbED0DaXEzIJsmMQbBCatQFS9u1DVP1hC9ueP7bgzJv/distance.json/" + arg + "/82190/mile"
  );
  let json = await responsePromise.json();
  console.log(json);
  return json;
}