    //  Modèle de données utilisateur

//  Import des packages dans le script
const mongoose = require('mongoose');   //  plugin pour lier la base de données à l'application
const uniqueValidator = require('mongoose-unique-validator');   //  plugin pour ne pas créer de doublons dans la base 

//  Création du modèle de données des users
const userSchema = mongoose.Schema({

    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
  
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);