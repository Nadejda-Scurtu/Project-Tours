<template>
  <div>
  <header-navbar />
  <slider-tours/>
  <footer-tours/>
  </div>
 </template>
 
 <script>
 import HeaderNavbar from "./header/HeaderNavbar.vue";
 import SliderTours from "./slider/SliderTours.vue";
 import FooterTours from "./footer/FooterTours.vue"
 
 export default {
   components: {
     HeaderNavbar,
     SliderTours,
     FooterTours
   },
 };
 </script>
