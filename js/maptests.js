function initMap() {


  var div = document.getElementById("map");
  var map = new google.maps.Map(div, {
    center: {lat: 41.79763176991999, lng: 140.75910257175565},
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  //map.data.loadGeoJson("polygons.json");

  //----------------------------------------------
  // Start - Adding a feature (instead of loadGeoJson for test)
  //----------------------------------------------

  // polygon paths
  var exteriorBoundary = new google.maps.Data.LinearRing([
    {lat: 41.79567213554726, lng: 140.75482176616788},
    {lat: 41.795888098191426, lng: 140.75384544208646},
    {lat: 41.79604007146779, lng: 140.75370596721768},
    {lat: 41.79621604007439, lng: 140.75369523838162},
    {lat: 41.79739981632479, lng: 140.7546071894467},
    {lat: 41.79878352706213, lng: 140.75461791828275},
    {lat: 41.79895148991592, lng: 140.75470374897122},
    {lat: 41.79899947922187, lng: 140.7548968680203},
    {lat: 41.798743535841595, lng: 140.75671004131436},
    {lat: 41.79915944331544, lng: 140.7585554011166},
    {lat: 41.79914344692405, lng: 140.7587699778378},
    {lat: 41.79895948813609, lng: 140.75889872387052},
    {lat: 41.79763176991999, lng: 140.75910257175565},
    {lat: 41.796487990607034, lng: 140.7601754553616},
    {lat: 41.79630402419653, lng: 140.76018618419766},
    {lat: 41.79618404581822, lng: 140.76005743816495},
    {lat: 41.79561614511331, lng: 140.75835155323148},
    {lat: 41.79444033470146, lng: 140.7573108561337},
    {lat: 41.794408339558885, lng: 140.75716065242887},
    {lat: 41.79443233591732, lng: 140.75695680454373},
    {lat: 41.795024243248456, lng: 140.75621651485562},
    {lat: 41.79467229900768, lng: 140.7550578005612},
    {lat: 41.794736289013386, lng: 140.7548968680203},
    {lat: 41.79567213554726, lng: 140.75482176616788}
  ]);

  var polygon = new google.maps.Data.Polygon([exteriorBoundary]);

  var feature = new google.maps.Data.Feature({
    geometry: polygon,
    properties: {
      name: "Goryo-kaku, Hokkaido, Japan",
      id: "goryokaku"
    },

  });

  // Add a feature to the data layer.
  var layer = new google.maps.Data({
    map: map
  });
  layer.add(feature);

  // Fill all polygon as red
  layer.setStyle({
    scale: 6,
    strokeColor: "white",
    strokeOpacity: 1,
    strokeWeight: 1,
    fillColor: "red",
    fillOpacity: 0.5
  });

  //----------------------------------------------
  // End - adding a feature
  //----------------------------------------------

  // Catch the click event
  layer.addListener('click', function(data_mouseEvent) {
    var feature = data_mouseEvent.feature;
    feature.toGeoJson(function(geojson){
      var infoWnd = new google.maps.InfoWindow({
        content: JSON.stringify(geojson.properties, null, 2),
        position: feature.getGeometry().getAt(0).getAt(0)
      });
      infoWnd.open(map);
      console.log(geojson.properties);
    });
  });

  layer.forEach(function(feature) {
    if (feature.getProperty('name') === "Goryo-kaku, Hokkaido, Japan" ) {
      google.maps.event.trigger(layer, 'click', {
        feature: feature
      });
    }
  });
}
google.maps.event.addDomListener(window, "load", initMap);
