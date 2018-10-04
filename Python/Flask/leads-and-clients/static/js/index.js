(function () {
  var httpRequest;

  function makeRequest() {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }
    httpRequest.onreadystatechange = doIt;
    httpRequest.open('GET', 'clients');
    httpRequest.send();
  }

  function doIt() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        var pie = new d3pie("pieChart", {
          "header": {
            "title": {
              "fontSize": 22,
              "font": "verdana"
            },
            "subtitle": {
              "color": "#999999",
              "fontSize": 10,
              "font": "verdana"
            },
            "location": "pie-center",
            "titleSubtitlePadding": 12
          },
          "footer": {
            "text": "Source: me, my room, the last couple of months.",
            "color": "#999999",
            "fontSize": 11,
            "font": "open sans",
            "location": "bottom-center"
          },
          "size": {
            "canvasHeight": 480,
            "canvasWidth": 640,
            "pieInnerRadius": "35%",
            "pieOuterRadius": "100%"
          },
          "data": {
            "content": [{
                "label": httpRequest.responseText[0].first_name,
                "value": httpRequest.responseText[0].lead_count,
                "color": "#0066cc"
              },
              {
                "label": httpRequest.responseText[1].first_name,
                "value": httpRequest.responseText[1].lead_count,
                "color": "#003366"
              },
              {
                "label": httpRequest.responseText[2].first_name,
                "value": httpRequest.responseText[2].lead_count,
                "color": "#336600"
              },
              {
                "label": httpRequest.responseText[3].first_name,
                "value": httpRequest.responseText[3].lead_count,
                "color": "#669966"
              }
            ]
          },
          "labels": {
            "outer": {
              "pieDistance": 32
            },
            "inner": {
              "format": "value"
            },
            "mainLabel": {
              "font": "verdana"
            },
            "percentage": {
              "color": "#e1e1e1",
              "font": "verdana",
              "decimalPlaces": 0
            },
            "value": {
              "color": "#e1e1e1",
              "font": "verdana"
            },
            "lines": {
              "enabled": true,
              "color": "#cccccc"
            },
            "truncation": {
              "enabled": true
            }
          },
          "effects": {
            "pullOutSegmentOnClick": {
              "effect": "linear",
              "speed": 400,
              "size": 8
            }
          }
        });
      } else {
        alert('There was a problem with the request.');
      }
    }
  }

  makeRequest();
})();