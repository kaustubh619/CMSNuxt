<template>
  <div class="sk-cube-grid" v-if="loading_bool">
    <div class="sk-cube sk-cube1"></div>
    <div class="sk-cube sk-cube2"></div>
    <div class="sk-cube sk-cube3"></div>
    <div class="sk-cube sk-cube4"></div>
    <div class="sk-cube sk-cube5"></div>
    <div class="sk-cube sk-cube6"></div>
    <div class="sk-cube sk-cube7"></div>
    <div class="sk-cube sk-cube8"></div>
    <div class="sk-cube sk-cube9"></div>
  </div>
  <div v-else>
    <div id="breadcrum-inner-block">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 text-center">
            <div class="breadcrum-inner-header">
              <h1>Featured Listing</h1>
              <nuxt-link to="/">Home</nuxt-link>
              <i class="fa fa-circle"></i>
              <a href="#">
                <span>Featured Listing</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="vfx-product-inner-item">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <div class="row">
              <h4 class="col-xs-12" style="letter-spacing: 1px;">
                <span style="color: #ffce10">Featured</span> Startups, Total
                {{ length }} <span style="color: #ffce10">results</span> found

                <hr />
              </h4>
              <div
                class="col-xs-12 col-sm-6"
                v-for="(x, y) in featuredList"
                :key="y"
              >
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
                        <p style="min-height: 88px">
                          {{ x.description.slice(0, 100) }}.....
                        </p>
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
    <Auth />
  </div>
</template>

<script>
  import Auth from "~/components/authentication.vue";
  export default {
    components: {
      Auth
    },
    data() {
      return {
        featuredList: [],
        loading_bool: true,
        length: ""
      };
    },
    mounted() {
      $("#user_profile")
        .addClass("active")
        .siblings()
        .removeClass("active");
      this.getFeaturedStartups();
    },
    methods: {
      getFeaturedStartups: function() {
        this.$store.dispatch("getFeaturedStartups").then(res => {
          console.log(res.data);
          this.featuredList = res.data.reverse();
          this.loading_bool = false;
          this.length = res.data.length;
        });
        // this.getCategories();
      }
    }
  };
</script>

<style scoped>
</style>