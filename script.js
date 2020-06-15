const container = document.getElementById("container");

container.addEventListener ("click" , function(e) {


    if (e.target.classList.contains("torreUm")) {
        console.log("Torre um");
    }

    if (e.target.classList.contains("torreDois")) {
        console.log("Torre dois");
    }

    if (e.target.classList.contains("torreTres")) {
        console.log("Torre tres");
    }
})