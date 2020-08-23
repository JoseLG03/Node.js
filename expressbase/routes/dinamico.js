var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(peticion, res) {
  res.send('Informacion dinamica');
});

router.get('/:datourl', function(peticion, res) {
  res.send("Informacion dinamica: " + peticion.params.datourl);
});

module.exports = router;
