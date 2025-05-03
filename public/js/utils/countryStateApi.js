async function getApiKey() {
    const url = "https://furia-tech-back.onrender.com/retrieve-api";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const data = await response.json();
        return data.apiKey;
    } catch (error) {
        console.error(error.message);
    }
};

export async function getCountryAPI() {
    const apiKey = await getApiKey();
    if (!apiKey) return [];

    const requestOptions = {
        method: 'GET',
        headers: { "X-CSCAPI-KEY": apiKey },
        redirect: 'follow'
    };

    try {
        const response = await fetch("https://api.countrystatecity.in/v1/countries", requestOptions);
        if (!response.ok) {
            throw new Error(`Erro ao buscar países: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Erro ao carregar países:", error.message);
        return [];
    }
}

export async function getStateAPI(country) {
    const apiKey = await getApiKey();
    if (!apiKey) return [];

    const requestOptions = {
        method: 'GET',
        headers: { "X-CSCAPI-KEY": apiKey },
        redirect: 'follow'
    };

    try {
        const response = await fetch(`https://api.countrystatecity.in/v1/countries/${country}/states`, requestOptions);
        if (!response.ok) {
            throw new Error(`Erro ao buscar estados: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Erro ao carregar estados:", error.message);
        return [];
    }
};