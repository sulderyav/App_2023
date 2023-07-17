const { faker } = require("@faker-js/faker");

class SalaryEmployeeService {
  constructor() {
    this.salaryEmployees = [];
    this.generate();
  }

  generate() {
    for (let i = 0; i < 100; i++) {
      this.salaryEmployees.push({
        salaryEmployee_id: i + 1,
        get: faker.finance.amount(), 
        toString: faker.datatype.string(),
        validation: true    , 
      });
    }
  }

  find() {
    return this.salaryEmployees;
  }

  findOne(id) {
    return this.salaryEmployees.find((salaryEmployee) => salaryEmployee.salaryEmployee_id === id);
  }
}

module.exports = new SalaryEmployeeService();
