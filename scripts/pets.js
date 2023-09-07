const petinfo = document.getElementById('pet_container'); // Selecao do container onde os cartoes de pet ficam localizados

// Check para renderizar o que esta salvo na memoria da sessao
if (sessionStorage.pets){
    petinfo.innerHTML = sessionStorage.pets;
}

// Funcao para adicionar novos pets
function adicionarPet() {
    const petNome = document.getElementById('nomePet'); // Campo nome do pet
    const petTipoCachorro = document.getElementById('tipo_cachorro'); // Campo de radio Cachorro ou Gato
    const petRaca = document.getElementById('raca'); // Campo de raca do pet
    const petTemperamento = document.getElementById('temperamento'); // Campo de temperamento do pet

    // Condicional para explicitar a selecao Cachorro e Gato
    let petTipo = "";
    if (petTipoCachorro.checked) {
        petTipo = "Cachorro(a)";
    } else {
        petTipo = "Gato(a)";
    };

    // Adicao do cartao do pet no container HTML
    petinfo.innerHTML += `
        <div class="pet" id="${petNome.value.toLowerCase()}">
        <span class="pet_nome">${petNome.value.toLowerCase()}</span>
        <span class="pet_tipo">${petTipo}</span>
        <span class="pet_raca">${petRaca.value.toLowerCase()}</span>
        <span class="pet_temperamento">${petTemperamento.value.toLowerCase()}</span>
        <div class="pet_opcao">
            <button type="button" class="removePet">Remover</button>
            <a href="#">Editar</a>
        </div>
        </div>
    `;

    // Atualizacao das informacoes salvas na memoria da sessao
    sessionStorage.pets = petinfo.innerHTML;
    // Reload da pagina para renovar os itens renderizados
    location.reload();
}
 
// Selecionando todos os botoes de remover Pet
const removePet = document.getElementsByClassName('removePet')

// Adicionando evento de click para todos
for (const button of removePet){
    button.addEventListener('click',(event) => removerPet(event.target))
}

// Funcao para deletar o cartao selecionado e atualizar a informacao salva em memoria
function removerPet(event) {
    event.parentNode.parentNode.remove();
    sessionStorage.pets = petinfo.innerHTML;
}