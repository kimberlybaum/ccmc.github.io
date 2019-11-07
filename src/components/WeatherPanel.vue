<template>
   <div class="sixteen wide computer sixteen wide tablet sixteen wide mobile column">
     <button class = "ui button" >
         <div class = "title">{{ msg }}</div>
         <div class = "weatherType">{{ type }}</div>
         <div class = "lowHigh">Low: {{ low }} High: {{ high }}</div>
    </button>
     </div>
</template>

<script>

export default {
  name: 'WeatherPanel',
  props: {
    msg: String,
    type: String,
    low: Number,
    high: Number
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
    padding: 30px;
    margin-bottom: 30px;
    width: 30vw;
    border: 1px solid #fff;
}
ul {
  list-style-type: none;
  padding: 0;
}

button div.title{
font-weight: 700;
    font-size: 14pt;
    margin-top: -20px;
    line-height: 1.28571429em;
}
button div.weatherType{
    
}
button div.lowHigh{
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
