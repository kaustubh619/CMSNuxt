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
            <!-- <p class="inner-secon-tl">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.
              <br />
              <br />Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>-->
          </div>
          <div class="col-md-4 col-sm-12 col-xs-12 user-lt-above">
            <img :src="image_url" alt="about-user" />
          </div>
        </div>
      </div>
    </div>
    <!-- <div id="featured-service-block">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="service-item-fearured">
              <div class="svt-spec-service-icon hi-icon-effect-8">
                <i class="hi-icon fa fa-power-off faa-horizontal animated"></i>
              </div>
              <h3>Clean Design</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been dummy text.</p>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="service-item-fearured">
              <div class="svt-spec-service-icon hi-icon-effect-8">
                <i class="hi-icon fa fa-send faa-horizontal animated"></i>
              </div>
              <h3>Easy Customization</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been dummy text.</p>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="service-item-fearured">
              <div class="svt-spec-service-icon hi-icon-effect-8">
                <i class="hi-icon fa fa-map-marker faa-horizontal animated"></i>
              </div>
              <h3>Smart Search</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been dummy text.</p>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="service-item-fearured">
              <div class="svt-spec-service-icon hi-icon-effect-8">
                <i class="hi-icon fa fa-money faa-horizontal animated"></i>
              </div>
              <h3>Save Your Money</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been dummy text.</p>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="service-item-fearured">
              <div class="svt-spec-service-icon hi-icon-effect-8">
                <i class="hi-icon fa fa-paint-brush faa-horizontal animated"></i>
              </div>
              <h3>Friendly Interface</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been dummy text.</p>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="service-item-fearured">
              <div class="svt-spec-service-icon hi-icon-effect-8">
                <i class="hi-icon fa fa-comment faa-horizontal animated"></i>
              </div>
              <h3>Professinal Support</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been dummy text.</p>
            </div>
          </div>
        </div>
      </div>
    </div>-->
    <div class="vfx-counter-block">
      <div class="vfx-item-container-slope vfx-item-bottom-slope vfx-item-left-slope"></div>
      <div class="container">
        <div class="vfx-item-counter-up">
          <div class="row">
            <div class="col-md-4 col-sm-4 col-xs-12">
              <div class="vfx-item-countup">
                <div class="vfx-item-black-top-arrow">
                  <i class="fa fa-file"></i>
                </div>
                <div id="count-1" class="vfx-coutter-item count_number vfx-item-count-up">4960</div>
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
                <div id="count-2" class="vfx-coutter-item count_number vfx-item-count-up">2450</div>
                <div class="counter_text">Users</div>
              </div>
            </div>
            <div class="col-md-4 col-sm-4 col-xs-12">
              <div class="vfx-item-countup" style="display: block; margin-left:auto">
                <div class="vfx-item-black-top-arrow">
                  <i class="fa fa-th"></i>
                </div>
                <div id="count-3" class="vfx-coutter-item count_number vfx-item-count-up">8</div>
                <div class="counter_text">Categories</div>
              </div>
            </div>
            <!-- <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="vfx-item-countup last-countup">
            <div class="vfx-item-black-top-arrow"><i class="fa fa-th-list"></i></div>
            <div id="count-4" class="vfx-coutter-item count_number vfx-item-count-up">274</div>
            <div class="counter_text">Listings Types</div>
          </div>
            </div>-->
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
