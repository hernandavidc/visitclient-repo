<template>
    <b-form @submit.prevent="$emit('login')">
        <b-form-group
            label="Email"
            description="Los datos son privados">
            <b-form-input
                type="email"
                autocomplete="off"
                v-model="user.Email"
                v-validate="'required|email'"
                :state="validateState('Email')"
                name="Email"
                placeholder="Introduce el correo"
            ></b-form-input>
            <b-form-invalid-feedback>
                {{ errors.first('Email') }}
            </b-form-invalid-feedback>
        </b-form-group>
        
        <b-form-group
            label="Password">
            <b-form-input
                type="password"
                autocomplete="off"
                v-model="user.Password"
                v-validate="'required|min:5'"
                :state="validateState('Password')"
                name="Password"
                placeholder="Introduce la contraseña"
            ></b-form-input>
            <b-form-invalid-feedback>
                {{ errors.first('Password') }}
            </b-form-invalid-feedback>
        </b-form-group>
        
        <b-button
            :disabled="errors.any() || ! user.Password"
            type="submit"
            class="login"
            variant="primary">
            Iniciar sesión
        </b-button>
    </b-form>
</template>

<script>
    import validateMixin from '@/mixins/validation'

    export default {
      mixins: [validateMixin],
      props: {
        user: {
          type: Object,
          required: true,
          validator: user => {
            if ( ! user.hasOwnProperty('Email') || ! user.hasOwnProperty('Password')) {
              console.warn('Usuario no válido')
              return false
            }
            return true
          }
        }
      }
    }
</script>