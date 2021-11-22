const express = require('express');
const router = express.Router();

const {index,login,register, admin} = require('../controllers/mainController');

let adminMiddleware = require('../middlewares/adminMiddware');


router.get('/', index);
router.get('/login', login);
router.get('/register', register);
router.get('/admin', adminMiddleware, admin);


module.exports = router;