<template>
      <div class="sixteen wide computer sixteen wide tablet sixteen wide mobile column">
     <button class = "ui button">
         <div class = "Day">{{ day }}</div>
         <div class = "weatherType">{{ type }}</div>
         <div class = "lowHigh">Low: {{ low }} High: {{ high }}</div>
    </button>
     </div>
</template>

<script>

export default {
  name: 'WeatherPanel',
  data(){
      return{
      }
    },

  props: {
    day: String,
    type: String,
    low: String,
    high: String
  }
}

</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

button.ui.button{
color: black;
    font-size: 2vw;
    background: white;
    -webkit-box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
    box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
    padding: 15px;
    margin-bottom: 20px;
    width: 25vw;
    border: 1px solid #fff;
}
ul {
  list-style-type: none;
  padding: 0;
}

div.Day{
font-weight: 700;
    font-size: 14pt;
    margin-top: -10px;
    line-height: 1.28571429em;
}

div.weatherType{
    font-size: 10pt;
    color: lightslategray;
    font-weight: 100;
    padding: 0px;
    
}

div.lowHigh{
    margin-top: .5em;
    font-size: 11pt;
    font-weight: 10;
    color: hsl(240, 4%, 26%);
}

li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
