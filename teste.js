function criarDisco(torreInicial, torreDestino){

    if(torreInicial.lastElementChild === null ) {
        console.log("Esta torre não tem nenhum disco! Selecione um torre que contenha ao menos um disco!")
        estado--
    }else {
        let ultimoDisco = torreInicial.lastElementChild;
    }
    
    torreDestino.appendChild(ultimoDisco);
}