
<template>
  <div>
    <div id="breadcrum-inner-block">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 text-center">
            <div class="breadcrum-inner-header">
              <h1>Product Update</h1>
              <nuxt-link to="/">Home</nuxt-link>
              <i class="fa fa-circle"></i>
              <nuxt-link to>
                <span>Product Update</span>
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
                Edit
                <span>Product Update</span>
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
                      <div class="form-group col-xs-12">
                        <label>Update :-</label>
                        <div
                          id="editorjs"
                          style="border: 1px solid #e9e6e0; border-radius: 4px; background-color: #fff; padding: 20px"
                        ></div>
                      </div>
                      <div class="form-group col-md-6 col-sm-12 col-xs-12">
                        <label>Update Video :-</label>
                        <p style="display: inline; float: left">Currently -</p>
                        <a
                          :href="video_url"
                          target="_blank"
                          style="cursor: pointer; float: left; margin-left: 6px"
                          >{{ video_name }}</a
                        >
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
                    <button
                      class="btn"
                      type="submit"
                      @click="editProductUpdate"
                    >
                      Update
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
  let EditorJS, Header, List, Image;

  if (process.browser) {
    EditorJS = require("@editorjs/editorjs");
    Header = require("@editorjs/header");
    List = require("@editorjs/list");
    Image = require("@editorjs/image");
  }

  export default {
    middleware: "token-auth",
    data() {
      return {
        post: [],
        id: "",
        product_name: "",
        city: "",
        country: "",
        startup: "",
        stage: "",
        users: "",
        app_link: "",
        startupname: "",
        active_users: "",
        startup_id: "",
        file: "",
        video_url: "",
        video_name: "",
        product_id: ""
      };
    },

    mounted() {
      this.UpdateById();
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

      UpdateById: function() {
        this.$store.dispatch("UpdateById", this.$route.params.id).then(res => {
          this.product_id = res.data.product.id;
          this.video_url = res.data.update_video;
          if (res.data.update_video !== null) {
            this.video_name = res.data.update_video.slice(43);
          }

          this.post = JSON.parse(res.data.latest_updates);
          this.editor = new EditorJS({
            holder: "editorjs",
            tools: {
              header: Header,
              list: List,
              image: {
                class: Image,
                config: {
                  endpoints: {
                    byFile: "http://www.ft500.in/backend/product_image"
                  }
                }
              }
            },
            data: { blocks: this.post }
          });
        });
      },

      handleFileUpload: function() {
        this.file = this.$refs.file.files[0];
      },

      editProductUpdate: function() {
        this.editor.save().then(async outputData => {
          if (outputData.blocks.length) {
            let heading, featuredImg;
            for (let i = 0; i < outputData.blocks.length; i++) {
              if (outputData.blocks[i].type === "header") {
                heading = outputData.blocks[i].data.text;
              }
              if (outputData.blocks[i].type === "image") {
                featuredImg = outputData.blocks[i].data.file.url;
              }
              if (heading && featuredImg) break;
            }
            if (heading && featuredImg && this.description) {
              this.$store.dispatch("savePost", {
                heading,
                featuredImg,
                router: this.$router,
                description: this.description,
                author: "John Doe",
                data: outputData.blocks
              });
            }
          }
          var payload = new FormData();
          payload.append("id", this.$route.params.id);
          payload.append("added_by", localStorage.getItem("user_id"));
          payload.append("updated_by", localStorage.getItem("user_id"));
          const date_added = new Date();
          const day = date_added.getDate();
          const month = date_added.getMonth() + 1;
          const year = date_added.getFullYear();
          const added_dated = year + "-" + month + "-" + day;
          payload.append("updated_date", added_dated);
          payload.append("latest_updates", JSON.stringify(outputData.blocks));
          if (this.file) {
            payload.append("update_video", this.file);
          }
          payload.append("product", this.product_id);
          this.$store.dispatch("editProductUpdate", payload).then(res => {});
          this.$router.push("/startup/listing");
        });
      }
    }
  };
</script>

<style>
</style>
