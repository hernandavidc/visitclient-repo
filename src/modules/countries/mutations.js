export function setCountries (state, countries) {
  state.countries = countries;
}

export function setCountry (state, country) {
  state.selectedCountry.IdCountry = country.IdCountry;
  state.selectedCountry.NameCountry = country.NameCountry;
}

export function countriesError (state, payload) {
  state.error = true;
  state.errorMessage = payload;
}