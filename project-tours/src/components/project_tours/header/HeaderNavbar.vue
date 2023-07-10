<template>
  <div>
    <b-navbar class="wider-navbar">
      <b-navbar-nav class="d-flex" justify-content-between style="width: 100%">
        <b-row style="width: 100%">
          <b-col cols="3 d-flex" >
            <b-nav-item class="b-nav-item-dropdown" href="/">
              <div>
              <img src="@/assets/logo-1.png" alt="Логотип" width="200">
              </div>
            </b-nav-item>
          </b-col>
          <b-col cols="7 d-flex justify-content-center">
            <b-nav-item-dropdown text="Trips" class="b-nav-item-dropdown">
              <b-dropdown-item href="#">Last minute tours</b-dropdown-item>
              <b-dropdown-item href="#">Upcoming tours</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown
              text="Destinations"
              right
              class="b-nav-item-dropdown">
              <b-dropdown-item href="#">Africa</b-dropdown-item>
              <b-dropdown-item href="#">Asia</b-dropdown-item>
              <b-dropdown-item href="#">Australia</b-dropdown-item>
              <b-dropdown-item href="#">Europe</b-dropdown-item>
              <b-dropdown-item href="#">North America</b-dropdown-item>
              <b-dropdown-item href="#">South America</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown text="Travel styles" class="b-nav-item-dropdown">
              <b-dropdown-item href="#">Outdoor activities</b-dropdown-item>
              <b-dropdown-item href="#">Ocean trips</b-dropdown-item>
              <b-dropdown-item href="#">Desert trips</b-dropdown-item>
              <b-dropdown-item href="#">Hiking</b-dropdown-item>
              <b-dropdown-item href="#">Ski</b-dropdown-item>
              <b-dropdown-item href="#">Honeymoons</b-dropdown-item>
              <b-dropdown-item href="#">Family trips</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item class="b-nav-item-custom d-flex justify-content-center" href="#"
              ><div class="b-nav-item-custom">About us</div></b-nav-item
            ></b-col>
          
          <b-col class="d-flex justify-content-center" cols="1" >
            <b-nav-item href="#" class="b-nav-item-custom text-nowrap"
              ><b-button class="custom-button d-flex text-center"
                ><div> 
                  <b-icon-handbag></b-icon-handbag> Go shopping
                </div></b-button
              ></b-nav-item>
          </b-col>
          <b-col class="d-flex justify-content-center" cols="1" >
            <b-nav-item class="b-nav-item-custom text-nowrap d-flex" href="#">
            <div class="b-nav-item-custom ">
            <b-icon-box-arrow-in-right icon="box-arrow-in-right" class="align-self-center" 
            style="margin-right: 8px"></b-icon-box-arrow-in-right>
              Log in</div></b-nav-item>
          </b-col>
        </b-row>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import { BIconBoxArrowInRight,BIconHandbag } from "bootstrap-vue";

export default {
  components: {
    BIconHandbag,
    BIconBoxArrowInRight
  },
};
</script>

<style>
.wider-navbar {
  width: 100%;
  height: 80px;
  margin: 0 auto;
  background-color: rgba(0,0,0,0);
  position: fixed;
  top:0;
  left:0;
  z-index: 999;
}
.b-nav-item-dropdown {
  margin-right: 15px;
  margin-left: 20px;
  font-size: 17px;
  display: flex;
  align-self: center;
  color: beige;
}
.b-nav-item-dropdown .dropdown-menu {
  position: absolute;
  top: 100%;
  margin-top: 5px;
}
.b-nav-item-dropdown .dropdown-menu a:hover {
  background-color:rgba(177, 184, 134, 1);
}
.b-nav-item-custom{
  font-size: 17px;
  display: flex;
  align-self: center;
  color: beige;
}

.b-nav-item-custom:hover{
  color: rgb(126, 126, 126);
}
.b-nav-item-dropdown .dropdown-toggle {
  color: rgb(252, 252, 249);
}
.b-nav-item-dropdown:hover .dropdown-toggle {
  color: rgb(126, 126, 126);
}
.custom-button {
  border-radius: 1.5rem;
  background-color: white;
  width: 110%;
  place-content: center;
  border: 1px solid transparent;
  color: black;
}
.custom-button:hover {
  background-color: rgb(22, 30, 23);
  border-color: rgb(22, 30, 23);
  color: white;
}

.custom-button {
  border-radius: 1.5rem;
  background-color: white;
  color: black;
  width: 110%;
  place-content: center;
}
.custom-button:hover {
  background-color: rgb(177, 184, 134);
  border-color: rgb(177, 184, 134);
  color: rgb(0, 0, 0);
}
.custom-button:not(:disabled):not(.disabled).active,
.custom-button:not(:disabled):not(.disabled):active,
.show > .custom-button.dropdown-toggle {
  background-color: rgb(22, 30, 23);
  border-color: rgb(22, 30, 23);
  color: rgb(255, 255, 255);
}
</style>
