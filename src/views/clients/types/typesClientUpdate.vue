<template>
<section >
    <uarehere>
        <template slot="first">Clientes </template><template slot="second">Editar tipo cliente</template>
    </uarehere>
    <div class="statistic pl-3 pr-3 pb-4">
        <div v-if="selectedTypeClient">
            <type-client-form 
                :typeClient="selectedTypeClient" 
                @processTypeClient="updateTypeClient"
                typeClientSubmit="Actualizar tipo de cliente"
            ></type-client-form>
        </div>
    </div>
</section >
</template>

<script>
  import {mapActions, mapState} from 'vuex'
  import typeClientForm from '@/components/clients/types/typeClientForm'
  import uarehere from '@/components/navigations/uarehere'
  export default {
    components: {
      typeClientForm, 
      uarehere
    },
    computed: {
      ...mapState('clients', ['selectedTypeClient'])
    },
    methods: {
      ...mapActions({
        updateselectedTypeClient: 'clients/updateTypeClient'
      }),
      updateTypeClient(selectedTypeClient) {
        console.log("click")
        this.updateselectedTypeClient([selectedTypeClient, this.$store.state.auth.Tokken]).then((r) => {
          this.$router.push({ 'name': 'typesClient'})
        })
      },
      checkSelected(){
          if(!this.$store.state.clients.selectedTypeClient.IdTypeClient){
              this.$router.push({ 'name': 'typesClient'})
          }
      }
    },
    mounted() {
        this.checkSelected();
    }
  }
</script>