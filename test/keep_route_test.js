/**
 * convert keep route mapbox vector tileset into the geojson format.
 */

var vtgeojson = require('..')
const fs = require('fs');

// grab vector tiles and make 'em into geojson
var featurecollection = { type: 'FeatureCollection', features: [] }

let tiles = 'tilejson+https://api-global.mapbox.cn/v4/keeptech.aiyevhr1.json?secure&access_token=pk.eyJ1Ijoia2VlcHRlY2giLCJhIjoiY2lzdHh4dWY5MDBsZTJ1cWdwczd2bHRmbiJ9.jBbnn8TuFb5lLu_Z75eKTw'
vtgeojson(tiles, { tilesOnly: false, minzoom: 13 })
  .on('data', function (data) {
    featurecollection.features.push(data);
  })
  .on('end', function () {
    console.log(featurecollection.features.length);
    // write JSON string to a file
    fs.writeFileSync('keep_route_5km.json', JSON.stringify(featurecollection));
  })