<template>
<section>
    <uarehere>
        <template slot="first">Lugares </template><template slot="second">Agregar departamento</template>
    </uarehere>
    <div class="content ml-4 mr-4 pt-5 pb-5">
        <b-alert v-if="error" show variant="danger">
            {{ errorMessage }}
        </b-alert>
        <state-form :state="state" @processState="addState"></state-form>
    </div>
</section>
</template>

<script>
import {mapActions, mapState, mapMutations} from 'vuex'
import stateForm from '@/components/geography/stateForm'
import uarehere from '@/components/navigations/uarehere'
export default {
    components: {
        stateForm,
        uarehere
    },
    computed: {
        ...mapState('states', ['error', 'errorMessage']),
        ...mapMutations('states', ['statesDelError'])
    },
    data () {
        return {
            state: {
                IdState: null,
                NameState: ''
            }
        }
    },
    mounted: function () {
        if(!this.$store.state.countries.selectedCountry.IdCountry){
            this.$router.push({ 'name': 'states'});
        }
        else{this.$store.state.states.error=false;}
    },
    methods: {
        ...mapActions({
            createState: 'states/addState'
        }),
        addState (state) {
            if(this.$store.state.countries.selectedCountry.IdCountry){
                this.createState([state, this.$store.state.countries.selectedCountry.IdCountry, this.$store.state.auth.Tokken]).then((r) => {
                    this.$router.push({ 'name': 'states'})
                })
            }else{
                this.$router.push({ 'name': 'states'})
            }
        }
    }
}
</script>