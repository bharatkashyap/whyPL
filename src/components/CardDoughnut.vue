<template>
  <div class="row cardGraph">
    <div class="col-md-4">
      <card v-bind:title="title" v-bind:subtitle="subtitle" v-bind:description="description"></card>
    </div>
    <div class="col-md-8">
      <doughnutChart class="doughnut" v-bind:data="data" v-bind:options="options"></doughnutChart>
    </div>
  </div>
</template>

<script>
import card from './Card.vue'
import doughnutChart from './DoughnutChart.vue'

export default {
  name: 'CardDoughnut',
  data () {
    return {
    }
  },
  props: ['title', 'subtitle', 'description', 'data', 'options'],
  components: {
    card, doughnutChart
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media (min-width: 768px)
{
  .doughnut {
    height: 30vh;
  }

  .cardGraph {
    margin-top: 5vh;
    height: 30vh;
  }
}

@media (max-width: 768px)
{
  .doughnut {
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
