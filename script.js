let email = document.getElementById('email-login');
let senha = document.getElementById('senha');

function verificaLogin () {
    if ((email.value === 'tryber@teste.com') && (senha.value === '123456')) {
        window.alert('Olá, Tryber!');
    } else {
        window.alert('Email ou senha inválidos.')
    }
}

let botaoLogin = document.getElementById('botaoLogin')
botaoLogin.addEventListener('click', verificaLogin)
