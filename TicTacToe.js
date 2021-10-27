function alertWindow(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		}
	};
	xhttp.open("GET", "/", true);
	xhttp.send();
}
let winner;
let circleWinner = 0;
let crossWinner = 0;

let circlePlayer = true;
let circleMove = [[0,0,0],[0,0,0],[0,0,0]]
function drawShape(boxClicked,boxId){

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
		document.getElementById("winnerVal").innerHTML = "Cross is making move..."
		let circleElem = document.createElement("div")
		circleElem.id = "circle"
		circlePlayer = false
		if(rowNum == 0){
			circleMove[rowNum][parseInt(boxClicked)] = 1
		}
		if(rowNum == 1){
			circleMove[rowNum][parseInt(boxClicked)-3] = 1
		}
		if(rowNum == 2){
			circleMove[rowNum][parseInt(boxClicked)-6] = 1
		}
		document.getElementById("box"+boxId).appendChild(circleElem)

		circleElem.style.display = "block"
		circleElem.innerHTML ="O"
		document.getElementById("box"+boxId).onclick = false
		circleElem.classList.add("elementToFadeInAndOut");
	  setTimeout(function(){circleElem.classList.remove("elementToFadeInAndOut");}, 500);
	}

	if(document.getElementById("box"+boxId).innerText.length != 0){
		setTimeout(function(){
			console.log("winner "+winner)
			console.log("circle score "+circleWinner)
			console.log("cross score "+crossWinner)
			if(winner == undefined){
				let emptyValI = []
				let emptyValJ = []

				for(var i=0;i<circleMove.length;i++){
					for(var j=0;j<circleMove[i].length;j++){
						if(circleMove[i][j] == 0){
							emptyValI.push(i)
							emptyValJ.push(j)
						}
					}
				}
				let index = Math.floor(Math.random() * emptyValI.length);
				let val = emptyValI[index]
				let val2 = emptyValJ[index]

				document.getElementById("winnerVal").innerHTML = "Circle is making move..."
				let checkElem = document.createElement("div")
				checkElem.id = "check"
				crossPlayer = false
				circlePlayer = true
				let leftStyle
				if(rowNum == 0){
					leftStyle = (parseInt(boxClicked)-0)*8 + 40
					circleMove[val][val2] = -1
				}
				if(rowNum == 1){
					leftStyle = (parseInt(boxClicked)-3)*8 + 40
					circleMove[val][val2] = -1
				}
				if(rowNum == 2){
					leftStyle = (parseInt(boxClicked)-6)*8 + 40
					circleMove[val][val2] = -1
				}
				let topStyle = rowNum * 20 + 20
				document.getElementById("box"+val+val2).appendChild(checkElem)
				document.getElementById("box"+val+val2).style.color = "antiquewhite"
				checkElem.style.display = "block"
				checkElem.innerHTML = "X"
				document.getElementById("box"+val+val2).onclick = false
				findWinner("'"+val+val2+"'")
				checkElem.classList.add("elementToFadeInAndOut");
				setTimeout(function(){checkElem.classList.remove("elementToFadeInAndOut");}, 500);
			}
			else{
				/*document.body.addEventListener("click", function (evt) {
		    	for(var i=0;i<3;i++){
						for(var j=0;j<3;j++){
							document.getElementById("box"+i+j).innerHTML = ""
							document.getElementById("box"+i+j).onclick = true
						}
					}
				});*/
			}
		}, 300);
	}
}
function twoPlay(boxClicked,boxId){

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
		document.getElementById("winnerVal").innerHTML = "Cross is making move..."
		let circleElem = document.createElement("div")
		circleElem.id = "circle"
		circlePlayer = false
		if(rowNum == 0){
			circleMove[rowNum][parseInt(boxClicked)] = 1
		}
		if(rowNum == 1){
			circleMove[rowNum][parseInt(boxClicked)-3] = 1
		}
		if(rowNum == 2){
			circleMove[rowNum][parseInt(boxClicked)-6] = 1
		}
		document.getElementById("box"+boxId).appendChild(circleElem)
		circleElem.style.display = "block"
		circleElem.innerHTML ="O"
		document.getElementById("box"+boxId).onclick = false

	}
	else{
		document.getElementById("winnerVal").innerHTML = "Circle is making move..."
		let checkElem = document.createElement("div")
		checkElem.id = "check"
		crossPlayer = false
		circlePlayer = true
		if(rowNum == 0){
			circleMove[rowNum][parseInt(boxClicked)] = -1
		}
		if(rowNum == 1){
			circleMove[rowNum][parseInt(boxClicked)-3] = -1
		}
		if(rowNum == 2){
			circleMove[rowNum][parseInt(boxClicked)-6] = -1
		}
		document.getElementById("box"+boxId).appendChild(checkElem)
		document.getElementById("box"+boxId).style.color = "antiquewhite"
		checkElem.style.display = "block"
		checkElem.innerHTML = "X"
		document.getElementById("box"+boxId).onclick = false
	}
}
const arrayColumn = (arr, n) => arr.map(x => x[n]);


function findWinner(boxId){
	/* source https://stackoverflow.com/questions/16571035/javascript-tictactoe-if-winner-detection */
	for(var i = 0; i<3;i++){
		var rowSum = 0;
		for(var j = 0; j<3;j++){
			rowSum += circleMove[i][j];
		}
		if(rowSum === 3){
			for(var j=0;j<3;j++){
				for(var k=0;k<3;k++){
					if(i != j){
						document.getElementById("box"+j+k).style.color = "grey"
					}
					else{
					// 	document.getElementById("box"+j+k).style.color = "red"
					}
				}
			}
			winner = "Circle"
			circleWinner+=1
		}
		else if(rowSum === -3){
			for(var j=0;j<3;j++){
				for(var k=0;k<3;k++){
					if(i != j){
						document.getElementById("box"+j+k).style.color = "grey"
					}
				}
			}
			winner = "Cross"
			crossWinner+=1
		}
	}
	for(var i = 0; i<3;i++){
		var colSum = 0;
		for(var j = 0; j<3;j++){
			colSum += circleMove[j][i];
		}
		if(colSum === 3){
			for(var j=0;j<3;j++){
				for(var k=0;k<3;k++){
					if(i != k){
						document.getElementById("box"+j+k).style.color = "grey"
					}
				}
			}
			winner = "Circle"
			circleWinner+=1
		}
		else if(colSum === -3){
			for(var j=0;j<3;j++){
				for(var k=0;k<3;k++){
					if(i != k){
						document.getElementById("box"+j+k).style.color = "grey"
					}
				}
			}
			winner = "Cross"
			crossWinner+=1
		}
	}
	if(circleMove[0][0] + circleMove[1][1] + circleMove[2][2] === 3){
		for(var j=0;j<3;j++){
			for(var k=0;k<3;k++){
				if(j != k){
					document.getElementById("box"+j+k).style.color = "grey"
				}
			}
		}
		winner = "Circle"
		circleWinner+=1
	}
	else if(circleMove[0][0] + circleMove[1][1] + circleMove[2][2] === -3){
		for(var j=0;j<3;j++){
			for(var k=0;k<3;k++){
				if(j != k){
					document.getElementById("box"+j+k).style.color = "grey"
				}
			}
		}
		winner = "Cross"
		crossWinner+=1
	}
	if(circleMove[2][0] + circleMove[1][1] + circleMove[0][2] === 3){
		for(var j=0;j<3;j++){
			for(var k=0;k<3;k++){
				document.getElementById("box"+j+k).style.color = "grey"
			}
		}
		document.getElementById("box20").style.color = "white"
		document.getElementById("box11").style.color = "white"
		document.getElementById("box02").style.color = "white"
		winner = "Circle"
		circleWinner+=1
	}
	else if(circleMove[2][0] + circleMove[1][1] + circleMove[0][2] === -3){
		for(var j=0;j<3;j++){
			for(var k=0;k<3;k++){
				document.getElementById("box"+j+k).style.color = "grey"
			}
		}
		document.getElementById("box20").style.color = "white"
		document.getElementById("box11").style.color = "white"
		document.getElementById("box02").style.color = "white"
		winner = "Cross"
		crossWinner+=1
	}
	if(winner != undefined){
		for(var i=0;i<3;i++){
			for(var j=0;j<3;j++){
				document.getElementById("box"+i+j).onclick = false
			}
		}
		document.getElementById("winnerVal").innerHTML = winner + " Won !!"
	}

	if(!circleMove[0].includes(0) && !circleMove[1].includes(0)  && !circleMove[2].includes(0) && winner == undefined){
		document.getElementById("winnerVal").innerHTML = "Game over"
		for(var i=0;i<3;i++){
			for(var j=0;j<3;j++){
				document.getElementById("box"+i+j).onclick = false
			}
		}
	}
}
