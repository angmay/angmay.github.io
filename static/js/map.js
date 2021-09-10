// Creating map object
var myMap = L.map("map", {
  center: [40,0],
  zoom: 2
});

// Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: 'mapbox/light-v9',
  accessToken: API_KEY
}).addTo(myMap);

// var LeafIcon = L.Icon.extend({
//   options: {
//       iconSize:     [38, 95],
//   }
// });

var countries = [{"Name" : "Malaysia", "Icon" : "<img src='static/images/pictures/malaysia.jpg'>", "Coordinates" : [4.2105,101.9758] },
                  {"Name" : "Singapore", "Icon" : "<img src='static/images/pictures/singapore.JPG'>", "Coordinates" : [1.3521,103.8198] },
                  {"Name" : "Indonesia", "Icon" : "<img src='static/images/pictures/indonesia.JPG'>", "Coordinates" : [0.7893,113.9213] },
                  {"Name" : "Canada", "Icon" : "<img src='static/images/pictures/canada.JPG'>", "Coordinates" : [56.1304,-106.3468] }, 
                  {"Name" : "New Zealand", "Icon" : "<img src='static/images/pictures/nz.jpg'>", "Coordinates" : [-40.9006,174.8860] }];
                  // {"Name" : "Cuba", "Icon" : "<img src='static/images/pictures/malaysia.JPG'>", "Coordinates" : [4.2105,101.9758] }, 
                  // {"Name" : "Mexico", "Icon" : "<img src='static/images/pictures/malaysia.JPG'>", "Coordinates" : [4.2105,101.9758] }, 
                  // {"Name" : "Brazil", "Icon" : "<img src='static/images/pictures/malaysia.JPG'>", "Coordinates" : [4.2105,101.9758] }, 
                  // {"Name" : "Ireland", "Icon" : "<img src='static/images/pictures/malaysia.JPG'>", "Coordinates" : [4.2105,101.9758] }, 
                  // {"Name" : "France", "Icon" : "<img src='static/images/pictures/malaysia.JPG'>", "Coordinates" : [4.2105,101.9758] }, 
                  // {"Name" : "Italy", "Icon" : "<img src='static/images/pictures/malaysia.JPG'>", "Coordinates" : [4.2105,101.9758] }, 
                  // {"Name" : "Spain", "Icon" : "<img src='static/images/pictures/malaysia.JPG'>", "Coordinates" : [4.2105,101.9758] },
                  // {"Name" : "Portugal", "Icon" : "<img src='static/images/pictures/malaysia.JPG'>", "Coordinates" : [4.2105,101.9758] }];

// var thumbtack = new LeafIcon({iconUrl: 'static/images/pictures/thumbtack.jpg'})



countries.forEach( function(data) {
  //console.log(data)
  var lat = data["Coordinates"][0];
  var lon = data["Coordinates"][1];

  //create unique icon 

  var image = data["Icon"];
  // var marker = L.marker([lat, lon], {icon: thumbtack}).addTo(myMap);
  var marker = L.marker([lat, lon]).addTo(myMap);
  marker.bindPopup(`${image}`);
})


                      
