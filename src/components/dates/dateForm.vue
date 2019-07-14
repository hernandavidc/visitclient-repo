<template>
<div>
    <b-form @submit.prevent="$emit('processDate', date)">
        <b-col>
            <b-form-group label="Fecha">
                <date-picker v-model="date.DateVisitClient" :config="options"></date-picker>
                <b-form-invalid-feedback>
                    {{ errors.first('date') }}
                </b-form-invalid-feedback>
            </b-form-group>
        </b-col>
        <b-form-group
            id="IdSeller"
            label="Vendedor"
            label-for="IdSeller">
            <b-form-select v-model="date.IdSeller">
                <option disabled :value="null">Seleccione un vendedor</option>
                <option v-for="seller in sellers.sellers"
                    :key="seller.IdSeller"
                    :value="seller.IdSeller"
                    :seller="seller"
                    >{{seller.NameSeller}}</option> 
            </b-form-select>
            <b-form-invalid-feedback id="IdSellerInfo">
                Este campo es requerido y debe tener una longitud mínima de 1
            </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group
            id="IdClient"
            label="Cliente"
            label-for="IdClient">
            <b-form-select v-model="date.IdClient">
                <option disabled :value="null">Seleccione un cliente</option>
                <option v-for="client in clients.clients"
                    :key="client.IdClient"
                    :value="client.IdClient"
                    :client="client"
                    >{{client.NameClient}}</option> 
            </b-form-select>
            <b-form-invalid-feedback id="IdClient">
                Este campo es requerido y debe tener una longitud mínima de 1
            </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group
            id="IdTypeIntention"
            label="Tipo de cita"
            label-for="IdTypeIntention">
            <b-form-select v-model="date.IdTypeIntention">
                <option disabled :value="null">Seleccione un tipo de cita</option>
                <option v-for="typeIntention in dates.typesIntention"
                    :key="typeIntention.IdTypeIntention"
                    :value="typeIntention.IdTypeIntention"
                    :typeIntention="typeIntention"
                    >{{typeIntention.NameTypeIntention}}</option> 
            </b-form-select>
            <b-form-invalid-feedback id="IdTypeIntention">
                Este campo es requerido y debe tener una longitud mínima de 1
            </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group
            id="ObservationVisitClient"
            label="Observaciones"
            label-for="ObservationVisitClient">
            <b-form-input
                autocomplete="off"
                id="ObservationVisitClient"
                type="text"
                v-model="date.ObservationVisitClient"
                v-validate="{ required: true, min: 2 }"
                placeholder="Observaciones"
                aria-describedby="ObservationVisitClientInfo"
                name="ObservationVisitClient"
            ></b-form-input>
            <b-form-invalid-feedback id="ObservationVisitClientInfo">
                Este campo es requerido y debe tener una longitud mínima de 2
            </b-form-invalid-feedback>
        </b-form-group>
        
        <b-button
            type="submit"
            variant="primary"
            :disabled="errors.any()"
            >
            {{ dateSubmit }}
        </b-button>
    </b-form>
</div>
</template>
<script>
    import {mapActions, mapState} from 'vuex'
    import datePicker from 'vue-bootstrap-datetimepicker';
    import 'bootstrap/dist/css/bootstrap.css';
    import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
    export default {    
        data () {
            return {
                options: {
                    format: 'YYYY/MM/DD HH:mm',
                    useCurrent: false,
                }       
            }
        },
        components: {
            datePicker
        },
        props: {
            date: { 
                IdDateVisitClient: null, 
                DateVisitClient: "Y-m-d h:i:s", 
                IdSeller: null,  
                IdClient: null, 
                ObservationVisitClient: "",
                IdTypeIntention: null
            },
            dateSubmit: {
                type: String,
                default: 'Crear cita'
            }
        },
        computed: {
            ...mapState(['sellers']),
            ...mapState(['dates']),
            ...mapState(['clients'])
        },
        methods: {
            ...mapActions('sellers', ['fetchSellers']),
            ...mapActions('clients', ['fetchClients']),
            ...mapActions('dates', ['fetchTypesIntention'])
            
        },
        mounted () {
            this.fetchSellers(this.$store.state.auth.Tokken)
            this.fetchTypesIntention(this.$store.state.auth.Tokken)
        }
    }
</script>