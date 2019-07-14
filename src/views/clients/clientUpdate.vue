<template>
<section >
    <uarehere>
        <template slot="first">Clientes </template><template slot="second">Editar cliente</template>
    </uarehere>
    <div class="statistic pl-3 pr-3 pb-4">
        <div v-if="selectedClient">
            <client-form 
                :client="selectedClient" 
                @processClient="updateClient"
                clientSubmit="Actualizar cliente"
            ></client-form>
        </div>
    </div>
</section >
</template>

<script>
  import {mapActions, mapState} from 'vuex'
  import clientForm from '@/components/clients/clientForm'
  import uarehere from '@/components/navigations/uarehere'
  export default {
    components: {
      clientForm, 
      uarehere
    },
    computed: {
      ...mapState('clients', ['selectedClient'])
    },
    methods: {
      ...mapActions({
        updateselectedClient: 'clients/updateClient'
      }),
      updateClient(client) {
        this.updateselectedClient([client, this.$store.state.auth.Tokken]).then((r) => {
          this.$router.push({ 'name': 'clients'})
        })
      },
      checkSelected(){
          if(!this.$store.state.clients.selectedClient){
              this.$router.push({ 'name': 'clients'})
          }
      }
    },
    mounted() {
        this.checkSelected();
    }
  }
</script>