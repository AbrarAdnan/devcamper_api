const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	//res.send('kirreee');
	res.status(200).send('get kire');
});

router.get('/:id', (req, res) => {
	res.status(200).send(`get id = ${req.params.id}`);
});

router.post('/', (req, res) => {
	res.status(200).send('post kirreee');
});

router.put('/:id', (req, res) => {
	res.status(200).send(`put id = ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
	res.status(200).send(`delete id = ${req.params.id}`);
});

module.exports = router;
