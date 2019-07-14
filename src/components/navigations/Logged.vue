<template>
<div>
    <div class="account2">
        <div class="image img-cir img-120">
            <img src="https://png.pngtree.com/element_our/png_detail/20181206/users-vector-icon-png_260862.jpg" alt="John Doe" />
        </div>
        <h4 class="name">john doe</h4>
        <a href="/" @click="logout">Salir</a>
    </div>
    <nav class="navbar-sidebar2">
        <ul class="list-unstyled navbar__list">
            <li>
                <router-link exact to="/" active-class="active"><i class="fas fa-tachometer-alt"></i>inicio</router-link>
            </li>
            <li class="has-sub">
                <a class="js-arrow">
                    <i class="fa fa-globe" aria-hidden="true"></i>Lugares
                    <span class="arrow">
                        <i class="fas fa-angle-down"></i>
                    </span>
                </a>
                <ul class="list-unstyled navbar__sub-list js-sub-list">
                    <li>
                        <router-link exact :to="{ 'name': 'countries'}" active-class="active">
                            <i class="fa fa-map-marker-alt" aria-hidden="true"></i>Países</router-link>
                    </li>
                    <li>
                        <router-link exact :to="{ 'name': 'states'}" active-class="active">
                            <i class="fa fa-map-marker-alt" aria-hidden="true"></i>Departamentos</router-link>
                    </li>
                    <li>
                        <router-link exact :to="{ 'name': 'cities'}" active-class="active">
                            <i class="fa fa-map-marker-alt" aria-hidden="true"></i>Ciudades</router-link>
                    </li>
                </ul>
            </li>
            <li class="has-sub">
                <a class="js-arrow" href="#">
                            <i class="fas fa-users"></i>Clientes
                    <span class="arrow">
                        <i class="fas fa-angle-down"></i>
                    </span>
                </a>
                <ul class="list-unstyled navbar__sub-list js-sub-list">
                    <li>
                         <router-link exact :to="{ 'name': 'addClient'}" active-class="active">
                            <i class="fas fa-user-plus"></i>Crear clientes</router-link>
                    </li>
                    <li>
                         <router-link exact :to="{ 'name': 'clients'}" active-class="active">
                            <i class="fas fa-users"></i>Ver clientes</router-link>
                    </li>
                    <li>
                        <router-link exact :to="{ 'name': 'typesClient'}" active-class="active">
                            <i class="fa fa-calendar-check-o"></i>Tipos clientes</router-link>
                    </li>
                </ul>
            </li>
            <li class="has-sub">
                <a class="js-arrow" href="#">
                    <i class="fa fa-id-card"></i>Vendedores
                    <span class="arrow">
                        <i class="fas fa-angle-down"></i>
                    </span>
                </a>
                <ul class="list-unstyled navbar__sub-list js-sub-list">
                    <li>
                        <router-link exact :to="{ 'name': 'addSeller'}" active-class="active">
                            <i class="fas fa-user-plus"></i>Crear vendedor</router-link>
                    </li>
                    <li>
                        <router-link exact :to="{ 'name': 'sellers'}" active-class="active">
                            <i class="fas fa-users"></i>Ver vendedores</router-link>
                    </li>
                </ul>
            </li>
            <li class="has-sub">
                <a class="js-arrow" href="#">
                    <i class="fas fa-calendar-alt"></i>Citas
                    <span class="arrow">
                        <i class="fas fa-angle-down"></i>
                    </span>
                </a>
                <ul class="list-unstyled navbar__sub-list js-sub-list">
                    <li>
                        <router-link exact :to="{ 'name': 'addDate'}" active-class="active">
                            <i class="fa fa-calendar-plus-o" aria-hidden="true"></i>Crear cita</router-link>
                    </li>
                    <li>
                        <router-link exact :to="{ 'name': 'dates'}" active-class="active">
                            <i class="fas fa-calendar-alt"></i>Ver citas</router-link>
                    </li>
                    
                    <li>
                        <router-link exact :to="{ 'name': 'typesIntention'}" active-class="active">
                            <i class="fa fa-calendar-check-o"></i>Tipos citas</router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</div>
</template>
<script>
    import {mapMutations} from 'vuex'
    export default {
        methods: {
            ...mapMutations('auth', ['logout']),
            _logout () {
                this.logout()
                this.$router.push('/login')
            }
        },
        mounted: function(){
            try {
                var jscr1 = $('.js-scrollbar1');
                if(jscr1[0]) {
                const ps1 = new PerfectScrollbar('.js-scrollbar1');      
                }

                var jscr2 = $('.js-scrollbar2');
                if (jscr2[0]) {
                const ps2 = new PerfectScrollbar('.js-scrollbar2');

                }

            } catch (error) {
                console.log(error);
            }
        }
    }
</script>