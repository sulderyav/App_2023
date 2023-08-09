const { faker } = require("@faker-js/faker");
const Boom = require("boom");
const conexion = require ("../lib/cnPostgres");

class InvoiceService {
  constructor() {
    this.invoices = [];
    this.generate();
    
  }

  async generate() {
    for (let i = 0; i < 100; i++) {
      this.invoices.push({
        invoice_id: i + 1,  
        description: faker.finance.accountName(), 
        price: 12.3,
        quantity: 1,
      });
    }
  }

  async find(){
    const client = await conexion();
    const rta =  await client.query("select * from invoice");
    return rta.rows;
  }

  async findAll() {
    return this.invoices;
  }

  async findById(id) {
    return this.invoices.find((invoice) => invoice.invoice_id === id);
  }
  async created(data){
    const newInvoice ={
      id: faker.string.uuid(),
      ...data
    }
    this.invoices.push(newInvoice);
    return newInvoice;
  }

  async update(id,data){
    const indexInvoice = this.findOne(id);
    const updateInvoice = this.invoices[indexInvoice];

    this.invoices[indexInvoice] = {
      ...updateInvoice,
      ...data
    }
    return this.invoices[indexInvoice];
    
  }
  async deleted(id){
    const client = await conexion();
    const sql = "delete from invoice where id=${id}"
    const rta = await client.query(sql);
    return rta.rows ; 
  }

}

module.exports = InvoiceService;

