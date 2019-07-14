<template>
<div>
    <b-form @submit.prevent="$emit('processClient', client)">
        <b-form-group
            id="IdentificationNumberClient"
            label="Numero de identificación"
            label-for="IdentificationNumberClient">
            <b-form-input
                autocomplete="off"
                id="IdentificationNumberClient"
                type="text"
                v-model="client.IdentificationNumberClient"
                v-validate="{ required: true, min: 2 }"
                placeholder="Numero de identificación del cliente"
                aria-describedby="IdentificationNumberClientInfo"
                name="IdentificationNumberClient"
            ></b-form-input>
            <b-form-invalid-feedback id="IdentificationNumberClientInfo">
                Este campo es requerido y debe tener una longitud mínima de 2
            </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group
            id="NameClient"
            label="Nombre"
            label-for="NameClient">
            <b-form-input
                autocomplete="off"
                id="NameClient"
                type="text"
                v-model="client.NameClient"
                v-validate="{ required: true, min: 2 }"
                placeholder="Nombre"
                aria-describedby="NameClientInfo"
                name="NameClient"
            ></b-form-input>
            <b-form-invalid-feedback id="NameClientInfo">
                Este campo es requerido y debe tener una longitud mínima de 2
            </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group
            id="AddressClient"
            label="Dirección"
            label-for="AddressClient">
            <b-form-input
                autocomplete="off"
                id="AddressClient"
                type="text"
                v-model="client.AddressClient"
                v-validate="{ required: true, min: 2 }"
                placeholder="Dirección"
                aria-describedby="AddressClientInfo"
                name="AddressClient"
            ></b-form-input>
            <b-form-invalid-feedback id="AddressClientInfo">
                Este campo es requerido y debe tener una longitud mínima de 2
            </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group
            id="EmailClient"
            label="Correo electrónico"
            label-for="EmailClient">
            <b-form-input
                autocomplete="off"
                id="EmailClient"
                type="text"
                v-model="client.EmailClient"
                v-validate="{ required: true, min: 2 }"
                placeholder="Correo electrónico"
                aria-describedby="EmailClientInfo"
                name="EmailClient"
            ></b-form-input>
            <b-form-invalid-feedback id="EmailClientInfo">
                Este campo es requerido y debe tener una longitud mínima de 2
            </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group
            id="NameContactClient"
            label="Nombre de contacto"
            label-for="NameContactClient">
            <b-form-input
                autocomplete="off"
                id="NameContactClient"
                type="text"
                v-model="client.NameContactClient"
                v-validate="{ required: true, min: 2 }"
                placeholder="Nombre de contacto"
                aria-describedby="NameContactClientInfo"
                name="NameContactClient"
            ></b-form-input>
            <b-form-invalid-feedback id="NameContactClientInfo">
                Este campo es requerido y debe tener una longitud mínima de 2
            </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group
            id="PhoneClient"
            label="Telefono / celular"
            label-for="PhoneClient">
            <b-form-input
                autocomplete="off"
                id="PhoneClient"
                type="text"
                v-model="client.PhoneClient"
                v-validate="{ required: true, min: 2 }"
                placeholder="Telefono / celular"
                aria-describedby="PhoneClientInfo"
                name="PhoneClient"
            ></b-form-input>
            <b-form-invalid-feedback id="PhoneClientInfo">
                Este campo es requerido y debe tener una longitud mínima de 2
            </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group
            id="IdTypeClient"
            label="Tipo de cliente"
            label-for="IdTypeClient">
            <b-form-select v-model="client.IdTypeClient">
                <option disabled :value="null">Seleccione un tipo de cita</option>
                <option v-for="typeClient in clients.typesClient"
                    :key="typeClient.IdTypeClient"
                    :value="typeClient.IdTypeClient"
                    :typeClient="typeClient"
                    >{{typeClient.NameTypeClient}}</option> 
            </b-form-select>
            <b-form-invalid-feedback id="IdTypeClient">
                Este campo es requerido y debe tener una longitud mínima de 1
            </b-form-invalid-feedback>
        </b-form-group>
        <b-row>
            <b-col md="4" sm="6">
                <b-form-group
                    label="País">
                    <b-form-select v-model="selectedCountry.IdCountry" @change="onChangeCountry($event,this)">
                        <option disabled :value="null">Seleccione un país</option>
                        <option v-for="country in countries"
                            :key="country.IdCountry"
                            v-bind:value="country.IdCountry"
                            :country="country"
                            >{{country.NameCountry}}</option> 
                    </b-form-select>
                </b-form-group>
            </b-col>
            <b-col md="4" sm="6">
                <b-form-group
                    label="Departamento">
                    <b-form-select v-model="selectedState.IdState" @change="onChangeState($event,this)">
                        <option disabled :value="null">Seleccione un departamento</option>
                        <option v-for="state in states"
                            :key="state.IdState"
                            v-bind:value="state.IdState"
                            :state="state"
                            >{{state.NameState}}</option> 
                    </b-form-select>
                </b-form-group>
            </b-col>
            <b-col md="4" sm="12">
                <b-form-group
                    id="IdCity"
                    label="Ciudad"
                    label-for="IdCity">
                    <b-form-select v-model="client.IdCity">
                        <option disabled :value="null">Seleccione una ciudad</option>
                        <option v-if="client.IdCity" :value="client.IdCity">{{client.IdCity}}</option>
                        <option v-for="city in cities.cities"
                            :key="city.IdCity"
                            :value="city.IdCity"
                            :city="city"
                            >{{city.NameCity}}</option> 
                    </b-form-select>
                    <b-form-invalid-feedback id="IdCity">
                        Este campo es requerido y debe tener una longitud mínima de 1
                    </b-form-invalid-feedback>
                </b-form-group>
            </b-col>
        </b-row>
        <b-form-group
            id="LatitudeClient"
            label="Latitud"
            label-for="LatitudeClient">
            <b-form-input
                autocomplete="off"
                id="LatitudeClient"
                type="text"
                v-model="client.LatitudeClient"
                v-validate="{ required: true }"
                placeholder="Latitud"
                aria-describedby="LatitudeClientInfo"
                name="LatitudeClient"
                value=" "
            ></b-form-input>
            <b-form-invalid-feedback id="LatitudeClientInfo">
                Este campo es requerido y debe tener una longitud mínima de 1
            </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group
            id="LongitudeClient"
            label="Longitud"
            label-for="LongitudeClient">
            <b-form-input
                autocomplete="off"
                id="LongitudeClient"
                type="text"
                v-model="client.LongitudeClient"
                v-validate="{ required: true }"
                placeholder="Longitud"
                aria-describedby="LongitudeClientInfo"
                name="LongitudeClient"
                value=" "
            ></b-form-input>
            <b-form-invalid-feedback id="LongitudeClientInfo">
                Este campo es requerido y debe tener una longitud mínima de 2
            </b-form-invalid-feedback>
        </b-form-group>
        
        <b-button
            type="submit"
            variant="primary"
            :disabled="errors.any()"
            >
            {{ clientSubmit }}
        </b-button>
    </b-form>
</div>
</template>
<script>
    import {mapActions, mapState, mapMutations} from 'vuex'
    import validateMixin from '@/mixins/validation'
    export default {
        mixins: [validateMixin],
        props: {
            client: {
                type: Object,
                required: true
            },
            clientSubmit: {
                type: String,
                default: 'Crear cliente'
            }
        },
        computed: {
            ...mapState(['cities']),
            ...mapState(['clients']),
            ...mapState('states', ['selectedState','states']),
            ...mapState('countries', ['selectedCountry','countries'])
        },
        methods: {
            ...mapActions('clients', ['fetchTypesClient']),
            ...mapActions('cities', ['fetchCities']),
            ...mapActions('countries', ['fetchCountries']),
            ...mapActions('states', ['fetchStates']),
            ...mapMutations('countries', ['setCountry']),
            ...mapMutations('states', ['setState']),
            onChangeCountry(selectObject) {
                this.setCountry(this.$store.state.countries.countries.find( item => item.IdCountry === selectObject ));
                this.fetchStates([this.$store.state.auth.Tokken, this.$store.state.countries.selectedCountry.IdCountry]);
            },
            onChangeState(selectObject) {
                this.setState(this.$store.state.states.states.find( item => item.IdState === selectObject ));
                this.fetchCities([this.$store.state.auth.Tokken, this.$store.state.states.selectedState.IdState]);
            }    
        },
        mounted () {
            this.fetchTypesClient(this.$store.state.auth.Tokken)
            this.fetchCountries(this.$store.state.auth.Tokken)
            if(this.$store.state.states.selectedState.IdState){
                this.fetchCities([this.$store.state.auth.Tokken, this.$store.state.states.selectedState.IdState]);
            }
        }
    }
</script>