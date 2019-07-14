export function setCities (state, cities) {
  state.cities  = cities;
}

export function setCity (state, selectedCity) {
  state.selectedCity = selectedCity
}

export function citiesError (state, payload) {
  state.error = true
  state.errorMessage = payload
}

export function statesDelError () {
  state.error = false
  state.errorMessage = ''
}