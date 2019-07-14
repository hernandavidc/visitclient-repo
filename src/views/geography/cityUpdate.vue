<template>
<section>
    <uarehere>
        <template slot="first">Lugares </template><template slot="second">Editar ciudad</template>
    </uarehere>
    <div class="statistic pl-3 pr-3 pb-4">
        <div v-if="selectedCity">
            <city-form 
                :city="selectedCity" 
                @processCity="updateCity"
                citySubmit="Actualizar ciudad"
            ></city-form>
        </div>
    </div>
</section>
</template>
<script>
  import {mapActions, mapState} from 'vuex'
  import cityForm from '@/components/geography/cityForm'
  import uarehere from '@/components/navigations/uarehere'
  export default {
    components: {
      cityForm, 
      uarehere
    },
    computed: {
      ...mapState('cities', ['selectedCity'])
    },
    methods: {
      ...mapActions({
        updateSelectedCity: 'cities/updateCity'
      }),
      updateCity(city) {
        this.updateSelectedCity([city, this.$store.state.auth.Tokken]).then((r) => {
          this.$router.push({ 'name': 'cities'})
        })
      },
      checkSelected(){
          if(!this.$store.state.cities.selectedCity.IdCity){
              this.$router.push({ 'name': 'cities'})
          }
      }
    },
    mounted() {
        this.checkSelected();
    }
  }
</script>