// Selecionando os campos de informacoes do produtos
const produtos = document.getElementsByClassName("produto");
const caoCheck = document.getElementById("filter_caes");
const gatoCheck = document.getElementById("filter_gatos");
const ate5Check = document.getElementById("filter_ate5");
const de5a10Check = document.getElementById("filter_5a10");
const de10a15Check = document.getElementById("filter_10a15");
const de15ouMaisCheck = document.getElementById("filter_15ouMais");

// Adicionando comportamento de radio para as informacoes de peso
const peso = [ate5Check, de5a10Check, de10a15Check, de15ouMaisCheck];
for (const pesos of peso) {
    pesos.addEventListener("click", () => {
        for (const i of peso){
            if (i !== pesos && i.checked){
                i.checked = false
            }
        }
    })
}

// Adicionando comportamento de radio para a informacao de cachorro e gato
caoCheck.addEventListener("click", () => {
    if (gatoCheck.checked){
        gatoCheck.checked = false
    }
})
gatoCheck.addEventListener("click", () => {
    if (caoCheck.checked){
        caoCheck.checked = false
    }
})

// Funcao para filtrar os produtos
function filtrar() {
    // Obtendo as informacoes de filtro quando o botao for acionado
    const pesquisa = document.getElementById("filter");
    const cao = document.getElementById("filter_caes");
    const gato = document.getElementById("filter_gatos");
    const ate5 = document.getElementById("filter_ate5");
    const de5a10 = document.getElementById("filter_5a10");
    const de10a15 = document.getElementById("filter_10a15");
    const de15ouMais = document.getElementById("filter_15ouMais");
    const filterPrecoMin = document.getElementById("filter_precoMin");
    const filterPrecoMax = document.getElementById("filter_precoMax");
    const precoMin = document.getElementById("precoMin");
    const precoMax = document.getElementById("precoMax");

    // Criando array de procura no titulo e populando com as condicoes de filtro
    let procura = [];
    if (pesquisa.value !== ""){
        procura.push(` ${pesquisa.value.toLowerCase()} `);
    }
    if (cao.checked) {
        procura.push(" cães ");
    }
    if (gato.checked) {
        procura.push(" gatos ")
    }
    if (ate5.checked) {
        procura.push(" até 5kg ")
    }
    if (de5a10.checked) {
        procura.push(" de 5kg a 10kg ")
    }
    if (de10a15.checked) {
        if (!cao.checked && !gato.checked) { // Condicional para incorporar as opcoes de peso de caes e gatos em um mesmo item
            procura.push(" de 10kg ")
        } else if (gato.checked || pesquisa.value == "gatos") {
            procura.push(" de 10kg ou mais ")
        } else {
            procura.push(" de 10kg a 15kg ")
        }       
    }
    if (de15ouMais.checked) {
        if (!cao.checked && !gato.checked) { // Condicional para incorporar as opcoes de peso de caes e gatos em um mesmo item
            procura.push(" ou mais ")
        } else if (gato.checked || pesquisa.value == "gatos") {
            procura.push(" de 10kg ou mais ")
        } else {
            procura.push(" de 15kg ou mais ")
        }
    }

    // Check para saber se há elementos a serem filtrados
    if (procura.length == 0) { // Caso negativo mostra todos os produtos
        for(const produto of produtos){
            produto.hidden = false
        }
    } else { // Caso positivo esconde todos os produtos e seleciona quais mostrar com base no filtro
        for(const produto of produtos){ // Iteracao para esconder todos
            produto.hidden = true
        }

        for (const produto of produtos) { // Iteracao para checar quais produtos correspondem a todos os itens de filtro
            let show = 0;
            for (const item of procura) {
                if (produto.children[1].innerHTML.toLowerCase().includes(item)) { // Adiciona ao contador se o nome do produto corresponder ao item de filtro
                    show += 1;
                }
            }
            if (procura.length == show){ // Se o produto correspondeu a todos os itens de filtro ele é renderizado
                produto.hidden = false
            }
        }
    }
    
    // Filtro de preco minimo - esconde se o valor do preco for menor que o preco minimo
    if (filterPrecoMin.checked) {
        for (const produto of produtos) {
            if (Number.parseFloat(produto.children[3].children[0].innerHTML) < Number.parseFloat(precoMin.value)) {
                produto.hidden = true
            }
        }
    }

    // Filtro de preco maximo - esconde se o valor do preco for maior que o preco maximo
    if (filterPrecoMax.checked) {
        for (const produto of produtos) {
            if (Number.parseFloat(produto.children[3].children[0].innerHTML) > Number.parseFloat(precoMax.value)) {
                produto.hidden = true
            }
        }
    }    
}

// Funcao template para exemplificar clique no botao de adicionar ao carrinho
function adicionaCarrinho() {
    alert("Produto Adicionado")
}