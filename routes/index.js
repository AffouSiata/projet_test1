var express = require('express');
const Control = require('../controlle/control_user');
var router = express.Router();


/* GET home page. */
router.get('/', Control.connexion)
router.post('/', Control.connexionpost)
router.get('/index', Control.inscription)
router.post('/index', Control.inscriptionpost)
router.get('/affiche', Control.affiche)

  

module.exports = router;
