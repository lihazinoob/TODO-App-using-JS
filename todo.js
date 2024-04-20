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
      span.innerHTML = "\u00D7";
      list.appendChild(span);
      inputbox.value = ""; 
      savedata();

      

    }
  }
// });

listcontainer.addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
    
    event.target.classList.toggle("checked");
    savedata();

  }
  else if(event.target.tagName === "SPAN") {
    event.target.parentElement.remove();
    savedata();
  }
});

function savedata()
{
  localStorage.setItem("data", listcontainer.innerHTML);

}

function getdata()
{
  if(localStorage.getItem("data"))
  {
    listcontainer.innerHTML = localStorage.getItem("data");
  }
}
getdata();