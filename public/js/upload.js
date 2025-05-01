const inputDocumento = document.getElementById('documento');
const nomeArquivo = document.getElementById('nome-arquivo');

inputDocumento.addEventListener('change', () => {
    if (inputDocumento.files.length > 0) {
        nomeArquivo.textContent = `Arquivo selecionado: ${inputDocumento.files[0].name}`;
        console.log(inputDocumento.files[0])
    } else {
        nomeArquivo.textContent = '';
    }
});