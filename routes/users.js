var express = require('express');
var router = express.Router();

router.get('/', async (req, res, next) => {
  let arg = req.body.zip;
  console.log(arg);
  const monster = await getMonster(arg);
  console.log(monster);

  res.render('monsters', monster);
});

router.get("/:name", async (req, res, next) => {
  let arg = req.body.zip;
  const monGroup = await getMonster(arg);
  console.log(monGroup);

  const monsterName = req.params;

  console.log("--------------------");
  console.log(monsterName);
  console.log("--------------------");
  let index = -1;

  // monGroup.results.forEach((value, i) => {
  //   if (value.name === monsterName) {
  //     index = i;
  //   }
  // });

  let monster = monGroup;
  console.log(monster);

  res.render("monsterSingle.ejs", monster);
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