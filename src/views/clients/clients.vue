<template>
<section >
    <uarehere>
        <template slot="first">Clientes </template>
    </uarehere>
    <div class="statistic">
        <div class="container-fluid">   
        <div class="row ">
            <div class="col-md-12">
            <div class="col-md-6 col-sm-6 mb-2">
                <b-input-group>
                    <b-input-group-text slot="prepend">Cantidad clientes por pagina</b-input-group-text>
                    <b-form-input v-model="perPage" placeholder="edit me" type="number"></b-form-input>
                </b-input-group>
            </div>
            <!-- <router-link :to="{ 'name': 'addCountry'}" class="float-right" v-b-tooltip.hover title="Agregar"> 
                <b-button variant="primary" class="mb-2">
                <i class="fas fa-plus-circle"></i> Agregar país</b-button> 
            </router-link>
        
             DATA TABLE-->
                <div class="table-responsive m-b-40">
                    <paginate 
                        name="clients"
                        :list="clients.clients"
                        :per="perPage">
                    <table class="table table-borderless table-data3">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Identificación</th>
                                <th>Id tipo</th>
                                <th>Status</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody v-if="clients.clients.length" style="max-height:100%;">
                            <clientItem v-for="client in paginated('clients')"
                            :key="client.IdClient"
                            :client="client"
                            >
                            </clientItem>
                        </tbody>
                        <b-alert v-else show variant="info">No hay clientes que mostrar</b-alert>
                    
                    </table>
                    </paginate>
                </div>
        
                <paginate-links
                    for="clients"
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
import clientItem from '@/components/clients/clientItem'
export default {
    components: {
        uarehere, 
        clientItem
    },
    computed: {
        ...mapState(['clients'])
    },
    methods: {
        ...mapActions('clients', ['fetchClients']),
        
    },
    mounted () {
        this.fetchClients(this.$store.state.auth.Tokken)
    },
    data () {
        return {
            paginate: ['clients'],
            perPage: 15
        }
    }
}
</script>