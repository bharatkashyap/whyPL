<template>
  <div class="">
    <cardGeo v-for="stat in stats" v-if="stat.type == 'geo'" v-bind:data="stat.data" v-bind:library="stat.library" v-bind:key="stat.id" v-bind:title="stat.title" v-bind:subtitle="stat.subtitle" v-bind:description="stat.description"></cardGeo>
    <div class="row cardGraph">
      <div class="col-md-4">
        <card v-for="stat in stats" v-if="stat.type == 'text-only'" v-bind:title="stat.title" v-bind:subtitle="stat.subtitle" v-bind:description="stat.description"></card>
      </div>
    </div>
  </div>
</template>

<script>
import card from './Card.vue'
import cardGeo from './CardGeo.vue'

navigator.geolocation.getCurrentPosition(function (position) {
  console.log(position.coords.longitude + ',' + position.coords.latitude)
})

export default {
  name: 'PanIndiaPanel',
  data () {
    return {
      title: 'Bharat',
      stats: [
        {
          id: 0,
          type: 'geo',
          title: '77',
          subtitle: 'The highest number of matches hosted by a stadium across seasons',
          description: 'Wankhede Stadium, Mumbai',
          data:
          [
            ['Bangalore', 58],
            ['Chandigarh', 42],
            ['Delhi', 53],
            ['Mumbai', 77],
            ['Kolkata', 54],
            ['Jaipur', 33],
            ['Hyderabad', 41],
            ['Chennai', 48],
            ['Ahmedabad', 12],
            ['Cuttack', 7],
            ['Nagpur', 3],
            ['Dharamsala', 9],
            ['Kochi', 5],
            ['Indore', 2],
            ['Visakhapatnam', 11],
            ['Pune', 25],
            ['Raipur', 6],
            ['Ranchi', 7],
            ['Rajkot', 5],
            ['Kanpur', 2]
          ],
          library: {
            sizeAxis: { minValue: 0, maxValue: 100 },
            displayMode: 'markers',
            region: 'IN',
            resolution: 'provinces',
            colorAxis: {colors: ['orange', 'red']}
          }
        },
        {
          id: 1,
          type: 'text-only',
          title: 'Rajkot',
          subtitle: 'The most recent addition to the ever-increasing list of host cities.',
          description: 'Up from 8 in the inaugaral edition to 11.'
        }
      ]
    }
  },
  components: {
    card, cardGeo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
