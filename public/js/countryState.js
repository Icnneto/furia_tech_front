import { getCountryAPI, getStateAPI } from "./utils/countryStateApi.js";
const formPais = document.querySelector('#pais');
const formEstado = document.querySelector('#estado');

async function fillCountries () {
    
    try {
        const countries = await getCountryAPI();

        formPais.innerHTML = `<option value="">Selecione o país</option>`;

        countries.forEach(country => {
            formPais.innerHTML += `
                <option value="${country.name}" data-code="${country.iso2}">${country.name}</option>
            `
        });

        formPais.addEventListener('change', async (event) => {
            const selectedOption = event.target.selectedOptions[0];
            const countryCode = selectedOption.dataset.code;;

            if (countryCode) {
                await fillStates(countryCode);
            }
        });

    } catch (error) {
        formPais.innerHTML = `<option value="">Erro ao carregar países: ${error}</option>`;
    };
};

async function fillStates(countryCode) {
    try {
        const states = await getStateAPI(countryCode);

        formEstado.innerHTML = `<option value="">Selecione o estado</option>`;

        states.forEach(state => {
            formEstado.innerHTML += `
                <option value="${state.name}">${state.name}</option>
            `;
        });

    } catch (error) {
        formEstado.innerHTML = `<option value="">Erro ao carregar estados: ${error}</option>`;
    }
}

// Chamar função ao carregar a página
document.addEventListener('DOMContentLoaded', fillCountries);