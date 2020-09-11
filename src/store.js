import Vuex from 'vuex';
import Vue from 'vue';
import {getCityId, getCityWeather} from './service';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        trips: [],
        selectedTrips: []
    },
    actions: {
        async fetchCityWeather({commit}, trip) {
            const fetchedCity = await getCityId(trip.cityOfResidence);
            let weather = await getCityWeather(fetchedCity[0].woeid);
            commit('addWeather', {weather, trip});
        }
    },
    mutations: {
        loadTrips(state, trips) {
            state.trips = trips;
        },
        addToSelectedTrips(state, id) {
            if (state.selectedTrips.some((i) => i.id === id)) {
                state.selectedTrips = state.selectedTrips.filter((i) => i.id !== id);
            } else {
                const changedTrip = state.trips.filter((i) => i.id === id)[0];
                state.selectedTrips.push(changedTrip);
            }
        },
        deleteSelectedTrips(state) {
            state.trips = state.trips.filter(
                (i) => !state.selectedTrips.some((el) => el.id === i.id)
            );
            state.selectedTrips = [];
        },
        addTrip(state, trip) {
            state.trips.push(trip);
        },
        addWeather(state, payload) {
            state.trips[payload.trip.id - 1].weather = payload.weather;
            console.log(state.trips[payload.trip.id -1])
        }
    },
    getters: {
        trips: (state) => state.trips,
        selectedTrips: (state) => state.selectedTrips,
        tripsWithCities: (state) => state.trips.filter(trip => 'cityOfResidence' in trip)
    }
});

export default store;