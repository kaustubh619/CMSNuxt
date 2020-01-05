<template>
  <div>
    <div id="breadcrum-inner-block">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 text-center">
            <div class="breadcrum-inner-header">
              <h1>User Profile</h1>
              <span>
                <nuxt-link to="/">Home</nuxt-link>
              </span>
              <i class="fa fa-circle"></i>
              <nuxt-link to>
                <span>User Profile</span>
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
                User
                <span>Profile</span>
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
              <div class="col-md-3 col-sm-4 col-xs-12">
                <div
                  class="dashboard_nav_item row"
                  style="margin-bottom: 0px; padding: 10px; padding-bottom: 0px;"
                >
                  <ul>
                    <li>
                      <nuxt-link to="/startup/submit_listing">
                        <i class="fa fa-key"></i> Submit Startup
                      </nuxt-link>
                    </li>

                    <li>
                      <nuxt-link to="/startup/listing">
                        <i class="fa fa-list-ul"></i> My Listing
                      </nuxt-link>
                    </li>
                    <li class="active">
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
                <div id="leftcol_item" class="row" style="padding: 10px;">
                  <div class="user_dashboard_pic">
                    <img alt="user photo" :src="dp_url" v-if="dp_url" />
                    <img v-else src="images/user-profile.png" />
                  </div>
                </div>
              </div>
              <div class="col-md-9 col-sm-8 col-xs-12">
                <div class="submit_listing_box">
                  <h3>Contact Information</h3>
                  <form class="form-alt">
                    <div class="row">
                      <div class="form-group col-md-6 col-sm-12 col-xs-12">
                        <label>
                          Userame
                          <span>*</span>
                        </label>
                        <input
                          placeholder="Username"
                          required
                          class="form-control"
                          type="text"
                          v-model="username"
                        />
                      </div>
                      <div class="form-group col-md-6 col-sm-12 col-xs-12">
                        <label>
                          First Name
                          <span>*</span>
                        </label>
                        <input
                          placeholder="First Name"
                          required
                          class="form-control"
                          type="text"
                          v-model="first_name"
                        />
                      </div>
                      <div class="form-group col-md-6 col-sm-12 col-xs-12">
                        <label>
                          Last Name
                          <span>*</span>
                        </label>
                        <input
                          placeholder="Last Name"
                          required
                          class="form-control"
                          type="text"
                          v-model="last_name"
                        />
                      </div>
                      <div class="form-group col-md-6 col-sm-12 col-xs-12">
                        <label>
                          E-Mail
                          <span>*</span>
                        </label>
                        <input
                          placeholder="Email"
                          required
                          class="form-control"
                          type="text"
                          v-model="email"
                        />
                      </div>
                      <div class="form-group col-md-6 col-sm-12 col-xs-12">
                        <label>
                          Phone
                          <span>*</span>
                        </label>
                        <input
                          placeholder="Phone"
                          required
                          class="form-control"
                          type="text"
                          v-model="phone"
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div class="submit_listing_box">
                  <h3>Social Connections</h3>
                  <form class="form-alt">
                    <div class="row">
                      <div class="form-group col-md-6 col-sm-12 col-xs-12">
                        <label>Facebook :-</label>
                        <input
                          class="form-control"
                          value="http://facebook.com/"
                          type="text"
                          v-model="fb_link"
                        />
                      </div>
                      <div class="form-group col-md-6 col-sm-12 col-xs-12">
                        <label>Twitter :-</label>
                        <input
                          class="form-control"
                          value="http://twitter.com/"
                          type="text"
                          v-model="twitter_link"
                        />
                      </div>
                      <div class="form-group col-md-6 col-sm-12 col-xs-12">
                        <label>Linkedin :-</label>
                        <input class="form-control" type="text" v-model="l_link" />
                      </div>
                      <div class="form-group col-md-6 col-sm-12 col-xs-12">
                        <label>Instagram :-</label>
                        <input
                          class="form-control"
                          value="http://insatgram.com/"
                          type="text"
                          v-model="insta_link"
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div class="submit_listing_box">
                  <h3>Address</h3>
                  <form class="form-alt">
                    <div class="row">
                      <div class="form-group col-md-6 col-sm-12 col-xs-12">
                        <label>Country :-</label>
                        <input class="form-control" value="New York" type="text" v-model="country" />
                      </div>
                      <div class="form-group col-md-6 col-sm-12 col-xs-12">
                        <label>City :-</label>
                        <input
                          class="form-control"
                          value="New York City"
                          type="text"
                          v-model="city"
                        />
                      </div>
                      <div class="form-group col-md-6 col-sm-12 col-xs-12">
                        <label>Street :-</label>
                        <input
                          class="form-control"
                          value="Everton Eve"
                          type="text"
                          v-model="street"
                        />
                      </div>
                      <div class="form-group col-md-3 col-sm-12 col-xs-12">
                        <label>House Number :-</label>
                        <input class="form-control" value="12345" type="text" v-model="house_no" />
                      </div>
                      <div class="form-group col-md-3 col-sm-12 col-xs-12">
                        <label>Zip :-</label>
                        <input class="form-control" value="121211" type="text" v-model="zip" />
                      </div>
                    </div>
                  </form>
                </div>
                <div class="submit_listing_box">
                  <h3>Change Profile Photo</h3>
                  <div class="fileupload_block">
                    <input
                      type="file"
                      name="fileupload"
                      id="file"
                      ref="file"
                      v-on:change="handleFileUpload()"
                    />
                    <div class="fileupload_img">
                      <img :src="dp_url" alt="add image" />
                    </div>
                  </div>
                  <div class="clearfix"></div>
                </div>
                <div class="from-list-lt">
                  <div class="form-group">
                    <button class="btn" type="submit" @click="updateUser">Update</button>
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
export default {
  middleware: "token-auth",
  data() {
    return {
      username: "",
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      fb_link: "",
      twitter_link: "",
      l_link: "",
      insta_link: "",
      country: "",
      city: "",
      street: "",
      house_no: "",
      zip: "",
      dp_url: "",
      file: ""
    };
  },

  mounted() {
    this.getUser();
    this.getUserAdditionalDetails();
    $("#user_profile")
      .addClass("active")
      .siblings()
      .removeClass("active");
  },

  methods: {
    handleFileUpload: function() {
      this.file = this.$refs.file.files[0];
    },

    getUser: function() {
      const id = localStorage.getItem("user_id");
      this.$store.dispatch("getUser", id).then(res => {
        this.username = res.data.username;
        this.first_name = res.data.first_name;
        this.last_name = res.data.last_name;
        this.email = res.data.email;
      });
    },

    getUserAdditionalDetails: function() {
      const id = localStorage.getItem("user_id");
      this.$store.dispatch("getUserAdditionalDetails", id).then(res => {
        this.phone = res.data.phone;
        this.fb_link = res.data.fb_link;
        this.twitter_link = res.data.twitter_link;
        this.l_link = res.data.linkedin_link;
        this.insta_link = res.data.insta_link;
        this.country = res.data.country;
        this.city = res.data.city;
        this.street = res.data.street;
        this.house_no = res.data.house_no;
        this.zip = res.data.zip;
        this.dp_url = res.data.display_pic;
      });
    },

    updateUser: function() {
      var payload = new FormData();
      payload.append("username", this.username);
      payload.append("first_name", this.first_name);
      payload.append("last_name", this.last_name);
      payload.append("email", this.email);
      // this.$store.dispatch("updateUser", payload);

      var payload2 = new FormData();
      payload2.append("user", localStorage.getItem("user_id"));
      if (this.phone !== null) {
        payload2.append("phone", this.phone);
      }
      if (this.fb_link !== null) {
        payload2.append("fb_link", this.fb_link);
      }
      if (this.twitter_link !== null) {
        payload2.append("twitter_link", this.twitter_link);
      }
      if (this.l_link !== null) {
        payload2.append("linkedin_link", this.l_link);
      }
      if (this.insta_link !== null) {
        payload2.append("insta_link", this.insta_link);
      }
      if (this.city !== null) {
        payload2.append("city", this.city);
      }
      if (this.country !== null) {
        payload2.append("country", this.country);
      }
      if (this.street !== null) {
        payload2.append("street", this.street);
      }
      if (this.house_no !== null) {
        payload2.append("house_no", this.house_no);
      }
      if (this.zip !== null) {
        payload2.append("zip", this.zip);
      }
      if (this.file) {
        payload2.append("display_pic", this.file);
      }
      this.$store.dispatch("updateUserExt", payload2).then(res => {
        this.dp_url = res.data.display_pic;
        alert("User details updated!");
      });
    },

    logOutUser: function() {
      var payload = new FormData();
      payload.append("login_status", "false");
      this.$store.dispatch("logOutUser", payload).then(res => {
        console.log(res);
      });
      localStorage.clear();
      Cookies.remove("x-access-token");
      this.$store.commit("authentication", false);
      this.$router.push("/");
    }
  }
};
</script>

<style>
</style>
