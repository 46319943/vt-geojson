/**
 * convert keep route mapbox vector tileset into the geojson format.
 */

var vtgeojson = require('..')

// grab vector tiles and make 'em into geojson
var featurecollection = { type: 'FeatureCollection', features: [] }

let tiles = 'tilejson+https://api-global.mapbox.cn/v4/keeptech.aiyevhr1.json?secure&access_token=pk.eyJ1Ijoia2VlcHRlY2giLCJhIjoiY2lzdHh4dWY5MDBsZTJ1cWdwczd2bHRmbiJ9.jBbnn8TuFb5lLu_Z75eKTw'
vtgeojson(tiles, { tilesOnly: true })
  .on('data', function (data) {
    featurecollection.features.push(data);
    console.log(data)
  })
  .on('end', function () {
    // document.write('<pre>' + JSON.stringify(featurecollection, null, 2) + '</pre>')
    console.log(featurecollection);
    console.log(featurecollection.features.length);
  })