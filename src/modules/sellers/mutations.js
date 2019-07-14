export function setSellers(state, sellers) {
  state.sellers = sellers;
}

export function setSeller(state, seller) {
  state.selectedSeller = seller;
}

export function sellersError(state, payload) {
  state.error = true;
  state.errorMessage = payload;
}

export function statesDelError (state) {
  state.error = false
  state.errorMessage = ''
}