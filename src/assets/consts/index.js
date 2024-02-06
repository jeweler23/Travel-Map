const info = await fetch('https://restcountries.com/v3.1/all')
const infoCountry = await info.json();

export {infoCountry}

// export infoCounty

