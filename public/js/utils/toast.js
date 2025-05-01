function criarExibirToast(mensagem, funcionalidade, body) {
    let mensagemParaUser = mensagem;

    const addToast = document.createElement('div');
    addToast.classList.add(
        'toast',
        'toast-top',
        'toast-center'
    );

    if (funcionalidade === 'positivo') {
        addToast.innerHTML = `
            <div class="alert font-main text-yellow-furia border-yellow-furia bg-background">
                <span>${mensagemParaUser}</span>
            </div>
        `
    };

    if (funcionalidade === 'negativo') {
        addToast.innerHTML = `
            <div class="alert font-main text-red-600 border-red-600 bg-background">
            <span>${mensagemParaUser}</span>
        </div>
        `
    };

    if (funcionalidade === 'aviso') {
        addToast.innerHTML = `
            <div class="alert font-main text-preto-padrao border-laranja-medio bg-background">
            <span>${mensagemParaUser}</span>
        </div>
        `
    };

    body.append(addToast);

    setTimeout(() => {
        addToast.remove();
    }, 2000);
};

export { criarExibirToast }