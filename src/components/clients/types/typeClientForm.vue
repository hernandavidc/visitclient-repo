<template>
<div>
    <b-form @submit.prevent="$emit('processTypeClient', typeClient)">
        <b-form-group
            id="NameTypeClient"
            label="Nombre"
            label-for="NameTypeClient">
            <b-form-input
                autocomplete="off"
                id="NameTypeClient"
                type="text"
                v-model="typeClient.NameTypeClient"
                v-validate="{ required: true, min: 2 }"
                placeholder="Nombre"
                aria-describedby="NameTypeClientInfo"
                name="NameTypeClient"
            ></b-form-input>
            <b-form-invalid-feedback id="NameTypeClientInfo">
                Este campo es requerido y debe tener una longitud mínima de 2
            </b-form-invalid-feedback>
        </b-form-group>
        
        <b-button
            type="submit"
            variant="primary"
            :disabled="errors.any()"
            >
            {{ typeClientSubmit }}
        </b-button>
    </b-form>
</div>
</template>
<script>
    import validateMixin from '@/mixins/validation'
    export default {
      mixins: [validateMixin],
      props: {
        typeClient: {
          type: Object,
          required: true
        },
        typeClientSubmit: {
          type: String,
          default: 'Crear tipo de cliente'
        }
      }
    }
</script>