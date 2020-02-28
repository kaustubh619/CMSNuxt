<template>
  <div>
    <div id="breadcrum-inner-block">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 text-center">
            <div class="breadcrum-inner-header">
              <span>
                <nuxt-link to="/">Home</nuxt-link>
              </span>
              <i class="fa fa-circle"></i>
              <nuxt-link to>
                <span>Add Testimonial</span>
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
                Add
                <span>Product Testimonial</span>
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
              </div>
              <div class="col-md-9 col-sm-8 col-xs-12">
                <div class="submit_listing_box">
                  <form class="form-alt">
                    <div class="row">
                      <div class="form-group col-md-6 col-sm-12 col-xs-12">
                        <label>Name</label>
                        <input
                          class="form-control"
                          type="text"
                          v-model="name"
                        />
                      </div>
                      <div class="form-group col-xs-12">
                        <label>Testimonial</label>
                        <textarea
                          class="form-control"
                          rows="5"
                          v-model="testimonial"
                        ></textarea>
                      </div>

                      <div class="form-group col-md-6 col-sm-12 col-xs-12">
                        <label>Image</label>
                        <input
                          class="form-control"
                          type="file"
                          id="file"
                          ref="file"
                          v-on:change="handleFileUpload()"
                        />
                      </div>
                    </div>
                  </form>
                </div>

                <div class="from-list-lt">
                  <div class="form-group">
                    <button class="btn" type="submit" @click="addTestimonial">
                      Submit Testimonial
                    </button>
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
    data() {
      return {
        name: "",
        testimonial: "",
        file: ""
      };
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

      handleFileUpload: function() {
        this.file = this.$refs.file.files[0];
      },

      addTestimonial: function() {
        const payload = new FormData();
        payload.append("product", this.$route.params.id);
        payload.append("userName", this.name);
        payload.append("userImage", this.file);
        payload.append("testimonial", this.testimonial);
        this.$store.dispatch("addTestimonial", payload).then(res => {
          this.$router.push("/startup/listing");
        });
      }
    }
  };
</script>

<style>
</style>