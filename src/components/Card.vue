<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{title}}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{subtitle}}</h6>
      <p class="card-text">{{description}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data () {
    return {
    }
  },
  props: ['title', 'subtitle', 'description']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.card {
  font-family: 'IBM Plex Sans', sans-serif;
  position: relative;
  width: 100%;
  padding: 0;
  margin: 2vh 0;
  border-radius: 0;
  border: 0;
  z-index: 2
}

.card-title {
  font-weight: bolder;
  font-size: 1.5rem;
}

.card-title {
  font-weight: bold;
}

.card-text {
  font-size: 0.8rem;
  font-weight: lighter;
}

@media (max-width: 768px)
{
  .card {
    width: 100%;
  }
}

.card-body {
  text-align: left;
}

</style>
