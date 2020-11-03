
const resta = document.getElementById("resta"),
      cambiar = document.getElementById("cambiaNumber"),
      suma = document.getElementById("suma")


suma.addEventListener("click", ()=> {

    let presto = +cambiar.textContent 
    cambiar.textContent = ++presto
})

resta.addEventListener("click", ()=> {

    let presto = +cambiar.textContent
    cambiar.textContent = --presto

})









