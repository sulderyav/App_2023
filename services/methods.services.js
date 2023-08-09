const { faker } = require("@faker-js/faker");
const Boom = require("boom");
const conexion = require ("../lib/cnPostgres");

class MethodsService {
  constructor() {
    this.methods = [];
    this.generate();
  }

  async generate() {
    for (let i = 0; i < 100; i++) {
      this.methods.push({
        methods_id: i + 1,
        get: faker.finance.amount(),
        toString: faker.datatype.string(), 
      });
    }
  }
  async find(){
    const client = await conexion();
    const rta =  await client.query("select * from methods");
    return rta.rows;
  }
  async find() {
    return this.methods;
  }

  async findOne(id) {
    return this.methods.find((method) => method.methods_id === id);
  }
  async created(data){
    const newMethods ={
      id: faker.string.uuid(),
      ...data
    }
    this.methods.push(newMethods);
    return newMethods;
  }

  async update(id,data){
    const indexMethods = this.findOne(id);
    const updateMethods = this.methods[indexMethods];

    this.methods[indexMethods] = {
      ...updateMethods,
      ...data
    }
    return this.methods[indexMethods];
    
  }
  async deleted(id){
    const client = await conexion();
    const sql = "delete from methods where id=${id}"
    const rta = await client.query(sql);
    return rta.rows ; 
  }

}

module.exports = MethodsService;
