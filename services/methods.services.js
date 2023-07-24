const { faker } = require("@faker-js/faker");

class MethodsService {
  constructor() {
    this.methods = [];
    this.generate();
  }

  generate() {
    for (let i = 0; i < 100; i++) {
      this.methods.push({
        methods_id: i + 1,
        get: faker.finance.amount(),
        toString: faker.datatype.string(), 
      });
    }
  }

  find() {
    return this.methods;
  }

  findOne(id) {
    return this.methods.find((method) => method.methods_id === id);
  }
  created(data){
    const newMethods ={
      id: faker.string.uuid(),
      ...data
    }
    this.methods.push(newMethods);
    return newMethods;
  }

  update(id,data){
    const indexMethods = this.findOne(id);
    const updateMethods = this.methods[indexMethods];

    this.methods[indexMethods] = {
      ...updateMethods,
      ...data
    }
    return this.methods[indexMethods];
    
  }
}
module.exports = MethodsService;
