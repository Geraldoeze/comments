const express = require('express');

const commentController = require('../controllers/comment');
const router = express.Router();

router.get('/', commentController.getAllComment);

router.post('/post', commentController.addComment);

router.patch('/update', commentController.updateComment);

router.put('/point', commentController.updatePoint);

router.delete('/del/:uid', commentController.deleteComment);

module.exports = router; 