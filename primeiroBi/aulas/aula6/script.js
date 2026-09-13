const divUm  = document.querySelector(".container");

divUm.firstElementChild.textContent = "Alterado via JS!";


// vai alterar tudo que estiver dentro da div "container", no caso o h1, mas não altera a div em si, apenas o conteúdo dela.
// const divUm  = document.querySelectorAll(".container");

// divis.forEach(div => {
//     div.firstElementChild.textContent = "Alterado via JS!";
// });

// divUm.firstElementChild.style = "color: red"; // ganbiarra

function ativar() {
    const containers = document.querySelectorAll(".container");
    
    containers.forEach(div => {
        div.firstElementChild.classList.toggle("ativo")
    }) 
}
