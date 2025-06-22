// variables
let inputfield = document.querySelector("input")
let submitbtn = document.getElementById("add-btn")
let clearbtn = document.getElementById("clear")
let taskList = document.getElementById("task-list")

// logic
const clearall = () =>{
    
    taskList.innerHTML = "";
};

const submitall = () =>{
      let task = inputfield.value;
      let newItem = document.createElement("li")

      newItem.innerHTML = 

         `<div class="space-x-3 flex justify-between items-center bg-white p-2 rounded-md shadow ">
           <p> ${task}</p>
           <div>
            <i id="check" class="fa-solid fa-check pr-3 text-blue-600 cursor-pointer"></i>
            <i id="remove" class="fa-solid fa-trash text-red-600 cursor-pointer"></i>
         </div>`
        inputfield.value = ``;

// eventlistner
            let checktask = newItem.querySelector("#check")
            checktask.addEventListener("click" , () => {
                newItem.querySelector("p").style.textDecoration = "line-through"
            })

            let deletetask = newItem.querySelector("#remove")
            deletetask.addEventListener("click" , () => taskList.removeChild(newItem))


        taskList.appendChild(newItem);
}


// eventlistner

clearbtn.addEventListener("click" ,clearall)
submitbtn.addEventListener("click" , submitall)   