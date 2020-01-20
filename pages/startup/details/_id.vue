<template>
  <div>
    <div id="breadcrum-inner-block">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 text-center">
            <div class="breadcrum-inner-header">
              <h1>{{ name }}</h1>
              <nuxt-link to="/">Home</nuxt-link>
              <i class="fa fa-circle"></i>
              <nuxt-link to>
                <span>Startup Details</span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="vfx-product-inner-item">
      <div class="container">
        <div class="row">
          <p class="header-st-1">{{ name }}</p>
          <p class="header-st-2">{{ description }}</p>
          <div class="col-12 col-sm-8" style="margin-top: 40px">
            <img :src="thumbnail" class="st-thumb" />
            <div class="col-12">
              <div class="tab">
                <button
                  class="tablinks"
                  id="product"
                  @click="openbtn('description')"
                >
                  Products
                </button>
                <button class="tablinks" id="faq" @click="openbtn('reviews')">
                  FAQ
                </button>
                <button class="tablinks" id="com" @click="openbtn('community')">
                  Community
                </button>
              </div>

              <div id="description" class="tabcontent">
                <div class="row" v-if="product_bool">
                  <div
                    class="col-12"
                    v-for="(a, b) in product_list"
                    :key="b"
                    style="padding: 10px"
                  >
                    <nuxt-link
                      :to="{
                        name: 'products-id',
                        params: { id: a.id }
                      }"
                    >
                      <p class="st-sub-text-1">
                        {{ b + 1 }}.
                        <span style="margin-left: 10px" class="prod_desc-11"
                          >Product Name - {{ a.product_name }}</span
                        >
                        <video
                          id="player"
                          poster="../../../images/pro_img.jpg"
                          playsinline
                          controls
                          style="margin-top: 20px; width: 100%;"
                        >
                          <source :src="a.product_video" type="video/mp4" />
                          <source :src="a.product_video" type="video/webm" />
                        </video>
                      </p>
                      <br />
                    </nuxt-link>
                  </div>
                </div>
                <div class="row" v-else>
                  <div class="col-12" style="padding: 10px; font-weight: 300">
                    No Products added for this startup
                  </div>
                </div>
              </div>

              <div id="reviews" class="tabcontent">
                <p class="faq-11">Frequently Asked Questions</p>
              </div>

              <div id="community" class="tabcontent">
                <p class="faq-11">Community</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-4" style="margin-top: 40px">
            <hr style="margin-top: 0px; border: 3px solid #ffce10" />

            <p class="st-text-1">{{ team_size }}</p>
            <p class="st-sub-text-1">team size</p>

            <p class="st-text-2">{{ key_team_members }}</p>
            <p class="st-sub-text-2">key team members</p>

            <p class="st-text-3">{{ incubators }}</p>
            <p class="st-sub-text-3">incubators</p>

            <p class="st-text-2">{{ accelerators }}</p>
            <p class="st-sub-text-2">accelerators</p>

            <p class="st-text-2">{{ investors }}</p>
            <p class="st-sub-text-2">investors</p>

            <p class="st-text-1">{{ estd }}</p>
            <p class="st-sub-text-2">
              <i class="fa fa-calendar" aria-hidden="true"></i>
              date of launch
            </p>

            <p class="st-text-2">{{ founders }}</p>
            <p class="st-sub-text-2">founders</p>

            <p class="st-text-2">{{ city }}, {{ state }}, {{ country }}</p>
            <p class="st-sub-text-2">
              <i class="fa fa-map-marker" aria-hidden="true"></i>
              location
            </p>

            <p class="st-text-1">{{ round }}</p>
            <p class="st-sub-text-2">funding round</p>

            <p class="st-text-2">{{ partners }}</p>
            <p class="st-sub-text-2">partnership associations</p>

            <button class="st-btn-11">Back this Startup</button>
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
        city: "",
        country: "",
        category: "",
        estd: "",
        description: "",
        team_size: "",
        key_team_members: "",
        founders: "",
        incubators: "",
        investors: "",
        accelerators: "",
        partners: "",
        round: "",
        added: "",
        product_list: [],
        product_bool: false,
        thumbnail: "",
        state: ""
      };
    },
    mounted() {
      $("#user_profile")
        .addClass("active")
        .siblings()
        .removeClass("active");
      this.getStartupDetails();
      this.getStProducts();

      $(".tablinks").click(function() {
        var id = $(this).attr("id");

        $("#" + id)
          .addClass("btn-activated")
          .siblings()
          .removeClass("btn-activated");
      });

      document.getElementById("product").click();
    },
    methods: {
      getStartupDetails: function() {
        var payload = new FormData();
        payload.append("id", this.$route.params.id);
        this.$store.dispatch("getStartupDetails", payload).then(res => {
          this.name = res.data.name;
          this.city = res.data.city;
          this.country = res.data.country;
          this.category = res.data.category.category;
          this.estd = res.data.date_of_launch;
          this.description = res.data.description;
          this.team_size = res.data.team_size;
          this.key_team_members = res.data.key_team_members;
          this.founders = res.data.name_of_founders;
          this.incubators = res.data.incubators;
          this.investors = res.data.investors;
          this.accelerators = res.data.accelerators;
          this.partners = res.data.partnerships_associations;
          this.round = res.data.funding_round;
          this.added = res.data.added_date;
          this.thumbnail = res.data.thumbnail;
          this.state = res.data.state;
        });
      },

      getStProducts: function() {
        var payload = new FormData();
        payload.append("id", this.$route.params.id);
        this.$store.dispatch("getStProducts", payload).then(res => {
          console.log(res.data);
          this.product_list = res.data;
          if (res.data.length !== 0) {
            this.product_bool = true;
          }
        });
      },

      openbtn: function(btnName) {
        var i, tabcontent, tablinks;

        tabcontent = document.getElementsByClassName("tabcontent");

        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }

        document.getElementById(btnName).style.display = "block";
      }
    }
  };
</script>

<style>
.product_link {
  color: black;
}

.product_link:hover {
  color: #ffce10;
}

#vfx-product-inner-item {
  padding: 40px 0px;
}

.header-st-1 {
  text-align: center;
  font-size: 26px;
  font-weight: 600;
}

.header-st-2 {
  text-align: center;
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: 100;
}

.st-thumb {
  width: 100%;
  height: 450px;
  object-fit: cover;
  object-position: center;
}

@media (min-width: 56.25em) and (max-width: 75em) {
  .st-thumb {
    height: 350px;
  }
}

@media (min-width: 37.5em) and (max-width: 56.25em) {
  .st-thumb {
    height: 300px;
  }
}

@media (max-width: 56.25em) {
  .st-thumb {
    height: 260px;
  }
}

.news-text-thum {
  padding-left: 0px;
}

.st-text-1 {
  color: #f9ca40;
  font-size: 20px;
  margin-bottom: 0px;
  font-weight: 500;
}

.st-sub-text-1 {
  color: grey;
  margin-bottom: 20px;
}

.st-text-2 {
  color: grey;
  font-size: 20px;
  margin-bottom: 0px;
  font-weight: 400;
}

.st-sub-text-2 {
  color: grey;
  margin-bottom: 20px;
}

.st-text-3 {
  color: grey;
  font-size: 20px;
  margin-bottom: 0px;
  font-weight: 400;
}

.st-sub-text-3 {
  color: grey;
  margin-bottom: 20px;
}

@media (max-width: 37.5em) {
  .st-text-1 {
    text-align: center;
  }
  .st-text-2 {
    text-align: center;
  }
  .st-text-3 {
    text-align: center;
  }
  .st-sub-text-1 {
    text-align: center;
  }
  .st-sub-text-2 {
    text-align: center;
  }
  .st-sub-text-3 {
    text-align: center;
  }
}

.st-btn-11 {
  margin-top: 20px;
  width: 100%;
  background-color: #f9ca40;
  border: none;
  padding: 15px 30px;
}

.st-btn-11:hover {
  background-color: #ffce10;
  transform: scale(1.005);
}

.tab {
  overflow: hidden;
  border-top: 1px solid #e7e7e7;
  border-bottom: 1px solid #e7e7e7;
  width: 100%;
  margin-top: 30px;
}

.tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 14px;
  font-weight: 300;
}

.tab button:hover {
  background-color: #ffce10;
}

.tabcontent {
  display: none;
  padding: 6px 12px;
  border-top: none;
  width: 100%;
  height: auto;
}

.btn-activated {
  background-color: #f9ca40 !important;
}

.faq-11 {
  margin-top: 10px;
  font-weight: 300;
}

.prod_desc-11 {
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 1px;
}
</style>
