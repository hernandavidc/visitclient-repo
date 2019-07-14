<template>
<section >
    <uarehere>
        <template slot="first">Citas </template><template slot="second">Editar tipo citas</template>
    </uarehere>
    <div class="statistic pl-3 pr-3 pb-4">
        <div v-if="selectedTypeIntention">
            <type-intention-form 
                :typeIntention="selectedTypeIntention" 
                @processTypeIntention="updateTypeIntention"
                typeIntentionSubmit="Actualizar tipo de cita"
            ></type-intention-form>
        </div>
    </div>
</section >
</template>

<script>
  import {mapActions, mapState} from 'vuex'
  import typeIntentionForm from '@/components/dates/types/typeIntentionForm'
  import uarehere from '@/components/navigations/uarehere'
  export default {
    components: {
      typeIntentionForm, 
      uarehere
    },
    computed: {
      ...mapState('dates', ['selectedTypeIntention'])
    },
    methods: {
      ...mapActions({
        updateselectedTypeIntention: 'dates/updateTypeIntention'
      }),
      updateTypeIntention(selectedTypeIntention) {
        console.log("click")
        this.updateselectedTypeIntention([selectedTypeIntention, this.$store.state.auth.Tokken]).then((r) => {
          this.$router.push({ 'name': 'typesIntention'})
        })
      },
      checkSelected(){
          if(!this.$store.state.dates.selectedTypeIntention.IdTypeIntention){
              this.$router.push({ 'name': 'typesIntention'})
          }
      }
    },
    mounted() {
        this.checkSelected();
    }
  }
</script>