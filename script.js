window.onload = function(){

	startTime();

}

function startTime() {
	const today = new Date();
	let h = today.getHours();
	let m = today.getMinutes();
	let s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('txt').innerHTML =  h + ":" + m;
	setTimeout(startTime, 1000);
}

function checkTime(i) {
	if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
	return i;
}


var search_btn = document.getElementById("search_btn");
var search_txt = document.getElementById("search_txt");
search_btn.addEventListener("click",function(){
	var query_string = "https://www.google.com/search?q=" + search_txt.value + "&oq=123&aqs=chrome..69i57.532j0j4&sourceid=chrome&ie=UTF-8";
	window.location.href = query_string;
});

window.addEventListener("keydown", function(event) {

	if(event.code == "Enter" || event.code == "NumpadEnter"){
		search_btn.click();
	}

	//alert(`KeyboardEvent: key='${event.key}' | code='${event.code}'`);

});



