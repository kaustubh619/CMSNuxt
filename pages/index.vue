<template>
  <div>
    <div
      id="slider-banner-section"
      :style="{
        background: `linear-gradient( to right bottom, rgba(0, 0, 0, 0.801), rgba(128, 128, 128, 0.601) ), url(${header_img}) top center no-repeat`
      }"
    >
      <div class="container">
        <div class="row">
          <div class="col-sm-12 text-center">
            <div id="home-slider-item">
              <span class="helpyou_item">{{ line1 }}</span>
              <h1>{{ line2 }}</h1>
              <!-- <p>Discover innovative startups and the people behind them</p> -->
            </div>
            <div id="search-categorie-item-block">
              <form id="categorie-search-form">
                <h1>Search any Startup Listing</h1>
                <div class="col-sm-9 col-md-10 nopadding">
                  <div id="search-input">
                    <div class="col-sm-3 nopadding">
                      <select
                        id="location-search-list"
                        class="form-control"
                      ></select>
                    </div>
                    <div class="col-sm-9 nopadding">
                      <div class="form-group">
                        <input
                          id="location-search-data-store"
                          class="form-control"
                          name="search"
                          placeholder="Enter Keyword"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-3 col-md-2 text-right nopadding-right">
                  <div id="location-search-btn">
                    <button type="submit" id="search-btn">
                      <i class="fa fa-search"></i>Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <!-- <div id="location_slider_item_block">
          <button id="map_mark"><i class="fa fa-map-marker"></i></button>
            </div>-->
          </div>
        </div>
      </div>
    </div>

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
              <div
                class="col-md-6 col-sm-6 col-xs-12"
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
                  {{ startup_count }}
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
                  {{ user_count }}
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
                  {{ category_length }}
                </div>
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
    <div id="recent-product-item-listing">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 text-center">
            <div class="col-md-12 recent-item-listing-heading bt_heading_3">
              <h1>
                Recent
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
              <div
                class="col-md-6 col-sm-6 col-xs-12"
                v-for="(x, y) in startupList"
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
    <!--================================ Login and Register Forms ===========================================-->

    <!-- login form -->
    <div
      class="modal fade"
      id="login"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
      style="z-index: 10000"
    >
      <div class="listing-modal-1 modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-hidden="true"
              id="closeLogin"
            >
              &times;
            </button>
            <h4 class="modal-title" id="myModalLabel">Login</h4>
          </div>
          <div class="modal-body">
            <div class="listing-login-form">
              <div>
                <div class="listing-form-field">
                  <i class="fa fa-user blue-1"></i>
                  <input
                    class="form-field bgwhite"
                    type="text"
                    name="user_name"
                    placeholder="Username"
                    v-model="username"
                  />
                </div>
                <div class="listing-form-field">
                  <i class="fa fa-lock blue-1"></i>
                  <input
                    class="form-field bgwhite"
                    type="password"
                    name="user_pass"
                    placeholder="Password"
                    v-model="password"
                  />
                </div>
                <div
                  class="listing-form-field clearfix margin-top-20 margin-bottom-20"
                >
                  <!-- <input type="checkbox" id="checkbox-1-1" class="regular-checkbox" />
              <label for="checkbox-1-1"></label>
                  <label class="checkbox-lable">Remember Me</label>-->
                  <a href="#" style="display: block; text-align: left"
                    >Forgot Password?</a
                  >
                </div>
                <div class="listing-form-field">
                  <input
                    type="submit"
                    class="submit"
                    value="login"
                    @click="logInUser"
                    style="cursor: pointer"
                  />
                </div>
                <div class="divider">
                  <span>OR</span>
                </div>
                <div style="display: flex; justify-content: center">
                  <button class="mybtn2" @click="google">
                    <i class="fa fa-google mybtn1"></i>Continue with Google
                  </button>
                </div>
              </div>
              <!-- <div class="bottom-links">
            <p>Not a Member?<a href="#" data-dismiss="modal" data-toggle="modal" data-target="#register">Create Account</a></p>
              </div>-->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="register"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
      style="z-index: 10000"
    >
      <div class="listing-modal-1 modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-hidden="true"
              id="closeSignUp"
            >
              &times;
            </button>
            <h4 class="modal-title" id="myModalLabel2">Registration</h4>
          </div>
          <div class="modal-body">
            <div class="listing-register-form">
              <!-- <form> -->
              <div class="listing-form-field">
                <i class="fa fa-user blue-1"></i>
                <input
                  class="form-field bgwhite"
                  type="text"
                  name="user_name"
                  placeholder="Userame"
                  v-model="username"
                />
              </div>
              <div class="listing-form-field">
                <i class="fa fa-envelope blue-1"></i>
                <input
                  class="form-field bgwhite"
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  v-model="email"
                />
              </div>
              <div class="listing-form-field">
                <i class="fa fa-lock blue-1"></i>
                <input
                  class="form-field bgwhite"
                  type="password"
                  name="user_password"
                  placeholder="Password"
                  v-model="password1"
                />
              </div>
              <div class="listing-form-field">
                <i class="fa fa-lock blue-1"></i>
                <input
                  class="form-field bgwhite"
                  type="password"
                  name="user_confirm_password"
                  placeholder="Confirm Password"
                  v-model="password2"
                />
              </div>
              <!-- <div class="listing-form-field clearfix margin-top-20 margin-bottom-20 login_form_text_center">
              <input type="checkbox" id="checkbox-1-2" class="regular-checkbox" />
              <label for="checkbox-1-2"></label>
              <label class="checkbox-lable">i agree with</label> &nbsp; <a href="#">Terms & Conditions</a> </div>-->
              <div class="listing-form-field">
                <input
                  type="submit"
                  class="submit"
                  value="create account"
                  @click="registerUser"
                  style="cursor: pointer"
                />
              </div>
              <!-- </form> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Logo from "~/components/Logo.vue";
  import axios from "axios";
  import Cookies from "js-cookie";

  export default {
    data() {
      return {
        username: "",
        password: "",
        email: "",
        password1: "",
        password2: "",
        category_length: "",
        username: "",
        password: "",
        email: "",
        password1: "",
        password2: "",
        header_img: "",
        line1: "",
        line2: "",
        startupList: [],
        startup_count: "",
        user_count: "",
        featuredList: []
      };
    },

    components: {
      Logo
    },

    mounted() {
      this.getCategories();
      this.getStartups();
      this.getUserCount();
      this.getHomeCMS();
      this.getFeaturedStartups();
      if (window.location.href.includes("access_token")) {
        this.googleLogIn();
      }
      $("#home")
        .addClass("active")
        .siblings()
        .removeClass("active");
    },

    methods: {
      getStartups: function() {
        this.$store.dispatch("getStartups").then(res => {
          this.startup_count = res.data.length;
          this.startupList = res.data.reverse().splice(0, 6);
        });
        this.getCategories();
      },

      getFeaturedStartups: function() {
        this.$store.dispatch("getFeaturedStartups").then(res => {
          console.log(res.data);
          this.featuredList = res.data.reverse().splice(0, 6);
        });
        this.getCategories();
      },

      getUserCount: function() {
        this.$store.dispatch("getUserCount").then(res => {
          this.user_count = res.data.length;
        });
      },

      showAllCat: function() {
        this.$store.dispatch("getCategories").then(res => {
          this.categoryList = res.data;
          $("#allCat").addClass("hide");
          $("#lessCat").removeClass("hide");
        });
      },
      logInUser: function() {
        var payload = new FormData();
        payload.append("username", this.username);
        payload.append("password", this.password);
        axios({
          method: "POST",
          url: this.$store.state.api.logInUser,
          data: payload
        })
          .then(res => {
            const token = res.data.token;
            Cookies.set("x-access-token", res.data.token);

            const user_id = res.data.id;

            localStorage.setItem("bearer", "token " + token);

            localStorage.setItem("user_id", user_id);

            axios.defaults.headers.common["Authorization"] = token;

            this.$store.commit("authentication", true);
            this.$store.commit("token", token);

            $("#closeLogin").click();
            alert("User logged in successfully");
            this.$router.push("/startup/listing");
          })
          .catch(err => {
            alert("Invalid user credentials!");
          });
      },

      registerUser: function() {
        var payload = new FormData();
        payload.append("username", this.username);
        payload.append("email", this.email);
        if (
          this.password1 === this.password2 &&
          this.username !== "" &&
          this.email !== "" &&
          this.password1 !== "" &&
          this.password2 !== ""
        ) {
          payload.append("password", this.password1);
          this.$store.dispatch("registerUser", payload).then(res => {
            $("#closeSignUp").click();
            alert(
              "User with username " +
                payload.get("username") +
                " created successfully"
            );
            this.$router.push("/");
          });
        } else {
          alert("Invalid form!");
        }
      },
      getCategories: function() {
        this.$store.dispatch("getCategories").then(res => {
          this.category_length = res.data.length;

          var select = document.getElementById("location-search-list");

          const categoryObj = {};

          res.data.map(item => {
            categoryObj[item.id] = { category: item.category };
          });

          for (this.i in categoryObj) {
            select.options[select.options.length] = new Option(
              categoryObj[this.i].category,
              this.i
            );
          }
        });
      },

      getHomeCMS: function() {
        this.$store.dispatch("getHomeCMS").then(res => {
          res.data
            .reverse()
            .splice(0, 1)
            .map(item => {
              this.header_img = item.header_img;
              this.line1 = item.header_text_1;
              this.line2 = item.header_text_2;
            });
        });
      },

      async google() {
        $("#closeLogin").click();
        await this.$auth.loginWith("google").catch(e => {
          // this.$toast.show("Error", { icon: "fingerprint" });
        });
      },

      googleLogIn: function() {
        this.$store.commit("bearer");
        var payload = new FormData();
        var provider = "goole-oauth-2";
        payload.append("provider", "google-oauth2");
        this.token = window.location.href
          .split("#")[1]
          .split("=")[2]
          .split("&")[0];
        payload.append("access_token", this.token);
        this.$store.dispatch("googleLogIn", payload).then(res => {
          localStorage.setItem("user_id", res.data.id);
          var new_payload = new FormData();
          new_payload.append("grant_type", "convert_token");
          new_payload.append("token", this.token);
          new_payload.append("backend", "google-oauth2");
          new_payload.append(
            "client_id",
            "oyBLYzEeUfq1xwNYUscD0oF9rH8Gdm0FgYr8unCH"
          );
          new_payload.append(
            "client_secret",
            "1zxuIPtXtsHlzaAEfUNUo7Oqt1OOykvGaX8CLVRqtuCN1KYvRDgdPtEH0p1adprhzX6hH0K9Xd2duN8rdx7184JzFM91tpWT0SqPTu6GEt2hi7M7Ms1QqA9DkF9MlrSk"
          );
          payload.append("oauth", true);
          this.$store.dispatch("getBearerToken", new_payload).then(res => {
            localStorage.setItem("bearer", "Bearer " + res.data.access_token);
            this.$store.commit("bearer", res.data.access_token);
            this.$store.commit("authentication", true);
            this.$router.push("/startup/listing");
          });
        });
      }
    }
  };
</script>

<style>
#search-input select.form-control {
  border-radius: 3px 0px 0px 3px;
}

#search-input input.form-control {
  border-radius: 0px 3px 3px 0px;
}

.listing-form-field a {
  float: left;
}

#slider-banner-section {
  background-size: cover !important;
  background-position: center !important;
  background-attachment: fixed !important;
}

.mybtn1 {
  background-color: #e7e7e7;
  padding: 10px;
  border-radius: 30px;
}

.mybtn2 {
  border: none;
  background-color: #e7e7e7;
  padding-right: 10px;
  border-radius: 30px;
}

.mybtn1:hover,
.mybtn2:hover {
  color: #999900;
}

.divider {
  height: 12px;
  margin: 16px 0 22px;
  text-align: center;
  border-bottom: 1px solid #e4e5e7;
}

.divider span {
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  text-transform: uppercase;
  padding: 0 8px;
  background-color: #f7fbfc;
  color: #404145;
}

.thumb-img {
  object-fit: cover;
  object-position: center;
}
</style>
