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
function Pizza (size, toppings) {
  this.size = size,
  this.toppings = []
}

//User Interface Logic
var order = new Order();

$(document).ready(function() {
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();
    var inputtedSize = $("");
    var inputtedToppings = $("");
    var newPizza = new Pizza(inputtedSize, inputtedToppings);
    order.addPizza(newPizza);
  });
});
