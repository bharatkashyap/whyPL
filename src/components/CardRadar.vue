<template>
  <div class="row cardGraph">
    <div class="col-md-4">
      <card v-bind:title="title" v-bind:subtitle="subtitle" v-bind:description="description"></card>
    </div>
    <div class="col-md-8">
      <radarChart class="radar" v-bind:data="data" v-bind:options="options"></radarChart>
    </div>
  </div>
</template>

<script>
import card from './Card.vue'
import radarChart from './RadarChart.vue'

export default {
  name: 'CardRadar',
  data () {
    return {
    }
  },
  props: ['title', 'subtitle', 'description', 'data', 'options'],
  components: {
    card, radarChart
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media (min-width: 768px)
{
  .radar {
    height: 30vh;
  }

  .cardGraph {
    margin-top: 5vh;
    height: 30vh;
  }
}

@media (max-width: 768px)
{
  .radar {
    margin-top: 0;
    height: 30vh;
  }
  .cardGraph {
    margin-top: 2vh;
  }
}
.cardGraph {
  border-bottom: 1px solid rgba(0,0,0,0.1);
}

</style>
