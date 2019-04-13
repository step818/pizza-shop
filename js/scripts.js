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
  if (this.toppings.length === 0) {
    this.price = this.price;
  } else if (this.toppings.length <= 2) {
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
    var inputtedSize = $("#size").val();
    var inputtedToppings = []; $("input:checkbox[name=topping]:checked").each(function () {
      inputtedToppings.push($(this).val());
    })
    var newPizza = new Pizza(inputtedSize, inputtedToppings);
    newPizza.checkSize();
    newPizza.checkToppings();
    $("#order-cost").text("You ordered a " + newPizza.size + " pizza with " + newPizza.toppings + " added to it. Your total is " + "$" + newPizza.price.toFixed(2));
  });
});
