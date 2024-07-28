import { onMounted, computed } from "vue";
import { useHeroesStore } from "../store/heroes";

export default function useHeroes(store = useHeroesStore()) {
  const heroes = computed(() => store.heroes);

  const getHeroes = () => store.dispatchGetHeroes();

  onMounted(async () => {
    await getHeroes();
  });

  return {
    heroes,

    getHeroes,
  };
}