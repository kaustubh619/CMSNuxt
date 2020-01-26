<template>
  <div>
    <div id="breadcrum-inner-block">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 text-center">
            <div class="breadcrum-inner-header">
              <h1>Categories</h1>
              <span>
                <nuxt-link to="/">Home</nuxt-link>
              </span>
              <i class="fa fa-circle"></i>
              <nuxt-link to="/categories">
                <span>Categories</span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      id="vfx-search-item-inner"
      :style="{
        background: `linear-gradient( to right bottom, rgba(0, 0, 0, 0.801), rgba(128, 128, 128, 0.601) ), url(${header_img}) top center no-repeat`
      }"
    >
      <div class="container">
        <div class="row">
          <div
            class="col-md-12 vfx-search-categorie-title text-center bt_heading_3"
          >
            <h1 style="color:white; font-weight: 400">
              Search Any Startup
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
          <div class="col-md-12">
            <form id="search-form">
              <div class="col-sm-9 col-md-10 nopadding">
                <div id="vfx-search-box">
                  <div class="col-sm-3 nopadding">
                    <select id="search-location" class="form-control">
                      <option value="0">Select Category</option>
                    </select>
                  </div>
                  <div class="col-sm-9 nopadding">
                    <div class="form-group">
                      <input
                        id="search-data"
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
                <div id="vfx-search-btn">
                  <button type="submit" id="search">
                    <i class="fa fa-search"></i>Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div
      id="search-categorie-item"
      :style="{
        background: `linear-gradient( to right bottom, rgba(0, 0, 0, 0.801), rgba(128, 128, 128, 0.601) ), url(${header_img}) top center no-repeat`
      }"
    >
      <div class="container">
        <div class="row">
          <div class="col-sm-12 text-center">
            <div class="row">
              <div class="col-md-12 categories-heading bt_heading_3">
                <h1 style="color: white">
                  Directory
                  <span>Category</span>
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
              <div
                class="col-md-3 col-sm-6 col-xs-12"
                v-for="(x, y) in categoryList"
                :key="y"
              >
                <div
                  class="categorie_item"
                  v-bind:id="x.id"
                  @click="getListing(x.id)"
                >
                  <div class="cate_item_block hi-icon-effect-8">
                    <h1>
                      <a href="#">{{ x.category }}</a>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Auth />
  </div>
</template>

<script>
  import Auth from "~/components/authentication.vue";
  export default {
    components: {
      Auth
    },

    data() {
      return {
        categoryList: [],
        header_img: ""
      };
    },

    mounted() {
      this.getCategories();
      this.getCategoryCMS();
      $("#category")
        .addClass("active")
        .siblings()
        .removeClass("active");
    },

    methods: {
      getCategories: function() {
        this.$store.dispatch("getCategories").then(res => {
          this.categoryList = res.data;

          var select = document.getElementById("search-location");

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

      getListing: function(id) {
        this.$store.commit("category", id);
        this.$router.push("/startup/all_startups");
      },

      getCategoryCMS: function() {
        this.$store.dispatch("getCategoryCMS").then(res => {
          res.data
            .reverse()
            .splice(0, 1)
            .map(item => {
              this.header_img = item.background_image;
            });
        });
      }
    }
  };
</script>

<style>
.cate_item_block {
  min-height: 135px;
}

#vfx-search-item-inner {
  background-size: cover !important;
  background-position: center !important;
  background-attachment: fixed !important;
}

#search-categorie-item {
  background-size: cover !important;
  background-position: center !important;
  background-attachment: fixed !important;
}
</style>
