
const inputfield=document.getElementById("inputField");
const addTaskBtn=document.getElementById("addToDo");
const TaskContainer=document.getElementById("toDoContainer");
const Tasklist=document.getElementsByClassName("Tasks");

let id=0;
addTaskBtn.addEventListener("click",()=>{
    if(inputfield.value.length>0){
        TaskContainer.innerHTML+=`<p class="Tasks" id="${id}">${inputfield.value}</p>`;
        AddfunctionstoTasks()
        inputfield.value="";
        id++;
        console.log(Tasklist)
    }else{
        alert("Task input is empty")
    }
});

function AddfunctionstoTasks(){
    for(let j=0;j<Tasklist.length;j++){
        Tasklist[j].addEventListener(("click"),(event)=>{
            event.currentTarget.style.textDecoration="line-through"
            console.log(Tasklist)
        })
        Tasklist[j].addEventListener(("dblclick"),(event)=>{
            console.log(event.currentTarget)
            event.currentTarget.remove()
            console.log(Tasklist)
            id--;
        })

    }
}




