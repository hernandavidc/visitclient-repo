<template>
<section>
    <uarehere>
        <template slot="first">Citas </template><template slot="second">Agregar tipo de cita</template>
    </uarehere>
    <div class="content ml-4 mr-4 pt-5 pb-5">
        <b-alert v-if="error" show variant="danger">
            {{ errorMessage }}
        </b-alert>
        <type-intention-form :typeIntention="typeIntention" @processTypeIntention="addTypeIntention"></type-intention-form>
    </div>
</section>
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
        ...mapState('dates', ['error', 'errorMessage'])
    },
    data () {
        return {
            typeIntention: {
                IdTypeIntention: '', 
                NameTypeIntention: ''
            }
        }
    },
    methods: {
        ...mapActions({
            createTypeIntention: 'dates/addTypeIntention'
        }),
        addTypeIntention (typeIntention) {
            this.createTypeIntention([typeIntention, this.$store.state.auth.Tokken]).then((r) => {
                this.$router.push({ 'name': 'typesIntention'})
            })
        }
    }
}
</script>