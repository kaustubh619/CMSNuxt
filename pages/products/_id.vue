<template>
  <div>
    <div id="breadcrum-inner-block">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 text-center">
            <div class="breadcrum-inner-header">
              <h1>{{ product_name }}</h1>
              <nuxt-link to="/">Home</nuxt-link>
              <i class="fa fa-circle"></i>
              <nuxt-link to>
                <span>Product Details</span>
              </nuxt-link>
              <div style="margin-top: 20px; color: white">
                <p class="contact_number">
                  <i class="fa fa-angle-double-right fa-custom"></i>
                  Stage - {{ stage }}
                </p>
                <p class="contact_number">
                  <i class="fa fa-registered fa-custom"></i>
                  Registered to {{ startup }}
                </p>
                <p class="location">
                  <i class="fa fa-map-marker fa-custom"></i>
                  Location - {{ city }}, {{ country }}
                </p>
                <p class="location">
                  <i class="fa fa-link fa-custom"></i>
                  App Link -
                  <a :href="app_link" target="_blank" class="app-link">
                    {{ app_link }}
                  </a>
                </p>
                <p class="contact_number">
                  <i class="fa fa-users fa-custom"></i>
                  Number of active users - {{ users }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="dashboard_inner_block">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <div class="col-md-12 all-categorie-list-title bt_heading_3">
              <h1>
                Product
                <span>Description</span>
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
              <!-- <div class="col-md-3 col-sm-4 col-xs-12">
                <div class="dashboard_nav_item row" style="padding: 10px;">
                  <ul>
                    <li>
                      <nuxt-link to="/startup/submit_listing">
                        <i class="fa fa-users"></i> Submit Startup
                      </nuxt-link>
                    </li>
                    <li class="active">
                      <nuxt-link to="/startup/listing">
                        <i class="fa fa-list-ul"></i> My Listing
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/user/user_profile">
                        <i class="fa fa-user"></i> Edit Profile
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/user/change_password">
                        <i class="fa fa-list-ul"></i> Change Password
                      </nuxt-link>
                    </li>
                    <li>
                      <a @click="logOutUser" style="cursor: pointer">
                        <i class="fa fa-sign-out"></i> Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </div>-->
              <div class="col-xs-12 col-md-offset-1 col-md-10">
                <!-- col-md-9 col-sm-8  -->
                <div class="submit_listing_box">
                  <div
                    id="editor-container"
                    style="background-color: white"
                  ></div>
                  <!-- <div v-for="(item, i) in post" :key="i">
                    <p v-for="(j, k) in item" :key="k">
                      <span v-if="!j.insert.image" :style="j.attributes">{{
                        j.insert
                      }}</span>
                      <img :src="j.insert.image" />
                    </p>

                    <post-image v-if="item.type === 'image'" :data="item" />
                    <post-heading v-if="item.type === 'header'" :data="item" />
                    <post-paragraph
                      v-if="item.type === 'paragraph'"
                      :data="item"
                    />
                    <post-list v-if="item.type === 'list'" :data="item" />
                  </div> -->
                  <h3>Product Video</h3>
                  <video
                    id="player"
                    poster="../images/pro_img.jpg"
                    playsinline
                    controls
                    style="width: 100%;"
                  >
                    <source :src="product_video" type="video/mp4" />
                    <source :src="product_video" type="video/webm" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <h4 v-if="pro_bool">Product Updates</h4>
              <h4 v-else>No Product Updates</h4>
              <ul>
                <li v-for="(x, y) in update_list" :key="y">
                  <nuxt-link
                    style="font-size: 20px"
                    :to="{ name: 'products-updates-id', params: { id: x.id } }"
                    class="update-class"
                    >Date Added: {{ x.added_date }}</nuxt-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
  import Cookies from "js-cookie";
  import PostImage from "~/components/Image.vue";
  import PostHeading from "~/components/Heading.vue";
  import PostParagraph from "~/components/Paragraph.vue";
  import PostList from "~/components/List.vue";
  let player;
  export default {
    components: { PostImage, PostHeading, PostParagraph, PostList },
    data() {
      return {
        post: [],
        product_name: "",
        city: "",
        country: "",
        startup: "",
        stage: "",
        users: "",
        app_link: "",
        product_video: "",
        update_list: [],
        pro_bool: true
      };
    },
    computed: {
      authentication: {
        get: function() {
          return this.$store.state.authentication;
        }
      }
    },
    mounted() {
      this.productById();
      this.getUpdates();
      $("#user_profile")
        .addClass("active")
        .siblings()
        .removeClass("active");
    },
    methods: {
      logOutUser: function() {
        var payload = new FormData();
        payload.append("login_status", "false");
        this.$store.dispatch("logOutUser", payload).then(res => {});
        localStorage.clear();
        Cookies.remove("x-access-token");
        this.$store.commit("authentication", false);
        this.$router.push("/");
      },
      productById: function() {
        this.$store.dispatch("productById", this.$route.params.id).then(res => {
          this.post = JSON.parse(res.data.description);
          this.product_name = res.data.product_name;
          this.city = res.data.startup_name.city;
          this.country = res.data.startup_name.country;
          this.startup = res.data.startup_name.name;
          this.stage = res.data.stage;
          this.users = res.data.active_users;
          this.app_link = res.data.product_app_link;
          this.product_video = res.data.product_video;
          var quill = new Quill("#editor-container", {
            modules: { toolbar: [] },
            readOnly: true,
            theme: "bubble"
          });
          quill.setContents(this.post);
          setTimeout(function() {
            player = new Plyr("#player");
          }, 1000);
        });
      },

      getUpdates: function() {
        var payload = new FormData();
        payload.append("id", this.$route.params.id);
        this.$store.dispatch("getUpdates", payload).then(res => {
          this.update_list = res.data;
          if (res.data.length == 0) {
            this.pro_bool = false;
          }
        });
      }
    }
  };
</script>

<style>
.header_slt_block .user_logo_pic {
  background: transparent;
  width: 0px;
}
.slt_item_contant {
  position: relative;
  left: 10px;
}

.app-link {
  text-decoration: none;
  color: white;
}

.app-link:hover {
  color: #ffce10;
}

.app-link:active {
  color: white;
}

.app-link:focus {
  color: white;
}

.submit_listing_box h3 {
  border-bottom: 0px;
  margin-bottom: 0px;
  margin-top: 30px;
}

.link-class {
  background-color: #ffce10;
  padding: 10px;
  color: black;
  float: right;
  border-radius: 5px;
}

.link-class:hover {
  color: white;
  background-color: black;
}

.update-class {
  color: grey;
}
.update-class:hover {
  color: #ffce10;
}

.edit-class {
  margin-left: 20px;
  font-size: 20px;
  background-color: black;
  padding: 5px 10px;
  color: white;
  border-radius: 50%;
}

.edit-class:hover {
  background-color: #ffce10;
  color: black;
}
</style>
