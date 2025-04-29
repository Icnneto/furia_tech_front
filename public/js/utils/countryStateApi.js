const requestOptions = {
    method: 'GET',
    headers: {"X-CSCAPI-KEY": "API_KEY"},
    redirect: 'follow'
};

export async function getCountryAPI() {
    try {
        const response = await fetch("https://api.countrystatecity.in/v1/countries", requestOptions);
        const countries = await response.json();

        return countries;
    } catch (error) {
        console.log(`Erro ao carregar países: ${error}`)
    };
};

export async function getStateAPI (country) {
    try {
        const response = await fetch(`https://api.countrystatecity.in/v1/countries/${country}/states`, requestOptions);
        const states = await response.json();

        return states;
    } catch (error) {
        console.log(`Erro ao carregar estados: ${error}`)
    };
};
