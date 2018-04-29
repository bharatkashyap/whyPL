<template>
  <div class="">
    <cardBar v-for="stat in stats" v-if="stat.type == 'bar'" v-bind:data="stat.data" v-bind:options="stat.options" v-bind:key="stat.id" v-bind:title="stat.title" v-bind:subtitle="stat.subtitle" v-bind:description="stat.description"></cardBar>
      <cardLine v-for="stat in stats" v-if="stat.type == 'line'" v-bind:data="stat.data" v-bind:options="stat.options" v-bind:key="stat.id" v-bind:title="stat.title" v-bind:subtitle="stat.subtitle" v-bind:description="stat.description"></cardLine>
  </div>
</template>

<script>
import cardLine from './CardLine.vue'
import cardBar from './CardBar.vue'

export default {
  name: 'SlogOversPanel',
  data () {
    return {
      stats: [
        {
          id: 0,
          type: 'bar',
          title: '10',
          subtitle: 'Bangalore have the highest run rate in the last five overs',
          description: 'How teams bat in the last six overs, averaged across all seasons for teams having played more than 50 matches',
          data: {
            labels: ['Delhi Daredevils', 'Deccan Chargers', 'Rajasthan Royals', 'Kings XI Punjab', 'Kolkata Knight Riders', 'Sunrisers Hyderabad', 'Mumbai Indians', 'Chennai Super Kings', 'Royal Challengers Bangalore'],
            datasets: [
              {
                label: 'Run rate',
                backgroundColor: 'rgba(0,177,175,1)',
                data: [8.53, 8.57, 8.73, 8.88, 8.95, 9.12, 9.33, 9.46, 9.92],
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
          title: 'No signs of stopping',
          subtitle: 'Bangalore set the record for highest ever total in the last six overs in the most recent edition',
          description: 'Scoring 126 off 37 balls, the highest ever death over run-rate climbed to above 20',
          data: {
            labels: ['Season 1', 'Season 2', 'Season 3', 'Season 4', 'Season 5', 'Season 6', 'Season 7', 'Season 8', 'Season 9'],
            datasets: [
              {
                label: 'Highest death-over run rate',
                backgroundColor: 'rgba(241,120,10,1)',
                data: [16.16, 13.10, 15, 14.83, 14.10, 14.48, 14.04, 16.26, 20.43],
                borderColor: 'rgba(0,0,0,0.5)',
                pointBackgroundColor: 'rgba(241,90,1,1)',
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
