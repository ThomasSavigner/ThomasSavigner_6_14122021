
//      Mise en place du routeur Express sur les données utlisateur      

//  Import des composants
const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

//  Routes disponibles
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;