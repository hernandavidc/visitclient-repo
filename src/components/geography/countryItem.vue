<template>
<tr >
    <td>{{ country.IdCountry }}</td>
    <td>{{ country.NameCountry }}</td>
    <td v-show="country.StatusCountry == 1" class="process">Habilitado</td>
    <td v-show="country.StatusCountry == 0" class="mute">Deshabilitado</td>
    <td>
        <div class="table-data-feature">
            <a class="item" 
                @click="goToStates" 
                v-b-tooltip.hover title="Estados/Departamentos">
                <i class="zmdi zmdi-mail-send"></i>
            </a>
            <a
                @click="goToUpdateCountry" 
                class="item" 
                v-b-tooltip.hover title="Editar">
                <i class="zmdi zmdi-edit"></i>
            </a>
            <a class="item" @click="updateCountryStatus" v-b-tooltip.hover title="des/habilitar">
                <i v-if="country.StatusCountry == 1" class="fa fa-times"></i>
                <i v-else-if="country.StatusCountry == 0" class="fa fa-check"></i>
            </a>
        </div>
    </td>
</tr>
</template>
<script>
    import {mapMutations, mapActions} from 'vuex'
    export default {
      props: {
        country: {
          type: Object,
          required: true
        }
      },
      methods: {
        ...mapActions('countries', ['updateCountriesStatus']),
        ...mapMutations('countries', ['setCountry']),
        goToUpdateCountry () {
            this.setCountry(this.country)
            this.$router.push({
            name: 'countryUpdate',
            params: {IdCountry: this.country.IdCountry}
          })
        },
        goToStates () {
            this.setCountry(this.country)
            this.$router.push({name: 'states'})
        },
        updateCountryStatus () {
            this.updateCountriesStatus([this.country, this.$store.state.auth.Tokken])
        }
      },
    mounted () {
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        })
    }
    }
</script>