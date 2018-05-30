// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );

        navigator.geolocation.getCurrentPosition(onGetLocationSuccess, onGetLocationError, { enableHighAccuracy: true });

        function onGetLocationSuccess(position) {
            var latitude = position.coords.latitude;
            var longtude = position.coords.longitude;
            alert(latitude + " = " + longtude);
            var myMap = L.map('map').setView([latitude, longtude], 10);

            L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(myMap);
            var myIcon = L.icon({
                iconUrl: 'images/marker-icon.png',
                shadowUrl: 'images/marker-shadow.png'
            });

            var marker = L.marker([latitude, longtude], { icon: myIcon }).bindPopup("My device!").openPopup();
            myMap.addLayer(marker);
        }

        function onGetLocationError(error) {
            alert("Can not get geolocation Error: " + error.code + " Error mas: " + error.message);
        }

        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
       // var parentElement = document.getElementById('deviceready');
       // var listeningElement = parentElement.querySelector('.listening');
       // var receivedElement = parentElement.querySelector('.received');
       // listeningElement.setAttribute('style', 'display:none;');
       // receivedElement.setAttribute('style', 'display:block;');
    }

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    }

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    }
} )();