<template>
<tr >
    <td>{{ typeIntention.IdTypeIntention}}</td>
    <td>{{ typeIntention.NameTypeIntention }}</td>
    <td v-show="typeIntention.StatusTypeIntention == 1" class="process">Habilitado</td>
    <td v-show="typeIntention.StatusTypeIntention == 0" class="mute">Deshabilitado</td>
    <td>
        <div class="table-data-feature">
            <a
                @click="goToUpdateTypesIntention" 
                class="item" 
                v-b-tooltip.hover title="Editar">
                <i class="zmdi zmdi-edit"></i>
            </a>
            <a class="item" @click="updateTypeIntentionStatus" v-b-tooltip.hover title="des/habilitar">
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
        typeIntention: {
          type: Object,
          required: true
        }
      },
      methods: {
        ...mapActions('dates', ['updateTypesIntentionStatus']),
        ...mapMutations('dates', ['setTypeIntention']),
        goToUpdateTypesIntention() {
            this.setTypeIntention(this.typeIntention)
            this.$router.push({
            name: 'typeIntentionUpdate',
            params: {IdTypeIntention: this.typeIntention.IdTypeIntention}
          })
        },
        updateTypeIntentionStatus () {
            this.updateTypesIntentionStatus([this.typeIntention, this.$store.state.auth.Tokken])
        }
      },
    mounted () {
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        })
    }
    }
</script>