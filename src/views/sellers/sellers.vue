<template>
<section >
    <uarehere>
        <template slot="first">Vendedores </template>
    </uarehere>
    <div class="statistic">
        <div class="container-fluid">   
        <div class="row ">
            <div class="col-md-12">
                <b-alert v-if="sellers.error" show variant="danger">{{sellers.errorMessage}}</b-alert>
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
                        name="sellers"
                        :list="sellers.sellers"
                        :per="perPage"
                        >
                    <table class="table table-borderless table-data3">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Identificación</th>
                                <th>Id ciudad</th>
                                <th>Status</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody v-if="sellers.sellers.length">
                            <sellerItem v-for="seller in paginated('sellers')"
                            :key="seller.IdSeller"
                            :seller="seller"
                            >
                            </sellerItem>
                        </tbody>
                                <b-alert v-else show variant="info">No hay vendedores que mostrar</b-alert>
                    </table>
                    </paginate>
                </div>
        
                <paginate-links
                    for="sellers"
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
import sellerItem from '@/components/sellers/sellerItem'
export default {
    components: {
        uarehere, 
        sellerItem
    },
    computed: {
        ...mapState(['sellers'])
    },
    methods: {
        ...mapActions('sellers', ['fetchSellers']),
        
    },
    mounted () {
        this.fetchSellers(this.$store.state.auth.Tokken)
    },
    data () {
        return {
            paginate: ['sellers'],
            perPage: 15
        }
    }
}
</script>