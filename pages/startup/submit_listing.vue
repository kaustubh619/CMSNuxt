<template>
  <div>
    <div id="breadcrum-inner-block">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 text-center">
            <div class="breadcrum-inner-header">
              <h1>Submit Startup</h1>
              <span>
                <nuxt-link to="/">Home</nuxt-link>
              </span>
              <i class="fa fa-circle"></i>
              <nuxt-link to="">
                <span>Submit Startup</span>
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
                Submit
                <span>Startup</span>
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
                <!-- <div id="leftcol_item">
              <div class="user_dashboard_pic"> <img alt="user photo" src="images/user-profile.png"> <span class="user-photo-action">Click here to Reupload</span> </div>
                </div>-->
                <div class="dashboard_nav_item row" style="padding: 10px;">
                  <ul>
                    <li class="active">
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
                  <h3>Description</h3>
                  <form class="form-alt">
                    <div class="form-group">
                      <label>Startup Name :-</label>
                      <input class="form-control" type="text" v-model="name" />
                    </div>
                    <div class="form-group">
                      <label>Startup Description :-</label>
                      <textarea
                        class="form-control"
                        rows="5"
                        v-model="description"
                      ></textarea>
                    </div>
                  </form>
                </div>
                <div class="submit_listing_box">
                  <h3>Attributes</h3>
                  <form class="form-alt">
                    <div class="row">
                      <div class="form-group col-md-6 col-sm-12 col-xs-12">
                        <label>Category :-</label>
                        <select
                          class="form-control selectcategory"
                          name="parent-cateogry"
                          id="category-select"
                        >
                          <option value="0">Select Category</option>
                        </select>
                      </div>
                      <div class="form-group col-md-6 col-sm-12 col-xs-12">
                        <label>Name of Founders :-</label>
                        <input
                          class="form-control"
                          type="text"
                          v-model="founders"
                        />
                      </div>
                      <div class="form-group col-md-6 col-sm-12 col-xs-12">
                        <label>Investors :-</label>
                        <input
                          class="form-control"
                          type="text"
                          v-model="investors"
                        />
                      </div>
                      <div class="form-group col-md-6 col-sm-12 col-xs-12">
                        <label>Team Size :-</label>
                        <input
                          class="form-control"
                          type="number"
                          v-model="team_size"
                        />
                      </div>
                      <div class="form-group col-md-6 col-sm-12 col-xs-12">
                        <label>Key Team Members :-</label>
                        <input
                          class="form-control"
                          type="text"
                          v-model="key_members"
                        />
                      </div>
                      <div class="form-group col-md-6 col-sm-12 col-xs-12">
                        <label>Incubators :-</label>
                        <input
                          class="form-control"
                          type="text"
                          v-model="incubators"
                        />
                      </div>
                      <div class="form-group col-md-6 col-sm-12 col-xs-12">
                        <label>Accelerators :-</label>
                        <input
                          class="form-control"
                          type="text"
                          v-model="accelerators"
                        />
                      </div>
                      <div class="form-group col-md-6 col-sm-12 col-xs-12">
                        <label>Partnership Associations :-</label>
                        <input
                          class="form-control"
                          type="text"
                          v-model="partners"
                        />
                      </div>
                      <div class="form-group col-md-6 col-sm-12 col-xs-12">
                        <label>Date of Launch :-</label>
                        <input
                          class="form-control"
                          type="text"
                          id="datepicker"
                        />
                      </div>
                      <div class="form-group col-md-6 col-sm-12 col-xs-12">
                        <label>Year Founded :-</label>
                        <input
                          class="form-control"
                          type="number"
                          v-model="year"
                        />
                      </div>
                      <!-- <div class="form-group col-md-6 col-sm-12 col-xs-12">
                        <label>City :-</label>
                        <input class="form-control" type="text" v-model="city" />
                      </div> -->
                      <!-- <div class="form-group col-md-6 col-sm-12 col-xs-12">
                        <label>Country :-</label>
                        <input class="form-control" type="text" v-model="country" />
                      </div> -->
                      <div class="form-group col-md-6 col-sm-12 col-xs-12">
                        <label>Country :-</label>
                        <select
                          class="form-control selectcategory"
                          id="country-select"
                          v-on:change="getCountry()"
                        >
                          <option value="0">Select Country</option>
                        </select>
                      </div>
                      <div class="form-group col-md-6 col-sm-12 col-xs-12">
                        <label>State :-</label>
                        <select
                          class="form-control selectcategory"
                          id="state-select"
                          v-on:change="getState()"
                        >
                          <option value="0">Select State</option>
                        </select>
                      </div>
                      <div class="form-group col-md-6 col-sm-12 col-xs-12">
                        <label>City :-</label>
                        <select
                          class="form-control selectcategory"
                          id="city-select"
                        >
                          <option value="0">Select City</option>
                        </select>
                      </div>
                      <div class="form-group col-md-6 col-sm-12 col-xs-12">
                        <label>What round of funding is on :-</label>
                        <input
                          class="form-control"
                          type="number"
                          v-model="funding_round"
                        />
                      </div>
                    </div>
                  </form>
                </div>

                <div class="from-list-lt">
                  <div class="form-group">
                    <button class="btn" type="submit" @click="submitStartup">
                      Submit Startup
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
  import Cookies from "js-cookie";
  import axios from "axios";
  export default {
    middleware: "token-auth",
    data() {
      return {
        name: "",
        description: "",
        founders: "",
        investors: "",
        team_size: "",
        key_members: "",
        incubators: "",
        accelerators: "",
        partners: "",
        launch_date: "",
        year: "",
        city: "",
        country: "",
        funding_round: ""
      };
    },

    mounted() {
      this.getCategories();
      this.getCountries();
      $("#datepicker").datepicker({ dateFormat: "yy-mm-dd" });
      $("#user_profile")
        .addClass("active")
        .siblings()
        .removeClass("active");
    },
    methods: {
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
      },

      getCategories: function() {
        this.$store.dispatch("getCategories").then(res => {
          this.category_length = res.data.length;

          var select = document.getElementById("category-select");

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

      getCountry: function() {
        var id = $("#country-select").val();
        return axios.get("/json/states.json").then(res => {
          var states = res.data;
          var newArray = states.filter(function(el) {
            return el.countryID === id;
          });

          var select = document.getElementById("state-select");
          $("#state-select")
            .find("option:gt(0)")
            .remove();

          const stateObj = {};

          newArray.map(item => {
            stateObj[item.stateID] = { state: item.stateName };
          });

          for (this.i in stateObj) {
            select.options[select.options.length] = new Option(
              stateObj[this.i].state,
              this.i
            );
          }
          return {
            authors: res.data
          };
        });
      },

      getState: function() {
        var id = $("#state-select").val();
        return axios.get("/json/cities.json").then(res => {
          var cities = res.data;
          var newArray = cities.filter(function(el) {
            return el.stateID === id;
          });

          var select = document.getElementById("city-select");
          $("#city-select")
            .find("option:gt(0)")
            .remove();

          const cityObj = {};

          newArray.map(item => {
            cityObj[item.cityID] = { city: item.cityName };
          });

          for (this.i in cityObj) {
            select.options[select.options.length] = new Option(
              cityObj[this.i].city,
              this.i
            );
          }
          return {
            authors: res.data
          };
        });
      },

      submitStartup: function() {
        var payload = new FormData();
        const date = $("#datepicker").val();
        payload.append("added_by", localStorage.getItem("user_id"));
        // payload.append("category", $("#category-select").val());
        payload.append("name", this.name);
        payload.append("description", this.description);
        payload.append("team_size", this.team_size);
        payload.append("key_team_members", this.key_members);
        payload.append("incubators", this.incubators);
        payload.append("accelerators", this.accelerators);
        payload.append("investors", this.investors);
        payload.append("date_of_launch", date);
        payload.append("name_of_founders", this.founders);
        payload.append("year_founded", this.year);
        const city = $("#city-select :selected").text();
        payload.append("city", city);
        const state = $("#state-select :selected").text();
        payload.append("state", state);
        const country = $("#country-select :selected").text();
        payload.append("country", country);
        payload.append("partnerships_associations", this.partners);
        payload.append("funding_round", this.funding_round);
        const category_id = $("#category-select").val();
        payload.append("category", category_id);
        const date_added = new Date();
        const day = date_added.getDate();
        const month = date_added.getMonth() + 1;
        const year = date_added.getFullYear();
        const added_dated = year + "-" + month + "-" + day;
        payload.append("added_date", added_dated);

        this.$store.dispatch("submitStartup", payload).then(res => {
          alert("Startup submitted successfully");
          this.$router.push("/startup/listing");
        });
      }
    }
  };
</script>

<style>
#state-select.select {
  color: red !important;
}
</style>
