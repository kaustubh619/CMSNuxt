<template>
  <div id="recent-product-item-listing">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 text-center">
          <div class="col-md-12 recent-item-listing-heading bt_heading_3">
            <h1>
              Featured
              <span>Listing</span>
            </h1>
            <div class="blind line_1"></div>
            <div class="flipInX-1 blind icon">
              <span class="icon">
                <i class="fa fa-stop"></i>&nbsp;&nbsp;
                <i class="fa fa-stop"></i>
              </span>
            </div>
            <div class="blind line_2"></div>
          </div>
          <div class="row">
            <div class="col-md-6 col-sm-6 col-xs-12" v-for="(x, y) in featuredList" :key="y">
              <div class="recent-listing-box-container-item">
                <div class="col-md-6 col-sm-12 nopadding">
                  <div class="recent-listing-box-image">
                    <h1>{{ x.category.category }}</h1>
                    <img :src="x.thumbnail" alt="img1" class="thumb-img" />
                  </div>
                  <div class="hover-overlay">
                    <div class="hover-overlay-inner">
                      <ul class="listing-links">
                        <li>
                          <a href="#">
                            <i class="fa fa-heart green-1"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-map-marker blue-1"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-share yallow-1"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-sm-12 nopadding">
                  <div class="recent-listing-box-item">
                    <div class="listing-boxes-text">
                      <nuxt-link
                        :to="{
                            name: 'startup-details-id',
                            params: { id: x.id }
                          }"
                      >
                        <h3>{{ x.name }}</h3>
                      </nuxt-link>
                      <a>
                        <i class="fa fa-calendar"></i>
                        {{ x.date_of_launch }}
                      </a>
                      <p style="min-height: 88px">{{ x.description.slice(0, 100) }}.....</p>
                    </div>
                    <div class="recent-feature-item-rating">
                      <h2>
                        <i class="fa fa-map-marker"></i>
                        {{ x.country }}
                      </h2>
                      <span>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-o"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["featuredList"]
};
</script>

<style>
</style>
