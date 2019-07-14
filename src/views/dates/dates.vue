<template>
<section >
    <uarehere>
        <template slot="first">Citas </template>
    </uarehere>
    <div class="statistic">
        <div class="container-fluid">   
        <div class="row ">
            <div class="col-md-12">
                <b-alert v-if="dates.error" show variant="danger">{{dates.errorMessage}}</b-alert>
            <div class="col-md-6 col-sm-6 mb-2">
                <b-input-group>
                    <b-input-group-text slot="prepend">Vendedores por pagina</b-input-group-text>
                    <b-form-input v-model="perPage" placeholder="edit me" type="number"></b-form-input>
                </b-input-group>
            </div>
            <!-- <router-link :to="{ 'name': 'addCountry'}" class="float-right" v-b-tooltip.hover title="Agregar"> 
                <b-button variant="primary" class="mb-2">
                <i class="fas fa-plus-circle"></i> Agregar país</b-button> 
            </router-link>
        
             DATA TABLE-->
                <div class="table-responsive centered m-b-40">
                    <paginate 
                        name="dates"
                        :list="dates.dates"
                        :per="perPage"
                        >
                    <table class="table table-borderless table-data3">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Id cliente</th>
                                <th>Id vendedor</th>
                                <th>Fecha</th>
                                <th>Dirección</th>
                                <th>Status</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody v-if="dates.dates.length">
                            <dateItem v-for="date in paginated('dates')"
                            :key="date.IdDateVisitClient"
                            :date="date"
                            >
                            </dateItem>
                        </tbody>
                                <b-alert v-else show variant="info">No hay vendedores que mostrar</b-alert>
                    </table>
                    </paginate>
                </div>
        
                <paginate-links
                    for="dates"
                    :classes="{
                        'ul': 'pagination',
                        'li': 'page-item',
                        'li > a': 'page-link'
                    }"
                ></paginate-links>
            </div>
        </div>
        </div>
    </div>
</section>
</template>
<script>
import {mapActions, mapState, mapMutations} from 'vuex'
import uarehere from '@/components/navigations/uarehere'
import dateItem from '@/components/dates/dateItem'
export default {
    components: {
        uarehere, 
        dateItem
    },
    computed: {
        ...mapState(['dates'])
    },
    methods: {
        ...mapActions('dates', ['fetchDates']),
        
    },
    mounted () {
        this.fetchDates(this.$store.state.auth.Tokken)
    },
    data () {
        return {
            paginate: ['dates'],
            perPage: 15
        }
    }
}
</script>