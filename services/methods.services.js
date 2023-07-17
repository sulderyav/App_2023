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
}
module.exports = new MethodsService();
