const { faker } = require("@faker-js/faker");

class EmployeeService {
  constructor() {
    this.employees = [];
    this.generate();
  }

  generate() {
    for (let i = 0; i < 100; i++) {
      this.employees.push({
        employee_id: i + 1,
        bornDate: 2002,
        firstName: faker.person.firstName(),
        hireDate: faker.date.future(),
        isActive: true, 
        lastName: faker.person.lastName(),
      });
    }
  }

  findAll() {
    return this.employees;
  }

  findById(id) {
    return this.employees.find((employee) => employee.employee_id === id);
  }
}

module.exports = new EmployeeService();
