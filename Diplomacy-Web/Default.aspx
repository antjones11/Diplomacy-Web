<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="Diplomacy_Web._Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">

    <link rel="stylesheet" type="text/css" href="Content/style.css" />
    <link href='https://fonts.googleapis.com/css?family=Ruluko' rel='stylesheet'>
    <script type="text/javascript" src="https://api.tiles.mapbox.com/mapbox.js/plugins/turf/v2.0.0/turf.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/leaflet.js"></script>
    <link href='https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/leaflet.css' rel='stylesheet' />
    <script type="text/javascript" src="https://api.mapbox.com/mapbox.js/v3.1.1/mapbox.js"></script>
    <link href='https://api.mapbox.com/mapbox.js/v3.1.1/mapbox.css' rel='stylesheet' />

    <%--<script type="text/javascript" src="https://rawgit.com/henrythasler/Leaflet.Geodesic/master/Leaflet.Geodesic.min.js"></script>--%>

    <%--<div id="mapid" style="height:100%;width:100%;position:fixed; left:0;"></div>--%>

    <div id="pnlNationActions" > <!--style="display:none;"-->
      <div class="col-sm-10 form-group-lg" style="margin-left: auto;margin-right: auto;">
        <center><h4 style="margin-top:10px;">Diplomatic Actions</h4></center>
        <!-- <center><h5 style="margin-top:10px;">Make Offer <i class="fa fa-arrow-alt-circle-right"></i></h5></center> -->
              <div class="btn-group" data-toggle="buttons" style="display: grid;">
                  <label class="btn btn-block">Open Embassy</label>
                  <label class="btn btn-block disabled">Regions</label>
                  <label class="btn btn-block disabled">Request Trade Agreement</label>
                  <label class="btn btn-block disabled">Give/Request Resources</label>
              </div>
          <!-- <button class="btn btn-outline-success" id="saveTestBtn" onclick="saveTest()" type="submit">
              Save Test
          </button> -->
      </div>
    </div>

<!-- <div id="otherWikiArticle"></div> -->
<div class="container-fluid">
  <div id="otherWikiArticle" class="leftpane"></div>

  <div id="map" class="middlepane">
  </div>

  <div class="lowermiddlepane">
  <div class="list-group" style="max-height: 100%; overflow: auto;">
  <a href="#" class="list-group-item list-group-item-action list-group-item-danger" onclick="changeNation(this)">Republic of Shurigawa <i class="far fa-frown"></i></a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-success" onclick="changeNation(this)">Socialist Republic of Zhenul <i class="far fa-smile"></i></a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-warning" onclick="changeNation(this)">Principality of Dragovania <i class="far fa-meh"></i></a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-warning" onclick="changeNation(this)">Kingdom of Gardeland <i class="far fa-meh"></i></a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-danger" onclick="changeNation(this)">Kingdom of Sabia and Verona <i class="far fa-frown"></i></a>

  <a href="#" class="list-group-item list-group-item-action list-group-item-danger" onclick="changeNation(this)">Republic of Shurigawa <i class="far fa-frown"></i></a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-success" onclick="changeNation(this)">Socialist Republic of Zhenul <i class="far fa-smile"></i></a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-warning" onclick="changeNation(this)">Principality of Dragovania <i class="far fa-meh"></i></a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-warning" onclick="changeNation(this)">Kingdom of Gardeland <i class="far fa-meh"></i></a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-danger" onclick="changeNation(this)">Kingdom of Sabia and Verona <i class="far fa-frown"></i></a>
</div>

  </div>
  <div id="otherWikiArticle2" class="rightpane"></div>
</div>


    <script>

var mapLayer = L.map('map', {
  zoomAnimation: false,
  maxZoom: 10,
  minZoom: 8
});
var pid = 'karan44.pdmio34k';
var at = 'pk.eyJ1IjoiYW5keXIwMGQiLCJhIjoiY2pqcGZ5ZXpwN2dnNDNrcjU4anlxeXU4NyJ9.x9IwV_NjVmoV9zR059rsTg';
L.tileLayer('https://api.tiles.mapbox.com/v4/mapbox.pirates/{z}/{x}/{y}.png?access_token={accessToken}', {
  id: pid,
  accessToken: at
}).addTo(mapLayer);

var polygon1 = turf.polygon([
  [
    [
              4.9603271484375,
              52.370568669179654
            ],
            [
              4.393157958984375,
              52.21013126818195
            ],
            [
              4.10064697265625,
              51.986571643810834
            ],
            [
              4.299774169921875,
              51.896833883012484
            ],
            [
              4.563446044921875,
              51.90784911650056
            ],
            [
              4.622497558593749,
              51.892596535517995
            ],
            [
              4.684295654296875,
              51.89513899196507
            ],
            [
              4.83123779296875,
              51.94003200599863
            ],
            [
              5.283050537109375,
              52.29756190868707
            ],
            [
              4.9603271484375,
              52.370568669179654
            ]
  ]
], {
  "fill": "#00000F",
  "stroke": "#00000F",
  "stroke-width": 1,
  "label": "Poly1",
});

var polygon2 = turf.polygon([
  [
    [
              4.643096923828125,
              52.74876246626462
            ],
            [
              4.601898193359375,
              52.54128465552713
            ],
            [
              4.508514404296875,
              52.34708539110632
            ],
            [
              4.379425048828125,
              52.19245608825017
            ],
            [
              4.384918212890625,
              52.155399579752284
            ],
            [
              5.016632080078125,
              52.35715118125809
            ],
            [
              5.016632080078125,
              52.633896356754036
            ],
            [
              4.643096923828125,
              52.74876246626462
            ]
  ]
], {
  "fill": "#0000FF",
  "stroke": "#0000FF",
  "stroke-width": 1,
  "label": "Poly2", 
});

var polyOverlap = turf.intersect(polygon1, polygon2);
//var poly1Diff = turf.difference(polygon1, polygon2);
//var poly2Diff = turf.difference(polygon2, polyOverlap);

polyOverlap.properties = {
  "fill": "#FE0000",
  "stroke": "#FF0000",
  "stroke-width": 2.5,
  "label": "Poly 1 & Poly 2 disputed overlap!", 
  //"popup": content_flor,
  //"otherStuff": 'abc123'
};

//poly1Diff.properties = {
//  "fill": "#4E0000",
//  "stroke": "#FF0000",
//  "stroke-width": 1,
//  "label": "Poly 1 minus Overlap", 
//};
//poly2Diff.properties = {
//  "fill": "#990000",
//  "stroke": "#FF0000",
//  "stroke-width": 1,
//  "label": "Poly 2 Minus Overlap", 
//  };

//L.mapbox.featureLayer().setGeoJSON(polygon1).addTo(mapLayer);
//L.mapbox.featureLayer().setGeoJSON(polygon2).addTo(mapLayer);
//L.mapbox.featureLayer().setGeoJSON(polyOverlap).addTo(mapLayer);
var Poly1Layer = L.mapbox.featureLayer(polygon1).addTo(mapLayer);
var Poly2Layer = L.mapbox.featureLayer(polygon2).addTo(mapLayer);
var OverLapLayer = L.mapbox.featureLayer(polyOverlap)
			.addTo(mapLayer);


OverLapLayer.eachLayer(function (layer) {
			layer.bindPopup('<strong>' + layer.feature.properties.label + '</strong>');
		})
    
OverLapLayer.on('mouseover', function (e) {
			e.layer.openPopup();
		});
    
OverLapLayer.on('mouseout', function (e) {
			e.layer.closePopup();
		});

OverLapLayer.on('click', function (e) {
			alert(polyOverlap.properties.label);
})

Poly1Layer.on('click', function (e) {
			alert(polygon1.properties.label);
})

Poly2Layer.on('click', function (e) {
			alert(polygon2.properties.label);
})

mapLayer.setView([52.3, 4.7], 9);


    </script>


</asp:Content>
