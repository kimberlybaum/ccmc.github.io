
<template>
<div>
    <router-link to ="/" class="router-link-active"> ← </router-link>
    <h1>{{ this.title }}</h1>
    <div id="grid">
      <div class="ui equal width grid">
    <WeatherPanel day = "Today" :type = "this.today['type']" :low = "this.today['low']" :high = "this.today['high']"></WeatherPanel>
    <WeatherPanel day = "Tomorrow" :type = "this.tomorrow['type']" :low = "this.tomorrow['low']" :high = "this.tomorrow['high']"></WeatherPanel>
    <WeatherPanel day = "In Two Days" :type = "this.inTwoDays['type']" :low = "this.inTwoDays['low']" :high = "this.inTwoDays['high']"></WeatherPanel>
      </div>
    <router-view></router-view>
</div>
</div>
</template>

<script>

import WeatherPanel from '@/components/WeatherPanel.vue';
import * as axios from 'axios';

  export default {
    name: 'City',
    components: {
      WeatherPanel
    },
  data () {
    return {
      today: {},
      tomorrow: {},
      inTwoDays: {},
      title: "",
    }
  },
  computed: {
    getWoeID () {
      return  String(this.$route.params.woeid)
    }
  },
  created () {
    var self = this;
    
    axios.get('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/' + this.getWoeID).then(function(response) {
      
      self.today = {
        "low": response.data.consolidated_weather[0]['min_temp'],
        "high": response.data.consolidated_weather[0]['max_temp'],
        "type": response.data.consolidated_weather[0]['weather_state_name']
      };

      self.tomorrow = {
        "low": response.data.consolidated_weather[1]['min_temp'],
        "high": response.data.consolidated_weather[1]['max_temp'],
        "type": response.data.consolidated_weather[1]['weather_state_name']
      };

      self.inTwoDays = {
        "low": response.data.consolidated_weather[2]['min_temp'],
        "high": response.data.consolidated_weather[2]['max_temp'],
        "type": response.data.consolidated_weather[2]['weather_state_name']
      };

      self.title = response.data.title;

    });
    
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
