// TODO: app.js Déclaration

// SERVER
const express = require('express');
const app = express();

// BASE DE DONNEES
const mongoose = require('mongoose');

// USER
const userRoutes = require('./routes/user');

// DONNEES TRANSFORM JSON
const bodyParser = require('body-parser');

const sauceRoutes = require('./routes/sauce');

// TODO: app.js Instruction
// BASE DE DONNEES
mongoose
    .connect(
        'mongodb+srv://AlchTech:5nAExNvXmC5Irc58@cluster0.ykpoo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
        {useNewUrlParser : true, useUnifiedTopology : true},
        )
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

// CORS Autorisation
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization',
  );
  res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, DELETE, PATCH, OPTIONS',
  );
  next();
});

// SERVER
app.use(
    (req, res,
     next) => { res.json({message : 'Votre requête a bien été reçue !'}); });

app.use(bodyParser.json());

app.use('/api/auth', userRoutes);

module.exports = app;
