<template>
  <div>
    <div id="breadcrum-inner-block">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 text-center">
            <div class="breadcrum-inner-header">
              <h1>{{ product_name }}</h1>
              <span>
                <nuxt-link to="/">Home</nuxt-link>
              </span>
              <i class="fa fa-circle"></i>
              <nuxt-link to>
                <span>Updates</span>
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
                    </div>
                    <div class="tg-lists" v-for="(x, y) in updateList" :key="y">
                      <div class="tg-list">
                        <div class="tg-listbox" data-title="title">
                          <!-- <span class="list_user_thu"> <img src="images/img-01.jpg" alt="image description"> </span> -->
                          <div class="tg-listdata">
                            <nuxt-link
                              :to="{
                                name: 'products-updates-id',
                                params: { id: x.id }
                              }"
                              class="product-link"
                            >
                              <h4>Date Added: &nbsp;{{ x.added_date }}</h4>
                            </nuxt-link>
                          </div>
                        </div>
                        <div class="tg-listbox" data-action="action">
                          <nuxt-link
                            class="tg-btn-list"
                            :to="{
                              name: 'products-edit_product_update-id',
                              params: { id: x.id }
                            }"
                          >
                            <i class="fa fa-pencil"></i>
                          </nuxt-link>
                          <a
                            class="tg-btn-list"
                            @click="deleteUpdate(x.id)"
                            style="cursor: pointer"
                          >
                            <i class="fa fa-trash-o"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <!-- <div class="vfx-person-block">
                  <ul class="vfx-pagination">
                    <li><a href="#"><i class="fa fa-angle-double-left"></i></a></li>
                    <li class="active"><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#"><i class="fa fa-angle-double-right"></i></a></li>
                  </ul>
                    </div>-->
                  </div>
                  <div v-else>
                    <h3 style="text-align: left">
                      No updates available for this product
                    </h3>
                    <!-- <nuxt-link to="submit_listing">
                      <h3 style="text-align: left; color: #ffce10">Submit your startup now</h3>
                    </nuxt-link>-->
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
    middleware: "token-auth",
    data() {
      return {
        product_name: "",
        bool: false,
        updateList: []
      };
    },

    mounted() {
      this.product_name = this.$route.params.product;
      this.getUpdates();
    },

    methods: {
      logOutUser: function() {
        var payload = new FormData();
        payload.append("login_status", "false");
        this.$store.dispatch("logOutUser", payload).then(res => {
          // console.log(res)
        });
        localStorage.clear();
        Cookies.remove("x-access-token");
        this.$store.commit("authentication", false);
        this.$router.push("/");
      },

      getUpdates: function() {
        var payload = new FormData();
        payload.append("id", this.$route.params.id);
        this.$store.dispatch("getUpdates", payload).then(res => {
          this.updateList = res.data;
          if (res.data.length != 0) {
            this.bool = true;
          }
        });
      },

      deleteUpdate: function(id) {
        var payload = new FormData();
        payload.append("id", id);
        payload.append("deleted_flag", "true");

        var x = confirm("Are you sure you want to delete?");
        if (x)
          return this.$store.dispatch("deleteUpdate", payload).then(res => {
            this.getUpdates();
          });
        else return false;
      }
    }
  };
</script>

<style>
</style>