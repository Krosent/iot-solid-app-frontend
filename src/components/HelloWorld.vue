<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Work in Progress
    </p>
    <div id="authorization-container">
      <button onclick="">Authorize to Solid POD</button>
    </div>
  </div>
</template>

<script>


import Vue from "vue";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}


new Vue({
  el: '#authorization-container',
  methods: {
    say: function (message) {
      console.log(message)
    }
  }
})

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
