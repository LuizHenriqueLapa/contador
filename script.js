let p = document.querySelector('p')//pega o p para transformarlo numa variavel
let contador = 0
p.innerText=contador
function less(){// a funcáo

    --contador
    p.innerText=contador
console.log(contador)

}

function more(){

++contador
p.innerText=contador
console.log(contador)


}