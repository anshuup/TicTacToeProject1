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
let circleMove = [[],[],[]]
let crossMove  = [[],[],[]]
function drawShape(boxClicked){

	let rowNum = 0
	if(parseInt(boxClicked) <= 2){
		rowNum = 0
	}
	else if(parseInt(boxClicked) > 2 && parseInt(boxClicked) <= 5){
		rowNum = 1
	}
	else if(parseInt(boxClicked) > 5 && parseInt(boxClicked) <= 8){
		rowNum = 2
	}
	if(circlePlayer == true){
		let circleElem = document.createElement("div")
		circleElem.id = "circle"
		circlePlayer = false
		let topStyle = rowNum * 16 + 16
		let leftStyle
		if(rowNum == 0){
			leftStyle = (parseInt(boxClicked))*7.5 + 40
			circleMove[rowNum][parseInt(boxClicked)] = 1
		}
		if(rowNum == 1){
			leftStyle = (parseInt(boxClicked)-3)*7.5 + 40
			circleMove[rowNum][parseInt(boxClicked)-3] = 1
		}
		if(rowNum == 2){
			leftStyle = (parseInt(boxClicked)-6)*7.5 + 40
			circleMove[rowNum][parseInt(boxClicked)-6] = 1
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
			leftStyle = (parseInt(boxClicked)-0)*7.5 + 41
			circleMove[rowNum][parseInt(boxClicked)] = -1
		}
		if(rowNum == 1){
			leftStyle = (parseInt(boxClicked)-3)*7.5 + 41
			circleMove[rowNum][parseInt(boxClicked)-3] = -1
		}
		if(rowNum == 2){
			leftStyle = (parseInt(boxClicked)-6)*7.5 + 41
			circleMove[rowNum][parseInt(boxClicked)-6] = -1
		}
		let topStyle = rowNum * 16 + 16
		document.getElementById("body").appendChild(checkElem)
		checkElem.style.top = topStyle +"%"
		checkElem.style.left = leftStyle +"%"
		checkElem.style.display = "block"
		checkElem.innerHTML = "X"
	}
}
const arrayColumn = (arr, n) => arr.map(x => x[n]);


function findWinner(boxClicked){

	let winner;
	let rowWinnerMove = [[0,1,2],[3,4,5],[6,7,8]]
	let columnWinnerMove = [[0,3,6],[1,4,7],[2,5,8]]

	/* source https://stackoverflow.com/questions/16571035/javascript-tictactoe-if-winner-detection */
	for(var i = 0; i<3;i++){
		var rowSum = 0;
		for(var j = 0; j<3;j++){
			rowSum += circleMove[i][j];
		}
		if(rowSum === 3){
			window.alert("Circle WIN!");
		}
		else if(rowSum === -3){
			window.alert("Cross WIN!");
		}
	}
	for(var i = 0; i<3;i++){
		var colSum = 0;
		for(var j = 0; j<3;j++){
			colSum += circleMove[j][i];
		}
		if(colSum === 3){
			window.alert("Circle WIN!");
		}
		else if(colSum === -3){
			window.alert("Cross WIN!");
		}
	}
	if(circleMove[0][0] + circleMove[1][1] + circleMove[2][2] === 3){
		alert("Circle WIN!");
	}
	else if(circleMove[0][0] + circleMove[1][1] + circleMove[2][2] === -3){
		alert("Cross WIN!");
	}
	if(circleMove[2][0] + circleMove[1][1] + circleMove[0][2] === 3){
		alert("Circle WIN!");
	}
	else if(circleMove[2][0] + circleMove[1][1] + circleMove[0][2] === -3){
		alert("Cross WIN!");
	}
}
