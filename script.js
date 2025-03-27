
let TODO = []; 
function AgregarTarea(){
    Lista.innerHTML = ""
    let NombreTarea = document.getElementById("IngresarTODO").value;
    let tarea = {
        id : TODO.length,
        Nombre : NombreTarea,
        Resuelto : false,
        FechaCreacion: new Date().toLocaleString(), 
        FechaTachado: null,
        TimestampTachado: null
    }
    TODO.push(tarea);
    console.log(TODO)
    for(let i = 0 ; i < TODO.length ; i++){
        if(TODO[i].Resuelto)
            Lista.innerHTML += `<div style="display: flex"><input type="checkbox" id="${i}" onclick = "Tachar(this)" checked> <p id="texto${i}" class="Tachar">${TODO[i].Nombre}</p></div>`
        else
            Lista.innerHTML += `<div style="display: flex"><input type="checkbox" id="${i}" onclick = "Tachar(this)"> <p id="texto${i}">${TODO[i].Nombre}</p></div>`
    }
}
function Tachar(el){
    if(el.checked){
        document.querySelector("#texto" + el.id).classList.add("Tachar")
        TODO[el.id].Resuelto = true;
        TODO[el.id].FechaTachado = new Date().toLocaleString();
        TODO[el.id].TimestampTachado = new Date().getTime();
    } else {
        document.querySelector("#texto" + el.id).classList.remove("Tachar")
        TODO[el.id].Resuelto = false;
        TODO[el.id].FechaTachado = null;
        TODO[el.id].TimestampTachado = null;
    }
}

function TareaRpida(){
    let tareaRapida = null;
    let tiempoMasRapido = Infinity; 

  
    for (let i = 0; i < TODO.length; i++) {
        if (TODO[i].TimestampTachado !== null) { 
            let tiempoTachado = TODO[i].TimestampTachado;
            if (tiempoTachado < tiempoMasRapido) {
                tiempoMasRapido = tiempoTachado;
                tareaRapida = TODO[i];
            }
        }
    }

   
    if (tareaRapida) {
        document.getElementById("TareaRapidaResultado").innerHTML = `
            <p><strong>Tarea más rápida en ser tachada:</strong></p>
            <p>Nombre: ${tareaRapida.Nombre}</p>
            <p>Fecha de creación: ${tareaRapida.FechaCreacion}</p>
            <p>Fecha de tachado: ${tareaRapida.FechaTachado}</p>
        `;
    } else {
        document.getElementById("TareaRapidaResultado").innerHTML = "<p>Aún no hay tareas tachadas.</p>";
    }
}

