var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(peticion, res, next) {
  res.render('dinamico');
});

router.get('/:datoURL/:ID', function(peticion, res, next) {
  res.render('dinamico', {
    datos:{
      titulo:peticion.params.datoURL,
      ID:peticion.params.ID,
    }
  });
});
  //res.send("Informacion dinamica: " + peticion.params.datourl);


module.exports = router;
