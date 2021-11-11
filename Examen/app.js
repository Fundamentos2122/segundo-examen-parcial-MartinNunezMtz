

const tareaForm = document.forms["tareaForm"];
const tareaList = document.getElementById("tareas");

eventListener();


function eventListener(){
    tareaForm.addEventListener("submit", addTarea);
}




function addTarea(e){

    e.preventDefault();


    const tarea = tareaForm["Descripcion"].evalue;


    const newTarea = document.createElement("div");


    newTarea.className = "Tborder-top";
    newTarea.innerHTML = 
    `<div>
    <h2>Titulo</h2>
    </div>
    
    <div>
    ${tarea}
    </div>
    
    <div class="Talign-right">
    <input type="checkbox">
    Completada
    </div>`;

    tareaList.appendChild(newTarea);
}