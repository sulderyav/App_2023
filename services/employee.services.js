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

  created(data){
    const newEmployee ={
      id: faker.string.uuid(),
      ...data
    }
    this.employees.push(newEmployee);
    return newEmployee;
  }

  update(id,data){
    const indexEmployee = this.findOne(id);
    const updateEmployee = this.employees[indexEmployee];

    this.employees[indexEmployee] = {
      ...updateEmployee,
      ...data
    }
    return this.employees[indexEmployee];
    
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
