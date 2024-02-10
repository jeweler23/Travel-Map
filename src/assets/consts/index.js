const info = await fetch('https://restcountries.com/v3.1/all')
const infoCountries = await info.json();

export {infoCountries}

// export infoCounty

