<template>
<section>
    <uarehere>
        <template slot="first">Clientes </template><template slot="second">Agregar cliente</template>
    </uarehere>
    <div class="content ml-4 mr-4 pt-5 pb-5">
        <b-alert v-if="error" show variant="danger">
            {{ errorMessage }}
        </b-alert>
        <client-form :client="client" @processClient="addClient"></client-form>
    </div>
</section>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import clientForm from '@/components/clients/clientForm'
import uarehere from '@/components/navigations/uarehere'
export default {
    components: {
        clientForm,
        uarehere
    },
    computed: {
        ...mapState('clients', ['error', 'errorMessage'])
    },
    data () {
        return {
            client: {
                NameClient: '', 
                IdentificationNumberClient: '', 
                AddressClient: '', 
                NameContactClient: '', 
                EmailClient: '', 
                IdCity: null, 
                PhoneClient: '', 
                IdTypeClient: null, 
                LatitudeClient: '', 
                LongitudeClient: ''
            }
        }
    },
    methods: {
        ...mapActions({
            createClient: 'clients/addClient'
        }),
        addClient (client) {
            this.createClient([client, this.$store.state.auth.Tokken]).then((r) => {
                this.$router.push({ 'name': 'clients'})
            })
        }
    }
}
</script>