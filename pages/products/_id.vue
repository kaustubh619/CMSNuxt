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
              <div class="col-xs-12">
                <div class="row">
                  <div class="col-12 col-sm-8">
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
                  <div class="col-12 col-sm-4">
                    <hr style="margin-top: 0px; border: 3px solid #009e74" />

                    <p class="st-text-1">{{ startup }}</p>
                    <p class="st-sub-text-1">
                      <i class="fa fa-registered" style="color: #009e74"></i>
                      registered to
                    </p>

                    <p class="st-text-2">{{ stage }}</p>
                    <p class="st-sub-text-2">
                      <i
                        class="fa fa-angle-double-right"
                        aria-hidden="true"
                        style="color: #009e74"
                      ></i>
                      stage
                    </p>

                    <p class="st-text-3">{{ product_name }}</p>
                    <p class="st-sub-text-3">
                      <i
                        class="fa fa-product-hunt"
                        aria-hidden="true"
                        style="color: #009e74"
                      ></i>
                      product name
                    </p>

                    <p class="st-text-2">{{ product_cat }}</p>
                    <p class="st-sub-text-2">
                      <i class="fa fa-database" style="color: #009e74"></i>
                      category
                    </p>

                    <p class="st-text-2">{{ app_link }}</p>
                    <p class="st-sub-text-2">
                      <i class="fa fa-link" style="color: #009e74"></i>
                      website/app link
                    </p>

                    <p class="st-text-2">{{ date_added }}</p>
                    <p class="st-sub-text-2">
                      <i
                        class="fa fa-calendar"
                        aria-hidden="true"
                        style="color: #009e74"
                      ></i>
                      date added
                    </p>

                    <p class="st-text-2">{{ users }}</p>
                    <p class="st-sub-text-2">
                      <i class="fa fa-users" style="color: #009e74"></i> number
                      of users/downloads
                    </p>
                    <button class="st-btn-11">Button</button>
                  </div>
                </div>

                <div class="row">
                  <div class="col-12 hide-lg-product">
                    <div class="tab">
                      <button
                        class="tablinks"
                        id="product"
                        @click="openbtn('description')"
                      >
                        Details
                      </button>
                      <button
                        class="tablinks"
                        id="faq"
                        @click="openbtn('reviews')"
                      >
                        Updates
                      </button>
                      <button
                        class="tablinks"
                        id="test"
                        @click="openbtn('testimonials')"
                      >
                        Testimonials
                      </button>
                      <button
                        class="tablinks"
                        id="rate"
                        @click="openbtn('rankings')"
                      >
                        Rankings/Ratings
                      </button>
                    </div>

                    <div id="description" class="tabcontent">
                      <div class="submit_listing_box">
                        <div
                          id="editor-container"
                          style="background-color: white"
                        ></div>
                      </div>
                    </div>

                    <div id="reviews" class="tabcontent">
                      <div v-if="pro_bool" class="submit_listing_box">
                        <p class="faq-11">No product updates available</p>
                      </div>
                      <div class="submit_listing_box">
                        <div
                          v-for="(l, m) in update_list"
                          :key="m"
                          class="my-style"
                        >
                          <h1 style="border: none">
                            <span
                              style="color: #009e74; text-shadow: 2px 3px #e7e7e7; display: block"
                              >Product Update
                            </span>
                            <i
                              class="fa fa-calendar"
                              style="color: #009e74"
                            ></i>
                            <span
                              style="color: #009e74; text-shadow: 2px 2px #e7e7e7"
                              >Added Date: {{ l.added_date }}</span
                            >
                            <video
                              id="player"
                              poster="../../../images/pro_img.jpg"
                              playsinline
                              controls
                              style="margin-top: 20px; display: block; margin-left: auto; margin-right: auto"
                              class="video-width"
                            >
                              <source :src="l.update_video" type="video/mp4" />
                              <source :src="l.update_video" type="video/webm" />
                            </video>
                          </h1>
                          <div class="update-container"></div>
                        </div>
                      </div>
                    </div>

                    <div id="testimonials" class="tabcontent">
                      <div class="submit_listing_box">
                        <p class="faq-11">Section to be added soon</p>
                      </div>
                    </div>

                    <div id="rankings" class="tabcontent">
                      <div class="submit_listing_box">
                        <p class="faq-11">Section to be added soon</p>
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
    async asyncData(ctx) {
      const payload = new FormData();
      payload.append("id", ctx.route.params.id);
      const res = await ctx.store.dispatch("getUpdates", payload);
      return { update_list: res.data };
    },
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
        pro_bool: true,
        date_added: "",
        product_cat: ""
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
      $(".tablinks").click(function() {
        var id = $(this).attr("id");

        $("#" + id)
          .addClass("btn-activated")
          .siblings()
          .removeClass("btn-activated");
      });
      document.getElementById("product").click();
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
          this.date_added = res.data.added_date;
          this.product_cat = res.data.startup_name.category.category;
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
          if (res.data.length == 0) {
            this.pro_bool = true;
          } else {
            this.pro_bool = false;
          }
        });
        let item;
        const items = document.querySelectorAll(".update-container");
        items.forEach((item, i) => {
          const quill = new Quill(item, {
            modules: { toolbar: [] },
            readOnly: true,
            theme: "bubble"
          });

          quill.setContents(JSON.parse(this.update_list[i].latest_updates));
        });
      },

      openbtn: function(btnName) {
        var i, tabcontent, tablinks;

        tabcontent = document.getElementsByClassName("tabcontent");

        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }

        document.getElementById(btnName).style.display = "block";
      }
    }
  };
</script>

<style scoped>
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

.submit_listing_box {
  background: transparent !important;
  border: none;
  box-shadow: none;
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

.product-slider {
  padding: 45px;
}

.product-slider #carousel {
  border: 4px solid #1089c0;
  margin: 0;
}

.product-slider #thumbcarousel {
  margin: 12px 0 0;
  padding: 0 45px;
}

.product-slider #thumbcarousel .item {
  text-align: center;
}

.product-slider #thumbcarousel .item .thumb {
  border: 4px solid #cecece;
  width: 20%;
  margin: 0 2%;
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
  max-width: 98px;
}

.product-slider #thumbcarousel .item .thumb:hover {
  border-color: #1089c0;
}

.product-slider .item img {
  width: 100%;
  height: auto;
}

.carousel-control {
  color: #0284b8;
  text-align: center;
  text-shadow: none;
  font-size: 30px;
  width: 30px;
  height: 30px;
  line-height: 20px;
  top: 23%;
}

.carousel-control:hover,
.carousel-control:focus,
.carousel-control:active {
  color: #333;
}

.carousel-caption,
.carousel-control .fa {
  font: normal normal normal 30px/26px FontAwesome;
}
.carousel-control {
  background-color: rgba(0, 0, 0, 0);
  bottom: auto;
  font-size: 20px;
  left: 0;
  position: absolute;
  top: 30%;
  width: auto;
}

.carousel-control.right,
.carousel-control.left {
  background-color: rgba(0, 0, 0, 0);
  background-image: none;
}

.header-st-1 {
  text-align: center;
  font-size: 26px;

  font-family: GothamRounded;
}

.all-categorie-list-title {
  margin-bottom: 25px;
}

.st-text-1 {
  color: grey;
  font-size: 18px;
  margin-bottom: 0px;
  font-weight: 500;
  text-align: left;
}

.st-sub-text-1 {
  color: grey;
  margin-bottom: 10px;
  text-align: left;
}

.st-sub-text-11 {
  color: grey;
  margin-bottom: 10px;
  text-align: left;
}

.st-text-2 {
  color: grey;
  font-size: 18px;
  margin-bottom: 0px;
  font-weight: 400;
  text-align: left;
}

.st-sub-text-2 {
  color: grey;
  margin-bottom: 10px;
  text-align: left;
}

.st-text-3 {
  color: grey;
  font-size: 18px;
  margin-bottom: 0px;
  font-weight: 400;
  text-align: left;
}

.st-sub-text-3 {
  color: grey;
  margin-bottom: 20px;
  text-align: left;
}

@media (min-width: 37.5em) and (max-width: 75em) {
  .st-text-1 {
    font-size: 14px;
  }

  .st-sub-text-1 {
    font-size: 12px;
  }

  .st-text-2 {
    font-size: 14px;
  }

  .st-sub-text-2 {
    font-size: 12px;
  }

  .st-text-3 {
    font-size: 14px;
  }

  .st-sub-text-3 {
    font-size: 12px;
  }
}

@media (max-width: 37.5em) {
  .st-text-1 {
    text-align: center;
  }
  .st-text-2 {
    text-align: center;
  }
  .st-text-3 {
    text-align: center;
  }
  .st-sub-text-1 {
    text-align: center;
  }
  .st-sub-text-2 {
    text-align: center;
  }
  .st-sub-text-3 {
    text-align: center;
  }
}

.st-btn-11 {
  margin-top: 20px;
  width: 100%;
  background-color: #009e74;
  border: none;
  padding: 15px 30px;
  color: white;
}

.st-btn-11:hover {
  background-color: #1eb48c;
  transform: scale(1.005);
}

.btn-activated {
  background-color: #009e74 !important;
  color: white;
}

.faq-11 {
  display: block;
  text-align: left;
  margin-top: 10px;
  font-weight: 300;
}

.tab {
  overflow: hidden;
  border-top: 1px solid #e7e7e7;
  border-bottom: 1px solid #e7e7e7;

  width: 100%;
  margin-top: 30px;
}

.tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 14px;
  font-weight: 300;
}

.tab button:hover {
  background-color: #1eb48c;
}

.tabcontent {
  display: none;
  padding: 0px !important;
  border-top: none;
  width: 100%;
  height: auto;
}

@media (max-width: 37.5em) {
  .tab button {
    font-size: 11px;
  }
}

.video-width {
  width: 50%;
  display: block;
}

@media (max-width: 37.5em) {
  .video-width {
    width: 100%;
  }
}

.my-style {
  background-color: #f9f9f9;
  transition: all 1s ease-in;
  margin: 0px;
  margin-bottom: 50px;
  padding: 10px;
}

.my-style:hover {
  background-color: white;
  box-shadow: 4px 4px 10px 0px #009e74;
}
</style>
