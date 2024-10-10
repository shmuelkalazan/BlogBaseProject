/**
 * @swagger
 * /sample:
 *   get:
 *     summary: Returns a sample message
 *     responses:
 *       200:
 *         description: A successful response
 */
const express = require('express');
const router = express.Router();

router.get('/sample', (req:any, res:any) => {
  res.json({ message: 'This is a sample message' });
});

module.exports = router;