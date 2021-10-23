function alertWindow(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		}
	};
	xhttp.open("GET", "/", true);
	xhttp.send();
}
