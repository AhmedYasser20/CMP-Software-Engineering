const employee = [
  { id: '1', name: 'Mohamed Sayedsss' },
];

exports.getEmployees = async (req, res, next) => {
  res.status(200).json({ data: employee });
};

// TODO
exports.deleteEmployee = async (req, res, next) => {
  //Get ID form URL
  const id=req.params.id;

  //search in employee
  let index = -1;
  for (let i = 0; i < employee.length; i++) {
    if(employee[i].id==id){
      index=i;
      break;
    }
  }
  //const index = employee.findIndex((emp) => emp.id === id);
  //check if we found the employee
  if(index!=-1){
    //The splice() method in JavaScript allows you to insert new elements into an array while deleting existing elements simultaneously.
    employee.splice(index,1);
    res.status(200).json({ message: 'Employee deleted successfully' });
  }
  else{
    res.status(404).json({ message: 'Error' });
  }
};

// TODO
exports.createEmployee = async (req, res, next) => {
   
    const { id,name  } = req.body;
    // Check if employee with the same id already exists
    let index = -1;
    for (let i = 0; i < employee.length; i++) {
      if(employee[i].id==id){
        index=i;
        break;
      }
    }
  //check if we found the employee
  if(index!=-1){
    return res.status(400).json({ message: 'Employee with the same id already exists' });
  }
    employee.push({ id, name: name });
    res.status(201).json({ message: 'Employee created successfully' });
};
