const express = require('express');
const { authenticateUser } = require('../middleware/auth');
const {
    createitem,
    getallitems,
    getitem,
    deleteitem,
    updateitem,
} = require('../controllers/itemscontroller')

const router = express.Router();

//GET all 
router.get('/', getallitems)

//GET a single 
router.get('/:id',getitem)

//POST a new 
router.post('/',authenticateUser, createitem)

//DELETE a 
router.delete('/:id',authenticateUser, deleteitem)

//UPDATE a 
router.patch('/:id',authenticateUser, updateitem)

module.exports = router