<template>
<section >
    <uarehere>
        <template slot="first">Citas </template><template slot="second">Editar cita</template>
    </uarehere>
    <div class="content ml-4 mr-4 pt-5 pb-5">
        <div v-if="selectedDate">
            <date-form 
                :date="selectedDate" 
                @processDate="updateDate"
                dateSubmit="Actualizar cita"
                showPass='false'
            ></date-form>
        </div>
    </div>
</section >
</template>

<script>
  import {mapActions, mapState} from 'vuex'
  import dateForm from '@/components/dates/dateForm'
  import uarehere from '@/components/navigations/uarehere'
  export default {
    components: {
      dateForm, 
      uarehere
    },
    computed: {
      ...mapState('dates', ['selectedDate'])
    },
    methods: {
      ...mapActions({
        updateselectedDate: 'dates/updateDate'
      }),
      updateDate(date) {
        this.updateselectedDate([date, this.$store.state.auth.Tokken]).then((r) => {
          this.$router.push({ 'name': 'dates'})
        })
      },
      checkSelected(){
          if(!this.$store.state.dates.selectedDate.IdDateVisitClient){
              this.$router.push({ 'name': 'dates'})
          }
      }
    },
    mounted() {
        this.checkSelected();
    }
  }
</script>