function fetchEmployees() {
  fetch('http://localhost:3000/api/v1/employee')
    .then(response => response.json())
    .then(data => {
      const tableBody = document.getElementById('dataTable')
      tableBody.innerHTML = ''
      const list = data.data
      list.forEach(item => {
        const row = document.createElement('tr')
        const idCell = document.createElement('td')
        idCell.textContent = item.id
        row.appendChild(idCell)

        const nameCell = document.createElement('td')
        nameCell.textContent = item.name
        row.appendChild(nameCell)

        const deleteCell = document.createElement('td')
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
        deleteButton.addEventListener('click',()=> deleteEmployee(item.id)); // question
        deleteCell.appendChild(deleteButton);

        row.appendChild(deleteCell)

        tableBody.appendChild(row)
      })
    })
    .catch(error => console.error(error))
    //addEventListenerToDeleteButton();
}

// TODO
// add event listener to submit button


//The first parameter is the type of the event 
//The second parameter is the function we want to call when the event occurs.

const formElement=document.getElementById('employeeForm');
const submitButton=formElement.getElementsByTagName("button");
submitButton[0].addEventListener("click", createEmployee);
//Another Solution
//document.querySelector('button[type = "submit"]').addEventListener("click", createEmployee);
//i think it is not perfect solution becouse what will happen if we have more than one buttom
//and querySelector Get first match

// TODO
// add event listener to delete button
//Question Here
// function addEventListenerToDeleteButton(){
//   const tableBody = document.getElementById('dataTable');
//   const deletedCells=tableBody.getElementsByTagName("td");
//     for (let i = 0; i < deletedCells.length; i++) {
//       var id=deletedCells[i].textContent; 
//       deletedCells[i].getElementsByTagName('button')[0].addEventListener("click", ()=>  deleteEmployee());
//     }
// }
// TODO
function createEmployee (){
  // get data from input field
    const inputName=document.getElementById('name').value;
    const inputid=document.getElementById('id').value;
  // send data to BE
  if (!inputName || !inputid) return ;
    try {
      fetch('http://localhost:3000/api/v1/employee',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({id :inputid ,name: inputName})
      });
    } catch (error) {
      console.error(error);
    }
  // call fetchEmployees
  fetchEmployees();
}

// TODO
function deleteEmployee (id){
  // get id
  // done
  // send id to BE
  fetch(`http://localhost:3000/api/v1/employee/${id}`, {
    method: 'DELETE',
  }).then(response => response.json())
  .then(() => fetchEmployees())
  .catch(error => console.error('Error:', error));
  // call fetchEmployeesr
}

fetchEmployees()
