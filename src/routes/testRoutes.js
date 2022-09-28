const router = require('express').Router();
const { getTest, createTest, updateTest, deleteTest } = require('../controllers/testController');

/**
 * @openapi
 * /api/tests:
 *   get:
 *     tags:
 *       - Tests
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: string
 *                   example: "true"
 *                 message:
 *                   type: string
 *                   example: Getting test
 */
router.get('/tests', getTest);

/**
 * @openapi
 * /api/tests:
 *   post:
 *     tags:
 *       - Tests
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: string
 *                   example: "true"
 *                 message:
 *                   type: string
 *                   example: Creating test
 */
router.post('/tests', createTest);

/**
 * @openapi
 * /api/tests:
 *   put:
 *     tags:
 *       - Tests
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: string
 *                   example: "true"
 *                 message:
 *                   type: string
 *                   example: Updating test
 */
router.put('/tests', updateTest);

/**
 * @openapi
 * /api/tests:
 *   delete:
 *     tags:
 *       - Tests
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: string
 *                   example: "true"
 *                 message:
 *                   type: string
 *                   example: Deleting test
 */
router.delete('/tests', deleteTest);

module.exports = router;