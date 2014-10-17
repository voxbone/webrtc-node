var crypto = require('crypto');
var configuration = require('./configuration');

var cleanHmacDigest = function (hmac) {
    while ((hmac.length % 4 != 0)) {
        hmac += '=';
    }
    hmac = hmac.replace('/ /g', '+');
    return hmac;
};

var WebRtcController = function () {
    var self = this;
    self.key = null;
    self.expires = null;

    self.createKey = function (user) {
        self.username = configuration.voxbone.webrtc.default_username;
        self.secret = configuration.voxbone.webrtc.default_secret;
        console.log(configuration);
        console.log('Generating key for user %s/%s', self.username, self.secret);
        var hmac = crypto.createHmac('sha1', self.secret);
        self.expires = Math.round(Date.now()/1000) + 300;
        var text = self.expires + ':' + self.username;
        hmac.update(text);
        self.key = cleanHmacDigest(hmac.digest('base64'));
        return '{ key: \'' + self.key + '\', expires: ' + self.expires + ', username: \'' + self.username + '\'}';
    };
};

module.exports = WebRtcController;