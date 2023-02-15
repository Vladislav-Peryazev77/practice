"use strict";
const shoppingBag = [ 
  { product: 'Chocolate', quantity: 3 }, 
  { product: 'Orange Juice', quantity: 23 }, 
]
const groceries = { 
  "Orange Juice": { price : 1.5, discount: 10, },
  "Chocolate": { price : 2, discount : 0, }
}
function getTotalPriceOfShoppingBag(shoppingBag) {
  let totalPrice = 0;
  for ( let elem of shoppingBag) {
    let prod = elem.product;
    totalPrice += elem.quantity * (groceries[prod].price * (groceries[prod].discount/ 100));
  }
  return totalPrice;
}
console.log(getTotalPriceOfShoppingBag(shoppingBag));







