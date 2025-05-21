import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js'
import { loadProducts } from '../data/products.js';
import { loadCart } from '../data/cart.js';
//import '../../data/cart-class.js';
//import '../data/backend-practice.js';

Promise.all([
  new Promise((resolve) => {
    loadProducts(() => {
      resolve('value2');
    });

  }),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });

  })
]).then((value) => {
  console.log(value);

  renderOrderSummary();
  renderPaymentSummary();
});


/*

new Promise((resolve) => {
  loadProducts(() => {
    resolve('value2');
  });

}).then((value) => {
  console.log(value);

  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });

  }).then(() => {
    renderOrderSummary();
    renderPaymentSummary();
  });

});
*/


// nested
/*
loadProducts(() => {
  loadCart(() => {
    renderOrderSummary();
    renderPaymentSummary();
  })

});
*/
