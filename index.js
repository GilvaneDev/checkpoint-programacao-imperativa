const produtos = [
    {
        nomeProduto: "PenDRiver",
        valorProduto: 90,
        qualidadeProduto: 9,
        Status: true
    },
    {
        nomeProduto: "SSD",
        valorProduto: 590,
        qualidadeProduto: 9,
        Status: true
    },
    {
        nomeProduto: "notebook",
        valorProduto: 1500,
        qualidadeProduto: 7,
        Status: true
    },
    {
        nomeProduto: "smartphone",
        valorProduto: 2300,
        qualidadeProduto: 7,
        Status: false
    },
    {
        nomeProduto: "tv smart 28",
        valorProduto: 1200,
        qualidadeProduto: 7,
        Status: false
    },
    {
        nomeProduto: "Kit Teclado Gamer",
        valorProduto: 450,
        qualidadeProduto: 9,
        Status: true
    },
    {
        nomeProduto: "PC Gamer",
        valorProduto: 4500,
        qualidadeProduto: 8,
        Status: true
    }
]
const carrinho = produtos.filter((produtos) => {
    return produtos.valorProduto > 482 && produtos.valorProduto < 1600 &&
        produtos.qualidadeProduto > 6 && produtos.Status
})

const print = carrinho.forEach((carrinho) => {

    console.log(`Nome do Produto: ${carrinho.nomeProduto}\nValor do Produto: R$ ${carrinho.valorProduto}`)
})
const valorTotal = carrinho.reduce((valor, numero) => {
    return valor.valorProduto + numero.valorProduto
})

console.log('Valor Total: ', valorTotal)


