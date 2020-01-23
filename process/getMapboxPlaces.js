const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const MY_TOKEN = `pk.eyJ1IjoiZG9jazQyNDIiLCJhIjoiY2pjazE5eTM2NDl2aDJ3cDUyeDlsb292NiJ9.Jr__XbmAolbLyzPDj7-8kQ`
const geocodingService = mbxGeocoding({ accessToken: MY_TOKEN });

let match = {};

geocodingService.forwardGeocode({
    query: 'Cherokee'
    //limit: 2
  })
    .send()
    .then(response => {
      console.log(response.body)
      match = response.body;
    });