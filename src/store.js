import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        trips: [],
        selectedTrips: []
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
        }
    },
    getters: {
        trips: (state) => state.trips,
        selectedTrips: (state) => state.selectedTrips
    }
});

export default store;