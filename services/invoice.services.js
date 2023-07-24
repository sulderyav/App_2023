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
  created(data){
    const newInvoice ={
      id: faker.string.uuid(),
      ...data
    }
    this.invoices.push(newInvoice);
    return newInvoice;
  }

  update(id,data){
    const indexInvoice = this.findOne(id);
    const updateInvoice = this.invoices[indexInvoice];

    this.invoices[indexInvoice] = {
      ...updateInvoice,
      ...data
    }
    return this.invoices[indexInvoice];
    
  }

}

module.exports = InvoiceService;

