//TODO: app.js Déclaration

// SERVER
const express = require('express');
const app = express();
// BASE DE DONNEES
const mongoose = require('mongoose');

//TODO: app.js Instruction
// BASE DE DONNEES

mongoose
	.connect(
		'mongodb+srv://AlchTech:5nAExNvXmC5Irc58@cluster0.ykpoo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
		{ useNewUrlParser: true, useUnifiedTopology: true },
	)
	.then(() => console.log('Connexion à MongoDB réussie !'))
	.catch(() => console.log('Connexion à MongoDB échouée !'));

// SERVER
app.use((req, res, next) => {
	res.json({ message: 'Votre requête a bien été reçue !' });
});

module.exports = app;
