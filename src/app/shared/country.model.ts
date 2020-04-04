export interface ICountry {
    country: string;
    countryInfo: {
            cases: string;
            _id: number;
            iso2: string;
            iso3: string;
            lat: number;
            long: number;
            flag: string;
   },     
    todayCases: string;
    deaths: number;
    todayDeaths: number;
    recovered: number;
    active: number;
    critical: number;
    casesPerOneMillion: number;
    deathsPerOneMillion: number;
    updated: number;
}
