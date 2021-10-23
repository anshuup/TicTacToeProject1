function alertWindow(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		}
	};
	xhttp.open("GET", "/", true);
	xhttp.send();
}
let circlePlayer = true;

function drawShape(boxClicked){

	let rowNum = 0
	if(parseInt(boxClicked) <= 3){
		rowNum = 0
	}
	else if(parseInt(boxClicked) > 3 && parseInt(boxClicked) <= 6){
		rowNum = 1
	}
	else if(parseInt(boxClicked) > 6 && parseInt(boxClicked) <= 9){
		rowNum = 2
	}
	console.log("row num "+rowNum)
	if(circlePlayer == true){
		console.log("circleplayer made move")
		let circleElem = document.createElement("div")
		circleElem.id = "circle"
		circlePlayer = false
		let topStyle = rowNum * 30 + 30
		let leftStyle = parseInt(boxClicked) + 40
		document.getElementById("body").appendChild(circleElem)
		document.getElementById("circle").style.top = topStyle +"%"
		document.getElementById("circle").style.left = leftStyle +"%"
		document.getElementById("circle").style.display = "block"
	}
	else{
		console.log("crossPlayer made move")
		crossPlayer = false
		circlePlayer = true
		let topStyle = rowNum * 30 + 30
		let leftStyle = parseInt(boxClicked) + 40
		document.getElementById("check").style.top = topStyle +"%"
		document.getElementById("check").style.left = leftStyle +"%"
		document.getElementById("check").style.display = "flex"
	}
}
