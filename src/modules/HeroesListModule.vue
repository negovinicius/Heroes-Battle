<script>
import { onMounted, computed, onBeforeMount } from "vue";
import useHeroes from "../composables/useHeroes";
import Card from "../components/Card.vue";
import CardWinner from "../components/CardWinner.vue";

export default {
  name: "HeroesListModule",
  components: {
    Card,
    CardWinner,
  },
  setup() {
    const { 
      heroes, 
      getHeroes
    } = useHeroes();

    onBeforeMount(async () => {
      await getHeroes();
    });

    return {
      heroes,

      getHeroes,
    };
  },
};
</script>

<template>
    <div class="heroes-list">
    <div v-for="(hero, index) in heroes" 
  :key="index"
  >
    <Card :data="hero"/>
    </div>
</div>
<CardWinner />
</template>

<style scoped>
    .heroes-list {
        display: flex;
        flex-wrap: wrap;
    }
</style>