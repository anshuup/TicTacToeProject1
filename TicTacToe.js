let winner;
let circleWinner = 0;
let crossWinner = 0;

let circlePlayer = true;
let circleMove = [[0,0,0],[0,0,0],[0,0,0]]

if(window.location.pathanme == "/"){
  document.getElementById("computer").href = "#"
}
if(window.location.pathanme == "/twoPlayer"){
  document.getElementById("twoPlayer").href = "#"
}

function calcRowNum(boxClicked){
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
  return rowNum
}

function updateArr(rowNum,boxClicked, val){
  if(rowNum == 0){
    circleMove[rowNum][parseInt(boxClicked)] = val
  }
  if(rowNum == 1){
    circleMove[rowNum][parseInt(boxClicked)-3] = val
  }
  if(rowNum == 2){
    circleMove[rowNum][parseInt(boxClicked)-6] = val
  }
}
function changeColor(id,color){
  document.getElementById(id).style.color = color
}
function createElement(id,appendId,text){
  console.log(appendId)
  let elem = document.createElement("div")
  elem.id = id
  document.getElementById("box"+appendId).appendChild(elem)
  elem.style.display = "block"
  elem.innerHTML = text
  document.getElementById("box"+appendId).disabled = true
  elem.classList.add("elementToFadeInAndOut");
  setTimeout(function(){elem.classList.remove("elementToFadeInAndOut");}, 500);
}

function drawShape(boxClicked,boxId){
	let rowNum = calcRowNum(boxClicked)

	if(circlePlayer == true){
		play()
    changeColor("winnerValPlayer","grey")
    changeColor("winnerValComp","white")

		circlePlayer = false
    updateArr(rowNum,boxClicked,1)
    createElement("circle",boxId,"O")
	}
	if(document.getElementById("box"+boxId).innerText.length != 0){
		setTimeout(function(){
			if(winner == undefined && document.getElementById("compText").innerHTML != "Game over !! Click anywhere to continue..."){
				let bestMoveArray = []
				bestMoveArray = findBestPossibleMove()

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
				let val
				let val2
				if(bestMoveArray[0].length != 0){
					val = bestMoveArray[0][0]
					val2 = bestMoveArray[1][0]
				}
				else{
					let index = Math.floor(Math.random() * emptyValI.length);
					val = emptyValI[index]
					val2 = emptyValJ[index]
				}

        changeColor("winnerValPlayer","white")
        changeColor("winnerValComp","grey")


				crossPlayer = false
				circlePlayer = true
				if(rowNum == 0){
					circleMove[val][val2] = -1
				}
				if(rowNum == 1){
					circleMove[val][val2] = -1
				}
				if(rowNum == 2){
					circleMove[val][val2] = -1
				}

        let appendId = ""+val+val2+""
        createElement("check",appendId,"X")
        changeColor("box"+appendId,"antiquewhite")
				play()
				findWinner("'"+val+val2+"'")
			}
			else{}
		}, 500);
	}
}
function twoPlay(boxClicked,boxId){

	let rowNum = calcRowNum(boxClicked)

	play()
	if(circlePlayer == true){
    changeColor("winnerValPlayer1","grey")
    changeColor("winnerValPlayer2","white")
    createElement("circle",boxId,"O")
    updateArr(rowNum,boxClicked,1)
    crossPlayer = true
		circlePlayer = false
	}
	else{
		crossPlayer = false
		circlePlayer = true
    updateArr(rowNum,boxClicked,-1)
    createElement("check",boxId,"X")
    changeColor("box"+boxId,"antiquewhite")
    changeColor("winnerValPlayer1","white")
    changeColor("winnerValPlayer2","grey")

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
    changeColor("box20","white")
    changeColor("box11","white")
    changeColor("box02","white")

    document.getElementById("box20").children[0].classList.add("animate-flicker")
    document.getElementById("box11").children[0].classList.add("animate-flicker")
    document.getElementById("box02").children[0].classList.add("animate-flicker")

		winner = "Circle"
		circleWinner+=1
	}
	else if(circleMove[2][0] + circleMove[1][1] + circleMove[0][2] === -3){
		for(var j=0;j<3;j++){
			for(var k=0;k<3;k++){
				document.getElementById("box"+j+k).style.color = "grey"
			}
		}

    changeColor("box20","antiquewhite")
    changeColor("box11","antiquewhite")
    changeColor("box02","antiquewhite")

    document.getElementById("box20").children[0].classList.add("animate-flicker")
    document.getElementById("box11").children[0].classList.add("animate-flicker")
    document.getElementById("box02").children[0].classList.add("animate-flicker")
		winner = "Cross"
		crossWinner+=1
	}
	if(winner != undefined){
		for(var i=0;i<3;i++){
			for(var j=0;j<3;j++){
				document.getElementById("box"+i+j).disabled = true
        if(document.getElementById("box"+i+j).style.color != "grey"){
          document.getElementById("box"+i+j).children[0].classList.add("animate-flicker")
        }
			}
		}
		document.getElementById("compText").innerHTML = winner + " Won !! Click anywhere to continue..."
    if(window.location.pathname == "/"){
      changeColor("winnerValPlayer","grey")
      changeColor("winnerValComp","grey")

      document.getElementById("winnerValPlayer").innerHTML = "Player (O) : "+circleWinner
      document.getElementById("winnerValComp").innerHTML = "Computer (X) : "+crossWinner

    }
    else if(window.location.href == "/twoPlayer"){
      document.getElementById("winnerValPlayer1").innerHTML = "Player1 (O) : "+circleWinner
      document.getElementById("winnerValPlayer2").innerHTML = "Player2 (X) : "+crossWinner
    }

		document.addEventListener('click', run)
	}

	if(!circleMove[0].includes(0) && !circleMove[1].includes(0)  && !circleMove[2].includes(0) && winner == undefined){
    if(window.location.pathname == "/"){
      changeColor("winnerValPlayer","grey")
      changeColor("winnerValComp","grey")
    }
    else if(window.location.pathname == "/twoPlayer"){
      changeColor("winnerValPlayer1","grey")
      changeColor("winnerValPlayer2","grey")
    }
		document.getElementById("compText").innerHTML = "Game over !! Click anywhere to continue..."

		for(var i=0;i<3;i++){
			for(var j=0;j<3;j++){
				document.getElementById("box"+i+j).disabled = true
				document.getElementById("box"+i+j).style.color = "grey"
			}
		}
    document.addEventListener('click', run)

	}
}

function findBestPossibleMove(){
	let bestMoveArrayRow = []
	let bestMoveArrayColumn= []

	a = circleMove.map((y) => y.reduce((a, b) => a + b));
	b = circleMove.reduce((a, b) => a.map((v, i) => v + b[i]));

  //horizontal check
	for(i=0;i<a.length;i++){
		if(a[i] == 2){
			bestMoveArrayRow.push(i)
			for(j=0;j<circleMove[i].length;j++){
				if(circleMove[i][j] == 0){
					bestMoveArrayColumn.push(j)
				}
			}
		}
    if(a[i] == -2){
      bestMoveArrayRow.unshift(i)
      for(j=0;j<circleMove[i].length;j++){
        if(circleMove[i][j] == 0){
          bestMoveArrayColumn.unshift(j)
        }
      }
    }
	}
  //vertical check
	for(i=0;i<b.length;i++){
		if(b[i] == 2){
			bestMoveArrayColumn.push(i)
			for(j=0;j<circleMove[i].length;j++){
				if(circleMove[j][i] == 0){
					bestMoveArrayRow.push(j)
				}
			}
		}
    if(b[i] == -2){
      bestMoveArrayColumn.unshift(i)
      for(j=0;j<circleMove[i].length;j++){
        if(circleMove[j][i] == 0){
          bestMoveArrayRow.unshift(j)
        }
      }
    }
	}

	let diagonal1 = 0, diagonal2 = 0;
	let diagnoalRow1
	let diagnoalCol1

	let diagnoalRow2
	let diagnoalCol2

  let diagnoalRow3
	let diagnoalCol3

  let diagnoalRow4
  let diagnoalCol4

	for (let row = 0; row < circleMove.length; row++) {
		diagonal1 += circleMove[row][row];
		if(diagonal1 == 2){
			for(i=0;i<circleMove.length;i++){
				if(circleMove[i][i] == 0){
					diagnoalRow1 = i;
					diagnoalCol1 = i;
				}
			}
		}
    if(diagonal1 == -2){
      for(i=0;i<circleMove.length;i++){
        if(circleMove[i][i] == 0){
          diagnoalRow3 = i;
          diagnoalCol3 = i;
        }
      }
    }
	}
	for (let row = 0; row < circleMove.length; row++) {
		diagonal2 += circleMove[row][circleMove.length - row - 1];

		if(diagonal2 == 2){
			for(i=0;i<circleMove.length;i++){
				if(circleMove[i][circleMove.length - i - 1] == 0){
					diagnoalRow2 = i;
					diagnoalCol2 = circleMove.length - i - 1;
				}
			}
		}
    if(diagonal2 == -2){
      for(i=0;i<circleMove.length;i++){
        if(circleMove[i][circleMove.length - i - 1] == 0){
          diagnoalRow4 = i;
          diagnoalCol4 = circleMove.length - i - 1;
        }
      }
    }
	}
	if(diagnoalRow1 != undefined){
		bestMoveArrayRow.push(diagnoalRow1)
		bestMoveArrayColumn.push(diagnoalRow1)
	}
	if(diagnoalRow2 != undefined){
		bestMoveArrayRow.push(diagnoalRow2)
		bestMoveArrayColumn.push(diagnoalCol2)
	}

  if(diagnoalRow3 != undefined){
		bestMoveArrayRow.unshift(diagnoalRow3)
		bestMoveArrayColumn.unshift(diagnoalCol3)
	}
  if(diagnoalRow4 != undefined){
    bestMoveArrayRow.unshift(diagnoalRow4)
    bestMoveArrayColumn.unshift(diagnoalCol4)
  }

	let array = []
	array.push(bestMoveArrayRow)
	array.push(bestMoveArrayColumn)

	return array
}

function run(e){
  var wrapper = document.querySelector('table');

    if ( !wrapper.contains(e.target)){
      init()
    }
}
function play() {
	var audio = document.getElementById("audio");
	audio.src = "/sound"
	audio.play();
	audio.currentTime = 0

}
function init(){
	let buttonElem = document.getElementsByTagName("button")
	for(var i=0;i<buttonElem.length;i++){
		buttonElem[i].innerHTML = ""
		buttonElem[i].disabled = false;
    buttonElem[i].style.color = "white"
	}
	for(var i=0;i<circleMove.length;i++){
		for(var j=0;j<circleMove[i].length;j++){
			circleMove[i][j] = 0
		}
	}
	circlePlayer = true;
	crossPlayer = true;
	winner = undefined
  if(window.location.pathname == "/"){
    document.getElementById("winnerValPlayer").innerHTML = "Player (O) : "+circleWinner
    document.getElementById("winnerValComp").innerHTML = "Computer (X) : "+crossWinner
    document.getElementById("compText").innerHTML = "Playing against computer..."
    document.getElementById("winnerValPlayer").style.color = "white"

  }
  else if(window.location.pathname == "/twoPlayer"){
    document.getElementById("winnerValPlayer1").style.color = "white"
    document.getElementById("winnerValPlayer1").innerHTML = "Player1 (O) : "+circleWinner
    document.getElementById("winnerValPlayer2").innerHTML = "Player2 (X) : "+crossWinner
    document.getElementById("compText").innerHTML = "Two Players..."
  }
  document.removeEventListener("click",run,false)
}
