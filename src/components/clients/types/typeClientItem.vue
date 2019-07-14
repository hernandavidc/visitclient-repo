<template>
<tr >
    <td>{{ typeClient.IdTypeClient}}</td>
    <td>{{ typeClient.NameTypeClient }}</td>
    <td v-show="typeClient.StatusTypeClient == 1" class="process">Habilitado</td>
    <td v-show="typeClient.StatusTypeClient == 0" class="mute">Deshabilitado</td>
    <td>
        <div class="table-data-feature">
            <a
                @click="goToUpdateTypesClient" 
                class="item" 
                v-b-tooltip.hover title="Editar">
                <i class="zmdi zmdi-edit"></i>
            </a>
            <a class="item" @click="updateTypeClientStatus" v-b-tooltip.hover title="des/habilitar">
                <i class="fa fa-times"></i>
            </a>
        </div>
    </td>
</tr>
</template>
<script>
    import {mapMutations, mapActions} from 'vuex'
    export default {
      props: {
        typeClient: {
          type: Object,
          required: true
        }
      },
      methods: {
        ...mapActions('clients', ['updateTypesClientStatus']),
        ...mapMutations('clients', ['setTypeClient']),
        goToUpdateTypesClient() {
            this.setTypeClient(this.typeClient)
            this.$router.push({
            name: 'typeClientUpdate',
            params: {IdTypeClient: this.typeClient.IdTypeClient}
          })
        },
        updateTypeClientStatus () {
            this.updateTypesClientStatus([this.typeClient, this.$store.state.auth.Tokken])
        }
      },
    mounted () {
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        })
    }
    }
</script>