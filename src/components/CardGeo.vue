<template>
  <div class="row cardGraph">
    <div class="col-md-4">
      <card v-bind:title="title" v-bind:subtitle="subtitle" v-bind:description="description"></card>
    </div>
    <div class="col-md-8">
      <geo-chart class="geo" v-bind:data="data" v-bind:library="library"></geo-chart>
    </div>
  </div>
</template>

<script>
import card from './Card.vue'

export default {
  name: 'CardGeo',
  data () {
    return {
    }
  },
  props: ['title', 'subtitle', 'description', 'data', 'library'],
  components: {
    card
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media (min-width: 768px)
{
  .geo {
    margin-top: 10vh;
    height: 400px;
  }

  .cardGraph {
    margin-top: 5vh;
    height: 30vh;
  }
}

@media (max-width: 768px)
{
  .geo {
    margin-top: 0;
    position: relative;
    top: -7%;
    z-index: 1;
  }
  .cardGraph {
    margin-top: 2vh;
  }
}
.cardGraph {
  border-bottom: 1px solid rgba(0,0,0,0.1);
}

</style>
