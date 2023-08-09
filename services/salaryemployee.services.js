const { faker } = require("@faker-js/faker");
const Boom = require("boom");
const conexion = require ("../lib/cnPostgres");

class SalaryEmployeeService {
  constructor() {
    this.salaryEmployee = [];
    this.generate();
  }

  async generate() {
    for (let i = 0; i < 100; i++) {
      this.salaryEmployee.push({
        salaryEmployee_id: i + 1,
        get: faker.finance.amount(), 
        toString: faker.datatype.string(),
        validation: true    , 
      });
    }
  }

  async find(){
    const client = await conexion();
    const rta =  await client.query("select * from salaryemployee");
    return rta.rows;
  }

  async find() {
    return this.salaryEmployee;
  }

  async findOne(id) {
    return this.salaryEmployee.find((salaryEmployee) => salaryEmployee.salaryEmployee_id === id);
  }

  async created(data){
    const newsalaryEmployees ={
      id: faker.string.uuid(),
      ...data
    }
    this.salaryEmployee.push(newsalaryEmployees);
    return newsalaryEmployees;
  }

  async update(id,data){
    const indexsalaryEmployee = this.findOne(id);
    const updateEmployee = this.salaryEmployee[indexsalaryEmployee];

    this.salaryEmployee[indexsalaryEmployee] = {
      ...updateEmployee,
      ...data
    }
    return this.salaryEmployee[indexsalaryEmployee];
    
  }

  async deleted(id){
    const client = await conexion();
    const sql = "delete from employee where id=${id}"
    const rta = await client.query(sql);
    return rta.rows ; 
  }
}

module.exports = SalaryEmployeeService;
