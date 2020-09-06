import VueRouter from 'vue-router';

import MyTrips from './components/MyTrips';
import AddTrip from './components/AddTrip';

const routes = [
    {
        path: '/my-trips',
        component: MyTrips
    },
    {
        path: '/add-trip',
        component: AddTrip
    }
];

export const router = new VueRouter({
    routes,
    mode: 'history'
});