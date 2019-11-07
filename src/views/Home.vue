
<template>
  <div class="home">
    <h1>Weather</h1>
    <div id="grid">
      <div class="ui equal width grid">
        <div class="sixteen wide computer sixteen wide tablet sixteen wide mobile column">
            <CityPanel msg="Washington, DC"/>
            <CityPanel msg="Boston, MA"/>
            <CityPanel msg="Chicago, IL"/>
            <CityPanel msg="Los Angeles, CA"/>
        </div>
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
    }
  }

</script>
<style>

#grid {
  width: 30%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5vw;
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
