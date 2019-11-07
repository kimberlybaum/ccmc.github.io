<template>
  <!-- <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the</p>
  </div> -->
   <div class="sixteen wide computer sixteen wide tablet sixteen wide mobile column">
     <button class = "ui button" >{{ msg }}</button>
     </div>
</template>

<script>

export default {
  name: 'CityPanel',
  props: {
    msg: String
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
    margin-bottom: 20px;
    width: 30vw;
    border: 1px solid #fff;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
