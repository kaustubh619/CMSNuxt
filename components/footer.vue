<template>
  <footer class="site-footer footer-map">
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-sm-6 col-xs-12">
            <h2>About Us</h2>
            <hr />
            <p class="about-lt">
              <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              justo lectus, consectetur quis nisi vitae, Nunc eget ultrices
              ligula.-->
              {{ about }}
            </p>
            <nuxt-link to="/about" class="btn-primary-link more-detail">
              <i class="fa fa-hand-o-right"></i> Read More
            </nuxt-link>
            <h2>Follow Us</h2>
            <hr />
            <ul class="social-icons">
              <li>
                <a href="#">
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-google-plus"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-pinterest-p"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-youtube-play"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-12">
            <h2>Recent Listing</h2>
            <hr />
            <ul class="widget-news-simple">
              <li v-for="(x,y) in footerStartupList" :key="y">
                <!-- <div class="news-thum">
                  <a href="#">
                    <img src="~static/images/new-thum-1.png" alt="new-thum-1" />
                  </a>
                </div>-->
                <div class="news-text-thum">
                  <h6>{{ x.name }}</h6>
                  <p>{{ x.description.slice(0,140) }}......</p>
                  <nuxt-link
                    :to="{
                          name: 'startup-details-id',
                          params: { id: x.id }
                        }"
                  >Read More</nuxt-link>
                  <br />
                  <div>Price: $117</div>
                </div>
              </li>
              <!-- <li>
                <div class="news-thum">
                  <a href="#">
                    <img src="~static/images/new-thum-1.png" alt="new-thum-1" />
                  </a>
                </div>
                <div class="news-text-thum">
                  <h6>
                    <a href="#">Hello Directory Listing</a>
                  </h6>
                  <p>Phasellus ut condimentum diam, eget tempus lorem...</p>
                  <div>Price: $117</div>
                </div>
              </li>-->
            </ul>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-12">
            <h2>Useful links</h2>
            <hr />
            <ul class="use-slt-link">
              <li>
                <a href="#">
                  <i class="fa fa-hand-o-right"></i>&nbsp;&nbsp;Privacy &
                  Policy
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-hand-o-right"></i>&nbsp;&nbsp;Payment
                  Method
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-hand-o-right"></i>&nbsp;&nbsp;Sitemap
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-hand-o-right"></i>&nbsp;&nbsp;Support
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-hand-o-right"></i>&nbsp;&nbsp;Terms &
                  Condition
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-12">
            <h2>Have you any Query?</h2>
            <hr />
            <form class="form-alt">
              <div class="form-group">
                <input type="text" placeholder="Name :-" required class="form-control" />
              </div>
              <div class="form-group">
                <input type="text" placeholder="Email :-" required class="form-control" />
              </div>
              <div class="form-group">
                <textarea placeholder="Message :-" required class="form-control"></textarea>
              </div>
              <div class="form-group">
                <button type="submit" class="btn-quote">Send Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-12">
            <p class="text-xs-center">Copyright © 2017 All Rights Reserved.</p>
          </div>
          <!-- <div><a href="#" class="scrollup">Scroll</a></div> -->
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      about: "",
      footerStartupList: []
    };
  },
  mounted() {
    this.activatedFooterCMS();
    this.getFooterStartUps();
  },
  methods: {
    activatedFooterCMS: function() {
      this.$store.dispatch("activatedFooterCMS").then(res => {
        res.data.map(item => {
          this.about = item.about_us;
        });
      });
    },
    getFooterStartUps: function() {
      this.$store.dispatch("getStartups").then(res => {
        this.footerStartupList = res.data.reverse().splice(0, 2);
      });
    }
  }
};
</script>

<style>
</style>
