/* There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes. */
const mango = (quantity, price) => {
    console.log(quantity);
    console.log(price);
    let extra = 0;
    for ( let i = 1; i<=quantity;i++) {
      i%3==0 ? extra++ : false;
    }
    return quantity*price-extra*price;
  }