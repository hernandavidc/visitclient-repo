import Vue from 'vue'

export async function fetchDates({commit}, Tokken) {
  try {
    var bearerTokken = 'Bearer '+Tokken;
    const {data} = await Vue.axios({
      method: 'GET',
      headers: {'content-type': 'application/x-www-form-urlencoded','Authorization': bearerTokken},
      url: '/api/admin/datevisitclient'
    })
    commit('setDates', data)
  } catch (e) {
    commit('datesError', e.message)
  } finally {
    console.log("fetchDates done.")
  }
}

export async function addDate({commit}, [date,Tokken]) {
  try {
    var bearerTokken = 'Bearer '+Tokken;
    var form = new FormData();
    form.append("DateVisitClient", date.DateVisitClient);
    form.append("IdSeller", date.IdSeller);
    form.append("IdClient", date.IdClient);
    form.append("ObservationVisitClient", date.ObservationVisitClient);
    form.append("IdTypeIntention", date.IdTypeIntention);
    await Vue.axios({
      method: 'POST',
      url: '/api/datevisitclient/add',
      headers: {'content-type': 'application/x-www-form-urlencoded','Authorization': bearerTokken},
      data: form
    })
    .then(function (response) {
      if(typeof response.data == 'string' && response.data.includes('error')){
        commit('datesError', response.data)
      }
    })
  } catch (e) {
    commit('datesError', e.message)
  } finally {
    console.log('Add date done.')
  }
}

export async function updateDate({commit}, [date,Tokken]) {
  try {
    var bearerTokken = 'Bearer '+Tokken;
    var form = new FormData();
    form.append("IdDateVisitClient", date.IdDateVisitClient);
    form.append("DateVisitClient", date.DateVisitClient);
    form.append("IdSeller", date.IdSeller);
    form.append("IdClient", date.IdClient);
    form.append("ObservationVisitClient", date.ObservationVisitClient);
    form.append("IdTypeIntention", date.IdTypeIntention);
    await Vue.axios({
      method: 'POST',
      url: '/api/datevisitclient/update',
      headers: {'content-type': 'application/x-www-form-urlencoded','Authorization': bearerTokken},
      data: form
    })
    .then(function (response) {
      commit('statesDelError')
      if(typeof response.data == 'string' && response.data.includes('error')){
        commit('datesError', response.data)
      }
    })
  } catch (e) {
    commit('datesError', e.message)
  } finally {
    console.log('La petición para actualizar un datee ha finalizado')
  }
}

export async function updateDatesStatus ({commit, dispatch}, [date,op,Tokken]) {
  try {
    var bearerTokken = 'Bearer '+Tokken;
    commit('setLoading', true, {root: true});
    switch(op) {
      case 0:
        var urlAxios = `/api/datevisitclient/status/${date.IdDateVisitClient}/0`;
        break;
      case 1:
        var urlAxios = `/api/datevisitclient/status/${date.IdDateVisitClient}/1`;
        break;
      case 2:
        var urlAxios = `/api/datevisitclient/status/${date.IdDateVisitClient}/2`;
        break;
      case 3:
        var urlAxios = `/api/datevisitclient/status/${date.IdDateVisitClient}/3`;
        break;
      default:
        console.log("Error estatus");
        break;
    }
    await Vue.axios({
      method: 'GET',
      url: urlAxios,
      headers: {'content-type': 'application/x-www-form-urlencoded','Authorization': bearerTokken},
      
    })
  } catch (e) {
    commit('datesError', e.message)
  } finally {
    commit('setLoading', false, {root: true})
    fetchDates({commit}, Tokken)
    console.log('La petición para actualizar el estado ha finalizado')
  }
}


export async function fetchTypesIntention({commit}, Tokken) {
  try {
    var bearerTokken = 'Bearer '+Tokken;
    const {data} = await Vue.axios({
      method: 'GET',
      headers: {'content-type': 'application/x-www-form-urlencoded','Authorization': bearerTokken},
      url: '/api/admin/typesIntention'
    })
    commit('setTypesIntention', data)
  } catch (e) {
    commit('datesError', e.message)
  } finally {
    console.log("fetchTypesIntention done.")
  }
}

export async function addTypeIntention({commit}, [typesIntention,Tokken]) {
  try {
    var bearerTokken = 'Bearer '+Tokken;
    var form = new FormData();
    form.append("NameTypeIntention", typesIntention.NameTypeIntention);
    await Vue.axios({
      method: 'POST',
      url: '/api/admin/typesIntention/add',
      headers: {'content-type': 'application/x-www-form-urlencoded','Authorization': bearerTokken},
      data: form
    })
    .then(function (response) {
      if(response.data.includes('error')){
        commit('datesError', response.data)
      }
    })
  } catch (e) {
    commit('datesError', e.message)
  } finally {
    console.log('Add typesIntention done.')
  }
}

export async function updateTypeIntention({commit}, [typesIntention,Tokken]) {
  try {
    var bearerTokken = 'Bearer '+Tokken;
    var form = new FormData();
    form.append("IdTypeIntention", typesIntention.IdTypeIntention);
    form.append("NameTypeIntention", typesIntention.NameTypeIntention);
    await Vue.axios({
      method: 'POST',
      url: '/api/admin/typesIntention/update',
      headers: {'content-type': 'application/x-www-form-urlencoded','Authorization': bearerTokken},
      data: form
    })
    .then(function (response) {
      if(response.data.includes('error')){
        commit('datesError', response.data)
      }
    })
  } catch (e) {
    commit('datesError', e.message)
  } finally {
    console.log('La petición para actualizar un typesIntention ha finalizado')
  }
}

export async function updateTypesIntentionStatus ({commit, dispatch}, [typesIntention,Tokken]) {
  try {
    var bearerTokken = 'Bearer '+Tokken;
    commit('setLoading', true, {root: true})
    if(typesIntention.StatusTypeIntention == 1){
      var urlAxios = `/api/admin/typesIntention/disable/${typesIntention.IdTypeIntention}`;
    }
    else{
      var urlAxios = `/api/admin/typesIntention/enable/${typesIntention.IdTypeIntention}`;
    }
    await Vue.axios({
      method: 'GET',
      url: urlAxios,
      headers: {'content-type': 'application/x-www-form-urlencoded','Authorization': bearerTokken},
      
    })
  } catch (e) {
    commit('datesError', e.message)
  } finally {
    commit('setLoading', false, {root: true})
    fetchTypesIntention({commit}, Tokken)
    console.log('La petición para actualizar el estado ha finalizado')
  }
}