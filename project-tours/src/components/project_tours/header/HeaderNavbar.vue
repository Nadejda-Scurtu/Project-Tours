<template>
  <div>
    <b-navbar type="dark" variant="dark" class="wider-navbar">
      <b-navbar-nav class="d-flex" justify-content-between style="width: 100%">
        <b-row style="width: 100%">
          <b-col cols="3">
            <b-nav-item class="b-nav-item-dropdown" href="/home"
              >Logo</b-nav-item
            >
          </b-col>
          <b-col cols="1">
            <b-nav-item-dropdown text="Trips" class="b-nav-item-dropdown">
              <b-dropdown-item href="#">Last minute tours</b-dropdown-item>
              <b-dropdown-item href="#">Upcoming tours</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-col>
          <b-col cols="1">
            <b-nav-item-dropdown
              text="Countries"
              right
              class="b-nav-item-dropdown"
            >
              <b-dropdown-item href="#">Romania</b-dropdown-item>
              <b-dropdown-item href="#">Republic of Moldova</b-dropdown-item>
              <b-dropdown-item href="#">Italy</b-dropdown-item>
              <b-dropdown-item href="#">Spain</b-dropdown-item>
            </b-nav-item-dropdown></b-col
          >
          <b-col cols="1">
            <b-nav-item class="b-nav-item-dropdown" href="#">Blog</b-nav-item>
          </b-col>
          <b-col cols="1">
            <b-nav-item class="b-nav-item-dropdown" href="#"
              >Contacts</b-nav-item
            ></b-col
          >
          <b-col cols="2">
            <b-nav-item class="b-nav-item-dropdown" href="#"
              >About us</b-nav-item
            ></b-col
          >
          <b-col class="d-flex" cols="1">
            <b-icon-geo-alt icon="geo-alt" class="align-self-center"></b-icon-geo-alt>
            <b-nav-item class="b-nav-item-dropdown m-0" href="#"
              > Location</b-nav-item
            >
          </b-col>
          <b-col cols="1">
            <b-nav-item class="b-nav-item-dropdown " href="#">Number</b-nav-item>
          </b-col>
          <b-col cols="1">
            <b-nav-item class="b-nav-item-dropdown" href="#">Log in</b-nav-item>
          </b-col>
        </b-row>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import {BIconGeoAlt} from 'bootstrap-vue';

export default{
  components: {
    
   BIconGeoAlt
  }
}
</script>

<style>
.wider-navbar {
  width: 100%;
  height: 90px;
  max-width: 2000px;
  margin: 0 auto;
}
.b-nav-item-dropdown {
  margin-right: 10px;
  margin-left: 15px;
  font-size: 18px;
  display: flex
}
.b-nav-items {
  margin-right: 10px;
  margin-left: 15px;
  font-size: 18px;
  display: flex
}
.b-nav-item-dropdown .dropdown-toggle {
  color: #ffffff;
  
}
.b-nav-item-dropdown:hover .dropdown-toggle {
  color: #4a90e2;
}
</style>