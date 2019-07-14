<template>
<section >
    <uarehere>
        <template slot="first">Citas </template><template slot="second"> tipos de citas</template>
    </uarehere>
    <div class="statistic">
        <div class="container-fluid">   
        <div class="row ">
            <div class="col-md-12">
            <router-link :to="{ 'name': 'addTypeIntention'}" class="float-right" v-b-tooltip.hover title="Agregar"> 
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
                        <tbody v-if="dates.typesIntention.length">
                            <typeIntentionItem v-for="typeIntention in dates.typesIntention"
                            :key="typeIntention.IdTypeIntention"
                            :typeIntention="typeIntention"
                             >
                            </typeIntentionItem>
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
import typeIntentionItem from '@/components/dates/types/typeIntentionItem'
export default {
    components: {
        uarehere, typeIntentionItem
    },
    computed: {
        ...mapState(['dates'])
    },
    methods: {
        ...mapActions('dates', ['fetchTypesIntention']),
        
    },
    mounted () {
        this.fetchTypesIntention(this.$store.state.auth.Tokken)
    }
}
</script>