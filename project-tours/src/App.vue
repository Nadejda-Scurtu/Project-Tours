<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <header-navbar/>
  </div>
</template>

<script>
import HeaderNavbar from './components/project_tours/header/HeaderNavbar.vue'

export default {
  name: 'App',
  components: {
    HeaderNavbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
