<template>
<section >
    <uarehere>
        <template slot="first">Lugares </template><template slot="second">Países</template>
    </uarehere>
    <div class="statistic">
        <div class="container-fluid">   
        <div class="row ">
            <div class="col-md-12">
            <router-link :to="{ 'name': 'addCountry'}" class="float-right" v-b-tooltip.hover title="Agregar"> 
                <b-button variant="primary" class="mb-2">
                <i class="fas fa-plus-circle"></i> Agregar país</b-button> 
            </router-link>
        
            <!-- DATA TABLE-->
                <div class="table-responsive m-b-40">
                    <table class="table table-borderless table-data3">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Status</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody v-if="countries.countries.length">
                            <countryItem v-for="country in countries.countries"
                            :key="country.IdCountry"
                            :country="country"
                             >
                            </countryItem>
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
import countryItem from '@/components/geography/countryItem'
export default {
    components: {
        uarehere, countryItem
    },
    computed: {
        ...mapState(['countries'])
    },
    methods: {
        ...mapActions('countries', ['fetchCountries']),
        
    },
    mounted () {
        this.fetchCountries(this.$store.state.auth.Tokken)
    }
}
</script>