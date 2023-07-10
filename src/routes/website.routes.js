const express = require('express')
const router = express.Router()
const websiteController = require('../controllers/website.controller');

router.get('/', websiteController.findAll);
router.post('/', websiteController.create);
router.get('/:id', websiteController.findById);
router.put('/:id', websiteController.update);
router.delete('/:id', websiteController.delete);

module.exports = router