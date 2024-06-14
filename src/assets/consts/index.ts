import type { InfoCountry } from "../../types/type";

const info: Response = await fetch("https://restcountries.com/v3.1/all");
const infoCountries: Array<InfoCountry> = await info.json();

export { infoCountries };


