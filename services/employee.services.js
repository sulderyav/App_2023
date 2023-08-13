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
    console.log(data);
    const client = await conexion();
    const sql = `insert into employee
                (nombre,apellido,email,role)
                values ("${data.nombre}","${data.apellido}", "${data.email}", "${data.role}")`;
    const rta = await client.query(sql);
    if(rta.rowcount != 1){
      throw Boom.badRequest("not found"); 

    }
    return rta; 
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





// class employee{

//     constructor(){
//         this.employee = [];
//         this.generate();
//     }

//         generate(){
//             for (let i = 0; i< 100; i++) {
//                 this.employee.push(
//                   {
//                     employee_id: i + 1,
//                     bornDate: 2002,
//                     firstName: faker.person.firstName(),
//                     hireDate: faker.date.hireDate(),
//                     isActive: faker.status.isActive(),
//                     lastName: faker.person.lastName()
//                   }
//                 )
//               }
//             }
       

//         find(){
//             return this.employee;
//         }

//         findOne(id){
//             return this.employee.find(em => em === id);
//         }

//     }


//         module.exports = employee;
