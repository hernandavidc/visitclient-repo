import Vue from 'vue'

export async function fetchSellers({commit}, Tokken) {
  try {
    var bearerTokken = 'Bearer '+Tokken;
    const {data} = await Vue.axios({
      method: 'GET',
      headers: {'content-type': 'application/x-www-form-urlencoded','Authorization': bearerTokken},
      url: '/api/admin/sellers'
    })
    commit('setSellers', data)
  } catch (e) {
    commit('sellersError', e.message)
  } finally {
    console.log("fetchSellers done.")
  }
}

export async function addSeller({commit}, [seller,Tokken]) {
  try {
    var bearerTokken = 'Bearer '+Tokken;
    var form = new FormData();
    form.append("NameSeller", seller.NameSeller);
    form.append("IdentificationNumberSeller", seller.IdentificationNumberSeller);
    form.append("IdCity", seller.IdCity);
    form.append("PhoneSeller", seller.PhoneSeller);
    form.append("EmailSeller", seller.EmailSeller);
    form.append("TimeWorkedSeller", seller.TimeWorkedSeller);
    form.append("Password", seller.Password);
    await Vue.axios({
      method: 'POST',
      url: '/api/admin/sellers/add',
      headers: {'content-type': 'application/x-www-form-urlencoded','Authorization': bearerTokken},
      data: form
    })
    .then(function (response) {
      if(response.data.includes('error')){
        commit('sellersError', response.data)
      }
    })
  } catch (e) {
    commit('sellersError', e.message)
  } finally {
    console.log('Add seller done.')
  }
}

export async function updateSeller({commit}, [seller,Tokken]) {
  try {
    var bearerTokken = 'Bearer '+Tokken;
    var form = new FormData();
    form.append("IdSeller", seller.IdSeller);
    form.append("NameSeller", seller.NameSeller);
    form.append("IdentificationNumberSeller", seller.IdentificationNumberSeller);
    form.append("IdCity", seller.IdCity);
    form.append("PhoneSeller", seller.PhoneSeller);
    form.append("EmailSeller", seller.EmailSeller);
    form.append("TimeWorkedSeller", seller.TimeWorkedSeller);
    await Vue.axios({
      method: 'POST',
      url: '/api/admin/sellers/update',
      headers: {'content-type': 'application/x-www-form-urlencoded','Authorization': bearerTokken},
      data: form
    })
    .then(function (response) {
      commit('statesDelError')
      if(response.data.includes('error')){
        commit('sellersError', response.data)
      }
    })
  } catch (e) {
    commit('sellersError', e.message)
  } finally {
    console.log('La petición para actualizar un sellere ha finalizado')
  }
}

export async function updateSellersStatus ({commit, dispatch}, [seller,Tokken]) {
  try {
    var bearerTokken = 'Bearer '+Tokken;
    commit('setLoading', true, {root: true})
    if(seller.StatusSeller == 1){
      var urlAxios = `/api/admin/sellers/disable/${seller.IdSeller}`;
    }
    else{
      var urlAxios = `/api/admin/sellers/enable/${seller.IdSeller}`;
    }
    await Vue.axios({
      method: 'GET',
      url: urlAxios,
      headers: {'content-type': 'application/x-www-form-urlencoded','Authorization': bearerTokken},
      
    })
  } catch (e) {
    commit('sellersError', e.message)
  } finally {
    commit('setLoading', false, {root: true})
    fetchSellers({commit}, Tokken)
    console.log('La petición para actualizar el estado ha finalizado')
  }
}
