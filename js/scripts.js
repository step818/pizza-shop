//Business Logic for pizzas
function Pizza (size, toppings, price) {
  this.size = size,
  this.toppings = toppings,
  this.price = 0.0
}

Pizza.prototype.checkSize = function() {
  if(this.size === "Personal") {
    this.price += 9.99;
  } else if (this.size === "Medium") {
    this.price += 14.99;
  } else if (this.size === "Large") {
    this.price += 18.99;
  } else if (this.size === "Sicilian") {
    this.price += 21.99;
  } else {
    alert("Please choose a size to complete your order.");
  }
}

Pizza.prototype.checkToppings = function() {
  if (this.toppings.length > 5) {
    this.price = + 4.50;
  } else if (this.toppings.length > 3) {
    this.price += 3.00;
  } else if (this.toppings > 0) {
    this.price += 1.50;
  } else {
    this.price = this.price;
  }
}

//User Interface Logic
$(document).ready(function() {
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();
    var inputtedSize = $("#size").val();
    var inputtedToppings = []; $("input:checkbox[name=topping]:checked").each(function () {
      inputtedToppings.push($(this).val());
    })
    var newPizza = new Pizza(inputtedSize, inputtedToppings);
    newPizza.checkSize();
    newPizza.checkToppings();
    if (newPizza.toppings.length > 0) {
      $("#order-cost").text("You ordered a " + newPizza.size + " pizza with " + newPizza.toppings.toString() + " added to it. Your total is " + "$" + newPizza.price.toFixed(2));
    } else { $("#order-cost").text("You ordered a " + newPizza.size + " cheese pizza. Your total is " + "$" + newPizza.price.toFixed(2)); }
  });
});
