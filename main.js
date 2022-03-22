// Created by: Leslie Nguyen, 2022

//initialize function called when the script loads
function initialize(){
    loadMap();
};

//function to create a table with cities and their populations
function loadMap(){
	
	//create a basemap style. You can find other options at https://leaflet-extras.github.io/leaflet-providers/preview/
	var CartoDB_Positron = L.tileLayer(
		'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', 
		{
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
			subdomains: 'abcd'
		}
	)
	
	//add this basemap style to a JS object, to which you could also add other baselayers. This object is loaded as a basemap selector as seen further down
	var baseLayers = {
		"CartoDB": CartoDB_Positron
		//,...
	};
	
	// create the map
	var mymap = L.map('mapdiv', {
		center: [45.50, -73.58]
		,zoom: 3
		,maxZoom: 18
		,minZoom: 3
		,layers: CartoDB_Positron
	});
		
	// parse json object (var geojsonData) and turn into loadable layer
	geojsonLayer = L.geoJSON(geojsonData);
	
	//add geojsonData to map
	geojsonLayer.addTo(mymap);// add json element to map
	
	//declare basemap selector widget
	var lcontrol = L.control.layers(baseLayers);
	
	//add it to the map
	lcontrol.addTo(mymap);
	
	//click on map to show lat and long values at click point
	mymap.on(type = 'click', function (ev) {
		alert(ev.latlng);
	})
};

//call the initialize function when the window has loaded
window.onload = initialize();




/*
	//function to create a table with cities and their populations
	function cities(){
		//define an array of objects for cities and population
		var cityPop = [
			{ 
				"city": "Madison",
				"population": 233209
			},
			{
				"city": "Milwaukee",
				"population": 594833
			},
			{
				"city": "Green Bay",
				"population": 104057
			},
			{
				"city": "Superior",
				"population": 27244
			}
		];

		//create the table element (w/ tagName "table")
		var table = document.createElement("table"); //In an HTML document, the document.createElement() method creates the HTML element specified by tagName, or an HTMLUnknownElement if tagName isn't recognized.

		//create a header row
		var headerRow = document.createElement("tr"); 

		//add the "City" column
		var cityHeader = document.createElement("th");
		cityHeader.innerHTML = "City"; 		//The innerHTML property sets or returns the HTML content (inner HTML) of an element.
		headerRow.appendChild(cityHeader);

		//add the "Population" column
		var popHeader = document.createElement("th");
		popHeader.innerHTML = "Population";
		headerRow.appendChild(popHeader);

		//add the row to the table (create new row; latest child of parent (which is the table?))
		table.appendChild(headerRow); //The appendChild() method appends a node (element) as the last child of an element.

		//loop to add a new row for each city
		for (var i = 0; i < cityPop.length; i++){
			var tr = document.createElement("tr");

			var city = document.createElement("td");
			city.innerHTML = cityPop[i].city;
			tr.appendChild(city);

			var pop = document.createElement("td");
			pop.innerHTML = cityPop[i].population;
			tr.appendChild(pop);

			table.appendChild(tr);
		};

		//add the table to the div in index.html
		var myDiv =  document.getElementById("div1");
		myDiv.appendChild(table);
	};
*/