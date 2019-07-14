export function setClients(state, clients) {
  state.clients = clients;
}

export function setClient(state, client) {
  state.selectedClient = client;
}

export function setTypesClient(state, typesClient) {
  state.typesClient = typesClient;
}

export function setTypeClient(state, typeClient) {
  state.selectedTypeClient = typeClient;
}

export function clientsError(state, payload) {
  state.error = true;
  state.errorMessage = payload;
}