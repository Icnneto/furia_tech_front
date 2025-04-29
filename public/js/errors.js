import { verificaCpf } from "./utils/checkCPF.js";
const camposDoFormulario = document.querySelectorAll('[required]');

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
];

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    nascimento: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
    },
    perfil: {
        valueMissing: "O campo de perfil do x não pode estar vazio.",
    }
};

camposDoFormulario.forEach(campo => {
    campo.addEventListener('blur', () => verificaCampo(campo));
    campo.addEventListener('invalid', evento => evento.preventDefault());
});


function verificaCampo(campo) {
    let mensagem = '';
    campo.setCustomValidity('');
    if (campo.name == 'cpf' && campo.value.length >= 11) {
        verificaCpf(campo);
    };

    tiposDeErro.forEach(erro => {
        if(campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro];
        };
    });

    const mensagemErro = campo.parentNode.querySelector('.mensagem-erro');
    const validadorInput = campo.checkValidity();

    if (!validadorInput){
        mensagemErro.textContent = mensagem;
    } else {
        mensagemErro.textContent = '';
    };
};