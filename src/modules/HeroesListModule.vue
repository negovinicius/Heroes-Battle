<script>
import { ref, onBeforeMount, nextTick } from "vue";
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
    const firstHeroFighter = ref(null);
    const secondHeroFighter = ref(null);
    const cardWinnerRef = ref(null);

    const { heroes, getHeroes } = useHeroes();

    const mountFighters = (hero) => {
      if (!firstHeroFighter.value) {
        firstHeroFighter.value = hero;
        return;
      }

      secondHeroFighter.value = hero;
      scrollToCardWinner();
    };

    const resetState = () => {
      firstHeroFighter.value = null;
      secondHeroFighter.value = null;
    };

    const scrollToCardWinner = async () => {
      await nextTick();
      if (cardWinnerRef.value && cardWinnerRef.value.$el) {
        const element = cardWinnerRef.value.$el;
        const offset = 200;
        const topPosition =
          element.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: topPosition, behavior: "smooth" });
      }
    };

    onBeforeMount(async () => {
      await getHeroes();
    });

    return {
      heroes,
      firstHeroFighter,
      secondHeroFighter,
      cardWinnerRef,

      getHeroes,
      mountFighters,
      resetState,
    };
  },
};
</script>

<template>
  <div
    class="main"
    :class="firstHeroFighter && secondHeroFighter ? 'blur' : ''"
  >
    <div class="heroes-list">
      <div class="title">
        <H1>Heroes Battle</H1>
        <p>
          Selecione seu héroi e um oponente!
        </p>
      </div>
      <div v-for="(hero, index) in heroes" :key="index">
        <Card :data="hero" @clickCard="mountFighters" />
      </div>
    </div>
  </div>

  <CardWinner
    v-if="firstHeroFighter && secondHeroFighter"
    ref="cardWinnerRef"
    @closeCardWinner="resetState"
    :firstHero="firstHeroFighter"
    :secondHero="secondHeroFighter"
  />
</template>

<style scoped>
.title {
  margin-left: 10px;
  color: white;
  display: inline-block;
  width: 500px;
  color: #ac8f55;
  font-size: 2em;
}
.main {
  position: relative;
  display: flex;
  flex-direction: column;
}

.heroes-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: black;
}

.blur {
  background-color: #f5f5f5;
  filter: blur(5px);
}
</style>
