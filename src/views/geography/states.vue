<template>
<section >
    <uarehere>
        <template slot="first">Lugares </template><template slot="second">Departamentos</template>
    </uarehere>
    <div class="statistic">
        <div class="container-fluid">   
        <div class="row ">
            <div class="col-md-12">
                <b-row>
                <b-col md="6" sm="12">
                    <b-form-select v-model="selectedCountry.IdCountry" @change="onChange($event,this)">
                        <option disabled :value="null">Seleccione un país</option>
                        <option v-for="country in countries"
                            :key="country.IdCountry"
                            v-bind:value="country.IdCountry"
                            :country="country"
                            >{{country.NameCountry}}</option> 
                    </b-form-select>
                </b-col>
                <b-col md="6" sm="12">
                    <router-link v-if="selectedCountry.IdCountry" :to="{ 'name': 'addState'}" class="float-right" v-b-tooltip.hover title="Agregar"> 
                        <b-button variant="primary" class="mb-2">
                        <i class="fas fa-plus-circle"></i> Agregar departamento</b-button> 
                    </router-link>
                </b-col>
                </b-row>
            <!-- DATA TABLE-->
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
                        <tbody v-if="states.states.length">
                            <stateItem v-for="state in states.states"
                            :key="state.IdState"
                            :state="state"
                             >
                            </stateItem>
                            
                        </tbody>
                        <tbody v-else>
                            <b-alert show variant="info" class="mt-4 ">Seleccione un pais o agregue un departamento.</b-alert>
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
import stateItem from '@/components/geography/stateItem'
export default {
    components: {
        uarehere,
        stateItem
    },
    computed: {
      ...mapState(['states']),
      ...mapState('countries', ['selectedCountry','countries'])
    },
    methods: {
        ...mapActions('states', ['fetchStates']),
        ...mapActions('countries', ['fetchCountries']),
        ...mapMutations('countries', ['setCountry']),
        getIdCountry(){
            if(this.$store.state.countries.selectedCountry){
                return this.$store.state.countries.selectedCountry.IdCountry
            }
            else{
                return null
            }
        },
        onChange(selectObject) {
            this.setCountry(this.$store.state.countries.countries.find( item => item.IdCountry === selectObject ));
            this.fetchStates([this.$store.state.auth.Tokken, this.$store.state.countries.selectedCountry.IdCountry]);
        }
    },
    mounted () {
        var idCountry = this.getIdCountry();
        if(idCountry){
            this.fetchStates([this.$store.state.auth.Tokken, idCountry]);
        }
        else{
            this.fetchCountries(this.$store.state.auth.Tokken);
        }
    }
}
</script>