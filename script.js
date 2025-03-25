let contador = 0
let TODO = []; 
function AgregarTarea(){
    Lista.innerHTML = ""
    let NombreTarea = document.getElementById("IngresarTODO").value;
    let tarea = {
        id : contador,
        Nombre : NombreTarea,
        Resuelto : false
    }
    TODO.push(tarea);
    console.log(TODO)
    for(let i = 0 ; i <= contador ; i++){
        Lista.innerHTML += `<div style="display: flex"><input type="checkbox" id="${i}" onclick = "Tachar(this)"> <p id="texto${i}">${TODO[i].Nombre}</p></div>`
    }
    contador ++;
}
function Tachar(el){
    if(el.checked){
        document.querySelector("#texto" + el.id).classList.add("Tachar")
    } else {
        document.querySelector("#texto" + el.id).classList.remove("Tachar")
    }
}

