const container = document.getElementById("container");
const torre1 = document.querySelector(".torre1");
const torre2 = document.querySelector(".torre2");
const torre3 = document.querySelector(".torre3");
const torre4 = document.querySelector(".torre4");
let estado = 1;
let qualTorre = 0;
let ultimoDisco;

container.addEventListener ("click" , function(e) {
    console.log("Estado = " + estado)
    if (e.target.classList.contains("torre1")) {
        // Se estado for impar
        if( estado % 2 !== 0) {
            estado++;
            ultimoDisco = torre1.lastElementChild;
          
        } else if ( estado % 2 === 0) {
            if (ultimoDisco === torre1.lastElementChild) {
                estado--;
            } else {
                torre1.appendChild(ultimoDisco);
                estado++;
            }
            console.log("Estado 2= " + estado)
        }
        console.log(ultimoDisco);
    }
    if (e.target.classList.contains("torre2")) {
       
        if( estado % 2 !== 0) {
            ultimoDisco = torre2.lastElementChild;
            estado++;
        } else if ( estado % 2 === 0) {
            console.log(torre2.lastElementChild)
            if (ultimoDisco === torre2.lastElementChild && torre2.lastElementChild === null) {
                estado--;
            } else {
                torre2.appendChild(ultimoDisco);
                estado++;     
                console.log("else")
            }
        }
    }
    if (e.target.classList.contains("torre3")) {
     
        if( estado % 2 !== 0) {
            ultimoDisco = torre3.lastElementChild;
            estado++;
        } else if ( estado % 2 === 0) {
            torre3.appendChild(ultimoDisco);
            estado++;
        }
    }

    
})

const discoDinamico1 = document.createElement("div");
discoDinamico1.id = "disco1";
torre1.appendChild(discoDinamico1);

const discoDinamico2 = document.createElement("div");
discoDinamico2.id = "disco2";
torre1.appendChild(discoDinamico2);

const discoDinamico3 = document.createElement("div");
discoDinamico3.id = "disco3";
torre1.appendChild(discoDinamico3);

const discoDinamico4 = document.createElement("div");
discoDinamico4.id = "disco4";
torre1.appendChild(discoDinamico4);


