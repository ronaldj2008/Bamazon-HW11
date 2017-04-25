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

connection.connect(function(err){
	if(err) {
		console.error("error connecting: " + err.stack);
	}
	createTable();
});

var createTable = function () {

	connection.query("SELECT * FROM products", function(err, res){
		if (err) throw err;

		var tab = "\t";

		console.log ("ItemID\tProduct Name\tDepartment Name\tPrice\t# In Stock");
		console.log("------------------------------------------");

		for (var i =0; i < res.length; i++) {
			console.log(res[i].id + tab + res[i].product_name + tab + res[i].department_name + tab + res[i].price + tab + res[i].stock_quantity);
		}
		console.log("------------------------------------------");

		promptCustomer(res);
	});
};

// var promptCustomer = function(res) {

// 	inquirer.prompt
// }