const main = document.querySelector('main')

export function criarCardDinamico(data, interesses, eventos, idade) {

    const divPai = document.createElement('div');
    divPai.classList.add('card', 'w-96', 'border-1', 'border-yellow-furia', 'card-xl', 'shadow-lg', 'min-h-max');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body', 'text-sm', 'text-title', 'font-light');

    // Seção superior (nome, idade, etc.)
    const topo = document.createElement('div');
    topo.classList.add('flex', 'flex-col', 'gap-y-1', 'mb-8');

    const header = document.createElement('div');
    header.classList.add('flex', 'justify-between', 'items-center', 'mb-2');

    const h2Nome = document.createElement('h2');
    h2Nome.classList.add('card-title');
    h2Nome.textContent = data.user_scraper_id.user_id.username;

    const h5Idade = document.createElement('h5');
    h5Idade.classList.add('text-lg', 'font-semibold');
    h5Idade.textContent = idade;

    header.appendChild(h2Nome);
    header.appendChild(h5Idade);

    const pLocal = document.createElement('p');
    pLocal.textContent = `${data.user_scraper_id.user_id.estado}, ${data.user_scraper_id.user_id.pais}`;

    const pEmail = document.createElement('p');
    pEmail.textContent = data.user_scraper_id.user_id.email;

    const aPerfil = document.createElement('a');
    aPerfil.href = data.user_scraper_id.user_id.perfil_x;
    aPerfil.target = '_blank';
    aPerfil.classList.add('text-yellow-furia');
    aPerfil.textContent = 'Perfil no X';

    topo.appendChild(header);
    topo.appendChild(pLocal);
    topo.appendChild(pEmail);
    topo.appendChild(aPerfil);
    cardBody.appendChild(topo);

    // --- Collapse de Interesses ---
    const collapseInteresses = document.createElement('div');
    collapseInteresses.classList.add('collapse', 'collapse-arrow', 'border-1', 'border-yellow-furia');

    const inputInteresses = document.createElement('input');
    inputInteresses.type = 'radio';
    inputInteresses.name = 'my-accordion-2';
    inputInteresses.checked = true;

    const titleInteresses = document.createElement('div');
    titleInteresses.classList.add('collapse-title', 'font-semibold');
    titleInteresses.textContent = 'Interesses';

    const contentInteresses = document.createElement('div');
    contentInteresses.classList.add('collapse-content', 'text-sm', 'flex', 'flex-col');
    interesses.forEach(item => {
        const p = document.createElement('p');
        p.textContent = item;
        contentInteresses.appendChild(p);
    });

    collapseInteresses.appendChild(inputInteresses);
    collapseInteresses.appendChild(titleInteresses);
    collapseInteresses.appendChild(contentInteresses);
    cardBody.appendChild(collapseInteresses);

    // --- Collapse de Eventos ---
    const collapseEventos = document.createElement('div');
    collapseEventos.classList.add('collapse', 'collapse-arrow', 'border-1', 'border-yellow-furia');

    const inputEventos = document.createElement('input');
    inputEventos.type = 'radio';
    inputEventos.name = 'my-accordion-2';

    const titleEventos = document.createElement('div');
    titleEventos.classList.add('collapse-title', 'font-semibold');
    titleEventos.textContent = 'Eventos';

    const contentEventos = document.createElement('div');
    contentEventos.classList.add('collapse-content', 'text-sm', 'flex', 'flex-col');
    eventos.forEach(item => {
        const p = document.createElement('p');
        p.textContent = item;
        contentEventos.appendChild(p);
    });

    collapseEventos.appendChild(inputEventos);
    collapseEventos.appendChild(titleEventos);
    collapseEventos.appendChild(contentEventos);
    cardBody.appendChild(collapseEventos);

    // Collapse Relevância Informativos
    const collapseInfo = document.createElement('div');
    collapseInfo.classList.add('collapse', 'collapse-arrow', 'border-1', 'border-yellow-furia');

    const inputInfo = document.createElement('input');
    inputInfo.type = 'radio';
    inputInfo.name = 'my-accordion-2';

    const titleInfo = document.createElement('div');
    titleInfo.classList.add('collapse-title', 'font-semibold');
    titleInfo.textContent = 'Relevância Informativos';

    const contentInfo = document.createElement('div');
    contentInfo.classList.add('collapse-content', 'text-sm');

    const radialInfo = document.createElement('div');
    radialInfo.classList.add('text-xs', 'radial-progress', 'text-warning');
    radialInfo.setAttribute('style', `--value:${data.relevante_para_informativos}`);
    radialInfo.setAttribute('aria-valuenow', data.relevante_para_informativos);
    radialInfo.setAttribute('role', 'progressbar');
    radialInfo.textContent = `${data.relevante_para_informativos}%`;

    contentInfo.appendChild(radialInfo);
    collapseInfo.appendChild(inputInfo);
    collapseInfo.appendChild(titleInfo);
    collapseInfo.appendChild(contentInfo);
    cardBody.appendChild(collapseInfo);

    // Collapse Relevância Eventos (nova instância)
    const collapseEventosRelevancia = document.createElement('div');
    collapseEventosRelevancia.classList.add('collapse', 'collapse-arrow', 'border-1', 'border-yellow-furia');

    const inputEventosRelevancia = document.createElement('input');
    inputEventosRelevancia.type = 'radio';
    inputEventosRelevancia.name = 'my-accordion-2';

    const titleEventosRelevancia = document.createElement('div');
    titleEventosRelevancia.classList.add('collapse-title', 'font-semibold');
    titleEventosRelevancia.textContent = 'Relevância Eventos';

    const contentEventosRelevancia = document.createElement('div');
    contentEventosRelevancia.classList.add('collapse-content', 'text-sm');

    const radialEventos = document.createElement('div');
    radialEventos.classList.add('text-xs', 'radial-progress', 'text-warning');
    radialEventos.setAttribute('style', `--value:${data.relevante_para_eventos}`);
    radialEventos.setAttribute('aria-valuenow', data.relevante_para_eventos);
    radialEventos.setAttribute('role', 'progressbar');
    radialEventos.textContent = `${data.relevante_para_eventos}%`;

    contentEventosRelevancia.appendChild(radialEventos);
    collapseEventosRelevancia.appendChild(inputEventosRelevancia);
    collapseEventosRelevancia.appendChild(titleEventosRelevancia);
    collapseEventosRelevancia.appendChild(contentEventosRelevancia);
    cardBody.appendChild(collapseEventosRelevancia);

    // Collapse Sinergia (nova instância)
    const collapseSinergia = document.createElement('div');
    collapseSinergia.classList.add('collapse', 'collapse-arrow', 'border-1', 'border-yellow-furia');

    const inputSinergia = document.createElement('input');
    inputSinergia.type = 'radio';
    inputSinergia.name = 'my-accordion-2';

    const titleSinergia = document.createElement('div');
    titleSinergia.classList.add('collapse-title', 'font-semibold');
    titleSinergia.textContent = 'Sinergia';

    const contentSinergia = document.createElement('div');
    contentSinergia.classList.add('collapse-content', 'text-sm');

    const radialSinergia = document.createElement('div');
    radialSinergia.classList.add('text-xs', 'radial-progress', 'text-warning');
    radialSinergia.setAttribute('style', `--value:${data.sinergia_com_furia}`);
    radialSinergia.setAttribute('aria-valuenow', data.sinergia_com_furia);
    radialSinergia.setAttribute('role', 'progressbar');
    radialSinergia.textContent = `${data.sinergia_com_furia}%`;

    contentSinergia.appendChild(radialSinergia);
    collapseSinergia.appendChild(inputSinergia);
    collapseSinergia.appendChild(titleSinergia);
    collapseSinergia.appendChild(contentSinergia);
    cardBody.appendChild(collapseSinergia);

    // Análise IA
    const collapseAnalise = document.createElement('div');
    collapseAnalise.classList.add('collapse', 'collapse-arrow', 'border-1', 'border-yellow-furia');

    const inputAnalise = document.createElement('input');
    inputAnalise.type = 'radio';
    inputAnalise.name = 'my-accordion-2';

    const titleAnalise = document.createElement('div');
    titleAnalise.classList.add('collapse-title', 'font-semibold');
    titleAnalise.textContent = 'Análise IA';

    const contentAnalise = document.createElement('div');
    contentAnalise.classList.add('collapse-content', 'text-sm', 'text-justify');
    contentAnalise.textContent = data.overview;

    collapseAnalise.appendChild(inputAnalise);
    collapseAnalise.appendChild(titleAnalise);
    collapseAnalise.appendChild(contentAnalise);
    cardBody.appendChild(collapseAnalise);

    divPai.appendChild(cardBody);
    main.appendChild(divPai);
};
