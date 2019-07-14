<template>
<tr > 
    <td>{{ state.IdState }}</td>
    <td>{{ state.NameState }}</td>
    <td v-show="state.StatusState == 1" class="process">Habilitado</td>
    <td v-show="state.StatusState == 0" class="mute">Deshabilitado</td>
    <td>
        <div class="table-data-feature">
            <a class="item" 
                @click="goToCities" 
                v-b-tooltip.hover title="Ciudades">
                <i class="zmdi zmdi-mail-send"></i>
            </a>
            <a
                @click="goToUpdateState" 
                class="item" 
                v-b-tooltip.hover title="Editar">
                <i class="zmdi zmdi-edit"></i>
            </a>
            <a class="item" @click="updateStateStatus" v-b-tooltip.hover title="des/habilitar">
                <i v-if="state.StatusState == 1" class="fa fa-times"></i>
                <i v-else-if="state.StatusState == 0" class="fa fa-check"></i>
            </a>
        </div>
    </td>
</tr>
</template>
<script>
    import {mapMutations, mapActions} from 'vuex'
    export default {
      props: {
        state: {
          type: Object,
          required: true
        }
      },
      methods: {
        ...mapActions('states', ['updateStatesStatus']),
        ...mapMutations('states', ['setState']),
        goToUpdateState () {
            this.setState(this.state)
            this.$router.push({
            name: 'stateUpdate',
            params: {IdState: this.state.IdState}
          })
        },
        goToCities () {
            this.setState(this.state)
            this.$router.push({name: 'cities'})
        },
        updateStateStatus () {
            var tokken = this.$store.state.auth.Tokken;
            var selectedCountry = this.$store.state.countries.selectedCountry.IdCountry;
            this.updateStatesStatus([this.state,selectedCountry,tokken])
        }
      }
    }
</script>