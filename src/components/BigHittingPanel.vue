<template>
  <div class="">
    <cardBar v-for="stat in stats" v-if="stat.type == 'bar'" v-bind:data="stat.data" v-bind:options="stat.options" v-bind:key="stat.id" v-bind:title="stat.title" v-bind:subtitle="stat.subtitle" v-bind:description="stat.description"></cardBar>
  </div>
</template>

<script>
import cardBar from './CardBar.vue'

export default {
  name: 'BigHittingPanel',
  data () {
    return {
      stats: [
        {
          id: 0,
          type: 'bar',
          title: '13',
          subtitle: 'Chennai have scored the highest ever number of 200+ scores across seasons',
          description: 'Delhi round up the list with only a single 200+ score in 131 matches',
          data: {
            labels: ['Delhi Daredevils', 'Deccan Chargers', 'Kolkata Knight Riders', 'Sunrisers Hyderabad', 'Rajasthan Royals', 'Mumbai Indians', 'Kings XI Punjab', 'Royal Challengers Bangalore', 'Chennai Super Kings'],
            datasets: [
              {
                label: '200+ scores',
                backgroundColor: 'rgba(0,220,174,1)',
                data: [1, 1, 3, 3, 6, 7, 11, 11, 13],
                borderColor: 'rgba(0,0,0,0.5)',
                lineTension: 0,
                pointBackgroundColor: 'rgba(233,123,68,1)',
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
          type: 'bar',
          title: 'Strike rates are off the charts',
          subtitle: 'Virender Sehwag has the highest strike rate across all batsmen, across all seasons',
          description: 'Considering runs scored to balls faced ratio for batsmen having scored more than 1,000 runs in nine seasons',
          data: {
            labels: ['Sehwag', 'de Villiers', 'Gayle', 'Y Pathan', 'Pollard'],
            datasets: [
              {
                label: 'Strike rate',
                backgroundColor: 'rgba(90,220,214,1)',
                data: [148.82705946535734, 146.57104437471986, 146.0593220338983, 142.29390681003585, 141.95652173913044],
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
      ]
    }
  },
  components: {
    cardBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
