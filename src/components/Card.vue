<script>
import { ref, onMounted, computed } from "vue";

export default {
  name: "Card",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },

  setup(props, { emit }) {
    const clickCard = () => {
      emit("clickCard", props.data);
    };

    return {
      clickCard,
    };
  },
};
</script>

<template>
  <div class="card" @click="clickCard()">
    <div class="hero-name">{{ data.name }}</div>
    <img :src="data.images.lg" alt="Card Image" />
    <div class="stats-container">
      <div class="power-stats">
        Combate {{ data.powerstats.combat }} <br />
        Inteligência {{ data.powerstats.intelligence }} <br />
        Durabilidade {{ data.powerstats.durability }} <br />
      </div>
      <div class="power-stats">
        Agilidade {{ data.powerstats.speed }} <br />
        Força {{ data.powerstats.strength }} <br />
        Poder {{ data.powerstats.power }}
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Freeman&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap");
.card {
  border: 6px solid #393644;
  border-radius: 8px;
  height: 320px;
  width: 215px;
  margin: 12px;
  background-color: #ac8f55;
  cursor: pointer;
}
.card:hover {
  border-color: #ac8f55;
}
img {
  height: 200px;
  width: 160px;
  margin: 12px 0px 10px 22px;
  border: 4px solid #393644;
  border-radius: 8px;
}
.hero-name {
  display: flex;
  justify-content: center;
  margin-top: 8px;
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
