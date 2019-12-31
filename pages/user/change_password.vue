<template>
  <div>
    <div id="breadcrum-inner-block">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 text-center">
            <div class="breadcrum-inner-header">
              <h1>Change Password</h1>
              <nuxt-link to="/">Home</nuxt-link>
              <i class="fa fa-circle"></i>
              <nuxt-link to="">
                <span>Change Password</span>
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
                Change
                <span>Password</span>
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
                <div class="dashboard_nav_item row" style="padding: 10px;">
                  <ul>
                    <li>
                      <nuxt-link to="/startup/submit_listing">
                        <i class="fa fa-users"></i> Submit Startup
                      </nuxt-link>
                    </li>

                    <li>
                      <nuxt-link to="/startup/listing">
                        <i class="fa fa-list-ul"></i> My Listing
                      </nuxt-link>
                    </li>
                    <li>
                      <nuxt-link to="/user/user_profile">
                        <i class="fa fa-user"></i> Edit Profile
                      </nuxt-link>
                    </li>
                    <li class="active">
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
              </div>
              <div class="col-md-9 col-sm-8 col-xs-12">
                <div class="submit_listing_box">
                  <h3>Change Password</h3>
                  <form class="form-alt">
                    <div class="row">
                      <div class="form-group col-md-6 col-sm-12 col-xs-12">
                        <label>
                          Password
                          <span>*</span>
                        </label>
                        <input
                          placeholder="Password"
                          required
                          class="form-control"
                          type="password"
                          v-model="password1"
                        />
                      </div>
                      <div class="form-group col-md-6 col-sm-12 col-xs-12">
                        <label>
                          Confirm Password
                          <span>*</span>
                        </label>
                        <input
                          placeholder="Confirm password"
                          required
                          class="form-control"
                          type="password"
                          v-model="password2"
                        />
                      </div>
                      <div class="from-list-lt col-md-12">
                        <div class="form-group btn_change_pass">
                          <button
                            class="btn pull-right"
                            @click="changePassword"
                            type="button"
                          >Save Setting</button>
                        </div>
                      </div>
                    </div>
                  </form>
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
      password1: "",
      password2: ""
    };
  },
  mounted() {
    $("#user_profile")
      .addClass("active")
      .siblings()
      .removeClass("active");
  },
  methods: {
    logOutUser: function() {
      var payload = new FormData()
      payload.append('login_status', 'false')
      this.$store.dispatch('logOutUser', payload).then(res => {
        console.log(res)
      })
      localStorage.clear();
      Cookies.remove('x-access-token')
      this.$store.commit("authentication", false);
      this.$router.push("/");
    },

    changePassword: function() {
      if (this.password1 === this.password2) {
        var payload = new FormData();
        payload.append("id", localStorage.getItem("user_id"));
        payload.append("password", this.password1);
        this.$store.dispatch("changePassword", payload).then(res => {
          alert("Password Changed Successfully");
          this.password1 = "";
          this.password2 = "";
        });
      } else if (this.password1 !== this.password2) {
        alert("Password mismatch");
      }
    }
  }
};
</script>

<style>
</style>
