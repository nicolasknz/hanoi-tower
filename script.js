
const container = document.getElementById("container");
const torre1 = document.querySelector(".torre1");
const torre2 = document.querySelector(".torre2");
const torre3 = document.querySelector(".torre3");
const torre4 = document.querySelector(".torre4");
let estado = 1;
let qualTorre = 0;
let ultimoDisco;

function funcaoMaster() {
    let containerTorre = document.createElement("div");
    containerTorre.classList.add("containerTorre");
    container.appendChild(containerTorre);
    let torre1 = document.createElement("div");
    torre1.classList.add("torre1")
    containerTorre.appendChild(torre1);

    let containerTorre2 = document.createElement("div");
    containerTorre2.classList.add("containerTorre");
    container.appendChild(containerTorre2);
    let torre2 = document.createElement("div");
    torre2.classList.add("torre2");
    containerTorre2.appendChild(torre2);

    let containerTorre3 = document.createElement("div");
    containerTorre3.classList.add("containerTorre");
    container.appendChild(containerTorre3);
    let torre3 = document.createElement("div");
    torre3.classList.add("torre3");
    containerTorre3.appendChild(torre3);


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

    container.addEventListener ("click" , function(e) {

        if (ultimoDisco === null) {
            estado++
        }
        
        
        if(e.target.id === "disco4" && discoDinamico4 === torre1.lastElementChild){
            ultimoDisco = torre1.lastElementChild;
            console.log(ultimoDisco);
            estado++;
        }
        if(e.target.id === "disco3" && discoDinamico3 === torre1.lastElementChild){
            ultimoDisco = torre1.lastElementChild;
            console.log(ultimoDisco);
            estado++;
        }
        if(e.target.id === "disco2" && discoDinamico2 === torre1.lastElementChild){
            ultimoDisco = torre1.lastElementChild;
            console.log(ultimoDisco);
            estado++;
        }
        if(e.target.id === "disco1" && discoDinamico1 === torre1.lastElementChild){
            ultimoDisco = torre1.lastElementChild;
            console.log(ultimoDisco);
            estado++;
        }
      
        if(e.target.id === "disco4" && discoDinamico4 === torre2.lastElementChild){
            ultimoDisco = torre2.lastElementChild;
            console.log(ultimoDisco);
            estado++;
        }
        if(e.target.id === "disco3" && discoDinamico3 === torre2.lastElementChild){
            ultimoDisco = torre2.lastElementChild;
            console.log(ultimoDisco);
            estado++;
        }
        if(e.target.id === "disco2" && discoDinamico2 === torre2.lastElementChild){
            ultimoDisco = torre2.lastElementChild;
            console.log(ultimoDisco);
            estado++;
        }
        if(e.target.id === "disco1" && discoDinamico1 === torre2.lastElementChild){
            ultimoDisco = torre2.lastElementChild;
            console.log(ultimoDisco);
            estado++;
        }

        if(e.target.id === "disco4" && discoDinamico4 === torre3.lastElementChild){
            ultimoDisco = torre3.lastElementChild;
            console.log(ultimoDisco);
            estado++;
        }
        if(e.target.id === "disco3" && discoDinamico3 === torre3.lastElementChild){
            ultimoDisco = torre3.lastElementChild;
            console.log(ultimoDisco);
            estado++;
        }
        if(e.target.id === "disco2" && discoDinamico2 === torre3.lastElementChild){
            ultimoDisco = torre3.lastElementChild;
            console.log(ultimoDisco);
            estado++;
        }
        if(e.target.id === "disco1" && discoDinamico1 === torre3.lastElementChild){
            ultimoDisco = torre3.lastElementChild;
            console.log(ultimoDisco);
            estado++;
        }
        if (e.target.classList.contains("torre1")) {
            if( estado % 2 !== 0) {
                estado++;
                ultimoDisco = torre1.lastElementChild;
            } else if ( estado % 2 === 0) {
                if (ultimoDisco !== null && ultimoDisco !== undefined ){
                    if (widthSize(ultimoDisco,torre1.lastElementChild) === true){
                        torre1.appendChild(ultimoDisco);
                        estado++;
                } else {
                    
                    ultimoDisco = null;
                }
            }
            }
        }
        if (e.target.classList.contains("torre2")) {
            if( estado % 2 !== 0) {
                ultimoDisco = torre2.lastElementChild;
                estado++;
            } else if ( estado % 2 === 0) {
                if (ultimoDisco !== null && ultimoDisco !== undefined){
                    if(widthSize(ultimoDisco,torre2.lastElementChild) === true) {
                        torre2.appendChild(ultimoDisco);
                        estado++;    
                } else {
                    
                    ultimoDisco = null;
                }
            }   
            }
        }
        if (e.target.classList.contains("torre3")) {
            if( estado % 2 !== 0) {
                ultimoDisco = torre3.lastElementChild;
                estado++;
            }  else if ( estado % 2 === 0) {
                if(ultimoDisco !== null && ultimoDisco !== undefined){
                    if(widthSize(ultimoDisco,torre3.lastElementChild) === true){
                        torre3.appendChild(ultimoDisco);
                        estado++;
                } else {
                
                    ultimoDisco = null;
                }
            }
            }

            determinarVitoria(torre3);
        }
        pegandoSoltando(estado);
    
    })
}
funcaoMaster();
// Testa se o disco que vai soltar é menor que o ultimo disco da torre em que sera colocado
function widthSize (pegou,soltou) {
    if( soltou === null){
        return true;
    }
    if ( pegou.clientWidth === soltou.clientWidth){
        return true;
    }
    if (pegou.clientWidth < soltou.clientWidth) {
        return true;
    } else if (pegou.clientWidth > soltou.clientWidth) {
        alert("movimento impossivel");
        return false;
    }
}
// Mostra em qual modo o usuario esta
function pegandoSoltando () {
    state = document.getElementById("state");
    state.textContent = "Pegue um disco";
    if ( estado % 2 !== 0){
        state.textContent = "Pegue um disco";
        state.classList.remove("soltando")
        state.classList.add ("pegando");
    } else if ( estado % 2 === 0) {
        state.textContent = "Solte o disco";
        state.classList.remove("pegando");
        state.classList.add ("soltando");
    }
}
function determinarVitoria(nomeTorre){
    if(nomeTorre.childElementCount === 4){
        alert("Vitória");
        return true;
    }
}