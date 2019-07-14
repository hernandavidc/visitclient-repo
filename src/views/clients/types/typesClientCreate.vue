<template>
<section>
    <uarehere>
        <template slot="first">Clientes </template><template slot="second">Agregar tipo de cliente</template>
    </uarehere>
    <div class="content ml-4 mr-4 pt-5 pb-5">
        <b-alert v-if="error" show variant="danger">
            {{ errorMessage }}
        </b-alert>
        <type-client-form :typeClient="typeClient" @processTypeClient="addTypeClient"></type-client-form>
    </div>
</section>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import typeClientForm from '@/components/clients/types/typeClientForm'
import uarehere from '@/components/navigations/uarehere'
export default {
    components: {
        typeClientForm,
        uarehere
    },
    computed: {
        ...mapState('clients', ['error', 'errorMessage'])
    },
    data () {
        return {
            typeClient: {
                IdTypeClient: '', 
                NameTypeClient: ''
            }
        }
    },
    methods: {
        ...mapActions({
            createTypeClient: 'clients/addTypeClient'
        }),
        addTypeClient (typeClient) {
            this.createTypeClient([typeClient, this.$store.state.auth.Tokken]).then((r) => {
                this.$router.push({ 'name': 'typesClient'})
            })
        }
    }
}
</script>