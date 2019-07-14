<template>
<div>
    <h5>Departamento: {{ this.$store.state.states.selectedState.NameState }}</h5>
    <b-form @submit.prevent="$emit('processCity', city)">
        <b-form-group
            id="city"
            label="Ciudad"
            label-for="city">
            <b-form-input
                autocomplete="off"
                id="city"
                type="text"
                v-model="city.NameCity"
                v-validate="{ required: true, min: 2 }"
                placeholder="Nombre de la ciudad."
                aria-describedby="cityInfo"
                name="NameCity"
            ></b-form-input>
            <b-form-invalid-feedback id="cityInfo">
                Este campo es requerido y debe tener una longitud mínima de 2
            </b-form-invalid-feedback>
        </b-form-group>
        
        <b-button
            type="submit"
            variant="primary"
            :disabled="errors.any()"
            >
            {{ citySubmit }}
        </b-button>
    </b-form>
</div>
</template>
<script>
import {mapState} from 'vuex'
import validateMixin from '@/mixins/validation'
export default {
    mixins: [validateMixin],
    props: {
        city: {
            type: Object,
            required: true
        },
        citySubmit: {
            type: String,
            default: 'Crear ciudad'
        }
    },
    computed: {
    ...mapState('states', ['selectedState'])
    }
}
</script>