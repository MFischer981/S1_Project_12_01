"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Micah Fischer
   Date:   2-27-19
   
   Filename: tc_cart.js
	
*/
// Order total set to 0.
var orderTotal = 0;

// Set variable cartHTML to string of text that defines a table.
var cartHTML = "<table><tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>";

// For loop that iterates through each item.
for (var i = 0; i < item.length; i++) {
    // Concatenate cartHTML variables and strings of text to generate semantic HTML table.
    cartHTML += "<tr><td><img src='tc_" + item[i] + ".png' alt='" + item[i] + "'/></td>";
    cartHTML += "<td>" + itemDescription[i] + "</td> <td>$" + itemPrice[i] + "</td> <td>" + itemQty[i] + "</td>";
    // Set itemCost to price * quantity.
    var itemCost = itemPrice[i] * itemQty[i];
    // Display itemCost in table.
    cartHTML += "<td>$" + itemCost + "</td></tr>";
    // Set otder total to sum of itemCost from previous iteration.
    orderTotal += itemCost;
}

// Display a colspan of 4 with Subtotal text with order total in last cell.
cartHTML += "<tr><td colspan='4'>Subtotal</td><td>$" + orderTotal + "</td></tr></table>";

// Write HTML to element with id of cart.
document.getElementById('cart').innerHTML = cartHTML;