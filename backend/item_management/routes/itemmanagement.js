const express = require('express');
const {
    createitem,
    getallitems,
    getitem,
    deleteitem,
    updateitem,
} = require('../controllers/itemscontroller')

const router = express.Router();

//GET all 
router.get('/',getallitems)

//GET a single 
router.get('/:id',getitem)

//POST a new 
router.post('/',createitem)

//DELETE a 
router.delete('/:id', deleteitem)

//UPDATE a 
router.patch('/:id',updateitem)

module.exports = router