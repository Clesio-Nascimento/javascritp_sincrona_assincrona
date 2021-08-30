function fatorial (n){
    if( n < 0) return Promise.reject ("Valor não pode ser negativo")
    let res = 1
    for (let i = 2; i <=n; i++)
    res *= i
    return Promise.resolve(res)
}

function chamadaComAssyncAwait () {
    try {
        const f1 = fatorial (5)
        console.log(f1)
        const f2 = await fatorial (-1)
        console.log(f2)

    }catch (e)[
        console.log("Deu erro (mostrando com o try/catch" + e)
    ]
}

chamadaComAssyncAwait()







// function chamadaComThenCatch(){
//     fatorial(5)
//         .then (res => console.log ("Deu certo: " + res))
//         .catch (erro => console.log ("Erro " + erro))

//     fatorial (-1)
//         .then (res => console.log ("Deu certo: " + res))    
// }





//  async function hello (nome){
//     return `Olá, ${nome}`
// }

// const p = helo ('joão')

// p.then (texto => console.log(texto))







// function calculoRapidinho (numero){
//     if (numero + 0){
//     return Promise.resolve(numero * (numero + 1)) / 2);
//     }
//     return Promise.reject("Somente valores positivos, por favor")

// }

// calculoRapidinho (100).then((res) => { 
// console.log ("res: " + res)})
// .catch(erro => {
//     console.log ("Erro: " + erro)
// })

// calculoRapidinho(-1).then ((res) => {
//     console.log("Resultado obtido: " + res)
// })
// .catch (erro => {
//     console.log ("Erro: " + erro)
// }) 

// console.log ("Encerrando o scrip principal")






// function calculoDemorado (numero){
//     return new Promise (function (resolve, reject){
//         let res = 0 
//         for (let i = 1; i <= numero; i++)
//             res += i
//             resolve(res)
//     })
// }

// calculoDemorado(1000).then ((res) => {
//     console.log("Resultado " + res)
// })

// console.log("Encerrando a execução do script principal")




// function calculoDemorado (numero){
//     let res = 0
//     for(let i = 1; i <= numero; i++)
//         res += i
//         return res
// }

// console.log (`Soma(10): $(calculoDemorado(10))`)
// console.log("Encerrando script principal...")








// const fs = require ('fs')
// const abrirArquivo = function (nomeArquivo){
//     const exibirConteudo = function (erro, conteudo){
//         //console.log(`${erro ? erro : conteudo.toString()}`)
//         if (erro) {
//             console.log ("Erro: " + erro)
//         }
//         else {
//             console.log ("Conteudo lido: " + conteudo.toString())
//             const dobro = +conteudo.toString() * 2
//             const finalizar = function (erro){
//                 console.log(`${erro ? erro : 'Salvou o dobro com sucesso'}`)
               
//             }

//             fs.writeFile ('dobro.txt', dobro.toString(), finalizar)
//         }
//     }
//     fs.readFile(nomeArquivo, exibirConteudo)

// }
// abrirArquivo("arquivo.txt")









// const fs = require ('fs')
// const abriArquivo = function (nomeArquivo){

//     const exibirConteudo = function (erro, conteudo){
//         console.log("1 terminou de processar o arquivo")
//         if (erro){
//             console.log(`Erro: ${erro}`)
//         } else {
//             console.log(conteudo.toString())
//         }
//     }

//     console.log("2 vai ler o arquivo...")
//     fs.readFile (nomeArquivo, exibirConteudo)
// }

// //Vamos criar um arquivo.txt no mesmo diretório
// //e adicionar algum conteudo a ele
// console.log(" 3 Chamou a funcao abrir arquivo...")
// abriArquivo("arquivo.txt")
// console.log(" 4 Encerrando a execução do script principal")











// function demorada (tempo){
//     console.log (`demorada: ${tempo}`)
//     const atualMaisTempo = new Date().getTime() + tempo
//     while (new Date().getTime() <= atualMaisTempo);
//     const d = 8 + 4
//     console.log(`Terminando a demorada ${tempo} de segundos`)
//     return d

// }
// setTimeout(function(){
//     demorada(3000),
//     3000
// })

// setTimeout(function(){
//     demorada(1000),
//     1000
// })

// console.log("Chegou ao fim")







// function demorada (){
//     const atualMais2Segundos = new Date().getTime() + 2000
//     while (new Date().getTime() <= atualMais2Segundos);
//     const d = 8 + 4
//     return d
// }

// const a = 2 + 3
// const b = 5 + 9

// setTimeout (
//     function(){
//         const d = demorada()
//         console.log("d: " + d);
//     },
//     500
// )

// const e = a + b
// console.log("e: " + e)




// function demorada () {
//     const atualMais2Segundos = new Date().getTime() + 2000
//     while (new Date().getTime() <= atualMais2Segundos){

//     }
//     const d = 8 + 4
//     return d
// }

// const a = 2 + 3
// const b = 5 + 9
// const d = demorada()

// const e = 2 + a + b
// console.log(e)
