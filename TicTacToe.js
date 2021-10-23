function alertWindow(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		 document.getElementById("header").innerHTML = "hello, there"
		}
	};
	xhttp.open("GET", "/", true);
	xhttp.send();
}
