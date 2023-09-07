const botao = document.getElementById("confirma_agendamento"); // Atribuicao do botao de agendamento

// Evento de clique do botao
botao.addEventListener("click", () => {
    // Obtencao dos dados importantes para o agendamento
    const data = document.getElementById("calendar_date");
    const hora = document.getElementById("hora");
    const pet = document.getElementById("nomePet");
    const tele = document.getElementById("telebusca");

    // Condicional para checar se telebusca foi selecionada
    let telebusca = "Não";
    if (tele.checked) {
        telebusca = "Sim"
    }

    // Alerta com os dados de agendamento
    alert("Agendamento Confirmado:\n" + data.innerHTML + " às " + hora.value + "\nPet: " + pet.value.toUpperCase() + "\nTelebusca: " + telebusca);
});