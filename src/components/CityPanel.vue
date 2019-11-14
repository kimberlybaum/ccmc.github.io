<template>
   <div class="sixteen wide computer sixteen wide tablet sixteen wide mobile column">
     <button class = "ui button" > {{ msg }} </button>
     </div>
</template>

<script>

export default {
  name: 'CityPanel',
  data() { 
    return {
      city: ""
    }
  },

  props: {
    msg: String
  }
}

</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}

button.ui.button{
color: black;
    font-size: 14pt;
    background: white;
    -webkit-box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
    box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
    padding: 30px;
    margin-bottom: 20px;
    width: 20vw;
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
