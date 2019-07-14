<template>
<section>
    <uarehere>
        <template slot="first">Vendedores </template><template slot="second">Agregar vendedor</template>
    </uarehere>
    <div class="content ml-4 mr-4 pt-5 pb-5">
        <b-alert v-if="error" show variant="danger">
            {{ errorMessage }}
        </b-alert>
        <seller-form :seller="seller" @processSeller="addSeller"></seller-form>
    </div>
</section>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import sellerForm from '@/components/sellers/sellerForm'
import uarehere from '@/components/navigations/uarehere'
export default {
    components: {
        sellerForm,
        uarehere
    },
    computed: {
        ...mapState('sellers', ['error', 'errorMessage'])
    },
    data () {
        return {
            seller: {
                NameSeller: '', 
                IdentificationNumberSeller: '', 
                IdCity: null, 
                PhoneSeller: '', 
                TimeWorkedSeller: null, 
                EmailSeller: '', 
                Password: '', 
            }
        }
    },
    methods: {
        ...mapActions({
            createSeller: 'sellers/addSeller'
        }),
        addSeller (seller) {
            this.createSeller([seller, this.$store.state.auth.Tokken]).then((r) => {
                this.$router.push({ 'name': 'sellers'})
            })
        }
    }
}
</script>