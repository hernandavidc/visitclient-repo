export default [
    {
    path: '/login',
    name: 'login',
    component: () => import('./views/Login.vue'),
    },
    {
    path: '/',
    name: 'inicio',
    meta: { requiresAuth: true },
    component: () => import('./views/plataforma/dashboard.vue'),
    },
    {
    path: '/paises',
    name: 'countries',
    meta: { requiresAuth: true },
    component: () => import('./views/geography/countries.vue')
    },
    {
    path: '/agregar/pais',
    name: 'addCountry',
    meta: { requiresAuth: true },
    component: () => import('./views/geography/countryCreate.vue')
    },
    {
      path: '/actualizar/pais/:IdCountry/',
      name: 'countryUpdate',
      meta: { requiresAuth: true },
      component: () => import('./views/geography/countryUpdate.vue')
    },
    {
    path: '/departamentos',
    name: 'states',
    meta: { requiresAuth: true },
    component: () => import('./views/geography/states.vue')
    },
    {
    path: '/agregar/departamento',
    name: 'addState',
    meta: { requiresAuth: true },
    component: () => import('./views/geography/stateCreate.vue')
    },
    {
      path: '/actualizar/departamento/:IdState/',
      name: 'stateUpdate',
      meta: { requiresAuth: true },
      component: () => import('./views/geography/stateUpdate.vue')
    },
    {
    path: '/ciudades',
    name: 'cities',
    meta: { requiresAuth: true },
    component: () => import('./views/geography/cities.vue')
    },
    {
    path: '/agregar/ciudad',
    name: 'addCity',
    meta: { requiresAuth: true },
    component: () => import('./views/geography/cityCreate.vue')
    },
    {
      path: '/actualizar/ciudad/:IdCity/',
      name: 'cityUpdate',
      meta: { requiresAuth: true },
      component: () => import('./views/geography/cityUpdate.vue')
    },
    {
    path: '/clientes',
    name: 'clients',
    meta: { requiresAuth: true },
    component: () => import('./views/clients/clients.vue')
    },
    {
    path: '/agregar/cliente',
    name: 'addClient',
    meta: { requiresAuth: true },
    component: () => import('./views/clients/clientCreate.vue')
    },
    {
      path: '/actualizar/cliente/:IdClient',
      name: 'clientUpdate',
      meta: { requiresAuth: true },
      component: () => import('./views/clients/clientUpdate.vue')
    },
    {
    path: '/clientes/tipos',
    name: 'typesClient',
    meta: { requiresAuth: true },
    component: () => import('./views/clients/types/typesClient.vue')
    },
    {
    path: '/agregar/cliente/tipo',
    name: 'addTypeClient',
    meta: { requiresAuth: true },
    component: () => import('./views/clients/types/typesClientCreate.vue')
    },
    {
      path: '/actualizar/cliente/tipo/:IdTypeClient',
      name: 'typeClientUpdate',
      meta: { requiresAuth: true },
      component: () => import('./views/clients/types/typesClientUpdate.vue')
    },
    {
    path: '/vendedores',
    name: 'sellers',
    meta: { requiresAuth: true },
    component: () => import('./views/sellers/sellers.vue')
    },
    {
    path: '/agregar/vendedor',
    name: 'addSeller',
    meta: { requiresAuth: true },
    component: () => import('./views/sellers/sellerCreate.vue')
    },
    {
      path: '/actualizar/vendedor/:IdSeller',
      name: 'sellerUpdate',
      meta: { requiresAuth: true },
      component: () => import('./views/sellers/sellerUpdate.vue')
    },
    {
    path: '/citas',
    name: 'dates',
    meta: { requiresAuth: true },
    component: () => import('./views/dates/dates.vue')
    },
    {
    path: '/agregar/cita',
    name: 'addDate',
    meta: { requiresAuth: true },
    component: () => import('./views/dates/dateCreate.vue')
    },
    {
      path: '/actualizar/cita/:IdDateVisitClient',
      name: 'dateUpdate',
      meta: { requiresAuth: true },
      component: () => import('./views/dates/dateUpdate.vue')
    },
    {
    path: '/citas/tipos',
    name: 'typesIntention',
    meta: { requiresAuth: true },
    component: () => import('./views/dates/types/typesIntention.vue')
    },
    {
    path: '/agregar/cita/tipo',
    name: 'addTypeIntention',
    meta: { requiresAuth: true },
    component: () => import('./views/dates/types/typeIntentionCreate.vue')
    },
    {
      path: '/actualizar/vendedor/tipo/:IdTypeIntention',
      name: 'typeIntentionUpdate',
      meta: { requiresAuth: true },
      component: () => import('./views/dates/types/typeIntentionUpdate.vue')
    }
]