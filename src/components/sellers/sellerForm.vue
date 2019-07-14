<template>
<div>
    <b-form @submit.prevent="$emit('processSeller', seller)">
        <b-form-group
            id="IdentificationNumberSeller"
            label="Numero de identificación"
            label-for="IdentificationNumberSeller">
            <b-form-input
                autocomplete="off"
                id="IdentificationNumberSeller"
                type="text"
                v-model="seller.IdentificationNumberSeller"
                v-validate="{ required: true, min: 2 }"
                placeholder="Numero de identificación del vendedor"
                aria-describedby="IdentificationNumberSellerInfo"
                name="IdentificationNumberSeller"
            ></b-form-input>
            <b-form-invalid-feedback id="IdentificationNumberSellerInfo">
                Este campo es requerido y debe tener una longitud mínima de 2
            </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group
            id="NameSeller"
            label="Nombre"
            label-for="NameSeller">
            <b-form-input
                autocomplete="off"
                id="NameSeller"
                type="text"
                v-model="seller.NameSeller"
                v-validate="{ required: true, min: 2 }"
                placeholder="Nombre"
                aria-describedby="NameSellerInfo"
                name="NameSeller"
            ></b-form-input>
            <b-form-invalid-feedback id="NameSellerInfo">
                Este campo es requerido y debe tener una longitud mínima de 2
            </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group
            id="PhoneSeller"
            label="Telefono / celular"
            label-for="PhoneSeller">
            <b-form-input
                autocomplete="off"
                id="PhoneSeller"
                type="text"
                v-model="seller.PhoneSeller"
                v-validate="{ required: true, min: 2 }"
                placeholder="Telefono / celular"
                aria-describedby="PhoneSellerInfo"
                name="PhoneSeller"
            ></b-form-input>
            <b-form-invalid-feedback id="PhoneSellerInfo">
                Este campo es requerido y debe tener una longitud mínima de 2
            </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group
            id="EmailSeller"
            label="Correo electrónico"
            label-for="EmailSeller">
            <b-form-input
                autocomplete="off"
                id="EmailSeller"
                type="text"
                v-model="seller.EmailSeller"
                v-validate="{ required: true, min: 2 }"
                placeholder="Correo electrónico"
                aria-describedby="EmailSellerInfo"
                name="EmailSeller"
            ></b-form-input>
            <b-form-invalid-feedback id="EmailSellerInfo">
                Este campo es requerido y debe tener una longitud mínima de 2
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
                    <b-form-select v-model="seller.IdCity">
                        <option disabled :value="null">Seleccione una ciudad</option>
                        <option v-if="seller.IdCity" :value="seller.IdCity">{{seller.IdCity}}</option>
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
            id="TimeWorkedSeller"
            label="Tiempo trabajado"
            label-for="TimeWorkedSeller">
            <b-form-input
                autocomplete="off"
                id="TimeWorkedSeller"
                type="number"
                v-model="seller.TimeWorkedSeller"
                v-validate="{ required: true }"
                placeholder="Tiempo trabajado"
                aria-describedby="TimeWorkedSellerInfo"
                name="TimeWorkedSeller"
                value="0"
            ></b-form-input>
            <b-form-invalid-feedback id="TimeWorkedSellerInfo">
                Este campo es requerido y debe tener una longitud mínima de 1
            </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group
            id="Password"
            label="Contraseña"
            label-for="Password"
            v-if="showPass == 'true'">
            <b-form-input
                autocomplete="off"
                id="Password"
                type="password"
                v-model="seller.Password"
                v-validate="{ required: true, min: 4 }"
                placeholder="Contraseña"
                aria-describedby="PasswordInfo"
                name="Password"
            ></b-form-input>
            <b-form-invalid-feedback id="PasswordInfo">
                Este campo es requerido y debe tener una longitud mínima de 4
            </b-form-invalid-feedback>
        </b-form-group>
        
        <b-button
            type="submit"
            variant="primary"
            :disabled="errors.any()"
            >
            {{ sellerSubmit }}
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
        seller: {
          type: Object,
          required: true
        },
        sellerSubmit: {
          type: String,
          default: 'Crear vendedor'
        },
        showPass: {
          type: String,
          default: 'true'
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