<template>
  <div class="">
    <cardBar v-for="stat in stats" v-if="stat.type == 'bar'" v-bind:data="stat.data" v-bind:options="stat.options" v-bind:key="stat.id" v-bind:title="stat.title" v-bind:subtitle="stat.subtitle" v-bind:description="stat.description"></cardBar>
    <cardLine v-for="stat in stats" v-if="stat.type == 'line'" v-bind:data="stat.data" v-bind:options="stat.options" v-bind:key="stat.id" v-bind:title="stat.title" v-bind:subtitle="stat.subtitle" v-bind:description="stat.description"></cardLine>
  </div>
</template>

<script>
import cardBar from './CardBar.vue'
import cardLine from './CardLine.vue'

export default {
  name: 'OverviewPanel',
  data () {
    return {
      stats: [
        {
          id: 0,
          type: 'bar',
          title: '22,204',
          subtitle: 'Highest total runs scored in one season',
          description: 'Runs scored in a single season hit their peak in 2013.',
          data: {
            labels: ['Season 1', 'Season 2', 'Season 3', 'Season 4', 'Season 5', 'Season 6', 'Season 7', 'Season 8', 'Season 9'],
            datasets: [
              {
                label: 'Total runs scored',
                backgroundColor: 'rgba(0,220,174,1)',
                data: [17922, 16349, 18878, 21142, 21333, 22204, 18926, 18353, 18858],
                borderColor: 'rgba(0,0,0,0.5)'
              }
            ]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true,
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
          type: 'line',
          title: '...and it\'s getting better',
          subtitle: 'Runs scored per ball is on the rise',
          description: 'When averaged over all balls delivered, the run-rate of the IPL is only getting better',
          data: {
            labels: ['Season 1', 'Season 2', 'Season 3', 'Season 4', 'Season 5', 'Season 6', 'Season 7', 'Season 8', 'Season 9'],
            datasets: [
              {
                label: 'Runs per ball',
                backgroundColor: 'rgba(0,220,174,1)',
                data: [1.32, 1.20, 1.30, 1.24, 1.20, 1.22, 1.32, 1.34, 1.33],
                borderColor: 'rgba(0,0,0,0.5)'
              }
            ]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true,
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
        }
      ]
    }
  },
  components: {
    cardBar, cardLine
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
