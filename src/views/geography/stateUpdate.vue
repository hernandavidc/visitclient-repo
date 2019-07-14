<template>
<section >
    <uarehere>
        <template slot="first">Lugares </template><template slot="second">Editar departamento</template>
    </uarehere>
    <div class="statistic pl-3 pr-3 pb-4">
        <div v-if="selectedState">
            <state-form 
                :state="selectedState" 
                @processState="updateState"
                stateSubmit="Actualizar departamento"
            ></state-form>
        </div>
    </div>
</section >
</template>

<script>
  import {mapActions, mapState} from 'vuex'
  import stateForm from '@/components/geography/stateForm'
  import uarehere from '@/components/navigations/uarehere'
  export default {
    components: {
      stateForm, uarehere
    },
    computed: {
      ...mapState('states', ['selectedState'])
    },
    methods: {
      ...mapActions({
        updateSelectedState: 'states/updateState'
      }),
      updateState (state) {
        this.updateSelectedState([state, this.$store.state.auth.Tokken]).then((r) => {
          this.$router.push({ 'name': 'states'})
        })
      },
      checkSelected(){
          if(!this.$store.state.states.selectedState.IdState){
              this.$router.push({ 'name': 'states'})
          }
      }
    },
    mounted() {
        this.checkSelected();
    }
  }
</script>