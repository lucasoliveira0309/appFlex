/**
 *  APP flex
 * @author Lucas Oliveira
 */

function calcular() {
    // variável Etanol recebe o conteudo da caixa input 
    let etanol = frmflex.inputetanol.value
    console.log(etanol) //teste e apoio a lógica 
  
    let gasolina = frmflex.inputgasolina.value
    console.log(gasolina)

    //Processamento
    //Se valor do litro do etanol custar ate 70% do valor da gasolina abastecer com etanol

    if (etanol <0.7 * gasolina) {
        console.log("Abasteça com Etanol")
        // a linha abaixo troca a imagem no html 
        document.getElementById("status").src="./img/etanol.png"
    } else {
        console.log("Abasteça com Gasolina")
         // a linha abaixo troca a imagem no html 
        document.getElementById("status").src="./img/gasolina.png"
    }
}

function limpar() {
    document.getElementById("status").src="./img/neutro.png"
}