// Selecao dos itens do HTML onde o calendario sera renderizado
const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");

// Gerando uma nova data, mes e ano
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

// Atualizando a informacao do dia selecionado
const setDay = document.getElementById("calendar_date");
setDay.innerHTML = "Dia " + date.getDate() +" / "+ ( currMonth + 1 ) + " / " + currYear;

// Salvando o nome de todos os meses em um array
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Funcao de renderizacao do calendario
const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // Pegando o primeiro dia do mes
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // Pegando a ultima data do mes
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // Pegando o ultimo dia do mes
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // Pegando a ultima data do mes passado

    let liTag = "";
    for (let i = firstDayofMonth; i > 0; i--) { // Criando uma lista dos ultimos dias do mes passado
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) { // Criando uma lista de todos os dias do mes atual
        // Adicionando a classe vazia "" para os itens da lista do mes atual
        liTag += `<li class="">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) { // Criando uma lista dos primeiros dias do proximo mes
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }

    currentDate.innerText = `${months[currMonth]} ${currYear}`; // Passando o mes e ano atual como texto para currentDate
    daysTag.innerHTML = liTag;
}
renderCalendar();

// Mudanca do mes ativo clicando nos respectivos icones
prevNextIcon.forEach(icon => { // Pegando os icones de anterior e proximo
    icon.addEventListener("click", () => { // Adicionando o evento de clique para ambos
        // Se click no icone "prev" entao o mes atual tera decremento de 1, caso contrario sera adicionado 1
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
        if(currMonth < 0 || currMonth > 11) { // Se o mes atual é menor que 0 ou maior que 11
            // Cria uma nova data do mes e ano ativo e passa ela como valor "date"
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear(); // Atualiza o ano atual com o novo ano
            currMonth = date.getMonth(); // Atualiza o mes atual com o novo mes
        } else {
            date = new Date(); // Passa a data atual como valor "date"
        }
        renderCalendar(); // Chamando a funcao de renderizacao do calendario
        chooseDay(); // Chamando a funcao de selecao de dia
    });
});

// Funcao para selecionar os dias ativos do calendario
const chooseDay = () => {
    const days = document.querySelectorAll(".days li"); // Pegando os dias da lista
    const chosenDay = document.getElementById("calendar_date") // Pegando a secao do HTML para explicitar o dia selecionado

    // Adicionando evento de click para os icones dos dias ativos
    days.forEach(icon => {
        icon.addEventListener("click", (event) => {
            if (event.target.className === "") { // Condicional para checar se o dia é do mes atual
                days.forEach(icon => { // Iteracao para desativar qualquer outro dia selecionado
                    if(icon.className === "active"){
                        icon.className = "";
                    }
                })
                event.target.className = "active"; // Ativando o dia selecionado
                chosenDay.innerHTML = "Dia " + event.target.childNodes[0].data +" / "+ (currMonth + 1) + " / " + currYear; // Atualizando as informacoes explicitadas no HTML
            };
        });
    });
}
chooseDay();