var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(peticion, res,next) {
  res.send('informacion dinamica');
});

router.get('/:datourl', function(peticion, res,next) {
  res.send("informacion dinamica: " + peticion.params.datourl);
});

module.exports = router;
