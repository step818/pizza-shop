//Business Logic for Pizza Shop
function Order() {
  this.orderId = 0,
  this.pizzas = []
}

Order.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

Order.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas.push(pizza);
}

//Business Logic for pizzas
function Pizza (size, toppings, price) {
  this.size = size,
  this.toppings = [],
  this.price = price;
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
  if (this.toppings.length === 0) {
    this.price = this.price;
  } else if (this.toppings.length <= 2) {
    this.price += 1.5;
  } else if (this.toppings.length <= 5) {
    this.price += 3;
  } else {
    this.price += 4.5;
  }
}

//User Interface Logic
var order = new Order();



$(document).ready(function() {
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();
    var inputtedSize = $("size").val();
    var inputtedToppings = $("input:radio[name=topping]:checked").val();
    var newPizza = new Pizza(inputtedSize, inputtedToppings, price);
    order.addPizza(newPizza);
    newPizza.checkSize();
    newPizza.checkToppings();
  });
});
