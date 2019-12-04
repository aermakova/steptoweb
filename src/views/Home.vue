<template>
  <div class="home">
    <h1>Its main page!!!</h1>
    <slider></slider>
  </div>
</template>

<script>
// @ is an alias to /src
import Slider from '../components/Slider'

export default {
  name: 'home',
  components: {
    Slider
  }
}
</script>
