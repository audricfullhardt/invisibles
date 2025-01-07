import { createRouter, createWebHistory } from 'vue-router'

// Importez les composants pour chaque enfant
import Henry from '../views/Henry.vue'
import Mohamed from '../views/Mohamed.vue'
import Avraham from '../views/Avraham.vue'
import Rania from '../views/Rania.vue'

const routes = [
    {
        path: '/henry',
        name: 'Henry',
        component: Henry
    },
    {
        path: '/mohamed',
        name: 'Mohamed',
        component: Mohamed
    },
    {
        path: '/avraham',
        name: 'Avraham',
        component: Avraham
    },
    {
        path: '/rania',
        name: 'Rania',
        component: Rania
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router 