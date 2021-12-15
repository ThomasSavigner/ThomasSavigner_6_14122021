//  Imports des composants
const express = require('express'); //  Framework
const app = express();

require('dotenv').config();     //  Variables d'environnement
const mongoose = require('mongoose');   //  Plugin cluster

//  Connexion du cluster à l'API
mongoose.connect(process.env.DBPROCESSCONNECT,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

module.exports = app;