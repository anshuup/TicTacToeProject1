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
		let topStyle = rowNum * 16 + 16
		let leftStyle
		if(rowNum == 0){
			leftStyle = (parseInt(boxClicked)-1)*7.5 + 40
		}
		if(rowNum == 1){
			leftStyle = (parseInt(boxClicked)-4)*7.5 + 40
			console.log(boxClicked)
		}
		if(rowNum == 2){
			leftStyle = (parseInt(boxClicked)-7)*7.5 + 40
		}
		document.getElementById("body").appendChild(circleElem)
		circleElem.style.top = topStyle +"%"
		circleElem.style.left = leftStyle +"%"
		circleElem.style.display = "block"
	}
	else{
		console.log("crossPlayer made move")
		let checkElem = document.createElement("div")
		checkElem.id = "check"
		crossPlayer = false
		circlePlayer = true
		let leftStyle
		if(rowNum == 0){
			leftStyle = (parseInt(boxClicked)-1)*7.5 + 41
		}
		if(rowNum == 1){
			leftStyle = (parseInt(boxClicked)-4)*7.5 + 41
			console.log(boxClicked)
		}
		if(rowNum == 2){
			leftStyle = (parseInt(boxClicked)-7)*7.5 + 41
		}
		let topStyle = rowNum * 16 + 16
		document.getElementById("body").appendChild(checkElem)
		checkElem.style.top = topStyle +"%"
		checkElem.style.left = leftStyle +"%"
		checkElem.style.display = "block"
		checkElem.innerHTML = "X"
	}
}
