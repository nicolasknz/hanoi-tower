const container = document.getElementById("container");
const torre1 = document.querySelector(".torre1");
const torre2 = document.querySelector(".torre2");
const torre3 = document.querySelector(".torre3");

container.addEventListener ("click" , function(e) {
    let estado = 0;
    if (e.target.classList.contains("torre1")) {
        console.log("Torre um");
        estado = 1;
    }

    if (e.target.classList.contains("torre2")) {
        console.log("Torre dois");
        estado = 1;
    }

    if (e.target.classList.contains("torre3")) {
        console.log("Torre tres");
        estado = 1;
    }
})

let disco1 = document.createElement("div");
disco1.classList.add("disco1");

torre1.appendChild(disco1);




