const eventSource = new EventSource('https://furia-tech-back.onrender.com/events');
import { criarCardDinamico } from "./criarCard.js";

eventSource.onmessage = (event) => {
    const data = JSON.parse(event.data);

    data.forEach(element => {
        const nascimento = element.user_scraper_id.user_id.nascimento;
        const idade = calcularIdade(nascimento);
        const interesses = element.user_scraper_id.user_id.interesses;
        const eventos = element.user_scraper_id.user_id.eventos;
        // calcular idade
        criarCardDinamico(element, interesses, eventos, idade)
    });
};

function calcularIdade(dataString) {
    // Divide a string no formato 'dd/mm/aaaa'
    const [dia, mes, ano] = dataString.split('/').map(Number);

    // Cria um objeto Date com base na string
    const dataNascimento = new Date(ano, mes - 1, dia); // mês começa do 0

    // Pega a data atual
    const hoje = new Date();

    // Calcula a idade
    let idade = hoje.getFullYear() - dataNascimento.getFullYear();

    // Ajusta se a data de aniversário ainda não ocorreu neste ano
    const mesAtual = hoje.getMonth();
    const diaAtual = hoje.getDate();
    if (
        mesAtual < dataNascimento.getMonth() ||
        (mesAtual === dataNascimento.getMonth() && diaAtual < dataNascimento.getDate())
    ) {
        idade--;
    }

    return idade;
}