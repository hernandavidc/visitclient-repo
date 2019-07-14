<template>
<section >
    <uarehere>
        <template slot="first">Lugares </template><template slot="second">Ciudades</template>
    </uarehere>
    <div class="statistic">
        <div class="container-fluid">   
        <div class="row ">
            <div class="col-md-12">
               <b-row>
                <b-col md="4" sm="6">
                    <b-form-select v-model="selectedCountry.IdCountry" @change="onChangeCountry($event,this)">
                        <option disabled :value="null">Seleccione un país</option>
                        <option v-for="country in countries"
                            :key="country.IdCountry"
                            v-bind:value="country.IdCountry"
                            :country="country"
                            >{{country.NameCountry}}</option> 
                    </b-form-select>
                </b-col>
                <b-col md="4" sm="6">
                    <b-form-select v-model="selectedState.IdState" @change="onChangeState($event,this)">
                        <option disabled :value="null">Seleccione un departamento</option>
                        <option v-for="state in states"
                            :key="state.IdState"
                            v-bind:value="state.IdState"
                            :state="state"
                            >{{state.NameState}}</option> 
                    </b-form-select>
                </b-col>
                <b-col md="4" sm="12">
                    <router-link v-if="selectedState.IdState" :to="{ 'name': 'addCity'}" class="float-right" v-b-tooltip.hover title="Agregar"> 
                        <b-button variant="primary" class="mb-2">
                        <i class="fas fa-plus-circle"></i> Agregar ciudad</b-button> 
                    </router-link>
                </b-col>
                </b-row>
            <!--   DATA TABLE-->
                <div class="table-responsive m-b-40 m-t-20">
                    <table class="table table-borderless table-data3">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Status</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody v-if="cities.cities.length">
                            <cityItem v-for="city in cities.cities"
                            :key="city.IdCity"
                            :city="city"
                             >
                            </cityItem>
                        </tbody>
                        <tbody v-else>
                            <b-alert show variant="info" class="mt-4 ">Seleccione un pais y departamento o agregue una ciudad.</b-alert>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
    </div>
</section>
</template>
<script>
import {mapActions, mapState, mapMutations} from 'vuex'
import uarehere from '@/components/navigations/uarehere'
import cityItem from '@/components/geography/cityItem'
export default {
    components: {
        uarehere, 
        cityItem
    },
    computed: {
      ...mapState(['cities']),
      ...mapState('states', ['selectedState','states']),
      ...mapState('countries', ['selectedCountry','countries'])
    },
    methods: {
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
        this.fetchCountries(this.$store.state.auth.Tokken)
        if(this.$store.state.states.selectedState.IdState){
            this.fetchCities([this.$store.state.auth.Tokken, this.$store.state.states.selectedState.IdState]);
        }
    }
}
</script>