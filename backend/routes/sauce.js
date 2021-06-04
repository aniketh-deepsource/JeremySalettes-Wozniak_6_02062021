const express = require('express');
const router = express.Router();
// SCHEMA DONNEES
const Sauce = require('../models/Sauce');
const sauceCtrl = require('../controllers/sauce');

// DONNEES ENVOYER DU FORMULAIRE AJOUT ARTICLE
router.post('/', sauceCtrl.createSauce);

// MODIFIER ARTICLE
router.put('/:id', (req, res, next) => {
  Sauce.updateOne({_id : req.params.id}, {...req.body, _id : req.params.id})
      .then(() => res.status(200).json({message : 'Objet modifier'}))
      .catch((error) => res.status(400).json({error}));
});

// SUPPRESSION ARTICLE
router.delete('/:id', (req, res, next) => {
  Sauce.deleteOne({_id : req.params.id})
      .then(() => res.status(200).json({messag : 'Objet supprimer'}))
      .catch((error) => res.status(400).json({error}));
});

// RECUPERER ID PARTICULIER
router.get('/:id', (req, res, next) => {
  Sauce.find({_id : req.params.id})
      .then(
          (sauce) => res.status(200).json(sauce),
      );
});

router.get('/', (req, res, next) => {
  Sauce.find()
      .then((sauces) => res.status(200).json(things))
      .catch((error) => res.status(400).json({error}));
});

module.exports = router;
