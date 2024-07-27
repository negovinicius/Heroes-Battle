import { defineStore } from "pinia";
import api from '../services/rest';

export const useHeroesStore = defineStore('heroes', {
    state: () => ({
        heroes: [],
        isLoading: false, 
    }),
    actions: {
        async takeHeroes() {
            try {
                this.isLoading = true;
                const response = await api.heroes.getHeroes();
                
                return response;
            } catch (error) {
                console.log('Error on GetHeroes', error)
            } finally {
                this.isLoading = false;
            }
        }
    }
});