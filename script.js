const email = document.getElementById('email-login');
const senha = document.getElementById('senha');
const botaoLogin = document.getElementById('botaoLogin');
const getParagrafo = document.getElementById('counter');
const getDescription = document.querySelector('#textarea');
const evaluationForm = document.getElementById('evaluation-form');
const maxCaracteres = 500;
const checkede = document.getElementById('agreement');
const btnSend = document.querySelector('#submit-btn');

function verificaLogin() {
  if ((email.value === 'tryber@teste.com') && (senha.value === '123456')) {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

botaoLogin.addEventListener('click', verificaLogin);

getParagrafo.textContent = maxCaracteres;
getDescription.addEventListener('input', (e) => {
  const getInputLength = getDescription.value.length;
  getParagrafo.textContent = maxCaracteres - getInputLength;
  if (getInputLength >= maxCaracteres) {
    e.preventDefault(); // quando chegar a 500 caracteres, nao sera mais possivel escrever
  }
});

checkede.addEventListener('click', () => {
  if (checkede.checked) {
    btnSend.removeAttribute('disabled');
  } else {
    btnSend.disabled = 'true';
  }
});

// parte do requisito 22
const getName = document.getElementById('input-name');
const getLastName = document.getElementById('input-lastname');
const getEmail = document.getElementById('input-email');
const family = document.querySelectorAll('.family-type');
const conteudosList = document.querySelectorAll('.subject');
const avaliacao = document.querySelectorAll('.inputRadio');
const formData = document.querySelectorAll('.userData');

function userFamily() {
  for (let index = 0; index < 3; index += 1) {
    if (family[index].checked) {
      return `${family[index].value}`;
    }
  }
}

function conteudos() {
  let resultado = '';
  for (let index = 0; index < 6; index += 1) {
    if (conteudosList[index].checked) {
      resultado += `${conteudosList[index].value}, `;
    }
  }
  return resultado;
}

function userAvaliation() {
  let getInputAvaliation;
  for (let index = 0; index < 10; index += 1) {
    if (avaliacao[index].checked) {
      getInputAvaliation = document.querySelectorAll('.inputRadio')[index].value;
    }
  }
  return `${getInputAvaliation}`;
}

btnSend.addEventListener('click', (event) => {
  event.preventDefault();
  evaluationForm.style.display = 'none';
  console.log(formData[0]);
  formData[0].innerHTML = `Nome: ${getName.value} ${getLastName.value}`;
  formData[1].innerHTML = `Email: ${getEmail.value}`;
  formData[2].innerHTML = `Casa: ${document.getElementById('house').value}`;
  formData[3].innerHTML = `Família: ${userFamily()}`;
  formData[4].innerHTML = `Matérias: ${conteudos()}`;
  formData[5].innerHTML = `Avaliação: ${userAvaliation()}`;
  formData[6].innerHTML = `Observações: ${getDescription.value}`;
});
