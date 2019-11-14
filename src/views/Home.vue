
<template>
  <div class="home">
    <h1>Weather</h1>
    <div id="grid">
      <div class="ui equal width grid">
        <div class="sixteen wide computer sixteen wide tablet sixteen wide mobile column">
            <router-link to ="/city/2306179"><CityPanel msg="Taipei"></CityPanel></router-link>
            <router-link to ="/city/1226113"><CityPanel msg="Phuket"></CityPanel></router-link>
            <router-link to ="/city/1225448"><CityPanel msg="Bangkok"></CityPanel></router-link>
            <router-link to ="/city/1079132"><CityPanel msg="Pyongyang"></CityPanel></router-link>
        </div>
        <router-view></router-view>
      </div>

    </div>
  </div>
</template>

<script>

import CityPanel from '@/components/CityPanel.vue';


  export default {
    name: 'Home',
    components: {
      CityPanel
    },
    methods:{
    }
  }


</script>
<style>

#grid {
  margin-left: auto;
  margin-right: auto;
  margin-top: 5vw;
  flex-grow: 1;
}
.column {

 flex-grow: 1;

}


div.sixteen.wide.computer.sixteen.wide.tablet.sixteen.wide.mobile.column{
  flex-grow: 1;
}

h1{
  font-size: 5vw;
}

</style>
