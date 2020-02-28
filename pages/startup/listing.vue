
<template>
  <!-- <div class="spinner"></div> -->
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
              <h1>Dashboard</h1>
              <span>
                <nuxt-link to="/">Home</nuxt-link>
              </span>
              <i class="fa fa-circle"></i>
              <nuxt-link to="">
                <span>Dashboard</span>
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
                My Startup
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
                <div id="dashboard_listing_blcok">
                  <div class="tg-listing" v-if="bool">
                    <div class="tg-listing-head">
                      <div class="tg-titlebox">
                        <h3>Title</h3>
                      </div>
                      <div class="tg-titlebox">
                        <h3>Action</h3>
                      </div>
                      <div class="tg-titlebox">
                        <h3>Products</h3>
                      </div>
                      <div class="tg-titlebox">
                        <h3>Add Product</h3>
                      </div>
                    </div>
                    <div
                      class="tg-lists"
                      v-for="(x, y) in startupList"
                      :key="y"
                    >
                      <div class="tg-list">
                        <div class="tg-listbox" data-title="title">
                          <div class="tg-listdata">
                            <h4>
                              <nuxt-link
                                :to="{
                                  name: 'startup-details-id',
                                  params: { id: x.id }
                                }"
                                >{{ x.name }}</nuxt-link
                              >
                            </h4>
                            <span>Year Founded - {{ x.year_founded }}</span>

                            <span
                              >Location - {{ x.city }}, {{ x.state }},
                              {{ x.country }}</span
                            >
                          </div>
                        </div>
                        <div class="tg-listbox" data-action="action">
                          <nuxt-link
                            class="tg-btn-list"
                            :to="{
                              name: 'startup-edit_startup-id',
                              params: { id: x.id }
                            }"
                          >
                            <i class="fa fa-pencil"></i>
                          </nuxt-link>
                          <a
                            class="tg-btn-list"
                            @click="deleteStartup(x.id)"
                            style="cursor: pointer"
                          >
                            <i class="fa fa-trash-o"></i>
                          </a>
                        </div>
                        <div class="tg-listbox" data-action="products">
                          <nuxt-link
                            :to="{
                              name: 'products-startup-id',
                              params: { id: x.id, startup: x.name }
                            }"
                          >
                            <!-- <i class="fa fa-product-hunt"></i> -->
                            <span class="product-num" style="font-size: 17px"
                              >{{ x.startup_products.length }} Products</span
                            >
                          </nuxt-link>
                        </div>
                        <div class="tg-listbox" data-action="addProduct">
                          <nuxt-link
                            class="tg-btn-list"
                            :to="{
                              name: 'products-add_product',
                              params: { id: x.id, startup: x.name }
                            }"
                          >
                            <i class="fa fa-plus"></i>
                          </nuxt-link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-else>
                    <h3 style="text-align: left">
                      You did not submit any startup
                    </h3>
                    <nuxt-link to="/startup/submit_listing">
                      <h3 style="text-align: left; color: #ffce10">
                        Submit your startup now
                      </h3>
                    </nuxt-link>
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
        startupList: [],
        bool: true,
        loading_bool: true
      };
    },
    mounted() {
      $("#user_profile")
        .addClass("active")
        .siblings()
        .removeClass("active");
      this.getListing();
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

      getListing: function() {
        const id = localStorage.getItem("user_id");
        this.$store.dispatch("getListing", id).then(res => {
          this.startupList = res.data;
          this.loading_bool = false;
          if (this.startupList.length === 0) {
            this.bool = false;
          }
        });
      },

      deleteStartup: function(id) {
        var payload = new FormData();
        payload.append("id", id);
        payload.append("deleted_flag", "true");

        var x = confirm("Are you sure you want to delete?");
        if (x)
          return this.$store.dispatch("deleteStartup", payload).then(res => {
            this.getListing();
          });
        else return false;
      }
    }
  };
</script>

<style>
.product-num {
  color: white;
  margin-top: 1px;
  background-color: #263a50;
  text-align: center;
  padding: 9px 8px;
  border-radius: 20px;
}

.product-num:hover {
  background-color: #ffce10;
  color: #263a50;
}
</style>
