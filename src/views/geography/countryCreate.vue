<template>
<section>
    <uarehere>
        <template slot="first">Lugares </template><template slot="second">Agregar país</template>
    </uarehere>
    <div class="content ml-4 mr-4 pt-5 pb-5">
        <b-alert v-if="error" show variant="danger">
            {{ errorMessage }}
        </b-alert>
        <country-form :country="country" @processCountry="addCountry"></country-form>
    </div>
</section>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import countryForm from '@/components/geography/countryForm'
import uarehere from '@/components/navigations/uarehere'
export default {
    components: {
        countryForm,
        uarehere
    },
    computed: {
        ...mapState('countries', ['error', 'errorMessage'])
    },
    data () {
        return {
            country: {
                IdCountry: null,
                NameCountry: ''
            }
        }
    },
    methods: {
        ...mapActions({
            createCountry: 'countries/addCountry'
        }),
        addCountry (country) {
            this.createCountry([country, this.$store.state.auth.Tokken]).then((r) => {
                this.$router.push({ 'name': 'countries'})
            })
        }
    }
}
</script>