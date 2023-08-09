const { faker } = require("@faker-js/faker");
const Boom = require("boom");
const conexion = require ("../lib/cnPostgres");


class EmployeeService {
  constructor() {
    this.employees = [];
    this.generate();
  }

 async generate() {
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
  async find(){
    const client = await conexion();
    const rta =  await client.query("select * from employee");
    return rta.rows;
  }
  
  async findAll() {
    return this.employees;
  }

  async findById(id) {
    return this.employees.find((employee) => employee.employee_id === id);
  }

  async created(data){
    const newEmployee ={
      id: faker.string.uuid(),
      ...data
    }
    this.employees.push(newEmployee);
    return newEmployee;
  }

  async update(id,data){
    const indexEmployee = this.findOne(id);
    const updateEmployee = this.employees[indexEmployee];

    this.employees[indexEmployee] = {
      ...updateEmployee,
      ...data
    }
    return this.employees[indexEmployee];
    
  }
async deleted(id){
    const client = await conexion();
    const sql = "delete from employee where id=${id}"
    const rta = await client.query(sql);
    return rta.rows ; 
  }

}


module.exports = EmployeeService;


