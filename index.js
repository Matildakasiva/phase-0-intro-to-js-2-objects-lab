// Write your solution in this file!
let employee = {
    name: 'Anissa',
    streetAddress: 'block 6, dashvill'
}
const key = 'name'
console.log(employee)


function updateEmployeeWithKeyAndValue(){
    const copyOfEmployee = {...employee}
    copyOfEmployee.name = 'Sam'
    copyOfEmployee.streetAddress = '11 Broadway'
    delete employee.streetAddress
    const key = 'name'
    return copyOfEmployee
}
updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway')
console.log(employee['streetAddress'])

function destructivelyUpdateEmployeeWithKeyAndValue(){
    const copyOfEmployee = {...employee}
    copyOfEmployee.streetAddress = '12 Broadway'
    employee.streetAddress = '12 Broadway'
    employee.name = 'Sam'
    return copyOfEmployee
}
destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway')
console.log(employee)

function deleteFromEmployeeByKey(){
    const copyOfEmployee = {...employee}
    delete copyOfEmployee.name
    return copyOfEmployee
}
let newEmployee = deleteFromEmployeeByKey(employee, 'name')
console.log(newEmployee['name'])
console.log(typeof newEmployee)

function destructivelyDeleteFromEmployeeByKey(employee, key){
    console.log(newEmployee)
    newEmployee.streetAddress = '12 Broadway'
    delete employee.name
     employee.streetAddress = "12 Broadway"
     
    return employee
}


newEmployee = destructivelyDeleteFromEmployeeByKey(employee, 'name');
console.log(newEmployee['name'])

console.log(employee['name'])

console.log(employee)
