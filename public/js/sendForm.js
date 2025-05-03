import interesses from "./interesses.js";
import eventos from "./eventos.js";
import { criarExibirToast } from "./utils/toast.js";
const body = document.querySelector('body');
const formulario = document.querySelector('#formulario-inscricao');
const nomeInput = document.querySelector('#nome');
const nascimentoInput = document.querySelector('#nascimento');
const emailInput = document.querySelector('#email');
const cpfInput = document.querySelector('#cpf');
const paisInput = document.querySelector('#pais');
const estadoInput = document.querySelector('#estado');
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

formulario.addEventListener('submit', async (e) => {
    e.preventDefault();

    const respostas = {
        'username': nomeInput.value,
        'nascimento': nascimentoInput.value,
        'email': emailInput.value,
        'cpf': cpfInput.value,
        'pais': paisInput.value,
        'estado': estadoInput.value,
        'interesses': interesses,
        'eventos': eventos,
        'perfil_x': perfilInput.value,
        'documento': fileInput.value
    };

    adicionarPulseBtnConcluir();

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(respostas)
    };

    try {
        const response = await fetch("https://furia-tech-back.onrender.com/form-application", requestOptions);
        
        if (!response.ok) {
            throw new Error(`Erro ao enviar dados: ${response.status}`);
        };

        removerPulseBtnConcluir();

        const mensagem = 'Seus dados foram enviados com sucesso!';
        const funcionalidade = 'positivo';
        criarExibirToast(mensagem, funcionalidade, body);

        setTimeout(() => {
            window.location.replace("https://www.furia.gg/");;
        }, 2500);
    
    } catch (error) {
        console.error("Erro ao enviar dados:", error.message);

        const mensagem = 'Ops! Algo de errado aconteceu. Tente novamente!';
        const funcionalidade = 'negativo';
        criarExibirToast(mensagem, funcionalidade, body);
    };
});

function adicionarPulseBtnConcluir() {
    btnConcluir.classList.add('animate-pulse');
};

function removerPulseBtnConcluir() {
    btnConcluir.classList.remove('animate-pulse');
};






