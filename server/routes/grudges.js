const express = require('express');
const grudges = require('../controllers/grudges');

const router = express.Router();

router.post('/', grudges.createGrudge);
router.get('/', grudges.getAllGrudges);
router.get('/:id', grudges.getSingleGrudge);
router.put('/:id', grudges.updateGrudge);
router.delete('/:id', grudges.deleteGrudge);
router.delete('/', grudges.deleteAllGrudges);

module.exports = router;
