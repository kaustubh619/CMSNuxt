<template>
  <div>
    <div id="breadcrum-inner-block">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 text-center">
            <div class="breadcrum-inner-header">
              <h1>{{ product_name }}</h1>
              <nuxt-link to="/">Home</nuxt-link>
              <i class="fa fa-circle"></i>
              <nuxt-link to="">
                <span>Update</span>
              </nuxt-link>
              <div style="margin-top: 20px; color: white">
                <p class="contact_number">
                  <i class="fa fa-calendar fa-custom"></i>
                  Date Added: &nbsp; {{ added_date }}
                </p>
              </div>
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
                {{ product_name }}
                <span>Update</span>
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
              <div class="col-xs-12 col-md-offset-1 col-md-10">
                <div class="submit_listing_box">
                  <div v-for="(item, i) in post" :key="i">
                    <post-image v-if="item.type === 'image'" :data="item" />
                    <post-heading v-if="item.type === 'header'" :data="item" />
                    <post-paragraph
                      v-if="item.type === 'paragraph'"
                      :data="item"
                    />
                    <post-list v-if="item.type === 'list'" :data="item" />
                  </div>
                  <h3>Update Video</h3>
                  <video
                    id="player"
                    poster="../../images/pro_img.jpg"
                    playsinline
                    controls
                  >
                    <source :src="update_video" type="video/mp4" />
                    <source :src="update_video" type="video/webm" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-offset-1 col-sm-10">
              <div class="comments-wrapper">
                <h2>2 Comments</h2>
                <ul class="media-list">
                  <li class="media">
                    <div class="media-left">
                      <a href="#">
                        <img
                          alt="image"
                          src="~static/images/comment-thumb-1.jpg"
                        />
                      </a>
                    </div>
                    <div class="media-body">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since they 1500s,
                        when an unknown printer took a galley of type and
                        scrambled.Nulla a enim et justo facilisis ornare. Sed
                        ante sem, dignissim a vehicula et, rutrum volutpat
                        turpis. Praesent id leo lacinia, malesuada tortor ut,
                        lobortis leo.
                      </p>
                      <div class="comment-meta clearfix">
                        <a href="#"
                          ><span class="author-name">John doe</span></a
                        >
                        <span class="comment-lt-time">22 April - 2016</span>
                        <span class="rating-box">
                          <span class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                          </span>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li class="media">
                    <div class="media-left">
                      <a href="#">
                        <img
                          alt="image"
                          src="~static/images/comment-thumb-1.jpg"
                        />
                      </a>
                    </div>
                    <div class="media-body">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since they 1500s,
                        when an unknown printer took a galley of type and
                        scrambled.Nulla a enim et justo facilisis ornare. Sed
                        ante sem, dignissim a vehicula et, rutrum volutpat
                        turpis. Praesent id leo lacinia, malesuada tortor ut,
                        lobortis leo.
                      </p>
                      <div class="comment-meta clearfix">
                        <a href="#"
                          ><span class="author-name">John doe</span></a
                        >
                        <span class="comment-lt-time">22 April - 2016</span>
                        <span class="rating-box">
                          <span class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                          </span>
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="comment-respond">
                  <h2>Post A Comment</h2>
                  <form>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <span class="rating-box">
                            <span class="rating">
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star-o"></i>
                            </span>
                          </span>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <input
                            placeholder="Full Name"
                            required
                            class="form-control"
                            type="text"
                          />
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <input
                            placeholder="Email Address"
                            required
                            class="form-control"
                            type="email"
                          />
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <input
                            placeholder="Your Website"
                            required
                            class="form-control"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <textarea
                        placeholder="Type here message"
                        rows="7"
                        required
                        class="form-control"
                      ></textarea>
                    </div>
                    <button class="btn" type="submit">Submit</button>
                  </form>
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
  import PostImage from "~/components/Image.vue";
  import PostHeading from "~/components/Heading.vue";
  import PostParagraph from "~/components/Paragraph.vue";
  import PostList from "~/components/List.vue";
  let player;
  export default {
    components: { PostImage, PostHeading, PostParagraph, PostList },
    data() {
      return {
        post: [],
        product_name: "",
        added_date: "",
        update_video: ""
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
          this.post = JSON.parse(res.data.latest_updates);
          this.product_name = res.data.product.product_name;
          // this.city = res.data.startup_name.city;
          // this.country = res.data.startup_name.country;
          // this.startup = res.data.startup_name.name;
          // this.stage = res.data.stage;
          // this.users = res.data.active_users;
          // this.app_link = res.data.product_app_link;
          this.added_date = res.data.added_date;
          this.update_video = res.data.update_video;
          setTimeout(function() {
            player = new Plyr("#player");
          }, 1000);
        });
      }
    }
  };
</script>

<style>
.header_slt_block .user_logo_pic {
  background: transparent;
  width: 0px;
}
.slt_item_contant {
  position: relative;
  left: 10px;
}

.app-link {
  text-decoration: none;
  color: white;
}

.app-link:hover {
  color: #ffce10;
}

.app-link:active {
  color: white;
}

.app-link:focus {
  color: white;
}

.submit_listing_box h3 {
  border-bottom: 0px;
  margin-bottom: 0px;
  margin-top: 30px;
}

.link-class {
  background-color: #ffce10;
  padding: 10px;
  color: black;
  float: right;
  border-radius: 5px;
}

.link-class:hover {
  color: white;
  background-color: black;
}

.update-class {
  color: grey;
}
.update-class:hover {
  color: #ffce10;
}
</style>
