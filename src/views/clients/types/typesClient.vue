<template>
<section >
    <uarehere>
        <template slot="first">Clientes </template><template slot="second"> tipos de cliente</template>
    </uarehere>
    <div class="statistic">
        <div class="container-fluid">   
        <div class="row ">
            <div class="col-md-12">
            <router-link :to="{ 'name': 'addTypeClient'}" class="float-right" v-b-tooltip.hover title="Agregar"> 
                <b-button variant="primary" class="mb-2">
                <i class="fas fa-plus-circle"></i> Agregar tipo</b-button> 
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
                        <tbody v-if="clients.typesClient.length">
                            <typeClientItem v-for="typeClient in clients.typesClient"
                            :key="typeClient.IdTypeClient"
                            :typeClient="typeClient"
                             >
                            </typeClientItem>
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
import typeClientItem from '@/components/clients/types/typeClientItem'
export default {
    components: {
        uarehere, typeClientItem
    },
    computed: {
        ...mapState(['clients'])
    },
    methods: {
        ...mapActions('clients', ['fetchTypesClient']),
        
    },
    mounted () {
        this.fetchTypesClient(this.$store.state.auth.Tokken)
    }
}
</script>