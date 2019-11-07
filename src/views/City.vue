
<template>

  <div class="about">
    <a href="/" class="router-link-active">←</a>
    <h1>City</h1>
    <div id="grid">
      <div class="ui equal width grid">
        <div class="sixteen wide computer sixteen wide tablet sixteen wide mobile column">
            <WeatherPanel msg="Today" type = "" low = "" high = ""/>
            <WeatherPanel msg="Tomorrow" type = "" low = "" high = ""/>
            <WeatherPanel msg="In Two Days" type = "" low = "" high = ""/>
        </div>
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
  width: 30%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5vw;
}
.column {

 flex-grow: 1;

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
  padding-top: 50px;
}

</style>
