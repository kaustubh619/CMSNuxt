<template>
  <div v-if="loading_bool">
    <div class="sk-cube-grid">
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
    <div style="margin: 100px">
      <h4
        style="text-align: center;font-family: GothamRounded;
          font-size: 26px;
          font-weight: 600;
          text-shadow: 2px 2px #e7e7e7;"
      >
        Submitting product, please wait
      </h4>
      <h4
        style="text-align: center;font-family: GothamRounded;
          font-size: 26px;
          font-weight: 600;
          text-shadow: 2px 2px #e7e7e7;"
      >
        This may take a little while
      </h4>
    </div>
  </div>
  <div v-else>
    <div id="breadcrum-inner-block">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 text-center">
            <div class="breadcrum-inner-header">
              <h1>Add Product</h1>
              <nuxt-link to="/">Home</nuxt-link>
              <i class="fa fa-circle"></i>
              <nuxt-link to>
                <span>Add Product</span>
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
                <span>Product</span>
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
                        <label>Startup Name</label>
                        <input
                          class="form-control"
                          type="text"
                          v-model="startupname"
                        />
                      </div>
                      <div class="form-group col-md-6 col-sm-12 col-xs-12">
                        <label>Stage</label>
                        <input
                          class="form-control"
                          type="number"
                          v-model="stage"
                        />
                      </div>
                      <div class="form-group col-md-6 col-sm-12 col-xs-12">
                        <label>Product Name</label>
                        <input
                          class="form-control"
                          type="text"
                          v-model="product_name"
                        />
                      </div>
                      <div class="form-group col-md-6 col-sm-12 col-xs-12">
                        <label>Application Link</label>
                        <input
                          class="form-control"
                          type="text"
                          v-model="app_link"
                        />
                      </div>
                      <div class="form-group col-md-6 col-sm-12 col-xs-12">
                        <label>Number of active users</label>
                        <input
                          class="form-control"
                          type="number"
                          v-model="active_users"
                        />
                      </div>
                      <div class="form-group col-xs-12">
                        <label>Description</label>
                        <div id="editor-container"></div>
                      </div>

                      <div class="form-group col-md-6 col-sm-12 col-xs-12">
                        <label>Product Video</label>
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
                    <button class="btn" type="submit" @click="save">
                      Submit Product
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
  let EditorJS, Header, List, Image, quill;
  export default {
    middleware: "token-auth",
    data() {
      return {
        startupname: "",
        description: "",
        stage: "",
        product_name: "",
        app_link: "",
        active_users: "",
        desc: "",
        file: "",
        delta: "",
        loading_bool: false
      };
    },
    mounted() {
      quill = new Quill("#editor-container", {
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, 4, false] }],
            ["bold", "italic", "underline"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["image"],

            [{ color: [] }, { background: [] }],
            [{ font: [] }],
            [{ align: [] }]
          ]
        },
        placeholder: "Write Product Description here...",
        theme: "snow"
      });

      quill.on("text-change", function() {
        this.delta = quill.getContents();
      });

      this.startupname = this.$route.params.startup;

      $("#user_profile")
        .addClass("active")
        .siblings()
        .removeClass("active");
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

      save() {
        var payload = new FormData();
        payload.append("added_by", localStorage.getItem("user_id"));
        const date_added = new Date();
        const day = date_added.getDate();
        const month = date_added.getMonth() + 1;
        const year = date_added.getFullYear();
        const added_dated = year + "-" + month + "-" + day;
        payload.append("added_date", added_dated);
        payload.append("stage", this.stage);
        payload.append("product_name", this.product_name);
        payload.append("description", JSON.stringify(quill.getContents()));
        payload.append("product_app_link", this.app_link);
        payload.append("active_users", this.active_users);
        payload.append("startup_name", this.$route.params.id);
        payload.append("product_video", this.file);
        this.loading_bool = true;
        this.$store.dispatch("postProduct", payload).then(res => {
          this.$router.push("/startup/listing");
        });
      }
    }
  };
</script>

<style>
</style>
