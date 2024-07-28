<script>
import { onMounted, computed } from "vue";

export default {
  name: "Card",
  props: {
    data: {
        type: Object,
        required: true,
    },
  }
};
</script>

<template>
  <div class="card">
    <div class="Heroname">{{ data.name }}</div>
    <img :src="data.images.lg" alt="Card Image">
    <div>Combate {{ data.powerstats.combat }}</div>
  </div>
</template>
<style scoped>
    .card {
        border: 5px solid #393644;
        border-radius: 8px;
        height: 320px;
        width: 200px;
        margin: 12px;
        background-color: #ac8f55;
    }
    img {
      height: 180px;
      width: 160px;
      margin: 30px 0px 0px 18px;
      border: 4px solid #393644;
      border-radius: 8px;
    }
    .Heroname {
      display: flex;
      justify-content: center;
      margin-top: 8px;
      border: 2px solid black;
      
    }
</style>
