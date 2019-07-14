<template>
<tr >
    <td>{{ seller.IdSeller}}</td>
    <td>{{ seller.NameSeller }}</td>
    <td>{{ seller.IdentificationNumberSeller }}</td>
    <td>{{ seller.IdCity }}</td>
    <td v-show="seller.StatusSeller == 1" class="process">Habilitado</td>
    <td v-show="seller.StatusSeller == 0" class="mute">Deshabilitado</td>
    <td>
        <div class="table-data-feature">
            <a
                @click="goToUpdateSeller" 
                class="item" 
                v-b-tooltip.hover title="Editar">
                <i class="zmdi zmdi-edit"></i>
            </a>
            <a class="item" @click="updateSellerStatus" v-b-tooltip.hover title="des/habilitar">
                <i v-if="seller.StatusSeller == 1" class="fa fa-times"></i>
                <i v-else-if="seller.StatusSeller == 0" class="fa fa-check"></i>
            </a>
        </div>
    </td>
</tr>
</template>
<script>
    import {mapMutations, mapActions} from 'vuex'
    export default {
      props: {
        seller: {
          type: Object,
          required: true
        }
      },
      methods: {
        ...mapActions('sellers', ['updateSellersStatus']),
        ...mapMutations('sellers', ['setSeller']),
        goToUpdateSeller() {
            this.setSeller(this.seller)
            this.$router.push({
            name: 'sellerUpdate',
            params: {IdSeller: this.seller.IdSeller}
          })
        },
        updateSellerStatus () {
            this.updateSellersStatus([this.seller, this.$store.state.auth.Tokken])
        }
      },
    mounted () {
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        })
    }
    }
</script>