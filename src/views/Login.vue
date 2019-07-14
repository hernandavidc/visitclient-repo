<template>
    <div>
      <div id="back">
        <canvas id="canvas" class="canvas-back" width="1333" height="100%"></canvas>
        <div class="backRight">
        </div>
        <div class="backLeft">
        </div>
      </div>
      <div id="slideBox">
        <div class="topLayer">
          <div class="left">
            <div class="content">
            </div>
          </div>
          <div id="app" class="right" style="overflow-x: hidden;">
            <div class="content">
              <!-- Logo app
              <p align="center"><img src="images/iconApp.png" alt="VisitClient" width="150"></p>-->
              <p align="center"><img src="../assets/images/TBO.png" alt="" width="20%"></p>
              <h3 align="center">Tubos del Oriente</h3>
              <div class="mb-4">
                <h2 id="log-title">¡Bienvenido!</h2>
              </div>

              <b-alert v-if="error" show variant="danger">
                {{ errorMessage }}
              </b-alert>
                  
              <login-form :user="user" @login="submit"></login-form>
          
              <p class="mt-4">Powered by <img src="../assets/images/logoFryos.png" width="20px" alt=""> with <img src="../assets/images/heart.png" width="20px" alt=""></p>
            </div>
          </div>
        </div>
      </div>
        </div>
</template>
<style src="../assets/css/style-login.css"></style>
<script>
    import LoginForm from '@/components/Authentication/Login'
    import {mapState, mapActions} from 'vuex'
    export default {
      components: {
        LoginForm
      },
      data () {
        return {
          user: {
            Email: '',
            Password: ''
          }
        }
      },
      computed: {
        ...mapState('auth', ['error', 'errorMessage'])
      },
      methods: {
        ...mapActions('auth', ['signIn']),
        async submit () {
          const validate = await this.$validator.validateAll()
          if ( ! validate) {
            return false
          }
          await this.signIn(this.user)
          this.$router.push('/')
        }
      }
    }
</script>