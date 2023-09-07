// Pegando os itens da barra de navegacao referentes ao login e ao menu de conta
const menuconta = document.getElementById('menuconta');
const login = document.getElementById('login');

// Funcao para checar se o login/acesso foi realizado
function checkAcesso() {
  if (sessionStorage.acesso === "0" || !sessionStorage.acesso) { // Se na memoria o acesso esta salvo como zero ou nao existir sera exposto a opcao de login
    menuconta.hidden = true;
    login.hidden = false;
  } else { // Se na memoria o acesso estiver salvo com qualquer outro valor as opcoes de menu de conta e carrinho serao expostos
    menuconta.hidden = false;
    login.hidden = true;
  }
}

// Funcao para checar se as informacoes de login sao validas
function checkConta() {
  const usuario = document.getElementById('usuario'); // Campo do usuario
  const senha = document.getElementById('senha'); // Campo da senha

  if (usuario.value === "fulano" || usuario.value === "fulano@teste.com.br") { // Condicional para validar as informacoes de login
    if (senha.value === "1234") {
      alert("Login realizado com sucesso!");
      sessionStorage.acesso = "1"; // Atualizando o valor salvo em acesso no caso de sucesso
      location.replace("./minhaconta.html");
    } else alert("Senha inválida.");
  } else alert("Usuário ou e-mail inválido.");
}

// Funcao para desconectar o usuario
function desconectar() {
  sessionStorage.acesso = "0"; // Atualiza o valor de acesso para o valor base de nao acesso
  alert("Desconectado");
  location.replace("../index.html"); // Redireciona para a pagina incial
}


// Funcao para cadastro do usuario - check das informacoes fornecidas
function cadastraConta() {
  const usuario = document.getElementById('usuario');
  const email = document.getElementById('email');
  const senha = document.getElementById('senha');
  const senha_confirma = document.getElementById('senha_confirma');

  if (senha.value != senha_confirma.value) { // Check para validar se a confirmacao de senha é igual a senha fornecida
    alert("As senhas não são iguais!");
  } else { // Impressao das informacoes fornecidas caso as informacoes passem pela validacao
    console.log(`Usuário: ${usuario.value}`);
    console.log(`Email: ${email.value}`);
    console.log(`Senha: ${senha.value}`);
    alert(`Conta criada com sucesso! (Dados disponíveis no console)`);
  }
}