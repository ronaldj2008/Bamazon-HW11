// Initializes the npm packages used
var mysql = require("mysql");
var inquirer = require("inquirer");

// Initializes the connection variable to sync with a MySQL database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "Bamazon"
});

conncection.connect(function(err){
	if(err) {
		console.error("error connecting: " + err.stack);
	}
	makeTable();
});

var createTable = function () {

	connection.query("SELECT * products", function(err, res){
		if (err) throw err;
	})
}