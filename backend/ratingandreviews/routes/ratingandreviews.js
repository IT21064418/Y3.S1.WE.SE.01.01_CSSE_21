const express = require('express');
const {
    createreview,
    getallreview,
    getreview,
    deletereview,
    updatereview,
} = require('../controllers/reviewscontroller')

const router = express.Router();

//GET all review
router.get('/',getallreview)

//GET a single review
router.get('/:id',getreview)

//POST a new review
router.post('/',createreview)

//DELETE a review
router.delete('/:id', deletereview)

//UPDATE a review
router.patch('/:id',updatereview)

module.exports = router