<template>
    <HeroesListModule></HeroesListModule>
    <div>
        oi View hero
    </div>
</template>
<script>
import HeroesListModule from '../modules/HeroesListModule.vue';

export default {
    name: 'HeroesListView',
    components: {
        HeroesListModule,
        Card,
    }, 
  setup() {
    console.log('arroz')
    return{};
  },
}
</script>
