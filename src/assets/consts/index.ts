const info:Response = await fetch('https://restcountries.com/v3.1/all')
const infoCountries:Array<object> = await info.json();

console.log(infoCountries);


export {infoCountries}

// export infoCounty

