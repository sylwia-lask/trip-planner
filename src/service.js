export function getCityId(city) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${city}`).then(res => res.json());
}

export function getCityWeather(cityId) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${cityId}`).then(res => res.json());
}