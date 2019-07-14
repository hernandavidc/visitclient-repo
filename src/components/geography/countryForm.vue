<template>
    <b-form @submit.prevent="$emit('processCountry', country)">
        <b-form-group
            id="country"
            label="País"
            label-for="country">
            <b-form-input
                autocomplete="off"
                id="country"
                type="text"
                v-model="country.NameCountry"
                v-validate="{ required: true, min: 2 }"
                :state="validateState('country.NameCountry')"
                placeholder="Nombre del país."
                aria-describedby="countryInfo"
                name="NameCountry"
            ></b-form-input>
            <b-form-invalid-feedback id="countryInfo">
                Este campo es requerido y debe tener una longitud mínima de 2
            </b-form-invalid-feedback>
        </b-form-group>
        
        <b-button
            type="submit"
            variant="primary"
            :disabled="errors.any()"
            >
            {{ countrySubmit }}
        </b-button>
    </b-form>
</template>

<script>
    import validateMixin from '@/mixins/validation'
    export default {
      mixins: [validateMixin],
      props: {
        country: {
          type: Object,
          required: true
        },
        countrySubmit: {
          type: String,
          default: 'Crear país'
        }
      }
    }
</script>