//TODO restrict movement around the selected area https://stackoverflow.com/questions/3818016/google-maps-v3-limit-viewable-area-and-zoom-level

function setMapAddress(address) {

  var geocoder = new google.maps.Geocoder();
  geocoder.geocode( { address : address }, function( results, status ) {
    if( status == google.maps.GeocoderStatus.OK ) {
      var location = results[0].geometry.location;
      var styles = [

  {
  featureType: 'road',
  stylers: [{ visibility: "off" }]
  },
{
  featureType: "all",
  elementType: "labels",
  stylers: [
      { visibility: "off" }
  ]
},
{
  featureType: 'landscape.natural',
  elementType: 'geometry',
  stylers: [
      { visibility: "off" }
  ]
},
{
  featureType: "administrative.country",
  elementType: "geometry.stroke",
  stylers: [
      { visibility: "off" }
  ]
}
];
      var options = {
        mapTypeControlOptions: {
          mapTypeIds: ['Styled']
        },
        center: location,
        zoom: 10,
        maxZoom:10,
        minZoom:10,
        disableDefaultUI: true,
        streetViewControl: true,
        mapTypeId: 'Styled'
      };
      var div = document.getElementById('map');
      var map = new google.maps.Map(div, options);
      var styledMapType = new google.maps.StyledMapType(styles, { name: 'Styled' });
      map.mapTypes.set('Styled', styledMapType);
      // var iconBase = 'http://petermisur.co.nz/wp-content/uploads/2016/02/mapicon-sml.png';
      // var marker = new google.maps.Marker({
      //   map: map,
      //   draggable: false,
      //   flat: true,
      //   position: results[0].geometry.location,
      //   icon: iconBase,
      //   title: "Shakespeare Orthopaedic Institute"
      // });
      // Marker
      // var contentString = '<div><h4>Shakespeare Orthopaedic Institute</h4><p>Level 1</br>209 Shakespeare Road</br>Milford, Auckland 0620</p><p><a href="https://maps.google.com/?q='+ location +'" target="_blank">View on Google Maps</a></p></div>';
      //
      // var infowindow = new google.maps.InfoWindow({
      //   content: contentString
      // });
      //
      // google.maps.event.addListener(marker, 'click', function() {
      //   infowindow.open(map, marker);
      // });

      var destinations = [{lat: 36.41444, lng: 43.11009}, {lat: 36.33179, lng: 43.06649},{lat: 36.28420, lng: 43.15953},{lat: 36.29583, lng: 43.22064},{lat: 36.41444, lng: 43.11009}];
      var polygonOptions;
      var polygon;
      //for (var i = 0; i < destinations.length; i++) {
          polygonOptions = {
              paths: destinations, //'path' was not a valid option - using 'paths' array according to Google Maps API
              strokeColor: "#EDE3D0",
              strokeWeight: "2",
              fillColor: '#598BE2',
              fillOpacity: 0.5
          };
          polygon = new google.maps.Polygon(polygonOptions);

          //map needs to be defined somewhere outside of this loop
          //I'll assume you already have that.
          polygon.setMap(map);
      //}

    }
  });
}

function changeNation(nation) {
  var x = nation.text;
  console.log(x);

  $('#otherWikiArticle2').empty()

  $('#otherWikiArticle2').wikiblurb({
      wikiURL: "https://micronations.wiki",
      apiPath: '',
      section: 0,
      page: x,
      removeLinks: true,
      type: 'infobox',
      customSelector: '',
      callback: function() {
          console.log('Data Loaded...');
          setMapAddress( "mosul, iraq" );
      }
  });
}
