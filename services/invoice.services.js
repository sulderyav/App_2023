const { faker } = require("@faker-js/faker");

class InvoiceService {
  constructor() {
    this.invoices = [];
    this.generate();
  }

  generate() {
    for (let i = 0; i < 100; i++) {
      this.invoices.push({
        invoice_id: i + 1,  
        description: faker.finance.accountName(), 
        price: 12.3,
        quantity: 1,
      });
    }
  }

  findAll() {
    return this.invoices;
  }

  findById(id) {
    return this.invoices.find((invoice) => invoice.invoice_id === id);
  }
}

module.exports = new InvoiceService();
