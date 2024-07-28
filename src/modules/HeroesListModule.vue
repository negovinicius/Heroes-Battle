<script>
import { onMounted, computed } from 'vue';
import useHeroes from '../composables/useHeroes';
import Card from '../components/Card.vue'
import CardWinner from '../components/CardWinner.vue';

export default {
    name: 'HeroesListModule',
    components:{
        Card,
        CardWinner,
    },
    setup() { 

        const {
            heroes,
            getHeroes,
        } = useHeroes();

        onMounted(() => {
            getHeroes();
            console.log(heroes)
            console.log('entrei', getHeroes())
        })

        return {

        };
    },
};
</script>
<template>
    <div class="Module">
        <Card></Card>
    </div>
    
    <card-winner></card-winner>
</template>

<style scoped> 
    .Module {
        border: 10px solid black;
        padding: 10px;
        height: 850px;
    }
</style>