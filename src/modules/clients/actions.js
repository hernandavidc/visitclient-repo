import Vue from 'vue'

export async function fetchClients({commit}, Tokken) {
  try {
    var bearerTokken = 'Bearer '+Tokken;
    const {data} = await Vue.axios({
      method: 'GET',
      headers: {'content-type': 'application/x-www-form-urlencoded','Authorization': bearerTokken},
      url: '/api/admin/clients'
    })
    commit('setClients', data)
  } catch (e) {
    commit('clientsError', e.message)
  } finally {
    console.log("fetchClients done.")
  }
}

export async function addClient({commit}, [client,Tokken]) {
  try {
    var bearerTokken = 'Bearer '+Tokken;
    var form = new FormData();
    form.append("NameClient", client.NameClient);
    form.append("IdentificationNumberClient", client.IdentificationNumberClient);
    form.append("AddressClient", client.AddressClient);
    form.append("NameContactClient", client.NameContactClient);
    form.append("EmailClient", client.EmailClient);
    form.append("IdCity", client.IdCity);
    form.append("PhoneClient", client.PhoneClient);
    form.append("IdTypeClient", client.IdTypeClient);
    form.append("LatitudeClient", client.LatitudeClient);
    form.append("LongitudeClient", client.LongitudeClient);
    await Vue.axios({
      method: 'POST',
      url: '/api/client/add',
      headers: {'content-type': 'application/x-www-form-urlencoded','Authorization': bearerTokken},
      data: form
    })
    .then(function (response) {
      if(response.data.includes('error')){
        commit('clientsError', response.data)
      }
    })
  } catch (e) {
    commit('clientsError', e.message)
  } finally {
    console.log('Add client done.')
  }
}

export async function updateClient({commit}, [client,Tokken]) {
  try {
    var bearerTokken = 'Bearer '+Tokken;
    var form = new FormData();
    form.append("IdClient", client.IdClient);
    form.append("NameClient", client.NameClient);
    form.append("IdentificationNumberClient", client.IdentificationNumberClient);
    form.append("AddressClient", client.AddressClient);
    form.append("NameContactClient", client.NameContactClient);
    form.append("EmailClient", client.EmailClient);
    form.append("IdCity", client.IdCity);
    form.append("PhoneClient", client.PhoneClient);
    form.append("IdTypeClient", client.IdTypeClient);
    form.append("LatitudeClient", client.LatitudeClient);
    form.append("LongitudeClient", client.LongitudeClient);
    await Vue.axios({
      method: 'POST',
      url: '/api/client/update',
      headers: {'content-type': 'application/x-www-form-urlencoded','Authorization': bearerTokken},
      data: form
    })
    .then(function (response) {
      console.log(response)
      if(response.data.includes('error')){
        commit('clientsError', response.data)
      }
    })
  } catch (e) {
    commit('clientsError', e.message)
  } finally {
    console.log('La petición para actualizar un cliente ha finalizado')
  }
}

export async function updateClientsStatus ({commit, dispatch}, [client,Tokken]) {
  try {
    var bearerTokken = 'Bearer '+Tokken;
    commit('setLoading', true, {root: true})
    if(client.StatusClient == 1){
      var urlAxios = `/api/admin/client/disable/${client.IdClient}`;
    }
    else{
      var urlAxios = `/api/admin/client/enable/${client.IdClient}`;
    }
    await Vue.axios({
      method: 'GET',
      url: urlAxios,
      headers: {'content-type': 'application/x-www-form-urlencoded','Authorization': bearerTokken},
      
    })
  } catch (e) {
    commit('clientsError', e.message)
  } finally {
    commit('setLoading', false, {root: true})
    fetchClients({commit}, Tokken)
    console.log('La petición para actualizar el estado ha finalizado')
  }
}

export async function fetchTypesClient({commit}, Tokken) {
  try {
    var bearerTokken = 'Bearer '+Tokken;
    const {data} = await Vue.axios({
      method: 'GET',
      headers: {'content-type': 'application/x-www-form-urlencoded','Authorization': bearerTokken},
      url: '/api/admin/typesClient'
    })
    commit('setTypesClient', data)
  } catch (e) {
    commit('clientsError', e.message)
  } finally {
    console.log("fetchTypesClient done.")
  }
}

export async function addTypeClient({commit}, [typesClient,Tokken]) {
  try {
    var bearerTokken = 'Bearer '+Tokken;
    var form = new FormData();
    form.append("NameTypeClient", typesClient.NameTypeClient);
    await Vue.axios({
      method: 'POST',
      url: '/api/admin/typesClient/add',
      headers: {'content-type': 'application/x-www-form-urlencoded','Authorization': bearerTokken},
      data: form
    })
    .then(function (response) {
      if(response.data.includes('error')){
        commit('clientsError', response.data)
      }
    })
  } catch (e) {
    commit('clientsError', e.message)
  } finally {
    console.log('Add typesClient done.')
  }
}

export async function updateTypeClient({commit}, [typesClient,Tokken]) {
  try {
    var bearerTokken = 'Bearer '+Tokken;
    var form = new FormData();
    form.append("IdTypeClient", typesClient.IdTypeClient);
    form.append("NameTypeClient", typesClient.NameTypeClient);
    await Vue.axios({
      method: 'POST',
      url: '/api/admin/typesClient/update',
      headers: {'content-type': 'application/x-www-form-urlencoded','Authorization': bearerTokken},
      data: form
    })
    .then(function (response) {
      if(response.data.includes('error')){
        commit('clientsError', response.data)
      }
    })
  } catch (e) {
    commit('clientsError', e.message)
  } finally {
    console.log('La petición para actualizar un typesClient ha finalizado')
  }
}

export async function updateTypesClientStatus ({commit, dispatch}, [typesClient,Tokken]) {
  try {
    var bearerTokken = 'Bearer '+Tokken;
    commit('setLoading', true, {root: true})
    if(typesClient.StatusTypeClient == 1){
      var urlAxios = `/api/admin/typesClient/disable/${typesClient.IdTypeClient}`;
    }
    else{
      var urlAxios = `/api/admin/typesClient/enable/${typesClient.IdTypeClient}`;
    }
    await Vue.axios({
      method: 'GET',
      url: urlAxios,
      headers: {'content-type': 'application/x-www-form-urlencoded','Authorization': bearerTokken},
      
    })
  } catch (e) {
    commit('clientsError', e.message)
  } finally {
    commit('setLoading', false, {root: true})
    fetchTypesClient({commit}, Tokken)
    console.log('La petición para actualizar el estado ha finalizado')
  }
}
