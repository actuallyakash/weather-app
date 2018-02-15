/*I consider you to please disable your https cos it will work
only on http.
drunk, fix later
*/

/*window.onload = function() {	
  loadIt();
};*/
//To understand this code, see the bottom of this js file 
var lat,lon;
var city,state,weather,tempf,tempc,icon,url;
$("document").ready(function()
{  
  $(".apppic").addClass("animated bounce");
  //$(".tagline").addClass("animated bounce");
        $.getJSON("https://ipapi.co/json", function(result){
			lon = result.longitude;
			lat = result.latitude;
			//document.getElementById("data").innerHTML=lat + " & "+lon;
			loadIt();
        });
});



/*function getLocation()
{
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		var text = xhttp.responseText;
		var obj = JSON.parse(text);
		lat = obj.latitude;
		lon = obj.longitude;
		if(xhttp.readyState == 4 && xhttp.status==200){
			document.getElementById("data").innerHTML = lat+" & "+lon;
			loadIt();
			}
	};
	xhttp.open("GET","http://freegeoip.net/json/",true);
	xhttp.send();
}
*/
var api="2e9166e9bbc0a0e6";
/*function loadIt()
{
		
		var img = new Image();
		var div = document.getElementById("img");
		img.onload=function(){
			div.appendChild(img);
		};
		img.src = url;
		if(xhttp.readyState == 4 && xhttp.status==200){
			
			}
	};
	xhttp.open("GET","http://api.wunderground.com/api/"+api+"/conditions/forecast/alert/q/"+lat+","+lon+".json",true);
	xhttp.send();
}*/
function loadIt()
{
	$.getJSON("http://api.wunderground.com/api/"+api+"/conditions/forecast/alert/q/"+lat+","+lon+".json", function(details){
		city=details.current_observation.display_location.city;
		state = details.current_observation.display_location.state_name;
		weather=details.current_observation.weather;
		tempf=details.current_observation.temp_f;
		tempc=details.current_observation.temp_c;
		url = details.current_observation.icon_url;
		var img = new Image();
		var div = document.getElementById("img");
		img.onload=function(){
			div.appendChild(img);
		};
		img.src = url;
		//document.getElementById("demo").innerHTML = obj.current_observation.icon_url;			
		document.getElementById("c&s").innerHTML = city+", "+state;
		//document.getElementById("state").innerHTML = state;
		document.getElementById("weather").innerHTML = weather;
		document.getElementById("temp").innerHTML = tempc;
        });
}
function changeImage() {
    if (document.getElementById("imgClickAndChange").src == "http://image.flaticon.com/icons/svg/136/136740.svg") 
    {
        document.getElementById("imgClickAndChange").src = "http://image.flaticon.com/icons/svg/136/136739.svg";
		document.getElementById("temp").innerHTML = tempf;
    }
    else 
    {
        document.getElementById("imgClickAndChange").src = "http://image.flaticon.com/icons/svg/136/136740.svg";
		document.getElementById("temp").innerHTML = tempc;
    }
}

	


//To understand this code, see the top of this js file