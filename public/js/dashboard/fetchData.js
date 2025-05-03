const eventSource = new EventSource('https://furia-tech-back.onrender.com/events');
import { criarCardDinamico } from "./criarCard.js";

eventSource.onmessage = (event) => {
    const data = JSON.parse(event.data);
    
    data.forEach(element => {
        const nascimento = element.user_scraper_id.user_id.nascimento;
        const interesses = element.user_scraper_id.user_id.interesses;
        const eventos = element.user_scraper_id.user_id.eventos;
        // calcular idade
        criarCardDinamico(element, interesses, eventos, 27)
    });
};