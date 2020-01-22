<template>
  <div>
    <div id="breadcrum-inner-block">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 text-center">
            <div class="breadcrum-inner-header">
              <h1>Contact Us</h1>
              <span>
                <nuxt-link to="/">Home</nuxt-link>
              </span>
              <i class="fa fa-circle"></i>
              <nuxt-link to="/contact">
                <span>Contact Us</span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="vfx-product-inner-item">
      <div class="container">
        <div class="row">
          <div class="col-md-12 contact-heading-title text-center bt_heading_3">
            <h1>
              Contact
              <span>Us</span>
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
          <span class="clt-content">
            <div v-for="(item, i) in post" :key="i">
              <post-paragraph v-if="item.type === 'paragraph'" :data="item" />
              <post-list v-if="item.type === 'list'" :data="item" />
            </div>
            <!-- Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.
            <br />
            <br />Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            <br />
            <br />It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.-->
          </span>
          <div class="from-list-lt">
            <div class="col-xs-12 col-lg-8 col-sm-12">
              <form class="form-float form-alt">
                <div class="fb-render"></div>
                <!-- <div class="row">
                  <div class="form-group col-xs-12 col-sm-6">
                    <span class="from-input-ic">
                      <i class="fa fa-user"></i>
                    </span>
                    <input
                      class="form-control"
                      required
                      placeholder="Frist Name"
                      type="text"
                    />
                  </div>
                  <div class="form-group col-xs-12 col-sm-6">
                    <span class="from-input-ic">
                      <i class="fa fa-user"></i>
                    </span>
                    <input
                      class="form-control"
                      required
                      placeholder="Last Name"
                      type="text"
                    />
                  </div>
                  <div class="form-group col-xs-12 col-sm-6">
                    <span class="from-input-ic">
                      <i class="fa fa-envelope-o"></i>
                    </span>
                    <input
                      class="form-control"
                      required
                      placeholder="Email"
                      type="text"
                    />
                  </div>
                  <div class="form-group col-xs-12 col-sm-6">
                    <span class="from-input-ic">
                      <i class="fa fa-phone"></i>
                    </span>
                    <input
                      class="form-control"
                      required
                      placeholder="Contact Number"
                      type="text"
                    />
                  </div>
                  <div class="form-group col-xs-12">
                    <span class="from-input-ic">
                      <i class="fa fa-comments"></i>
                    </span>
                    <textarea
                      class="form-control"
                      required
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <div class="form-group col-xs-12 col-sm-6">
                    <input
                      class="verifi_code form-control"
                      required
                      placeholder="Verification Code"
                      type="text"
                    />
                  </div>
                  <div class="form-group col-xs-12 col-sm-6">
                    <div class="b-form-vertical__input">
                      <img id="captcha" src="images/captcha.png" alt />
                      <a href="javascript:void(0);">
                        <span class="captchareload">
                          <i class="fa fa-refresh"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div class="form-group col-xs-12">
                    <button class="btn pull-right" type="submit">Submit</button>
                  </div>
                </div> -->
              </form>
            </div>
            <div class="col-xs-12 col-lg-4 col-sm-12">
              <div class="col-xs-12 col-md-12 col-lg-12 col-sm-12">
                <div class="media media-iconic">
                  <div class="media-body">
                    <div class="lt-co-icon">
                      <img src="images/ic-loc.png" alt="ic-loc" />
                    </div>
                    <div class="lt-co-blok-text">
                      <div class="lt-co-title">Location</div>
                      <hr class="lt-co-yellow-hr" />
                      <p class="lt-bdr-one">{{ location }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-md-12 col-lg-12 col-sm-12">
                <div class="media media-iconic">
                  <div class="media-body">
                    <div class="lt-co-icon">
                      <img src="images/ic-call.png" alt="ic-call" />
                    </div>
                    <div class="lt-co-blok-text">
                      <div class="lt-co-title">Phone | Email</div>
                      <hr class="lt-co-green-hr" />
                      <p class="lt-bdr-two">
                        <b>Tel 1</b>
                        :-&nbsp;+ {{ phone1 }}
                        <br />
                        <b>Tel 2</b>
                        :-&nbsp;+ {{ phone2 }}
                        <br />
                        <b>E-Mail</b>
                        :-&nbsp; {{ email }}
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-md-12 col-lg-12 col-sm-12">
                <div class="media media-iconic">
                  <!-- <div class="media-body">
                    <div class="lt-co-icon">
                      <img src="images/ic-time.png" alt="ic-time" />
                    </div>
                    <div class="lt-co-blok-text">
                      <div class="lt-co-title">Working Hours</div>
                      <hr class="lt-bg-blue-hr" />
                      <p class="lt-bdr-three">
                        <b>Mon</b> -
                        <b>Sat</b> :- 9am - 6pm
                      </p>
                    </div>
                  </div>-->
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
  import PostParagraph from "~/components/Paragraph.vue";
  import PostList from "~/components/List.vue";

  export default {
    components: {
      Auth,
      PostParagraph,
      PostList
    },
    data() {
      return {
        post: [],
        location: "",
        phone1: "",
        phone2: "",
        email: ""
      };
    },
    mounted() {
      this.getActiveContactCMS();
      this.getContactForm();
      $("#contact")
        .addClass("active")
        .siblings()
        .removeClass("active");
    },
    methods: {
      getActiveContactCMS: function() {
        this.$store.dispatch("getActiveContactCMS").then(res => {
          res.data.map(item => {
            this.post = JSON.parse(item.contact_info);
            this.location = item.location;
            this.phone1 = item.phone1;
            this.phone2 = item.phone2;
            this.email = item.email;
          });
        });
      },

      getContactForm: function() {
        this.$store.dispatch("getContactForm").then(res => {
          const fbRender = document.getElementById("fb-render");
          jQuery(function($) {
            $(".fb-render").formRender({
              dataType: "json",
              formData: res.data.form
            });
          });
        });
      }
    }
  };
</script>

<style>
</style>
