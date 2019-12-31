<template>
  <div>
    <div id="breadcrum-inner-block">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 text-center">
            <div class="breadcrum-inner-header">
              <h1>Startup Listing</h1>
              <nuxt-link to="/">Home</nuxt-link> <i class="fa fa-circle"></i>
              <a href="#"><span>Startup Listing</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="vfx-product-inner-item">
      <div class="container">
        <div class="row">
          <div class="col-md-9 col-sm-8 col-xs-12">
            <div class="row">
              <h4 class="col-xs-12" style="letter-spacing: 1px;">
                Total {{ length }}
                <span style="color: #ffce10">results</span> found
                <span v-if="cat_bool"
                  >in {{ category_name }}
                  <span style="color: #ffce10">category</span></span
                >
                <hr />
              </h4>
              <div
                class="col-md-4 col-sm-6 col-xs-12"
                v-for="(x, y) in startupList"
                :key="y"
              >
                <div class="feature-item-container-box listing-item">
                  <div class="feature-box-text">
                    <h3>
                      <nuxt-link
                        :to="{
                          name: 'startup-details-id',
                          params: { id: x.id }
                        }"
                        >{{ x.name }}</nuxt-link
                      >
                    </h3>
                    <a href="#"
                      ><span style="color: black">Year</span> Established:
                      <span style="color: black">{{ x.year_founded }}</span></a
                    >
                    <!-- <a href="#"><span style="color: black"></span> Category: <span style="color: black">{{x.category}}</span></a> -->
                    <p style="min-height: 70px">
                      <span v-for="(a, b) in 80" :key="b">{{
                        x.description[b]
                      }}</span
                      >.....
                    </p>
                  </div>
                  <div class="feature-item-location">
                    <h2>
                      <i class="fa fa-map-marker"></i> {{ x.city }},
                      {{ x.country }}
                    </h2>
                    <span>
                      <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                      <i class="fa fa-star-o"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-4 col-xs-12">
            <!-- <div class="news-search-lt">
          <input class="form-control" placeholder="Search Listing" type="text">
          <span class="input-search"> <i class="fa fa-search"></i> </span>
        </div> -->
            <div class="sidebar-listing-search-wrap">
              <form action="#">
                <p>Country Filter :</p>
                <select
                  class="sidebar-listing-search-select"
                  id="country-select"
                  style="width: 100%"
                >
                  <option value="0">Select Country</option>
                </select>

                <p>Year Filter :</p>
                <input
                  class="sidebar-listing-search-input"
                  placeholder="Enter Year"
                  name="search"
                  id="year_filter"
                  type="text"
                />

                <div class="listing-search-btn">
                  <input
                    class="sidebar-listing-search-btn"
                    value="Search"
                    type="button"
                    @click="filterStartup"
                  />
                </div>
              </form>
            </div>
            <hr class="row" />
            <div class="left-slide-slt-block">
              <h3>Categories</h3>
            </div>
            <div class="list-group">
              <a
                href="#"
                class="list-group-item"
                @click="getStartups"
                id="allStartUp"
                ><i class="fa fa-hand-o-right"></i> All Startup
              </a>
              <a
                href="#"
                class="list-group-item"
                v-for="(x, y) in categoryList"
                :key="y"
                @click="getStartupByCategory(x.id)"
                v-bind:id="x.id"
                ><i class="fa fa-hand-o-right"></i> {{ x.category }}
                <!-- <span class="list-lt">{{length}}</span> -->
              </a>
            </div>
            <p class="cat_class" id="allCat" @click="showAllCat">
              Show all categories
            </p>
            <p class="cat_class" id="lessCat" @click="getCategories">
              Show less categories
            </p>
          </div>
        </div>
      </div>
    </div>
    <Auth />
  </div>
</template>

<script>
  import Auth from "~/components/authentication.vue";
  import axios from "axios";
  export default {
    components: {
      Auth
    },

    data() {
      return {
        categoryList: [],
        startupList: [],
        length: "",
        cat_bool: false,
        category_name: ""
      };
    },

    mounted() {
      this.getCategories();
      // this.getStartups()
      this.getCountries();
      this.catselect();
      $("#user_profile")
        .addClass("active")
        .siblings()
        .removeClass("active");
    },

    destroyed() {
      this.$store.commit("category", 0);
    },

    methods: {
      catselect: function() {
        if (this.$store.state.category !== 0) {
          this.getStartupByCategory(this.$store.state.category);
        } else {
          this.getStartups();
        }
      },

      getCategories: function() {
        this.$store.dispatch("getCategories").then(res => {
          this.categoryList = res.data.slice(0, 3);
          $("#lessCat").addClass("hide");
          $("#allCat").removeClass("hide");
          const categoryObj = {};

          res.data.map(item => {
            categoryObj[item.id] = { category: item.category };
          });
        });
      },
      getStartups: function() {
        this.$store.dispatch("getStartups").then(res => {
          this.startupList = res.data;
          this.length = res.data.length;
        });
        this.getCategories();
        $("#allStartUp")
          .addClass("active")
          .siblings()
          .removeClass("active");
        this.cat_bool = false;
      },

      showAllCat: function() {
        this.$store.dispatch("getCategories").then(res => {
          this.categoryList = res.data;
          $("#allCat").addClass("hide");
          $("#lessCat").removeClass("hide");
        });
      },

      getStartupByCategory(id) {
        var payload = new FormData();
        payload.append("id", id);
        this.$store.dispatch("getStartupByCategory", payload).then(res => {
          this.startupList = res.data;
          this.length = res.data.length;
        });

        $("#allCat").click();
        setTimeout(function() {
          $("#" + id)
            .addClass("active")
            .siblings()
            .removeClass("active");
        }, 100);
        this.getCategoryById(id);
        this.cat_bool = true;
      },

      getCountries: function() {
        return axios.get("/json/countries.json").then(res => {
          var select = document.getElementById("country-select");

          const countryObj = {};

          res.data.map(item => {
            countryObj[item.countryID] = { country: item.countryName };
          });
          for (this.i in countryObj) {
            select.options[select.options.length] = new Option(
              countryObj[this.i].country,
              this.i
            );
          }

          return {
            authors: res.data
          };
        });
      },

      filterStartup: function() {
        const country_name = $("#country-select :selected").text();
        const year_founded = $("#year_filter").val();

        if ($("#country-select").val() != 0 && $("#year_filter").val() === "") {
          this.$store.dispatch("getStartups").then(res => {
            var startupArray = res.data;
            var filteredArray = startupArray.filter(function(el) {
              return el.country === country_name;
            });
            this.startupList = filteredArray;
            this.length = this.startupList.length;
            $(".list-group")
              .children()
              .removeClass("active");
          });
        } else if ($("#country-select").val() == 0 && $("#year_filter").val()) {
          this.$store.dispatch("getStartups").then(res => {
            var startupArray = res.data;

            var filteredArray = startupArray.filter(function(el) {
              return el.year_founded == $("#year_filter").val();
            });
            this.startupList = filteredArray;
            this.length = this.startupList.length;
            $(".list-group")
              .children()
              .removeClass("active");
          });
        } else if ($("#country-select").val() != 0 && $("#year_filter").val()) {
          this.$store.dispatch("getStartups").then(res => {
            var startupArray = res.data;
            var filteredArray = startupArray.filter(function(el) {
              return el.country === country_name;
            });
            var doubleFilter = filteredArray.filter(function(el) {
              return el.year_founded == $("#year_filter").val();
            });
            this.startupList = doubleFilter;
            this.length = this.startupList.length;
            $(".list-group")
              .children()
              .removeClass("active");
          });
        } else {
          this.$store.dispatch("getStartups").then(res => {
            this.startupList = res.data;
          });
          $(".list-group")
            .children()
            .removeClass("active");
          $("#allStartUp").addClass("active");
        }
      },

      getCategoryById: function(id) {
        var payload = new FormData();
        payload.append("id", id);
        this.$store.dispatch("getCategoryById", payload).then(res => {
          this.category_name = res.data.category;
        });
      }
    }
  };
</script>

<style>
.cat_class {
  text-align: center;
  cursor: pointer;
  color: black;
}

.cat_class:hover {
  color: #ffce10;
}

.hide {
  display: none;
}

.sidebar-listing-search-wrap form input.sidebar-listing-search-btn {
  text-align: center;
  cursor: pointer;
}
</style>