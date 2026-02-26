const express = require('express');
const router = express.Router();

const todoController = require('../controllers/todoController.js');

router.post('/',todoController.createTodo);




module.exports = router;