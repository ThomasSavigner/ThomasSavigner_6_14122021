//  Imports des composants
const express = require('express'); //  Framework
const app = express();  //  Application Express

const mongoose = require('mongoose');   //  Plugin cluster
require('dotenv').config();     //  Variables d'environnement


//  Connexion du cluster à l'API
mongoose.connect(process.env.DBPROCESSCONNECT,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


/*  Implémentation de CORS : ajout des headers qui permettent 
    d'accéder à l'API depuis n'importe quelle origine (*),
    d'ajouter les headers mentionnés aux requêtes envoyées vers notre API,
    d'envoyer des requêtes avec les méthodes mentionnées
*/
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

/*  Pour gérer les requêtes POST et PUT venant de l'application front-end, 
    on a besoin d'en extraire le corps JSON. Avec ceci, Express prend toutes les requêtes
    qui ont comme Content-Type  application/json  et met à disposition leur  body 
    directement sur l'objet req
*/
app.use(express.json());

//  Import des routes
const userRoutes = require('./routes/user');

//  Enregistrement du routeur pour toutes les demandes effectuées vers /api/auth
app.use('/api/auth', userRoutes);

module.exports = app;