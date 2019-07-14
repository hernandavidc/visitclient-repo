import Vue from 'vue'

export async function fetchCities({commit}, [Tokken, IdState]) {
  try {
    var bearerTokken = 'Bearer '+Tokken;
    var url = `/api/admin/cities/${IdState}`;
    const {data} = await Vue.axios({
      method: 'GET',
      headers: {'content-type': 'application/x-www-form-urlencoded','Authorization': bearerTokken},
      url: url
    })
    .then(function (response) {
      console.log(response)
      if(response.data.includes('error')){
        commit('citiesError', response.data)
      }
      else{
        commit('setCities', response.data)
      }
    })
  } catch (e) {
    commit('citiesError', e.message)
  } finally {
    console.log("fetchCities done.")
  }
}

export async function addCity({commit}, [city,IdState,Tokken]) {
  try {
    var bearerTokken = 'Bearer '+Tokken;
    var form = new FormData();
    form.append("NameCity", city.NameCity);
    form.append("IdState", IdState);
    await Vue.axios({
      method: 'POST',
      url: '/api/admin/cities/add',
      headers: {'content-type': 'application/x-www-form-urlencoded','Authorization': bearerTokken},
      data: form
    })
    .then(function (response) {
      if(response.data.includes('error')){
        commit('citiesError', response.data)
      }
    })
  } catch (e) {
    commit('citiesError', e.message)
  } finally {
    console.log('Add city done.')
  }
}

export async function updateCity ({commit}, [city,Tokken]) {
  try {
    var bearerTokken = 'Bearer '+Tokken;
    var form = new FormData();
    form.append("IdCity", city.IdCity);
    form.append("NameCity", city.NameCity);
    await Vue.axios({
      method: 'POST',
      url: '/api/admin/cities/update',
      headers: {'content-type': 'application/x-www-form-urlencoded','Authorization': bearerTokken},
      data: form
    })
    .then(function (response) {
      console.log(response)
      if(response.data.includes('error')){
        commit('citiesError', response.data)
      }
    })
  } catch (e) {
    commit('citiesError', e.message)
  } finally {
    console.log('La petición para actualizar una ciudad ha finalizado')
  }
}

export async function updateCitiesStatus ({commit, dispatch}, [city,IdState,Tokken]) {
  try {
    var bearerTokken = 'Bearer '+Tokken;
    console.log("Tokken!! = "+bearerTokken)
    commit('setLoading', true, {root: true})
    if(city.StatusCity == 1){
      var urlAxios = `/api/admin/cities/disable/${city.IdCity}`;
    }
    else{
      var urlAxios = `/api/admin/cities/enable/${city.IdCity}`;
    }
    await Vue.axios({
      method: 'GET',
      url: urlAxios,
      headers: {'content-type': 'application/x-www-form-urlencoded','Authorization': bearerTokken},
      
    })
    .then(function (response) {
      console.log(response)
      if(response.data.includes('error')){
        commit('citiesError', response.data)
      }
    })
  } catch (e) {
    commit('citiesError', e.message)
  } finally {
    fetchCities({commit}, [Tokken, IdState])
    commit('setLoading', false, {root: true})
    console.log('La petición para actualizar el estado ha finalizado')
  }
}
