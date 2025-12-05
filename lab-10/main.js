// -----------------------------
// КЛАС PRODUCT
// -----------------------------
class Product {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }

  getInfo() {
    return `${this.name} (${this.category}) — ${this.price} грн`;
  }
}

// -----------------------------
// КЛАС USER
// -----------------------------
class User {
  constructor(name) {
    this.name = name;
  }

  getInfo() {
    return `Користувач: ${this.name}`;
  }
}

// -----------------------------
// КЛАС ORDER
// -----------------------------
class Order {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  getTotalSum() {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  }

  showOrder() {
    console.log("Замовлення:");
    this.products.forEach((product) => {
      console.log(" - " + product.getInfo());
    });
    console.log("Загальна сума:", this.getTotalSum(), "грн");
  }
}

// -----------------------------
// КЛАС CUSTOMER (УСІДОВАНИЙ ВІД USER)
// -----------------------------
class Customer extends User {
  constructor(name) {
    super(name);
    this.orders = [];
  }

  addOrder(order) {
    this.orders.push(order);
  }

  showOrders() {
    console.log(`Замовлення покупця ${this.name}:`);

    if (this.orders.length === 0) {
      console.log("Немає замовлень.");
      return;
    }

    this.orders.forEach((order, index) => {
      console.log(`\n--- Замовлення №${index + 1} ---`);
      order.showOrder();
    });
  }
}

// -----------------------------------------------
// ТЕСТУВАННЯ — СТВОРЕННЯ ПРОДУКТІВ, ЗАМОВЛЕНЬ, КЛІЄНТА
// -----------------------------------------------

console.log("==== Тестування онлайн-магазину ====");

// Продукти
const phone = new Product("Смартфон Samsung", 15000, "Електроніка");
const laptop = new Product("Ноутбук Lenovo", 27000, "Електроніка");
const bread = new Product("Хліб", 25, "Продукти");

// Покупець
const customer = new Customer("Олександр");

// Перше замовлення
const order1 = new Order();
order1.addProduct(phone);
order1.addProduct(bread);
customer.addOrder(order1);

// Друге замовлення
const order2 = new Order();
order2.addProduct(laptop);
customer.addOrder(order2);

// Вивід
console.log(customer.getInfo());
customer.showOrders();
