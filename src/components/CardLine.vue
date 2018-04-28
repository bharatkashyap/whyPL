<template>
  <div class="row cardGraph">
    <div class="col-md-4">
      <card v-bind:title="title" v-bind:subtitle="subtitle" v-bind:description="description"></card>
    </div>
    <div class="col-md-8">
      <lineChart class="line" v-bind:data="data" v-bind:options="options"></lineChart>
    </div>
  </div>
</template>

<script>
import card from './Card.vue'
import lineChart from './LineChart.vue'

export default {
  name: 'CardLine',
  data () {
    return {
    }
  },
  props: ['title', 'subtitle', 'description', 'data', 'options'],
  components: {
    card, lineChart
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media (min-width: 768px)
{
  .line {
    height: 30vh;
  }

  .cardGraph {
    margin-top: 5vh;
    height: 30vh;
  }
}

@media (max-width: 768px)
{
  .line {
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
