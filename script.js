const container = document.getElementById("container");
const torre1 = document.querySelector(".torre1");
const torre2 = document.querySelector(".torre2");
const torre3 = document.querySelector(".torre3");
const torre4 = document.querySelector(".torre4");
let estado = 1;
let qualTorre = 0;
let ultimoDisco;

container.addEventListener ("click" , function(e) {
    if (ultimoDisco === null) {
        estado++
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
            }
        }
        }

        determinarVitoria(torre3);
    }

    pegandoSoltado(estado);
    console.log(ultimoDisco);
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
        false;
    }
}
function pegandoSoltado () {
    state = document.getElementById("state");
    state.textContent = "Pegue um disco";
    if ( estado % 2 !== 0){
        state.textContent = "Pegue um disco";
        state.classList.add ("pegando");
    } else if ( estado % 2 === 0) {
        state.textContent = "Solte o disco";
        state.classList.add ("soltando");
    }
}
function determinarVitoria(nomeTorre){
    if(nomeTorre.childElementCount === 4){
        alert("Vitória");
        
        return true;
    }
}
