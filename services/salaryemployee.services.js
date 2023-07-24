const { faker } = require("@faker-js/faker");

class SalaryEmployeeService {
  constructor() {
    this.salaryEmployee = [];
    this.generate();
  }

  generate() {
    for (let i = 0; i < 100; i++) {
      this.salaryEmployee.push({
        salaryEmployee_id: i + 1,
        get: faker.finance.amount(), 
        toString: faker.datatype.string(),
        validation: true    , 
      });
    }
  }

  find() {
    return this.salaryEmployee;
  }

  findOne(id) {
    return this.salaryEmployee.find((salaryEmployee) => salaryEmployee.salaryEmployee_id === id);
  }

  created(data){
    const newsalaryEmployees ={
      id: faker.string.uuid(),
      ...data
    }
    this.salaryEmployee.push(newsalaryEmployees);
    return newsalaryEmployees;
  }

  update(id,data){
    const indexsalaryEmployee = this.findOne(id);
    const updateEmployee = this.salaryEmployee[indexsalaryEmployee];

    this.salaryEmployee[indexsalaryEmployee] = {
      ...updateEmployee,
      ...data
    }
    return this.salaryEmployee[indexsalaryEmployee];
    
  }


}

module.exports = SalaryEmployeeService;
