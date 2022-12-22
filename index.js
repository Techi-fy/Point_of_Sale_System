//oop design for point of sale
class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
  
  class Transaction {
    constructor(customer, products) {
      this.customer = customer;
      this.products = products;
      this.date = new Date();
    }
  
    getTotal() {
      return this.products.reduce((total, product) => total + product.price, 0);
    }
  }
  
  class POS {
    constructor(inventory) {
      this.inventory = inventory;
      this.transactions = [];
    }
  
    addTransaction(transaction) {
      this.transactions.push(transaction);
    }
  
    getTransactionHistory() {
      return this.transactions;
    }
  }
  
  // Create a new POS system with an inventory of products
  const inventory = [
    new Product('Apple', 0.99),
    new Product('Orange', 0.89),
    new Product('Banana', 0.79),
  ];
  const pos = new POS(inventory);
  
 // Set up event listeners to handle adding products to the cart and completing transactions
document.querySelectorAll('.add-button').forEach(button => {
    button.addEventListener('click', event => {
      const productItem = event.target.parentNode;
      const name = productItem.querySelector('.product-name').textContent;
      const price = parseFloat(productItem.querySelector('.product-price').textContent.slice(1));
      const product = new Product(name, price);
      pos.addTransaction(new Transaction('Ray Smith', [product]));
      updateTransactionDetails();
    });
  });
  
  document.querySelector('.complete-button').addEventListener('click', event => {
    pos.addTransaction(new Transaction('Ray Smith', []));
    updateTransactionDetails();
  });

  
  function updateTransactionDetails() {
    const transactions = pos.getTransactionHistory();
    const transaction = transactions[transactions.length - 1];
    document.querySelector('.customer-name').textContent = transaction.customer;
    document.querySelector('.transaction-date').textContent = transaction.date.toDateString();
    document.querySelector('.product-list').innerHTML = transaction.products
      .map(product => `<div>${product.name}</div>`)
      .join('');
    document.querySelector('.transaction-total').textContent = `Total: $${transaction.getTotal().toFixed(2)}`;
  }

  /*clear cart*/
  document.querySelector('.add-apple-button').addEventListener('click', () => addToCart('Apple', 0.99));
document.querySelector('.delete-apple-button').addEventListener('click', () => deleteFromCart('Apple'));

  function clearCart() {
    pos.addTransaction(new Transaction('Ray Smith', []));
    updateTransactionDetails();
  }
  function addToCart(name, price) {
    const product = new Product(name, price);
    pos.addTransaction(new Transaction('Ray Smith', [product]));
    updateTransactionDetails();
  }
  
  function deleteFromCart(name) {
    const transactions = pos.getTransactionHistory();
    const transaction = transactions[transactions.length - 1];
    const products = transaction.products.filter(product => product.name !== name);
    pos.addTransaction(new Transaction('John Smith', products));
    updateTransactionDetails();
  }  
//add items to cart
  document.querySelector('.add-apple-button').addEventListener('click', () => addToCart('Apple', 0.99));
document.querySelector('.add-orange-button').addEventListener('click', () => addToCart('Orange', 0.79));

  function addToCart(name, price) {
    const product = new Product(name, price);
    pos.addTransaction(new Transaction('Ray Smith', [product]));
    updateTransactionDetails();
  }
  
  // JavaScript update transaction

  // JavaScript
function updateTransactionTotal() {
    const transactionTotalElement = document.querySelector('.total-amount');
    const transactions = pos.getTransactionHistory();
    const transaction = transactions[transactions.length - 1];
    transactionTotalElement.textContent = transaction.total.toFixed(2);
  }
  
  function addToCart(name, price) {
    const product = new Product(name, price);
    pos.addTransaction(new Transaction('John Smith', [product]));
    updateTransactionDetails();
    updateTransactionTotal();
  }
  
  function deleteFromCart(name) {
    const transactions = pos.getTransactionHistory();
    const transaction = transactions[transactions.length - 1];
    const products = transaction.products.filter(product => product.name !== name);
    pos.addTransaction(new Transaction('John Smith', products));
    updateTransactionDetails();
  
  }
  