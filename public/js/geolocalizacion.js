
// -------- PARA MAPA ---------------------------
var http_request = false,
 glocal = [];

function myMap(json) {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: new google.maps.LatLng(-2.14,-79.9),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var infowindow = new google.maps.InfoWindow();
  var marker, i;

  for (i = 0; i < json.length; i++) {
    console.log(json.length);
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(json[i]['latitud'], json[i]['longitud']),
      map: map
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(json[i][0]);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }
}

//------------------ AJAX -----------------------
function makeRequest(url) {
    http_request = false;
    if (window.XMLHttpRequest) { // Mozilla, Safari,...
        http_request = new XMLHttpRequest();
        if (http_request.overrideMimeType) {
            http_request.overrideMimeType('text/plain');
        }
    } else if (window.ActiveXObject) { // IE
        try {
            http_request = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                http_request = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {}
        }
    }
    if (!http_request) {
        alert('Falla :( No es posible crear una instancia XMLHTTP');
        return false;
    }
    http_request.onreadystatechange = alertContents;
    http_request.open('GET', url, true);
    http_request.send(null);
}

function alertContents() {
    if (http_request.readyState == 4) {
        if (http_request.status == 200) {
            var data = JSON.parse(http_request.responseText);
            var datosweb = document.getElementsByClassName('map');
            //datos JSON los almacena en un arreglo
            //console.log(json.length);
            //console.log(typeof locales[0].agencia);
            //console.log(typeof parseInt(locales[0].latitud));
            //console.log(typeof parseInt(locales[0].longitud));
            for(var x in data){
              glocal.push(data[x]);
            }
            myMap(glocal);
            locales(glocal);
        } else {
            alert('Hubo problemas con la petición.');
        }
    }
}

function locales(json){
  var agregarlocal = document.getElementById('locales');
  for (i = 0; i < json.length; i++) {
    var liag = document.createElement('h5');
    var lidir = document.createElement('p');
    liag.setAttribute("class","glyphicon glyphicon-map-marker")
    var agencia = json[i]['agencia'];
    var direccion = json[i]['direccion'];
    console.log(agencia);
    console.log(typeof agencia);
    liag.textContent = " "+agencia;
    lidir.textContent = direccion;
    agregarlocal.appendChild(liag);
    agregarlocal.appendChild(lidir);
  }
}

window.onload = function() {
    makeRequest("../data/locales.json");
}
