<template>
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
              <h1>{{ startupname }}</h1>
              <span>
                <nuxt-link to="/">Home</nuxt-link>
              </span>
              <i class="fa fa-circle"></i>
              <nuxt-link to>
                <span>Products</span>
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
                        <h5>Title</h5>
                      </div>
                      <div class="tg-titlebox">
                        <h5>Action</h5>
                      </div>
                      <div class="tg-titlebox">
                        <h5>Updates</h5>
                      </div>
                      <div class="tg-titlebox">
                        <h5>Add Update</h5>
                      </div>
                      <div class="tg-titlebox">
                        <h5>Add Testimonials</h5>
                      </div>
                    </div>
                    <div
                      class="tg-lists"
                      v-for="(x, y) in productList"
                      :key="y"
                    >
                      <div class="tg-list">
                        <div class="tg-listbox" data-title="title">
                          <!-- <span class="list_user_thu"> <img src="images/img-01.jpg" alt="image description"> </span> -->
                          <div class="tg-listdata">
                            <nuxt-link
                              :to="{
                                name: 'products-id',
                                params: { id: x.id }
                              }"
                              class="product-link"
                            >
                              <h4>
                                {{ x.product_name }}
                              </h4>
                            </nuxt-link>
                          </div>
                        </div>
                        <div class="tg-listbox" data-action="action">
                          <nuxt-link
                            class="tg-btn-list"
                            :to="{
                              name: 'products-edit_product-id',
                              params: { id: x.id }
                            }"
                          >
                            <i class="fa fa-pencil"></i>
                          </nuxt-link>
                          <a
                            class="tg-btn-list"
                            @click="deleteProduct(x.id)"
                            style="cursor: pointer"
                          >
                            <i class="fa fa-trash-o"></i>
                          </a>
                        </div>
                        <div class="tg-listbox" data-action="products">
                          <nuxt-link
                            class="tg-btn-list"
                            :to="{
                              name: 'products-product_updates',
                              params: { id: x.id, product: x.product_name }
                            }"
                          >
                            <i class="fa fa-wrench"></i>
                          </nuxt-link>
                        </div>
                        <div class="tg-listbox" data-action="addProduct">
                          <nuxt-link
                            class="tg-btn-list"
                            :to="{
                              name: 'products-add_update',
                              params: { id: x.id, product: x.product_name }
                            }"
                          >
                            <i class="fa fa-plus"></i>
                          </nuxt-link>
                        </div>
                        <div class="tg-listbox" data-action="addTestimonials">
                          <nuxt-link
                            class="tg-btn-list"
                            :to="{
                              name: 'products-add_testimonials-id',
                              params: { id: x.id, product: x.product_name }
                            }"
                          >
                            <i class="fa fa-plus"></i>
                          </nuxt-link>
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
                      No products added for this startup
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
  import Cookies from "js-cookie";
  export default {
    middleware: "token-auth",
    data() {
      return {
        startupname: "",
        startupId: "",
        productList: [],
        bool: true,
        loading_bool: true
      };
    },
    mounted() {
      this.startupname = this.$route.params.startup;
      this.startupId = this.$route.params.id;
      this.getProducts();
      $("#user_profile")
        .addClass("active")
        .siblings()
        .removeClass("active");
    },
    methods: {
      getProducts: function() {
        this.$store.dispatch("getProducts", this.startupId).then(res => {
          this.productList = res.data;
          this.loading_bool = false;
          if (this.productList.length === 0) {
            this.bool = false;
          }
        });
      },
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

      deleteProduct: function(id) {
        var payload = new FormData();
        payload.append("id", id);
        payload.append("deleted_flag", "true");
        var x = confirm("Are you sure you want to delete?");
        if (x)
          return this.$store.dispatch("deleteProduct", payload).then(res => {
            this.getProducts();
          });
        else return false;
      }
    }
  };
</script>

<style scoped>
.product-link {
  color: #4e4e4e;
}
.product-link:hover {
  color: #ffce10;
}

.tg-listing-head .tg-titlebox {
  width: 20% !important;
}

.tg-list .tg-listbox {
  width: 20% !important;
}
</style>
