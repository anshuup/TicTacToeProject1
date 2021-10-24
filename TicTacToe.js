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
		document.getElementById("box"+boxClicked).appendChild(circleElem)
		circleElem.style.top = topStyle +"%"
		circleElem.style.left = leftStyle +"%"
		circleElem.style.display = "block"
		circleElem.innerHTML ="O"

	}
	else{
		let checkElem = document.createElement("div")
		checkElem.id = "check"
		crossPlayer = false
		circlePlayer = true
		let leftStyle
		if(rowNum == 0){
			leftStyle = (parseInt(boxClicked)-0)*8 + 40
			circleMove[rowNum][parseInt(boxClicked)] = -1
		}
		if(rowNum == 1){
			leftStyle = (parseInt(boxClicked)-3)*8 + 40
			circleMove[rowNum][parseInt(boxClicked)-3] = -1
		}
		if(rowNum == 2){
			leftStyle = (parseInt(boxClicked)-6)*8 + 40
			circleMove[rowNum][parseInt(boxClicked)-6] = -1
		}
		let topStyle = rowNum * 16 + 16
		document.getElementById("box"+boxClicked).appendChild(checkElem)
		checkElem.style.top = topStyle +"%"
		checkElem.style.left = leftStyle +"%"
		checkElem.style.display = "block"
		checkElem.innerHTML = "X"
	}
}
const arrayColumn = (arr, n) => arr.map(x => x[n]);


function findWinner(){

	let winner;
	/* source https://stackoverflow.com/questions/16571035/javascript-tictactoe-if-winner-detection */
	for(var i = 0; i<3;i++){
		var rowSum = 0;
		for(var j = 0; j<3;j++){
			rowSum += circleMove[i][j];
		}
		if(rowSum === 3){
			winner = "circle"
		}
		else if(rowSum === -3){
			winner = "cross"
		}
	}
	for(var i = 0; i<3;i++){
		var colSum = 0;
		for(var j = 0; j<3;j++){
			colSum += circleMove[j][i];
		}
		if(colSum === 3){
			winner = "circle"
		}
		else if(colSum === -3){
			winner = "cross"
		}
	}
	if(circleMove[0][0] + circleMove[1][1] + circleMove[2][2] === 3){
		winner = "circle"
	}
	else if(circleMove[0][0] + circleMove[1][1] + circleMove[2][2] === -3){
		winner = "cross"
	}
	if(circleMove[2][0] + circleMove[1][1] + circleMove[0][2] === 3){
		winner = "circle"
	}
	else if(circleMove[2][0] + circleMove[1][1] + circleMove[0][2] === -3){
		winner = "cross"
	}
	if(winner != undefined){
		window.alert(winner + "won")
	}
	if(circleMove[0].length == 3 && circleMove[1].length == 3 && circleMove[2].length == 3 && winner == undefined){
		window.alert("game over")
	}
}
