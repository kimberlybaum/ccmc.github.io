
<template>
<div>
    <router-link to ="/" class="router-link-active"> ← </router-link>
    <h1>{{ this.$route.params.id }}</h1>
    <div id="grid">
      <div class="ui equal width grid">

    <WeatherPanel day = "Today" type = "Rainy" low = 0 high = 0></WeatherPanel>
        <WeatherPanel day = "Tomorrow" type = "Cloudy" low = 0 high = 0></WeatherPanel>
    <WeatherPanel day = "In Two Days" type = "Windy" low = 0 high = 0></WeatherPanel>

    <router-view></router-view>
</div>
</div>
</div>
</template>

<script>

import WeatherPanel from '@/components/WeatherPanel.vue';

  export default {
    name: 'City',
    components: {
      WeatherPanel
    }
  }

</script>
<style>

#grid {
  width: 30vw;

  margin-left: auto;
  margin-right: auto;
  margin-top: 5vw;
}
.column {

 flex-grow: 1;

}

li{
  z-index: 999999;

}

router-link {
  text-decoration: none;
}

.router-link-active{
    font-size: 50px;
    position: absolute;
    left: 4%;
    margin-bottom: 30px;
    color: black;
    
}


div.sixteen.wide.computer.sixteen.wide.tablet.sixteen.wide.mobile.column{
  flex-grow: 1;
}

h1{
  font-size: 4vw;
  padding-top: 20px;
}

</style>
