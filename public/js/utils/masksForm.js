const inputCPF = document.querySelector('#cpf');
const inputNascimento = document.querySelector('#nascimento');

inputCPF.addEventListener('input', () => {
    let value = inputCPF.value.replace(/\D/g, ''); // Remove tudo que não for dígito
    value = value.slice(0, 11); // Limita a 11 dígitos

    if (value.length > 9) {
        inputCPF.value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, "$1.$2.$3-$4");
    } else if (value.length > 6) {
        inputCPF.value = value.replace(/(\d{3})(\d{3})(\d{1,3})/, "$1.$2.$3");
    } else if (value.length > 3) {
        inputCPF.value = value.replace(/(\d{3})(\d{1,3})/, "$1.$2");
    } else {
        inputCPF.value = value;
    }
});

inputNascimento.addEventListener('input', () => {
    let value = inputNascimento.value.replace(/\D/g, ''); // Remove não números
    value = value.slice(0, 8); // Máximo de 8 dígitos

    if (value.length > 4) {
        inputNascimento.value = value.replace(/(\d{2})(\d{2})(\d{1,4})/, "$1/$2/$3");
    } else if (value.length > 2) {
        inputNascimento.value = value.replace(/(\d{2})(\d{1,2})/, "$1/$2");
    } else {
        inputNascimento.value = value;
    }
});