import Vue from 'vue'

export async function signIn (context, user) {
  try {
    context.commit('setLoading', true, {root: true})
    var form = new FormData();
    form.append("Email", user.Email);
    form.append("Password", user.Password);
    await Vue.axios({
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      url: '/api/admin/login',
      data: form
    }).then(function (response){
      if(typeof response.data == 'string'){
        context.commit('authError', 'Email o contraseña incorrectos')
      }
      else{
        context.commit('setUser', [response.data["IdUser"], response.data["Tokken"]])
      }
    })
  } catch (e) {
    context.commit('authError', e.message)
  } finally {
    location.reload();
  }
}