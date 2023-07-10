<template>
  <div>
    <b-carousel
      id="carousel-1"
      
      :interval="400000"
      controls
      indicators
      background="#ababab"
      img-width="1440"
      img-height="800"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide v-for="(slide, index) in slides" :key="index">
        <template #img>
        <div >
          <div class="position-absolute">
          <h3 class="slide-header">{{ slide.head }}</h3>
          <p class="slide-paragraph" v-if="slide.desc" > {{ slide.desc }}</p>
          <div >
          
        </div>
      </div>
          <b-button variant="link" :href="slide.link" class="link-slider">{{ slide.text }} 
            <b-icon-arrow-right icon="b-icon-arrow-right" class="align-self-center icon-right"  >
            </b-icon-arrow-right>
          </b-button>
          <img
            class="d-block img-fluid"
            style=" object-fit: contain; height: 100%;"
            width=100%
            :src="slide.imag"
            alt="image slot"
          />
        </div>
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
import image1 from "@/assets/slider-image1.jpg"
import image2 from "@/assets/slider-image2.jpg"
import image3 from "@/assets/slider-image3.jpg"
import image4 from "@/assets/slider-image4.jpg"
import image5 from "@/assets/slider-image5.jpg"

import { BIconArrowRight } from "bootstrap-vue";

export default {
  data() {
    return {
      slides: [
        {imag: image1, head:"It’s time travelling", desc: "", text: 'Plan your trip', link: "/"},
        {imag: image2, head:"Discover the world, equip your adventure!", desc: "You will find everything you need for thrilling adventures and comfortable travel. We offer a wide range of high-quality products designed for travelers enthusiasts.", text: 'Prepare to your trip', link: "/shop"},
        {imag: image3, head:"Welcome to Canada: The Great North!", desc: "Open the doors to a world where breathtaking nature and rich cultural heritage blend together.", text: 'Plan your trip', link: "/"},
        {imag: image4, head:"Hiking: Ascending to New Heights", desc: "We offer a unique opportunity to appreciate the beauty of the wilderness, explore uncharted trails, and get acquainted with local ecosystems.", text: 'Plan your trip', link: "/"},
        {imag: image5, head:"Journey to the Waterfall", desc: "Its mighty cascade, falling from great heights, creates a deafening roar and an awe-inspiring spectacle. You will witness a natural wonder that will leave you with unforgettable memories.", text: 'Plan your trip', link: "/"},
      ],
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = true;
    },
  },
  components: {
    BIconArrowRight
  }
};
</script>

<style>
.carousel-indicators li {
  box-sizing: content-box;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  width: 30px;
  height: 3px;
  margin-right: 3px;
  margin-left: 3px;
  text-indent: -999px;
  cursor: pointer;
  background-color: #fff;
  background-clip: padding-box;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  opacity: 0.5;
  transition: opacity 0.6s ease;
  font-size: 0px;
}
.carousel-control-next,
.carousel-control-prev {
  font-size: 0;
  width: 5%;
}
.active.carousel-item-right,
.carousel-item-next:not(.carousel-item-left) {
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
}
.active.carousel-item-left,
.carousel-item-prev:not(.carousel-item-right) {
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%);
}


.link-slider:hover {
  text-decoration: underline;
  color: rgb(255, 255, 255);
}
.icon-right {
  margin-left: 10px;
}
/* Пример адаптивных стилей для мобильных устройств */
@media (max-width: 768px) {
  .link-slider {
    position: fixed;
    flex-direction: column;
    align-items: flex-start;
    font-size: 20px;
  }

  .icon-right {
    margin-left: 10px;
    margin-top: 15px;
  }
}


.slide-custom-text {
  position: absolute;
  top: 16%;
  left: 37%;
  transform: translate(-50%, -50%);
  text-align: left;
  color: white;
}

.slide-header {
  font-size: 60px;
  margin-bottom: 10px;
  width: 150%;
  text-align: left;
}

.slide-paragraph {
  font-size: 28px;
  margin-bottom: 10px;
  background-color: rgba(255, 255, 255, 0.2);
  padding:10px;
  border-radius: 0.5rem;
  width: 50%;
  text-align: left;
}
.position-absolute {
    position: absolute !important;
    /* margin-left: 4%; */
    margin-inline-start: 5%;
    margin-top: 3%;
}

.link-slider {
  width: 400px;
  text-align: left;
  left: 18%;
  top: 87%;
  position: absolute;
  transform: translateX(-50%);
  text-decoration: none;
  color: white;
  font-size: 32px;
}


</style>
