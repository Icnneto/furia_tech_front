const inputInteresse = document.getElementById("interesses");
const listaInteresses = document.getElementById("interesses-lista");
const botaoAdicionar = document.getElementById("btn-adicionar-interesse");

botaoAdicionar.addEventListener("click", () => {
    const interesse = inputInteresse.value.trim();

    if (interesse) {
        const tag = document.createElement("div");
        tag.className = "inline-flex items-center px-3 py-1 rounded-xl bg-gray-100 text-gray-800 text-sm";
        tag.setAttribute("data-interesse", interesse);
        tag.innerHTML = `
        <span class="mr-2">${interesse}</span>
        <button type="button" class="text-paragraph hover:text-gray-700 font-semibold text-sm ml-2" onclick="this.parentElement.remove()">
          ×
        </button>
      `;
        listaInteresses.appendChild(tag);
        inputInteresse.value = "";
    }
});