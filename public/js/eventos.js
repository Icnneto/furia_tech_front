const inputEvento = document.getElementById("eventos");
const listaEventos = document.getElementById("eventos-lista");
const botaoAdicionar = document.getElementById("btn-adicionar-eventos");

botaoAdicionar.addEventListener("click", () => {
    const evento = inputEvento.value.trim();

    if (evento) {
        const tag = document.createElement("div");
        tag.className = "inline-flex items-center px-3 py-1 rounded-xl bg-gray-100 text-gray-800 text-sm";
        tag.setAttribute("data-evento", evento);
        tag.innerHTML = `
        <span class="mr-2">${evento}</span>
        <button type="button" class="text-paragraph hover:text-gray-700 font-semibold text-sm ml-2" onclick="this.parentElement.remove()">
          ×
        </button>
      `;
        listaEventos.appendChild(tag);
        inputEvento.value = "";
    }
});