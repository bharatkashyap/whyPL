<template>
  <div class="wrap container-fluid">
    <div class="screen">
      <h4 id="title">{{title}}</h4>
      <!-- <h6 id="subtitle">{{subtitle}}</h6> -->
      <div class="projection">
        <nav class="navbar-expand-lg navbar-light">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="navbar-nav">
              <a v-for="item in tabs" v-bind:key="item.id" v-bind:class="['nav-item', 'nav-link', {'nav-active' : selected === item.name}]" v-on:click="select(item.name)">{{item.name}}</a>
            </div>
          </div>
        </nav>
        <component v-bind:is="selectedComponent"></component>
      </div>
    </div>
  </div>
</template>

<script>
import overviewPanel from './OverviewPanel.vue'

export default {
  name: 'Skeleton',
  data () {
    return {
      title: 'A brief history of the IPL',
      //  subtitle: 'A brief history of the Indian Premier League',
      selected: 'Overview',
      tabs:
      [
        {id: 0, name: 'Overview'},
        {id: 1, name: 'Pan India'},
        {id: 2, name: 'Powerplay'},
        {id: 3, name: 'Big Hitting'},
        {id: 4, name: 'Moneyball'},
        {id: 5, name: 'Slog Overs'},
        {id: 6, name: 'Photo Finish'}
      ]
    }
  },
  methods: {
    select: function (item) {
      this.selected = item
    }
  },
  computed: {
    selectedComponent: function () {
      return this.selected.toLowerCase().replace(' ', '') + 'Panel'
    }
  },
  components: {
    overviewPanel,
    'panindiaPanel' : () => import('./PanIndiaPanel.vue'),
    'powerplayPanel' : () => import('./PowerPlayPanel.vue'),
    'bighittingPanel' : () => import('./BigHittingPanel.vue'),
    'moneyballPanel' : () => import('./MoneyBallPanel.vue'),
    'slogoversPanel' : () => import('./SlogOversPanel.vue'),
    'photofinishPanel' : () => import('./PhotoFinishPanel.vue')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap
{
  height: 100vh;
  width: 100vw;
  padding-top: 5vh;
  background-color: rgba(0, 219,170, 1);
}

.screen
{
  height: 90vh;
  width: 80vw;
  margin: 0 auto;
  background-color: rgba(255,255,255,1);
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
  overflow-y: scroll;
}

#title
{
  font-weight: bold;
  font-size: 1.4rem;
  font-family: 'Muli', sans-serif;
  position: relative;
    top: 3vh;
}
#subtitle
{
  font-weight: normal;
  font-size: 0.8rem;
  font-family: 'Muli', sans-serif;
  position: relative;
    top: 2.3vh;
}
.projection
{
  height: 80%;
  width: 80%;
  margin: 6vh auto;
}

.navbar-light
{
  font-family: 'Muli';
  font-size: 1rem;
}

.navbar-toggler
{
  font-size: 1rem;
}

.navbar-toggler:focus
{
  outline: none;
}

.navbar-nav .nav-link
{
  color: rgba(184,184,184,1);
  transition: color ease-in-out 0.1s;
}

.navbar-nav .nav-link:focus, .navbar-nav .nav-link:hover
{
  cursor: pointer;
}

.navbar-nav .nav-active
{
  color: rgba(0,0,0,0.8);
}

@media (min-width: 992px) /* Styling for full-width navbar */
{
  .navbar-light
  {
    border-bottom: 1px solid rgba(0,0,0,0.3);
  }

  .nav-item
  {
    margin-right: 20px;
  }

  .nav-active
  {
    border-bottom: 2px solid rgba(0,0,0,0.4);
  }

}

</style>
