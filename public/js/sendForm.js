const formulario = document.querySelector('#formulario-inscricao');
const nomeInput = document.querySelector('#nome');
const nascimentoInput = document.querySelector('#nascimento');
const emailInput = document.querySelector('#email');
const cpfInput = document.querySelector('#cpf');
const paisInput = document.querySelector('#pais');
const estadoInput = document.querySelector('#estado');
const interessesInput = document.querySelectorAll('[data-interesse]');
const eventosInput = document.querySelectorAll('[data-evento]');
const perfilInput = document.querySelector('#perfil');
const fileInput = document.querySelector('#documento');
const btnConcluir = document.querySelector('#btn-concluir');

//verificar preenchimento para liberar botão de enviar
formulario.addEventListener('change', async () => {
    if (
        nomeInput.value &&
        nascimentoInput.value &&
        emailInput.value &&
        cpfInput.value &&
        paisInput.value &&
        estadoInput.value &&
        perfilInput.value &&
        fileInput.value
    ) {
        btnConcluir.disabled = false;
    }
});