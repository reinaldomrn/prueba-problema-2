const { Router } = require('express');
const {
    timeZonePost,
    downloadFile
} = require('../controllers/time');

const router = Router();

router.post('/', timeZonePost);
router.get('/', downloadFile);


module.exports = router;