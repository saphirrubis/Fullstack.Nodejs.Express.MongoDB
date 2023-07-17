const express = require('express');
const router = express.Router();
const auth = require('../middleware/Auth');
const multer = require('../middleware/multer-vonfig') ;

const stuffCtrl = require('../controllers/stuff');

 router.use(express.json());
 
 //ajout
 router.post('/',auth, multer, stuffCtrl.createThing );

//modification        
router.put('/:id' ,auth, multer, stuffCtrl.modifyThing );

//suppression
router.delete('/:id' ,auth, stuffCtrl.deleteThing );

// lecture d'un produit
router.get('/:id',auth, stuffCtrl.getOneThing);

// lecture de tous les produits
router.get('/',auth, stuffCtrl.getAllThing );

module.exports = router;