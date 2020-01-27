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
                              >Product Update</span
                            >
                            <i
                              class="fa fa-calendar"
                              style="color: #009e74"
                            ></i>
                            <span
                              style="color: #009e74; text-shadow: 2px 2px #e7e7e7"
                              >Added Date: {{ l.added_date }}</span
                            >
                          </h1>
                          <div class="row">
                            <div class="col-12 col-md-6">
                              <video
                                id="player"
                                poster="../../../images/pro_img.jpg"
                                playsinline
                                controls
                                style="margin-top: 20px; display: block; margin-left: auto; margin-right: auto; width: 100%"
                              >
                                <source
                                  :src="l.update_video"
                                  type="video/mp4"
                                />
                                <source
                                  :src="l.update_video"
                                  type="video/webm"
                                />
                              </video>
                            </div>
                            <div class="col-12 col-md-6">
                              <div class="update-container"></div>
                            </div>
                          </div>
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
                        <div class="faq-11">
                          <p style="font-size: 16px">Your Review</p>
                          <p style="font-size: 16px" v-if="auth_bool">
                            <span style="color: #009e74">Note:</span> Please
                            login to post your review
                          </p>
                          <div class="row" style="display: flex">
                            <div>
                              <img
                                :src="dp_url"
                                alt
                                style="width: 80px; height: 80px; border-radius: 50%; object-fit: contain"
                              />
                            </div>
                            <div>
                              <div style="display: block">
                                <p
                                  style="padding-left: 10px; padding-top: 10px"
                                >
                                  {{ username }}
                                </p>
                              </div>
                              <div
                                class="rating-stars text-center"
                                style="display: block"
                              >
                                <ul id="stars">
                                  <li
                                    class="star"
                                    title
                                    v-for="(x, y) in 5"
                                    :key="y"
                                    :value="y + 1"
                                    :id="y"
                                    @click="postUserRating(y)"
                                  >
                                    <i class="fa fa-star fa-fw"></i>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <p class="pHover" v-if="review_bool">
                              Write a review
                            </p>
                          </div>
                          <div class="row" id="review_box" v-if="review_bool">
                            <div>
                              <textarea
                                style="margin-left: 10px"
                                name
                                id
                                class="textAreaClass form-control"
                                rows="10"
                                v-model="review_content"
                              ></textarea>
                              <button
                                class="review_button"
                                @click="submitReview"
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                          <div v-else>
                            <div class="row">
                              <p style="padding-left: 10px" class="qwe">
                                {{ review_content }}
                              </p>
                              <button
                                class="review_button qwe"
                                @click="showHideBlock"
                              >
                                Edit Your Review
                              </button>
                            </div>
                            <div class="row show_hide_box">
                              <div style="display: inline">
                                <textarea
                                  style="margin-left: 10px"
                                  name
                                  id
                                  class="textAreaClass form-control"
                                  rows="10"
                                  v-model="review_content"
                                ></textarea>
                                <button
                                  class="review_button"
                                  @click="submitReview"
                                >
                                  Submit
                                </button>
                              </div>

                              <button
                                class="review_button"
                                @click="cancelReview"
                                style="background-color: #a45a52"
                              >
                                Cancel
                              </button>
                            </div>
                            
                          </div>
                          <div style="margin-top: 20px" class="myDiv2">
                              <div class="myDiv">
                                <p style="font-size: 40px; text-align: center; margin-top: 30px">
                                  {{ averageRating }}
                                </p>
                                <div class="star-ratings">
                                  <div
                                    class="fill-ratings"
                                    :style="{ width: `${avgPercent}%` }"
                                  >
                                    <span>★★★★★</span>
                                  </div>
                                  <div class="empty-ratings">
                                    <span>★★★★★</span>
                                  </div>
                                </div>
                                <p style="font-size: 24px; text-align: center; margin-top: 0px">
                                  <i class="fa fa-user"></i><span style="margin-left: 10px">{{ totalVotes }} Total</span>
                                </p>
                              </div>
                              <div>
                                <div
                                  class="container-fluid"
                                  style="display: flex"
                                >
                                  <p style="margin-right: 15px">1</p>
                                  <div class="progress">
                                    <div
                                      class="progress-bar"
                                      role="progressbar"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                      :style="{ width: `${width1}%` }"
                                    ></div>
                                  </div>
                                </div>
                                <div
                                  class="container-fluid"
                                  style="display: flex"
                                >
                                  <p style="margin-right: 10px">2</p>
                                  <div class="progress">
                                    <div
                                      class="progress-bar"
                                      role="progressbar"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                      :style="{ width: `${width2}%` }"
                                    ></div>
                                  </div>
                                </div>
                                <div
                                  class="container-fluid"
                                  style="display: flex"
                                >
                                  <p style="margin-right: 10px">3</p>
                                  <div class="progress">
                                    <div
                                      class="progress-bar"
                                      role="progressbar"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                      :style="{ width: `${width3}%` }"
                                    ></div>
                                  </div>
                                </div>
                                <div
                                  class="container-fluid"
                                  style="display: flex"
                                >
                                  <p style="margin-right: 10px">4</p>
                                  <div class="progress">
                                    <div
                                      class="progress-bar"
                                      role="progressbar"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                      :style="{ width: `${width4}%` }"
                                    ></div>
                                  </div>
                                </div>
                                <div
                                  class="container-fluid"
                                  style="display: flex"
                                >
                                  <p style="margin-right: 10px">5</p>
                                  <div class="progress">
                                    <div
                                      class="progress-bar"
                                      role="progressbar"
                                      aria-valuemin="0"
                                      aria-valuemax="100"
                                      :style="{ width: `${width5}%` }"
                                    ></div>
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
        product_cat: "",
        username: "",
        dp_url: "",
        review_content: "",
        review_bool: true,
        user_review: "",
        view_content: "",
        auth_bool: true,
        new_v: "",
        review1: [],
        review2: [],
        review3: [],
        review4: [],
        review5: [],
        width1: "",
        width2: "",
        width3: "",
        width4: "",
        width5: "",
        averageRating: "",
        avgPercent: "",
        totalVotes: ""
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
      this.allProductRatings();
      if (localStorage.getItem("bearer")) {
        this.auth_bool = false;
      }
      this.getUserRatings();
      // $("#review_box").css("display", "none");
      this.getUser();
      this.getUserAdditionalDetails();
      $("#stars li")
        .on("mouseover", function() {
          var onStar = parseInt($(this).data("value"), 10); // The star currently mouse on

          // Now highlight all the stars that's not after the current hovered star
          $(this)
            .parent()
            .children("li.star")
            .each(function(e) {
              if (e < onStar) {
                $(this).addClass("hover");
              } else {
                $(this).removeClass("hover");
              }
            });
        })
        .on("mouseout", function() {
          $(this)
            .parent()
            .children("li.star")
            .each(function(e) {
              $(this).removeClass("hover");
            });
        });

      /* 2. Action to perform on click */

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
      },

      getUser: function() {
        const id = localStorage.getItem("user_id");
        this.$store.dispatch("getUser", id).then(res => {
          this.username = res.data.username;
        });
      },

      getUserAdditionalDetails: function() {
        const id = localStorage.getItem("user_id");
        this.$store.dispatch("getUserAdditionalDetails", id).then(res => {
          this.dp_url = res.data.display_pic;
        });
      },

      getUserRatings: function() {
        this.$store
          .dispatch("getUserRatings", localStorage.getItem("user_id"))
          .then(res => {
            this.review_content = res.data.reviews;
            this.new_v = res.data.reviews;
            if (res.data.reviews) {
              this.review_bool = false;
            } else {
              console.log("no review");
            }
            var stars = $("#stars li")
              .parent()
              .children("li.star");
            let i;
            for (i = 0; i < res.data.ratings; i++) {
              $(stars[i]).addClass("selected");
            }
          });
      },

      postUserRating: function(id) {
        this.$store
          .dispatch("getUserRatings", localStorage.getItem("user_id"))
          .then(res => {
            let i;

            var onStar = parseInt($("#" + id).val(), 10);

            var stars = $("#stars li")
              .parent()
              .children("li.star");

            for (i = 0; i < stars.length; i++) {
              $(stars[i]).removeClass("selected");
            }

            for (i = 0; i < onStar; i++) {
              $(stars[i]).addClass("selected");
            }

            if (onStar > 0) {
              const payload = new FormData();
              const id = localStorage.getItem("user_id");
              payload.append("id", res.data.id);
              payload.append("user", id);
              payload.append("product", this.$route.params.id);
              payload.append("ratings", onStar);

              this.$store.dispatch("updateRatings", payload).then(res => {
                this.allProductRatings()
              });
            }
          })
          .catch(err => {
            if (err.response.status === 404) {
              let i;

              var onStar = parseInt($("#" + id).val(), 10);

              var stars = $("#stars li")
                .parent()
                .children("li.star");

              for (i = 0; i < stars.length; i++) {
                $(stars[i]).removeClass("selected");
              }

              for (i = 0; i < onStar; i++) {
                $(stars[i]).addClass("selected");
              }

              if (onStar > 0) {
                const payload = new FormData();
                const id = localStorage.getItem("user_id");
                payload.append("user", id);
                payload.append("product", this.$route.params.id);
                payload.append("ratings", onStar);

                this.$store.dispatch("postRating", payload);
              }
            }
          });
      },

      submitReview: function() {
        this.$store
          .dispatch("getUserRatings", localStorage.getItem("user_id"))
          .then(res => {
            const payL = new FormData();
            payL.append("id", res.data.id);
            payL.append("ratings", res.data.ratings);
            payL.append("reviews", this.review_content);
            payL.append("user", res.data.user);
            payL.append("product", res.data.product);
            this.$store.dispatch("updateRatings", payL).then(res => {
              alert("Your review is submitted");
            });
          });
      },

      showHideBlock: function() {
        $(".show_hide_box").css("display", "block");
        $(".qwe").css("display", "none");
      },

      cancelReview: function() {
        $(".show_hide_box").css("display", "none");
        $(".qwe").css("display", "block");
        this.review_content = this.new_v;
      },

      allProductRatings: function() {
        this.review1 = []
        this.review2 = []
        this.review3 = []
        this.review4 = []
        this.review5 = []
        this.$store.dispatch("allProductRatings").then(res => {
          this.totalVotes = res.data.length
          res.data.map(item => {
            if (item.ratings === 1) {
              this.review1.push(item);
            } else if (item.ratings === 2) {
              this.review2.push(item);
            } else if (item.ratings === 3) {
              this.review3.push(item);
            } else if (item.ratings === 4) {
              this.review4.push(item);
            } else if (item.ratings === 5) {
              this.review5.push(item);
            }
          });

          let p1 = this.review1.length;
          let p2 = this.review2.length;
          let p3 = this.review3.length;
          let p4 = this.review4.length;
          let p5 = this.review5.length;
          let ptotal = p1 + p2 + p3 + p4 + p5;
          this.width1 = (p1 / ptotal) * 100;
          this.width2 = (p2 / ptotal) * 100;
          this.width3 = (p3 / ptotal) * 100;
          this.width4 = (p4 / ptotal) * 100;
          this.width5 = (p5 / ptotal) * 100;

          let avg =
            (p1 * 1 + p2 * 2 + p3 * 3 + p4 * 4 + p5 * 5) /
            (p1 + p2 + p3 + p4 + p5);
          this.averageRating = avg.toFixed(2);
          this.avgPercent = (this.averageRating / 5) * 100;
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
  background-color: white;
  box-shadow: 4px 4px 10px 2px #e7e7e7;
  transition: all 1s ease-in;
  margin: 0px;
  margin-bottom: 50px;
  padding: 10px;
  border-radius: 20px;
}

.my-style:hover {
  box-shadow: 4px 4px 10px 2px #f7f7f7;
}

.ql-editor .h4,
.ql-editor h4 {
  font-size: 18px !important;
}

.ql-editor .h3,
.ql-editor h3 {
  font-size: 20px !important;
  margin: none;
  padding: 0px;
}

.ql-editor .h2,
.ql-editor h2 {
  font-size: 22px !important;
}

.ql-editor .h1,
.ql-editor h1 {
  font-size: 24px !important;
}

.ql-editor p {
  font-size: 16px;
}

.rating-stars ul {
  list-style-type: none;
  padding: 0;

  -moz-user-select: none;
  -webkit-user-select: none;
}
.rating-stars ul > li.star {
  display: inline-block;
}

/* Idle State of the stars */
.rating-stars ul > li.star > i.fa {
  font-size: 2.5em; /* Change the size of the stars */
  color: #ccc; /* Color on idle state */
}

/* Hover state of the stars */
.rating-stars ul > li.star:hover > i.fa {
  color: #1eb48c;
  cursor: pointer;
}

/* Selected state of the stars */
.rating-stars ul > li.star.selected > i.fa {
  color: #009e74;
}

.rating-stars ul {
  float: left;
}

.pHover {
  padding-left: 10px;
  padding-top: 10px;
  font-size: 16px;
  color: #009e74;
}

.pHover:hover {
  color: #1eb48c;
}

.textAreaClass {
  width: 500px;
}

@media (max-width: 37.5em) {
  .textAreaClass {
    width: 350px;
    margin-left: 10px;
  }
}

.form-control:focus {
  border-color: #009e74;
}

.review_button {
  background-color: #009e74;
  margin: 10px;
  border: none;
  padding: 10px 20px;
  color: white;
}

.review_button:hover {
  background-color: #1eb48c;
}

.show_hide_box {
  display: none;
}

.progress {
  width: 400px;
  border-radius: 10px;
}

@media (max-width: 37.5em) {
  .progress {
    width: 200px;
  }
}

.myDiv {
  width: auto;
}

.star-ratings {
  unicode-bidi: bidi-override;
  color: #ccc;
  font-size: 64px;
  position: relative;
  margin: 0;
  padding: 0;
  margin-top: -30px;
}
.star-ratings .fill-ratings {
  color: #009e74;
  padding: 0;
  position: absolute;
  z-index: 1;
  display: block;
  top: 0;
  left: 0;
  overflow: hidden;
}
.star-ratings .fill-ratings span {
  display: inline-block;
}
.star-ratings .empty-ratings {
  padding: 0;
  display: block;
  z-index: 0;
}

@media (max-width: 37.5em) {
  .myDiv {
    width: 266.56px;
  }
}

@media (min-width: 37.5em) {
  .myDiv2 {
    display: flex;
  }
}
</style>
