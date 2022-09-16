const router = require('express').Router();
const { getTest, createTest, updateTest, deleteTest } = require('../controllers/testController');

router.get('/tests', getTest);

router.post('/tests', createTest);

router.put('/tests', updateTest);

router.delete('/tests', deleteTest);

module.exports = router;