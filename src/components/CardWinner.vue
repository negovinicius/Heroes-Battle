<script>
import { onMounted, computed } from "vue";

export default {
  name: "CardWinner",
  props: {
    firstHero: {
      type: Object,
      required: true,
    },
    secondHero: {
      type: Object,
      required: true,
    },
  },
  setup(props, { emit }) {
    const firstHeroPowerstats = computed(() => {
      return Object.values(props.firstHero.powerstats).reduce(
        (acc, curr) => acc + curr
      );
    });

    const secondHeroPowerstats = computed(() => {
      return Object.values(props.secondHero.powerstats).reduce(
        (acc, curr) => acc + curr
      );
    });

    const winner = computed(() => {
      return firstHeroPowerstats.value > secondHeroPowerstats.value
        ? props.firstHero
        : props.secondHero;
    });

    const closeCardWinner = () => {
      emit("closeCardWinner");
    };

    return {
      firstHeroPowerstats,
      secondHeroPowerstats,
      winner,

      closeCardWinner,
    };
  },
};
</script>

<template>
  <div class="container">
    <div @click="closeCardWinner" class="close-button">x</div>
    <span class="hero-name">
      {{ winner.name }}
    </span>

    <img :src="winner.images.lg" alt="Card Image" />
    <div class="stats-container">
      <div class="power-stats">
        Combate {{ winner.powerstats.combat }} <br />
        Inteligência {{ winner.powerstats.intelligence }} <br />
        Durabilidade {{ winner.powerstats.durability }} <br />
      </div>
      <div class="power-stats">
        Agilidade {{ winner.powerstats.speed }} <br />
        Força {{ winner.powerstats.strength }} <br />
        Poder {{ winner.powerstats.power }}
      </div>
    </div>
    <div class="title">Vencedor</div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Freeman&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap");
.title {
  display: flex;
  justify-content: center;
  margin-top: 15px;
  width: 200px;
  padding: 5px;
  font-family: "Bebas Neue", sans-serif;
  font-size: 200%;
  border: 6px solid #393644;
  background-color: #ac8f55;
}
.container {
  position: absolute;
  height: 320px;
  width: 215px;
  padding: 20px;
  top: 300px;
  border: 6px solid #393644;
  border-radius: 8px;
  background-color: #ac8f55;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
}

.close-button {
  cursor: pointer;
  border: 1px solid black;
  height: 14px;
  width: 10px;
  font-size: 12px;
  display: inline-flex;
  justify-content: center;
  margin: 0px 0px 0px 210px;
}

img {
  height: 200px;
  width: 160px;
  margin: 11px 0px 10px 23px;
  border: 4px solid #393644;
  border-radius: 8px;
}
.hero-name {
  display: flex;
  justify-content: center;
  margin-top: 9px;
  font-family: "Bebas Neue", sans-serif;
  font-size: 110%;
  border: 2px solid black;
}
.stats-container {
  display: flex;
  justify-content: space-between;
  padding: 0;
}
.power-stats {
  flex: 1;
  font-size: 13px;
  text-align: center;
  border: 2px solid black;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 75%;
}
</style>
