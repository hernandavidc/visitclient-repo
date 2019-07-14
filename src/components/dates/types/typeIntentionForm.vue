<template>
<div>
    <b-form @submit.prevent="$emit('processTypeIntention', typeIntention)">
        <b-form-group
            id="NameTypeIntention"
            label="Nombre"
            label-for="NameTypeIntention">
            <b-form-input
                autocomplete="off"
                id="NameTypeIntention"
                type="text"
                v-model="typeIntention.NameTypeIntention"
                v-validate="{ required: true, min: 2 }"
                placeholder="Nombre"
                aria-describedby="NameTypeIntentionInfo"
                name="NameTypeIntention"
            ></b-form-input>
            <b-form-invalid-feedback id="NameTypeIntentionInfo">
                Este campo es requerido y debe tener una longitud mínima de 2
            </b-form-invalid-feedback>
        </b-form-group>
        
        <b-button
            type="submit"
            variant="primary"
            :disabled="errors.any()"
            >
            {{ typeIntentionSubmit }}
        </b-button>
    </b-form>
</div>
</template>
<script>
    import validateMixin from '@/mixins/validation'
    export default {
      mixins: [validateMixin],
      props: {
        typeIntention: {
          type: Object,
          required: true
        },
        typeIntentionSubmit: {
          type: String,
          default: 'Crear tipo de cita'
        }
      }
    }
</script>