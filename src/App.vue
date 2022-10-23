<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  margin: 0;
  padding: 0;
  background: rgba(248, 252, 255, 1);
}

.none {
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 12px;
  color: #999;
}
</style>
