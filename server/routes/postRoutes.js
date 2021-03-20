const { Router } = require('express');
const { upload } = require('../controllers/postController');

const router = Router();
router.post('/post/upload', upload);

module.exports = router;
