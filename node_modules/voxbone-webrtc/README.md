# Voxbone WebRTC NPM

The Voxbone WebRTC module enables you to create and hash your credentials into a token to be sent to Voxbone's auth server using voxbone.WebRTC.init(voxrtc_config). It essentials creates that voxrtc_config key

## Install

To install the Voxbone VoxSMS module and its dependencies, simply run the following command:

`npm install voxbone-webrtc`

## How to use

### Instantiate the module

1. Add the dependency to your application

    `````
      var Voxbone = require('voxbone-webrtc');
    `````

2. Add your credentials

    ````
      var voxrtc_username = 'your_webrtc_username';
      var voxrtc_secret = 'your_webrtc_secret';
    ````

3. Create a new Voxbone object that will create the hash using the credentials

    `````
      var voxbone = new Voxbone({
          voxrtcUsername: voxrtc_username,
          voxrtcSecret: voxrtc_secret
      });
    `````

4. Send the voxrtc_config key to your front end using the voxbone.generate() function.

    `````
      router.get('/', function(req, res) {
          voxrtc_config = voxbone.generate();
          res.render('index', {});
      });
    `````
 
### Using the voxrtc_config key

/views/index.html demonstrates a sample application using the WebRTC library

1. In your view add the voxrtc_config key within the init() function to authenticate your browser

    `````
      voxbone.WebRTC.init(#{voxrtc_config});
    `````

2. You can now configure how you want your call to be set using parameters in the init() function. eg:

    `````
      function init(){
        // Set the webrtc auth server url (url below it the default one)
        voxbone.WebRTC.authServerURL = "https://webrtc.voxbone.com/rest/authentication/createToken";
        //If this is not set, a ping to each pop will be issued to determine which is the most optimal for the user
        //Default is to use the ping mechanism to determine the preferedPop.
        //voxbone.WebRTC.preferedPop = 'BE';
        // set custom event handlers
        voxbone.WebRTC.customEventHandler = eventHandlers;
        //Set the caller-id, domain name gets automatically stripped off
        //Note that It must be a valid sip uri.
        //Default value is: voxrtc@voxbone.com
        //voxbone.WebRTC.configuration.uri = "caller-id@voxbone.com";
        //Add a display name
        //voxbone.WebRTC.configuration.display_name = "";
        //Add an object or string in the X-Voxbone-Context SIP header
        //voxbone.WebRTC.context = "Here's a context string";
        /**
         ** Authenticate your browser to enable it to make calls by sending the generate 
         ** voxrtc_config (taken from your backend) to the Voxbone auth server.
         **/
        voxbone.WebRTC.init(#{voxrtc_config});
      }
    `````

  More info in the [Voxbone WebRTC Documentation](https://developers.voxbone.com/docs/webrtc/overview/)

## Resources
* [Standalone application](https://github.com/voxbone/webrtc-node)
* [Voxbone WebRTC Documentation](https://developers.voxbone.com/docs/webrtc/overview/)
* [Voxbone Github](https://github.com/voxbone)

## License

[MIT](LICENSE)

[npm-url]: https://npmjs.org/package/voxbone-webrtc
[downloads-url]: https://npmjs.org/package/voxbone-webrtc
