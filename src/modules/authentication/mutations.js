export function setUser (state, [user, Tokken]) {
  state.user = user
  state.Tokken = Tokken
  state.isLogged = true
  state.error = false
  state.errorMessage = ''
}

export function logout (state) {
  state.user = null
  state.isLogged = false
  state.Tokken = null
}

export function authError (state, error) {
  state.error = true
  state.errorMessage = error
  state.user = null
  state.Tokken = null
  state.isLogged = false
}