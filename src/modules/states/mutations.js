export function setStates (state, states) {
  state.states = states;
}

export function setState (state, selectedState) {
  state.selectedState.IdState = selectedState.IdState;
  state.selectedState.NameState = selectedState.NameState;
}

export function statesError (state, payload) {
  state.error = true
  state.errorMessage = payload
}

export function statesDelError () {
  state.error = false
  state.errorMessage = ''
}