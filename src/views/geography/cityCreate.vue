<template>
<section>
    <uarehere>
        <template slot="first">Lugares </template><template slot="second">Agregar ciudad</template>
    </uarehere>
    <div class="content ml-4 mr-4 pt-5 pb-5">
        <b-alert v-if="error" show variant="danger">
            {{ errorMessage }}
        </b-alert>
        <city-form :city="city" @processCity="addCity"></city-form>
    </div>
</section>
</template>

<script>
import {mapActions, mapState, mapMutations} from 'vuex'
import cityForm from '@/components/geography/cityForm'
import uarehere from '@/components/navigations/uarehere'
export default {
    components: {
        cityForm,
        uarehere
    },
    computed: {
        ...mapState('cities', ['error', 'errorMessage']),
        ...mapMutations('cities', ['statesDelError'])
    },
    data () {
        return {
            city: {
                IdCity: null,
                NameCity: ''
            }
        }
    },
    mounted: function () {
        if(!this.$store.state.states.selectedState.IdState){
            this.$router.push({ 'name': 'cities'});
        }
        else{this.$store.state.cities.error=false;}
    },
    methods: {
        ...mapActions({
            createCity: 'cities/addCity'
        }),
        addCity(city) {
            if(this.$store.state.states.selectedState.IdState){
                this.createCity([city, this.$store.state.states.selectedState.IdState, this.$store.state.auth.Tokken]).then((r) => {
                    this.$router.push({ 'name': 'cities'})
                })
            }else{
                this.$router.push({ 'name': 'cities'})
            }
        }
    }
}
</script>