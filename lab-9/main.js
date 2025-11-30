function Product(name, price, category) {
  this.name = name;
  this.price = price;
  this.category = category;
}

Product.prototype.getInfo = function () {
  return this.name + " (" + this.category + ") – " + this.price + " грн";
};

function Order() {
  this.products = [];
  this.total = 0;
}

Order.prototype.addProduct = function (product) {
  this.products.push(product);
  this.total += product.price;
};

Order.prototype.getOrderInfo = function () {
  return (
    "Товарів у замовленні: " +
    this.products.length +
    ", сума: " +
    this.total +
    " грн"
  );
};

function Customer(name) {
  this.name = name;
  this.orders = [];
}

Customer.prototype.addOrder = function (order) {
  this.orders.push(order);
};

Customer.prototype.viewOrders = function () {
  console.log("Замовлення клієнта " + this.name + ":");
  this.orders.forEach(function (order, index) {
    console.log("Замовлення " + (index + 1) + ":");
    order.products.forEach(function (product) {
      console.log("- " + product.getInfo());
    });
    console.log("Сума: " + order.total + " грн");
  });
};

const p1 = new Product("Ноутбук", 25000, "електроніка");
const p2 = new Product("Мишка", 600, "периферія");
const p3 = new Product("Книга", 300, "література");

const order1 = new Order();
order1.addProduct(p1);
order1.addProduct(p2);

const order2 = new Order();
order2.addProduct(p3);

const customer = new Customer("Олександр");
customer.addOrder(order1);
customer.addOrder(order2);

console.log(customer);
customer.viewOrders();
