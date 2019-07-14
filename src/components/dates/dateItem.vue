<template>
<tr >
    <td>{{ date.IdDateVisitClient}}</td>
    <td>{{ date.IdClient }}</td>
    <td>{{ date.IdSeller }}</td>
    <td>{{ date.DateVisitClient }}</td>
    <td>{{ date.AddressVisit }}</td>
    <td v-if="date.StatusDateVisitClient == 0" class="process">Pediente</td>
    <td v-else-if="date.StatusDateVisitClient == 1" class="primary">Aceptada</td>
    <td v-else-if="date.StatusDateVisitClient == 2" class="denied">Rechazada</td>
    <td v-else-if="date.StatusDateVisitClient == 3" class="mute">Deshablitidada</td>
    <td>
        <div class="table-data-feature">
            <a
                @click="goToUpdateDate" 
                class="item" 
                v-b-tooltip.hover title="Editar">
                <i class="zmdi zmdi-edit"></i>
            </a>
            <a class="item" @click="updateDateStatus(0)" v-b-tooltip.hover title="Pediente">
                <i class="fa fa-clock"></i>
            </a>
            <a class="item" @click="updateDateStatus(1)" v-b-tooltip.hover title="Aceptada">
                <i class="fa fa-check"></i>
            </a>
            <a class="item" @click="updateDateStatus(2)" v-b-tooltip.hover title="Rechazada">
                <i class="fa fa-calendar-times"></i>
            </a>
            <a class="item" @click="updateDateStatus(3)" v-b-tooltip.hover title="des/habilitar">
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
        date: {
          type: Object,
          required: true
        }
      },
      methods: {
        ...mapActions('dates', ['updateDatesStatus']),
        ...mapMutations('dates', ['setDate']),
        goToUpdateDate() {
            this.setDate(this.date)
            this.$router.push({
            name: 'dateUpdate',
            params: {IdDateVisitClient: this.date.IdDateVisitClient}
          })
        },
        updateDateStatus(op) {
            this.updateDatesStatus([this.date,op, this.$store.state.auth.Tokken])
        }
      },
    mounted () {
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        })
    }
    }
</script>