
<template>
  <div class="home">
    <h1>Weather</h1>
    <div id="grid">
      <div class="ui equal width grid">
        <div class="sixteen wide computer sixteen wide tablet sixteen wide mobile column">
            <router-link to ="/city/2514815"><CityPanel msg="Washington, DC"></CityPanel></router-link>
            <router-link to ="/city/2367105"><CityPanel msg="Boston, MA"></CityPanel></router-link>
            <router-link to ="/city/2379574"><CityPanel msg="Chicago, IL"></CityPanel></router-link>
            <router-link to ="/city/2442047"><CityPanel msg="Los Angeles, CA"></CityPanel></router-link>
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
