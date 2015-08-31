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

```
project
│   README.md      (this exact file)
│   package.json   (all the required app dependencies, including voxbone-webrtc-npm for auth key generation)
|   app.js     	   (App logic: uses credentials for hashing mechanism and pass generated key to front-end for browser auth.)
│
└───/bin
|   │   www 	   (this is where you can set the port for running the app, default is 3000)
|
└───/views
    │   index.jade (App front-end, contains webRTC logic and where call settings/config, eg: caller-ID, context-header, etc..)
```
