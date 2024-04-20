// document.addEventListener("DOMContentLoaded", (event) => {
  // Your JavaScript code here
  const inputbox = document.getElementById("todo");

  const listcontainer = document.getElementById("listcontainer");
  // const addbutton = document.getElementById("add");

  //when add button is clicked add the todo to the list
  // addbutton.addEventListener("click", addTask);
  function addTask() {
    if (inputbox.value === "") {
      alert("Please enter a task");
    } 
    else
    {
      console.log(inputbox.value);
      const list = document.createElement("li");
      list.innerHTML = inputbox.value;
      listcontainer.appendChild(list);
      let span = document.createElement("span");
      span.innerHTML = "X";
      list.appendChild(span);
      inputbox.value = ""; 

      

    }
  }
// });
