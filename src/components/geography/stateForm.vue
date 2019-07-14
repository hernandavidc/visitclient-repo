<template>
<div>
    <h5>País: {{ this.$store.state.countries.selectedCountry.NameCountry }}</h5>
    <b-form @submit.prevent="$emit('processState', state)">
        <b-form-group
            id="state"
            label="Departamento"
            label-for="state">
            <b-form-input
                autocomplete="off"
                id="state"
                type="text"
                v-model="state.NameState"
                v-validate="{ required: true, min: 2 }"
                :state="validateState('state.NameState')"
                placeholder="Nombre del departamento."
                aria-describedby="stateInfo"
                name="NameState"
            ></b-form-input>
            <b-form-invalid-feedback id="stateInfo">
                Este campo es requerido y debe tener una longitud mínima de 2
            </b-form-invalid-feedback>
        </b-form-group>
        
        <b-button
            type="submit"
            variant="primary"
            :disabled="errors.any()"
            >
            {{ stateSubmit }}
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
        state: {
            type: Object,
            required: true
        },
        stateSubmit: {
            type: String,
            default: 'Crear departamento'
        }
    },
    computed: {
    ...mapState('countries', ['selectedCountry'])
    }
}
</script>