var express = require('express');
var router = express.Router();
var WebRtcController = require('./webRTCController');
var webRtcController = new WebRtcController();

/* GET home page. */
router.get('/', function(req, res) {
  voxrtc_config = webRtcController.createKey();
  res.render('index', { title: 'VoxRTC' });
});

module.exports = router;
