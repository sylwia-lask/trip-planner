import VueRouter from 'vue-router';

import MyTrips from './components/MyTrips';
import AddTrip from './components/AddTrip';
import CitiesWeather from './components/CitiesWeather';

const routes = [
    {
        path: '/my-trips',
        component: MyTrips
    },
    {
        path: '/add-trip',
        component: AddTrip
    },
    {
        path: '/cities-weather',
        component: CitiesWeather
    }
];

export const router = new VueRouter({
    routes,
    mode: 'history'
});