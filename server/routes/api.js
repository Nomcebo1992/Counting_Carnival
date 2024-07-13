const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

// Define your routes and link them to controller methods
router.get('/example', mainController.exampleMethod);

module.exports = router;

