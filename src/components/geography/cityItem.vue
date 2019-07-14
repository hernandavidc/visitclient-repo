<template>
<tr > 
    <td>{{ city.IdCity }}</td>
    <td>{{ city.NameCity }}</td>
    <td v-show="city.StatusCity == 1" class="process">Habilitado</td>
    <td v-show="city.StatusCity == 0" class="mute">Deshabilitado</td>
    <td>
        <div class="table-data-feature">
            <a
                @click="goToUpdateCity" 
                class="item" 
                v-b-tooltip.hover title="Editar">
                <i class="zmdi zmdi-edit"></i>
            </a>
            <a class="item" @click="updateCityStatus" v-b-tooltip.hover title="des/habilitar">
                <i v-if="city.StatusCity == 1" class="fa fa-times"></i>
                <i v-else-if="city.StatusCity == 0" class="fa fa-check"></i>
            </a>
        </div>
    </td>
</tr>
</template>
<script>
    import {mapMutations, mapActions} from 'vuex'
    export default {
      props: {
        city: {
          type: Object,
          required: true
        }
      },
      methods: {
        ...mapActions('cities', ['updateCitiesStatus']),
        ...mapMutations('cities', ['setCity']),
        goToUpdateCity () {
            this.setCity(this.city)
            this.$router.push({
            name: 'cityUpdate',
            params: {IdCity: this.city.IdCity}
          })
        },
        updateCityStatus () {
            var tokken = this.$store.state.auth.Tokken;
            var selectedState = this.$store.state.states.selectedState.IdState;
            this.updateCitiesStatus([this.city,selectedState,tokken])
        }
      }
    }
</script>