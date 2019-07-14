<template>
<section >
    <uarehere>
        <template slot="first">Vendedores </template><template slot="second">Editar vendedor</template>
    </uarehere>
    <div class="statistic pl-3 pr-3 pb-4">
        <div v-if="selectedSeller">
            <seller-form 
                :seller="selectedSeller" 
                @processSeller="updateSeller"
                sellerSubmit="Actualizar vendedor"
                showPass='false'
            ></seller-form>
        </div>
    </div>
</section >
</template>

<script>
  import {mapActions, mapState} from 'vuex'
  import sellerForm from '@/components/sellers/sellerForm'
  import uarehere from '@/components/navigations/uarehere'
  export default {
    components: {
      sellerForm, 
      uarehere
    },
    computed: {
      ...mapState('sellers', ['selectedSeller'])
    },
    methods: {
      ...mapActions({
        updateselectedSeller: 'sellers/updateSeller'
      }),
      updateSeller(seller) {
        this.updateselectedSeller([seller, this.$store.state.auth.Tokken]).then((r) => {
          this.$router.push({ 'name': 'sellers'})
        })
      },
      checkSelected(){
          if(!this.$store.state.sellers.selectedSeller.IdSeller){
              this.$router.push({ 'name': 'sellers'})
          }
      }
    },
    mounted() {
        this.checkSelected();
    }
  }
</script>