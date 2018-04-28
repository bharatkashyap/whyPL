<template>
  <div class="">
    <cardLine v-for="stat in stats" v-if="stat.type == 'bar'" v-bind:data="stat.data" v-bind:options="stat.options" v-bind:key="stat.id" v-bind:title="stat.title" v-bind:subtitle="stat.subtitle" v-bind:description="stat.description"></cardLine>
    <cardDoughnut v-for="stat in stats" v-if="stat.type == 'doughnut'" v-bind:data="stat.data" v-bind:options="stat.options" v-bind:key="stat.id" v-bind:title="stat.title" v-bind:subtitle="stat.subtitle" v-bind:description="stat.description"></cardDoughnut>
  </div>
</template>

<script>
import cardBar from './CardBar.vue'
import cardLine from './CardLine.vue'
import cardDoughnut from './CardDoughnut.vue'

export default {
  name: 'PowerPlayPanel',
  data () {
    return {
      stats: [
        {
          id: 0,
          type: 'bar',
          title: '44 runs',
          subtitle: 'Average score in the first six overs of the innings',
          description: 'Recent seasons have seen teams heading towards the eight run an over mark',
          data: {
            labels: ['Season 1', 'Season 2', 'Season 3', 'Season 4', 'Season 5', 'Season 6', 'Season 7', 'Season 8', 'Season 9'],
            datasets: [
              {
                label: 'Average runs scored in first 6 overs',
                backgroundColor: 'rgba(150,190,74,1)',
                data: [46.1551724137931, 42.775862068965516, 46.68852459016394, 43.11724137931034, 40.939189189189186, 39.96153846153846, 44.60655737704918, 45.61344537815126, 46.11666666666667],
                borderColor: 'rgba(0,0,0,0.5)',
                pointBackgroundColor: 'rgba(150,190,74,1)',
                lineTension: 0,
                fill: false
              }
            ]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: false,
                  maxTicksLimit: 5
                }
              }],
              xAxes: [{
                ticks: {
                  autoSkip: true,
                  autoSkipPadding: 20,
                  maxRotation: 0
                }
              }]
            },
            legend: {
              display: false
            },
            layout: {
              padding: {
                top: 20
              }
            },
            responsive: true,
            maintainAspectRatio: false
          }
        },
        {
          id: 1,
          type: 'doughnut',
          title: 'A lot of it in boundaries',
          subtitle: '7,606 fours and sixes hit in the first six overs',
          description: '38.55% of all runs scored in the initial part of the innings come in boundaries',
          data: {
            labels: ['1', '2', '3', '4', '6',],
            datasets: [
              {
                backgroundColor: ['rgba(0,220,174,1)', 'rgba(0,159,239,1)', 'rgba(255,207,69,1)', 'rgba(255,68,123,1)', 'rgba(130, 150, 190, 1)'],
                data: [10733, 1778, 211, 6351, 1255]
              }
            ]
          },
          options: {
            legend: {
              display: false
            },
            responsive: true,
            maintainAspectRatio: false
          }
        }
      ]
    }
  },
  components: {
    cardLine, cardDoughnut
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
