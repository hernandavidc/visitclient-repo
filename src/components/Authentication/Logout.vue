<template>
</template>
<script>
import {mapMutations} from 'vuex'

  export default {
    data (){
      return {
      }
    },
    methods: {
        ...mapMutations('auth', ['logout']),
        _logout () {
            this.logout()
            this.$router.push('/login')
        }
    },
    created:function(){
      this._logout();
    }
  }
</script>