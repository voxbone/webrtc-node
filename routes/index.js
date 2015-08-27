var express = require('express');
var router = express.Router();
var Voxbone = require('voxbone-webrtc');

//Your Voxbone WebRTC credentials
var voxrtc_username = 'voxbonedev';
var voxrtc_secret = 'wow-RTC14';

//New Voxbone Object
var voxbone = new Voxbone({
	voxrtcUsername: voxrtc_username,
	voxrtcSecret: voxrtc_secret
});


/* Launch  index view*/
router.get('/', function(req, res) {
 	voxrtc_config = voxbone.generate();
	res.render('index');
});

module.exports = router;
