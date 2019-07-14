import Vue from 'vue'

export async function fetchStates({commit}, [Tokken, IdCountry]) {
  try {
    var bearerTokken = 'Bearer '+Tokken;
    var url = `/api/admin/states/${IdCountry}`;
    const {data} = await Vue.axios({
      method: 'GET',
      headers: {'content-type': 'application/x-www-form-urlencoded','Authorization': bearerTokken},
      url: url
    })
    .then(function (response) {
      console.log(response)
      if(response.data.includes('error')){
        commit('statesError', response.data)
      }
      else{
        commit('setStates', response.data)
      }
    })
  } catch (e) {
    commit('statesError', e.message)
  } finally {
    console.log("fetchStates done.")
  }
}

export async function addState ({commit}, [state,IdCountry,Tokken]) {
  try {
    var bearerTokken = 'Bearer '+Tokken;
    var form = new FormData();
    form.append("NameState", state.NameState);
    form.append("IdCountry", IdCountry);
    await Vue.axios({
      method: 'POST',
      url: '/api/admin/states/add',
      headers: {'content-type': 'application/x-www-form-urlencoded','Authorization': bearerTokken},
      data: form
    })
    .then(function (response) {
      if(response.data.includes('error')){
        commit('statesError', response.data)
      }
    })
  } catch (e) {
    commit('statessError', e.message)
  } finally {
    console.log('Add state done.')
  }
}

export async function updateState ({commit}, [state,Tokken]) {
  try {
    var bearerTokken = 'Bearer '+Tokken;
    var form = new FormData();
    form.append("IdState", state.IdState);
    form.append("NameState", state.NameState);
    await Vue.axios({
      method: 'POST',
      url: '/api/admin/states/update',
      headers: {'content-type': 'application/x-www-form-urlencoded','Authorization': bearerTokken},
      data: form
    })
    .then(function (response) {
      console.log(response)
      if(response.data.includes('error')){
        commit('statesError', response.data)
      }
    })
  } catch (e) {
    commit('statesError', e.message)
  } finally {
    console.log('La petición para actualizar un país ha finalizado')
  }
}

export async function updateStatesStatus ({commit, dispatch}, [state,IdCountry,Tokken]) {
  try {
    var bearerTokken = 'Bearer '+Tokken;
    console.log("Tokken!! = "+bearerTokken)
    commit('setLoading', true, {root: true})
    if(state.StatusState == 1){
      var urlAxios = `/api/admin/states/disable/${state.IdState}`;
    }
    else{
      var urlAxios = `/api/admin/states/enable/${state.IdState}`;
    }
    console.log("URL = "+urlAxios)
    await Vue.axios({
      method: 'GET',
      url: urlAxios,
      headers: {'content-type': 'application/x-www-form-urlencoded','Authorization': bearerTokken},
      
    })
    .then(function (response) {
      console.log(response)
      if(response.data.includes('error')){
        commit('statesError', response.data)
      }
    })
  } catch (e) {
    commit('statesError', e.message)
  } finally {
    fetchStates({commit}, [Tokken, IdCountry])
    commit('setLoading', false, {root: true})
    console.log('La petición para actualizar el estado ha finalizado')
  }
}
