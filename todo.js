const inputbox = document.getElementById("todo");

const listcontainer = document.getElementById("list-container");
const addbutton = document.getElementById("add");

//when add button is clicked add the todo to the list
addbutton.addEventListener("click", addTask);
function addTask()
{
  if(inputbox.value ==='')
  {
    alert("Please enter a task");
  }
}