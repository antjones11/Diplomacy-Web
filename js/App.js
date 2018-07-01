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
        maxZoom:11,
        minZoom:9,
        disableDefaultUI: true,
        streetViewControl: true,
        mapTypeId: 'Styled'
      };
      var div = document.getElementById('map');
      var map = new google.maps.Map(div, options);
      var styledMapType = new google.maps.StyledMapType(styles, { name: 'Styled' });
      map.mapTypes.set('Styled', styledMapType);

      var polygonOptions;
      var polygon;

      var triangleCoords = [
[36.39697,43.11541], [36.40581,43.8127], [36.39984,43.80666], [36.39913,43.80028], [36.39548,43.79472], [36.39426,43.79151], [36.39017,43.78714], [36.38552,43.78672], [36.38253,43.78526], [36.38164,43.77945], [36.37822,43.77912], [36.37536,43.77811], [36.36852,43.77779], [36.36577,43.77549], [36.36442,43.76936], [36.35979,43.76412], [36.35786,43.75399], [36.35012,43.75314], [36.34555,43.75056], [36.33228,43.73305], [36.3273,43.73288], [36.32287,43.7303], [36.31544,43.72315], [36.31227,43.71151], [36.31173,43.69764], [36.30754,43.69332], [36.29948,43.69175], [36.28964,43.67928], [36.28877,43.66911], [36.28427,43.64534], [36.27748,43.64173], [36.27332,43.64277], [36.26111,43.63386], [36.25497,43.63457], [36.25077,43.63254], [36.24767,43.62707], [36.23584,43.61826], [36.23044,43.60818], [36.21799,43.58801], [36.21026,43.5882], [36.19867,43.5769], [36.18352,43.57593], [36.18065,43.56129], [36.17158,43.5581], [36.16842,43.55173], [36.16802,43.54707], [36.17096,43.54035], [36.16051,43.53408], [36.14628,43.53663], [36.14013,43.53138], [36.13066,43.51927], [36.11447,43.50535], [36.093,43.50801], [36.0828,43.51197], [36.07292,43.5089], [36.07092,43.49521], [36.05197,43.49349], [36.04218,43.4849], [36.04257,43.46016], [36.0367,43.45052], [36.02939,43.44702], [36.02033,43.44278], [36.0161,43.43497], [36.01595,43.4173], [36.019,43.39982], [36.0101,43.38956], [36.0073,43.37386], [36.0017,43.36718], [36.00137,43.35603], [35.99883,43.34557], [35.99308,43.34149], [35.99771,43.33636], [36.00122,43.33673], [36.00936,43.33746], [36.01917,43.34162], [36.02495,43.33991], [36.02796,43.33409], [36.02794,43.3298], [36.03069,43.3262], [36.03705,43.32466], [36.04884,43.31703], [36.06,43.30291], [36.06725,43.29825], [36.07282,43.29764], [36.07893,43.3042], [36.08587,43.30302], [36.09683,43.29522], [36.11729,43.28892], [36.12308,43.28988], [36.13041,43.3041], [36.1374,43.30949], [36.14478,43.30532], [36.14902,43.29465], [36.14837,43.2852], [36.13862,43.26949], [36.13929,43.26335], [36.14572,43.26165], [36.16613,43.26973], [36.18741,43.27033], [36.18974,43.25519], [36.18896,43.24298], [36.19065,43.23447], [36.19539,43.22734], [36.201,43.22665], [36.20491,43.22837], [36.20909,43.23403], [36.21422,43.23343], [36.22021,43.22847], [36.22565,43.22146], [36.22555,43.20895], [36.22799,43.20338], [36.23331,43.20147], [36.23918,43.20094], [36.25834,43.19114], [36.26294,43.17971], [36.26745,43.17571], [36.27967,43.17337], [36.28439,43.17976], [36.29063,43.18157], [36.2979,43.17836], [36.30181,43.17298], [36.31013,43.17132], [36.31761,43.17461], [36.32605,43.16939], [36.32751,43.15957], [36.34455,43.1423], [36.3633,43.11547], [36.36908,43.1096], [36.38054,43.11285], [36.3871,43.11791]
      ];
      var points=[];
      for(var i=0; i<triangleCoords.length; i++) {
        points.push({
          lat: triangleCoords[i][0],
          lng: triangleCoords[i][1]
        });
      }

      //for (var i = 0; i < destinations.length; i++) {
          polygonOptions = {
              paths: points, //'path' was not a valid option - using 'paths' array according to Google Maps API
              strokeColor: "#EDE3D0",
              strokeWeight: "2",
              fillColor: '#598BE2',
              fillOpacity: 0.5
          };
          polygon = new google.maps.Polygon(polygonOptions);

          //map needs to be defined somewhere outside of this loop
          //I'll assume you already have that.
          polygon.setMap(map);

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
