const express = require('express');

const replyController = require('../controllers/replies');
const router = express.Router();

router.get('/', replyController.getAllReplies);

router.post('/post', replyController.addReply);

router.patch('/update', replyController.updateReply);

router.put('/point', replyController.updatePoint);

router.delete('/del/:uid', replyController.deleteReply);

module.exports = router;