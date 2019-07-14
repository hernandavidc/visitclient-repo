<template>
<tr >
    <td>{{ client.IdClient}}</td>
    <td>{{ client.NameClient }}</td>
    <td>{{ client.IdentificationNumberClient }}</td>
    <td>{{ client.IdTypeClient }}</td>
    <td v-show="client.StatusClient == 1" class="process">Habilitado</td>
    <td v-show="client.StatusClient == 0" class="mute">Deshabilitado</td>
    <td>
        <div class="table-data-feature">
            <a
                @click="goToUpdateClient" 
                class="item" 
                v-b-tooltip.hover title="Editar">
                <i class="zmdi zmdi-edit"></i>
            </a>
            <a class="item" @click="updateClientStatus" v-b-tooltip.hover title="des/habilitar">
                <i v-if="client.StatusClient == 1" class="fa fa-times"></i>
                <i v-else-if="client.StatusClient == 0" class="fa fa-check"></i>
            </a>
        </div>
    </td>
</tr>
</template>
<script>
    import {mapMutations, mapActions} from 'vuex'
    export default {
      props: {
        client: {
          type: Object,
          required: true
        }
      },
      methods: {
        ...mapActions('clients', ['updateClientsStatus']),
        ...mapMutations('clients', ['setClient']),
        goToUpdateClient() {
            this.setClient(this.client)
            this.$router.push({
            name: 'clientUpdate',
            params: {IdClient: this.client.IdClient}
          })
        },
        updateClientStatus () {
            this.updateClientsStatus([this.client, this.$store.state.auth.Tokken])
        }
      },
    mounted () {
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        })
    }
    }
</script>