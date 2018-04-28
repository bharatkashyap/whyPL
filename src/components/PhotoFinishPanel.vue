<template>
  <div class="">
      <cardLine v-for="stat in stats" v-if="stat.type == 'line'" v-bind:data="stat.data" v-bind:options="stat.options" v-bind:key="stat.id" v-bind:title="stat.title" v-bind:subtitle="stat.subtitle" v-bind:description="stat.description"></cardLine>
    <cardPolar v-for="stat in stats" v-if="stat.type == 'polar'" v-bind:key="stat.id" v-bind:title="stat.title" v-bind:subtitle="stat.subtitle" v-bind:description="stat.description" v-bind:data="stat.data" v-bind:options="stat.options" ></cardPolar>
  </div>
</template>

<script>
import cardLine from './CardLine.vue'
import cardPolar from './CardPolar.vue'

export default {
  name: 'PhotoFinishPanel',
  data () {
    return {
      stats: [
        {
          id: 0,
          type: 'line',
          title: 'Down to the wire',
          subtitle: 'Matches won by less than 10 runs, or less than 3 wickets, across seasons',
          description: 'Roughly one in every five games is settled this way, when considering all games through all seasons',
          data: {
            labels: ['Season 1', 'Season 2', 'Season 3', 'Season 4', 'Season 5', 'Season 6', 'Season 7', 'Season 8', 'Season 9'],
            datasets: [
              {
                label: 'Wins by <10 runs',
                backgroundColor: 'rgba(123,69,100,1)',
                data: [9, 7, 4, 6, 7, 8, 4, 9, 7],
                borderColor: 'rgba(0,0,0,0.5)',
                lineTension: 0,
                pointBackgroundColor: 'rgba(202,19,145,1)',
                fill: false
              },
              {
                label: 'Wins by <3 wickets',
                backgroundColor: 'rgba(123,69,100,1)',
                data: [4, 3, 0, 2, 1, 1, 1, 4, 3],
                borderColor: 'rgba(0,0,0,0.5)',
                lineTension: 0,
                pointBackgroundColor: 'rgba(12,169,145,1)',
                fill: false
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
          type: 'polar',
          title: '...every other game',
          subtitle: '45% of all matches are won in the last four overs by the team batting second',
          description: 'Of these, more than half are settled only in the final two overs',
          data: {
            labels: ['17th', '18th', '19th', '20th',],
            datasets: [
              {
                backgroundColor: ['rgba(0,220,174,1)', 'rgba(0,159,239,1)', 'rgba(255,207,69,1)', 'rgba(255,68,123,1)', 'rgba(130, 150, 190, 1)'],
                borderColor: 'rgba(0,0,0,0.3)',
                data: [21, 40, 80, 118],
              }
            ]
          },
          options: {
            legend: {
              display: false
            },
            scale: {
                ticks: {
                  display: false,
                  min: 0,
                  max: 120,
                  stepSize: 20
                },
                gridLines: {
                  display: true,
                  drawBorder: false,
                  lineWidth: 0.2
                },
                pointLabels: {
                  display: true
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
    cardLine, cardPolar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
