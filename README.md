Voxbone WebRTC Node.js Standalone App
=========================

#####1. Install the dependencies

```
    npm install
```

#####2. Change your credentials in app.js

```
    var voxrtc_username= 'your_voxbone_webrtc_username';
	var voxrtc_secret = 'your_voxbone_webrtc_secret';

```

#####3. Start the application

```
    npm start
```    

#####4. Access it via [http://localhost:3000](http://localhost:3000)

#####5. Structure
/bin
--------- www 	     (this is where you can set the port for running the app, default is 3000)
/views
--------- index.jade (this is the front-end of the app, where all the webRTC logic lies and where you can configure your call settings, eg: caller-ID, context-header, display_name, etc..)

README.md 		(this exact file)

app.js 			(this is the application logic itself: where you add your credentials for the hashing mechanism and pass the generated key to your front-end to authenticate your browser.)

package.json 		(all the required dependencies for this app to work, including voxbone-webrtc-npm which takes care of the hashing mechanism and auth key generation)
