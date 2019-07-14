import Vue from 'vue'

export async function fetchCountries({commit}, Tokken) {
  try {
    var bearerTokken = 'Bearer '+Tokken;
    const {data} = await Vue.axios({
      method: 'GET',
      headers: {'content-type': 'application/x-www-form-urlencoded','Authorization': bearerTokken},
      url: '/api/admin/countries'
    })
    commit('setCountries', data)
  } catch (e) {
    commit('countriesError', e.message)
  } finally {
    console.log("fetchCountries done.")
  }
}

export async function addCountry ({commit}, [country,Tokken]) {
  try {
    var bearerTokken = 'Bearer '+Tokken;
    var form = new FormData();
    form.append("NameCountry", country.NameCountry);
    await Vue.axios({
      method: 'POST',
      url: '/api/admin/countries/add',
      headers: {'content-type': 'application/x-www-form-urlencoded','Authorization': bearerTokken},
      data: form
    })
    .then(function (response) {
      if(response.data.includes('error')){
        commit('countriesError', response.data)
      }
    })
  } catch (e) {
    commit('countriesError', e.message)
  } finally {
    console.log('Add countrie done.')
  }
}

export async function updateCountry ({commit}, [country,Tokken]) {
  try {
    var bearerTokken = 'Bearer '+Tokken;
    var form = new FormData();
    form.append("IdCountry", country.IdCountry);
    form.append("NameCountry", country.NameCountry);
    await Vue.axios({
      method: 'POST',
      url: '/api/admin/countries/update',
      headers: {'content-type': 'application/x-www-form-urlencoded','Authorization': bearerTokken},
      data: form
    })
    .then(function (response) {
      console.log(response)
      if(response.data.includes('error')){
        commit('countriesError', response.data)
      }
    })
  } catch (e) {
    commit('countriesError', e.message)
  } finally {
    console.log('La petición para actualizar un país ha finalizado')
  }
}

export async function updateCountriesStatus ({commit, dispatch}, [country,Tokken]) {
  try {
    var bearerTokken = 'Bearer '+Tokken;
    commit('setLoading', true, {root: true})
    if(country.StatusCountry == 1){
      var urlAxios = `/api/admin/countries/disable/${country.IdCountry}`;
    }
    else{
      var urlAxios = `/api/admin/countries/enable/${country.IdCountry}`;
    }
    await Vue.axios({
      method: 'GET',
      url: urlAxios,
      headers: {'content-type': 'application/x-www-form-urlencoded','Authorization': bearerTokken},
      
    })
  } catch (e) {
    commit('countriesError', e.message)
  } finally {
    commit('setLoading', false, {root: true})
    fetchCountries({commit}, Tokken)
    console.log('La petición para actualizar el estado ha finalizado')
  }
}
