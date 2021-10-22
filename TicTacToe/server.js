const fs = require("fs");
const express = require("express")
const path = require('path')
let app = express();
const http = require('http').createServer(app);


app.get("/",(req,res) => {
	res.sendFile(path.join(__dirname, "/TicTacToe.html"))
	console.log(__dirname)
})
app.get('/TicTacToe.css', function(req, res) {
	res.sendFile(path.join(__dirname, "/TicTacToe.css"))
});
app.get('/TicTacToe.js', function(req, res) {
	res.sendFile(path.join(__dirname, "/TicTacToe.js"))

});

http.listen(3000,() =>{
	console.log('Server running at http://127.0.0.1:3000/');
});
