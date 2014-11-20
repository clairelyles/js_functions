

/* ------------ Question 1 ------------ */
//Create a function called getItems that simply returns the items array from the google product object. */
 
 // Generic formulat for retrieving data from an outside source
var getItems = function(data) {
	return data.items
}

//google products

var googleProducts = require("./products.json")
// console.log("Question #1:")
// console.log(getItems(googleProducts))

//
/* ------------ Question 2 ------------ */
// Create a function called getItemsByBrand that takes an item array returns a new array of all items of a specified brand.
var companyArray = []

var getItemsByBrand = function(array,company) {
	for (var i = 0; i < array.length; i++) {
		if (array[i].product.brand === company) {
			companyArray.push(array[i])
			//companyArray.push(array[i].product.brand)
		}
	}
	return companyArray
}

var googleProducts = require("./products.json")
console.log("     ")
console.log("Question #2:")
console.log(getItemsByBrand(getItems(googleProducts), "Sony"))


/* ------------ Question 3 ------------ 
Create a function called getItemsByAuthor that takes an item array 
and returns a new array of all items by a specified author. */
var authorArray = []

var getItemsByAuthor = function(array,author) {
	for (var i = 0; i < array.length; i++) {
		if (array[i].product.author.name === author) {
			authorArray.push(array[i])
		}
	}
	return authorArray
}

var googleProducts = require("./products.json")
console.log("     ")
console.log("Question #3:")
console.log(getItemsByAuthor(getItems(googleProducts), "CDW"))

/* ------------ Question 4 ------------ 
Create function called getAvailableProducts that takes an item array 
and returns an array containing all of the available products (an available 
product is one with at least one availability of "inStock" in the inventories array) */

var availableProducts = []
var getAvailableProducts = function(array) {
	for (var i = 0; i < array.length; i++) {
	var inventoriesLength = array[i].product.inventories.length;
	for (var j = 0; j < inventoriesLength; j++) {
		if (array[i].product.inventories[j].availability === "inStock") {
				availableProducts.push(array[i].product)
			}
		}
	}
	return availableProducts
}


var googleProducts = require("./products.json")
console.log("     ")
console.log("Question #4:")
console.log(getAvailableProducts(getItems(googleProducts), "InStock"))

/* ------------ Question 5 ------------ 
 * All items made by Nikon with the author eBay.
 * All items made by Sony.
 * All items made by Sony that are available. */

console.log("     ")
console.log("Question #5:")

/* Part 1 */


/* Part 2
took the array output from GetItemsByBrand and passed it through the getAvailable
Products function to output an array of available Sony products. */
console.log(getAvailableProducts(getItemsByBrand(getItems(googleProducts), "Sony")))




