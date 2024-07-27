import api from './axios';
import baseUrl from './baseUrl';

export default {
    getHeroes() {
        return api.get(baseUrl.heroes)
    }
};