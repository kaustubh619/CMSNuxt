<template>
  <div>
    <div id="breadcrum-inner-block">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 text-center">
            <div class="breadcrum-inner-header">
              <h1>About Us</h1>
              <span>
                <nuxt-link to="/">Home</nuxt-link>
              </span>
              <i class="fa fa-circle"></i>
              <nuxt-link to="about">
                <span>About Us</span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="about-company">
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-12 col-xs-12 v-center">
            <div class="about-heading-title bt_heading_3">
              <h1>
                About
                <span>Company</span>
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
            <div v-for="(item, i) in post" :key="i">
              <post-paragraph v-if="item.type === 'paragraph'" :data="item" />
              <post-list v-if="item.type === 'list'" :data="item" />
            </div>
          </div>
          <div class="col-md-4 col-sm-12 col-xs-12 user-lt-above">
            <img :src="image_url" alt="about-user" />
          </div>
        </div>
      </div>
    </div>
    <div class="vfx-counter-block">
      <div
        class="vfx-item-container-slope vfx-item-bottom-slope vfx-item-left-slope"
      ></div>
      <div class="container">
        <div class="vfx-item-counter-up">
          <div class="row">
            <div class="col-md-4 col-sm-4 col-xs-12">
              <div class="vfx-item-countup">
                <div class="vfx-item-black-top-arrow">
                  <i class="fa fa-file"></i>
                </div>
                <div
                  id="count-1"
                  class="vfx-coutter-item count_number vfx-item-count-up"
                >
                  4960
                </div>
                <div class="counter_text">Listings</div>
              </div>
            </div>
            <div class="col-md-4 col-sm-4 col-xs-12">
              <div
                class="vfx-item-countup"
                style="display:block; margin-left:auto; margin-right: auto"
              >
                <div class="vfx-item-black-top-arrow">
                  <i class="fa fa-users"></i>
                </div>
                <div
                  id="count-2"
                  class="vfx-coutter-item count_number vfx-item-count-up"
                >
                  2450
                </div>
                <div class="counter_text">Users</div>
              </div>
            </div>
            <div class="col-md-4 col-sm-4 col-xs-12">
              <div
                class="vfx-item-countup"
                style="display: block; margin-left:auto"
              >
                <div class="vfx-item-black-top-arrow">
                  <i class="fa fa-th"></i>
                </div>
                <div
                  id="count-3"
                  class="vfx-coutter-item count_number vfx-item-count-up"
                >
                  8
                </div>
                <div class="counter_text">Categories</div>
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
  import PostParagraph from "~/components/Paragraph.vue";
  import PostList from "~/components/List.vue";
  export default {
    components: {
      Auth,
      PostParagraph,
      PostList
    },
    data() {
      return {
        post: [],
        image_url: ""
      };
    },
    mounted() {
      this.activatedAboutCMS();
      $("#about")
        .addClass("active")
        .siblings()
        .removeClass("active");
    },
    methods: {
      activatedAboutCMS: function() {
        this.$store.dispatch("activatedAboutCMS").then(res => {
          res.data.map(item => {
            this.post = JSON.parse(item.about_info);
            this.image_url = item.about_image;
          });
        });
      }
    }
  };
</script>

<style>
</style>
