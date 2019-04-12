//Business Logic for pizzas
function Pizza (size, toppings, price) {
  this.size = size,
  this.toppings = 0,
  this.price = 0.00
}

Pizza.prototype.checkSize = function() {
  if(this.size === "sm") {
    this.price += 9.99;
  } else if (this.size === "md") {
    this.price += 14.99;
  } else if (this.size === "lg") {
    this.price += 18.99;
  } else if (this.size === "xl") {
    this.price += 21.99;
  }
}

Pizza.prototype.checkToppings = function() {
  if (this.toppings === 0) {
    this.price = this.price;
  } else if (this.toppings <= 2) {
    this.price += 1.50;
  } else if (this.toppings <= 5) {
    this.price += 3.00;
  } else {
    this.price += 4.50;
  }
}

//User Interface Logic
$(document).ready(function() {
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();
    var inputtedSize = $("size").val();
    var inputtedToppings = parseInt($("input:checkbox[name=topping]:checked").val());
    var newPizza = new Pizza(inputtedSize, inputtedToppings);
    newPizza.checkSize();
    newPizza.checkToppings();
    $("#order-cost").text("You ordered a " + newPizza.size + "pizza with " + newPizza.toppings + "added to it. Your total is " + "$" + newPizza.price);
  });
});
