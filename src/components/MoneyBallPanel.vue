<template>
  <div class="">
    <cardLine v-for="stat in stats" v-if="stat.type == 'line'" v-bind:data="stat.data" v-bind:options="stat.options" v-bind:key="stat.id" v-bind:title="stat.title" v-bind:subtitle="stat.subtitle" v-bind:description="stat.description"></cardLine>
    <cardBar v-for="stat in stats" v-if="stat.type == 'bar'" v-bind:data="stat.data" v-bind:options="stat.options" v-bind:key="stat.id" v-bind:title="stat.title" v-bind:subtitle="stat.subtitle" v-bind:description="stat.description"></cardBar>
  </div>
</template>

<script>
import cardLine from './CardLine.vue'
import cardBar from './CardBar.vue'

export default {
  name: 'MoneyBallPanel',
  data () {
    return {
      stats: [
        {
          id: 0,
          type: 'line',
          title: '1.46',
          subtitle: 'The sharpest fall in the scoring rate occurs in the seventh over',
          description: 'Captains are using their most experienced bowlers just after the powerplay and at the death',
          data: {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
            datasets: [
              {
                label: 'Run Rate',
                backgroundColor: 'rgba(123,69,100,1)',
                data: [5.92, 6.92, 7.51, 7.89, 7.90, 7.99, 6.52, 7.00, 7.17, 7.032, 7.40, 7.62, 7.60, 7.80, 8.08, 8.29, 8.69, 8.81, 8.47, 7.90],
                borderColor: 'rgba(0,0,0,0.5)',
                lineTension: 0,
                pointBackgroundColor: 'rgba(102,109,145,1)',
                fill: true
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
          type: 'bar',
          title: 'Not always the batsmen',
          subtitle: 'Amit Mishra has the highest number of Man of the Match awards amongst all bowlers',
          description: '9 bowlers make it into the list of top 50 most awarded players',
          data: {
            labels: ['A Mishra', 'U Yadav', 'A Nehra', 'H Singh', 'S Malinga', 'D Steyn', 'S Warne'],
            datasets: [
              {
                label: 'MOTM Awards',
                backgroundColor: 'rgba(80,120,174,1)',
                data: [9, 6, 6, 6, 5, 5, 4],
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
    cardLine, cardBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
