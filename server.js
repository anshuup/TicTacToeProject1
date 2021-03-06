const fs = require("fs");
const express = require("express")
const path = require('path')
let app = express();
const http = require('http').createServer(app);
const port = process.env.PORT || 3000


let winnerCircle = 0;
let winnerCross = 0;

app.get("/",(req,res) => {
	res.sendFile(path.join(__dirname, "/TicTacToe.html"))
})
app.get("/sound",(req,res)=>{
	res.sendFile(path.join(__dirname, "/sfx-pop5.mp3"))
	console.log(__dirname)
})
app.get("/twoPlayer/sound",(req,res)=>{
	res.sendFile(path.join(__dirname, "/sfx-pop5.mp3"))
	console.log(__dirname)
})
app.get("/SimpleShiny.svg",(req,res)=>{
	res.sendFile(path.join(__dirname, "/SimpleShiny.svg"))
	console.log(__dirname)
})
app.get('/TicTacToe.css', function(req, res) {
	res.sendFile(path.join(__dirname, "/TicTacToe.css"))
});
app.get('/TicTacToe.js', function(req, res) {
	res.sendFile(path.join(__dirname, "/TicTacToe.js"))
});
app.get('/twoPlayer', function(req, res) {
	res.sendFile(path.join(__dirname, "/TicTacToeTwoPlayer.html"))
});
http.listen(port,() =>{
	console.log('Server running at http://127.0.0.1:3000/');
});
