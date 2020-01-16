let form = document.getElementById("commentForm");

function watchform(){    
    form.addEventListener("submit", (event)=>{
        event.preventDefault();
        
    })
}

function firstName(){
    let name = document.getElementById("firstname")
    if(name.value == ""){
        name.setAttribute("placeholder","Ingresa tu nombre");
        console.log("No hay informacion valida")
    }
    else{
        console.log("Informacion Correcta")
    }
}

function validarSelect(){
    let selection = document.getElementsByTagName("option");
    selection.addEventListener("change",(event)=>{
        if(event.target.value !== "-1")
            console.log(event.target.value);
        else{
            console.log("Selecciona valor valido")
            event.preventDefault();
        }
    })
}

function init(){
    watchform();
    firstName();
}

init();