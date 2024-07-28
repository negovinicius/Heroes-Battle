<template>
    <HeroesListModule></HeroesListModule>
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
    return{};
  },
}
</script>
