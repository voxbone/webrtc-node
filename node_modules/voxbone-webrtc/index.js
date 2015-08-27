var crypto = require('crypto');


var _voxrtc = {
  username: '',
  secret: ''
};

var Voxbone = function(opts) {
  _voxrtc.username = opts.voxrtcUsername;
  _voxrtc.secret = opts.voxrtcSecret;
};

Voxbone.prototype = {
    //Delivery Report constructor that passes parameters to the http sendSMSRequest request
   generate: function(){

    var cleanHmacDigest = function (hmac) {
        while ((hmac.length % 4 != 0)) {
            hmac += '=';
        }
        hmac = hmac.replace('/ /g', '+');
        return hmac;
    };

    var username = _voxrtc.username;
    var secret = _voxrtc.secret;
    var hmac = crypto.createHmac('sha1', secret);
    var expires = Math.round(Date.now()/1000) + 300;
    var text = expires + ':' + username;
    hmac.update(text);
    var key = cleanHmacDigest(hmac.digest('base64'));
    return '{ key: \'' + key + '\', expires: ' + expires + ', username: \'' + username + '\'}';
}

};


module.exports = Voxbone;
