<template>
<section >
    <uarehere>
        <template slot="first">Lugares </template><template slot="second">Editar país</template>
    </uarehere>
    <div class="statistic pl-3 pr-3 pb-4">
        <div v-if="selectedCountry">
            <country-form 
                :country="selectedCountry" 
                @processCountry="updateCountry"
                countrySubmit="Actualizar país"
            ></country-form>
        </div>
    </div>
</section >
</template>

<script>
  import {mapActions, mapState} from 'vuex'
  import countryForm from '@/components/geography/countryForm'
  import uarehere from '@/components/navigations/uarehere'
  export default {
    components: {
      countryForm, uarehere
    },
    computed: {
      ...mapState('countries', ['selectedCountry'])
    },
    methods: {
      ...mapActions({
        updateSelectedCountry: 'countries/updateCountry'
      }),
      updateCountry (country) {
        this.updateSelectedCountry([country, this.$store.state.auth.Tokken]).then((r) => {
          this.$router.push({ 'name': 'countries'})
        })
      },
      checkSelected(){
          if(!this.$store.state.countries.selectedCountry.IdCountry){
              this.$router.push({ 'name': 'countries'})
          }
      }
    },
    mounted() {
        this.checkSelected();
    }
  }
</script>