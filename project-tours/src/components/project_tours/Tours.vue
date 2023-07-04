<template>
  <div id="tours">
    <header-navbar/>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderNavbar from "./header/HeaderNavbar.vue";

export default {
  name: "ToursHome",
  components: {
    HeaderNavbar
  },
};
</script>

<style>
#tours {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
