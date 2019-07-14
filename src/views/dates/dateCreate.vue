<template>
<section>
    <uarehere>
        <template slot="first">Citas </template><template slot="second">Agregar cita</template>
    </uarehere>
    <div class="content ml-4 mr-4 pt-5 pb-5">
        <b-alert v-if="error" show variant="danger">
            {{ errorMessage }}
        </b-alert>
        <date-form :date="date" @processDate="addDate"></date-form>
    </div>
</section>
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
        ...mapState('dates', ['error', 'errorMessage'])
    },
    data () {
        return {
            date: { 
                DateVisitClient: "Y/m/d h:i:s", 
                IdSeller: null,  
                IdClient: null, 
                ObservationVisitClient: "",
                IdTypeIntention: null
            }
        }
    },
    methods: {
        ...mapActions({
            createDate: 'dates/addDate'
        }),
        addDate (date) {
            this.createDate([date, this.$store.state.auth.Tokken]).then((r) => {
                this.$router.push({ 'name': 'dates'})
            })
        }
    }
}
</script>