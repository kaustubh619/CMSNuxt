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
              <nuxt-link to="">
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
          <div class="col-xs-12 col-sm-offset-1 col-sm-10">
            <!-- col-md-9 col-sm-8 col-xs-12 -->
            <div class="dlt-title-item">
              <h2>Startup Description</h2>
              <hr class="row" />
              <div style="display:block">
                <span>Category</span> - {{ category }}
              </div>
              <div><span>Established</span> - {{ estd }}</div>
              <div style="display:block">
                <span>Location</span> - {{ city }}, {{ country }}
              </div>
              <div style="display:block">
                <span>Team Size</span> - {{ team_size }}
              </div>
              <div style="display:block">
                <span>Key Team Members</span> - {{ key_team_members }}
              </div>
              <div style="display:block">
                <span>Founders</span> - {{ founders }}
              </div>
              <div style="display:block">
                <span>Incubators</span> - {{ incubators }}
              </div>
              <div style="display:block">
                <span>Investors</span> - {{ investors }}
              </div>
              <div style="display:block">
                <span>Accelerators</span> - {{ accelerators }}
              </div>
              <div style="display:block">
                <span>Partnership Associations</span> - {{ partners }}
              </div>
              <div style="display:block">
                <span>Funding Round</span> - {{ round }}
              </div>
              <div style="display:block">
                <span>Added On</span> - {{ added }}
              </div>
              <p>{{ description }}</p>
            </div>
            <hr class="row" />
            <div class="dlt-title-item">
              <h2>Products</h2>
              <ul v-if="product_bool">
                <li v-for="(x, y) in product_list" :key="y">
                  <nuxt-link
                    :to="{ name: 'products-id', params: { id: x.id } }"
                    class="product_link"
                    >{{ x.product_name }}</nuxt-link
                  >
                </li>
              </ul>
              <h4 v-else>No products added for this startup</h4>
            </div>
            <hr class="row" />
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
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since they 1500s, when an unknown
                      printer took a galley of type and scrambled.Nulla a enim
                      et justo facilisis ornare. Sed ante sem, dignissim a
                      vehicula et, rutrum volutpat turpis. Praesent id leo
                      lacinia, malesuada tortor ut, lobortis leo.
                    </p>
                    <div class="comment-meta clearfix">
                      <a href="#"><span class="author-name">John doe</span></a>
                      <span class="comment-lt-time">22 April - 2016</span>
                      <span class="rating-box">
                        <span class="rating">
                          <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i> <i class="fa fa-star"></i>
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
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since they 1500s, when an unknown
                      printer took a galley of type and scrambled.Nulla a enim
                      et justo facilisis ornare. Sed ante sem, dignissim a
                      vehicula et, rutrum volutpat turpis. Praesent id leo
                      lacinia, malesuada tortor ut, lobortis leo.
                    </p>
                    <div class="comment-meta clearfix">
                      <a href="#"><span class="author-name">John doe</span></a>
                      <span class="comment-lt-time">22 April - 2016</span>
                      <span class="rating-box">
                        <span class="rating">
                          <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i> <i class="fa fa-star"></i>
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
                  <button class="btn pull-right" type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
          <!-- <div class="col-md-3 col-sm-4 col-xs-12">
        <div class="left-slide-slt-block">
          <h3>Search Listings</h3>
        </div>
        <div class="sidebar-listing-search-wrap">
          <form action="#">
            <p>Search For :</p>
            <select class="sidebar-listing-search-select">
              <option>All Categories 1</option>
              <option>All Categories 2</option>
              <option>All Categories 3</option>
            </select>
            <input class="sidebar-listing-search-input" placeholder="Search" name="search" type="text">
            <p>Search Near :</p>
            <select class="sidebar-listing-search-select">
              <option>All Categories 1</option>
              <option>All Categories 2</option>
              <option>All Categories 3</option>
            </select>
            <input class="sidebar-listing-search-input" placeholder="Search" name="search" type="text">
            
            <div class="listing-search-btn">
              <input class="sidebar-listing-search-btn" value="Search" type="submit">
            </div>
          </form>
        </div>
      </div> -->
        </div>
        <div id="recent-product-item-listing">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 text-center">
                <div class="col-md-12 recent-item-listing-heading bt_heading_3">
                  <h1>
                    Recent
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
                  <div class="col-md-6 col-sm-6 col-xs-12 col-lg-4">
                    <div class="recent-listing-box-container-item">
                      <div class="col-xs-12 nopadding">
                        <div class="recent-listing-box-item">
                          <div class="listing-boxes-text">
                            <a href="#">
                              <h3>Hello Directory Listing</h3>
                            </a>
                            <a href="#">
                              <i class="fa fa-phone"></i> +91 087 654 3210
                            </a>
                            <p>
                              Eiusmod tempor incidiunt labore velit dolore magna
                              aliqu sed veniam quis nostrud lorem ipsum dolor
                              sit amet consectetur...
                            </p>
                          </div>
                          <div class="recent-feature-item-rating">
                            <h2>
                              <i class="fa fa-map-marker"></i> Your City Here
                            </h2>
                            <span>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star-o"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-6 col-xs-12 col-lg-4">
                    <div class="recent-listing-box-container-item">
                      <div class="col-xs-12 nopadding">
                        <div class="recent-listing-box-item">
                          <div class="listing-boxes-text">
                            <a href="#">
                              <h3>Hello Directory Listing</h3>
                            </a>
                            <a href="#">
                              <i class="fa fa-phone"></i> +91 087 654 3210
                            </a>
                            <p>
                              Eiusmod tempor incidiunt labore velit dolore magna
                              aliqu sed veniam quis nostrud lorem ipsum dolor
                              sit amet consectetur...
                            </p>
                          </div>
                          <div class="recent-feature-item-rating">
                            <h2>
                              <i class="fa fa-map-marker"></i> Your City Here
                            </h2>
                            <span>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star-o"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-6 col-xs-12 col-lg-4">
                    <div class="recent-listing-box-container-item">
                      <div class="col-xs-12 nopadding">
                        <div class="recent-listing-box-item">
                          <div class="listing-boxes-text">
                            <a href="#">
                              <h3>Hello Directory Listing</h3>
                            </a>
                            <a href="#">
                              <i class="fa fa-phone"></i> +91 087 654 3210
                            </a>
                            <p>
                              Eiusmod tempor incidiunt labore velit dolore magna
                              aliqu sed veniam quis nostrud lorem ipsum dolor
                              sit amet consectetur...
                            </p>
                          </div>
                          <div class="recent-feature-item-rating">
                            <h2>
                              <i class="fa fa-map-marker"></i> Your City Here
                            </h2>
                            <span>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star-o"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-6 col-xs-12 col-lg-4">
                    <div class="recent-listing-box-container-item">
                      <div class="col-xs-12 nopadding">
                        <div class="recent-listing-box-item">
                          <div class="listing-boxes-text">
                            <a href="#">
                              <h3>Hello Directory Listing</h3>
                            </a>
                            <a href="#">
                              <i class="fa fa-phone"></i> +91 087 654 3210
                            </a>
                            <p>
                              Eiusmod tempor incidiunt labore velit dolore magna
                              aliqu sed veniam quis nostrud lorem ipsum dolor
                              sit amet consectetur...
                            </p>
                          </div>
                          <div class="recent-feature-item-rating">
                            <h2>
                              <i class="fa fa-map-marker"></i> Your City Here
                            </h2>
                            <span>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star-o"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-6 col-xs-12 col-lg-4">
                    <div class="recent-listing-box-container-item">
                      <div class="col-xs-12 nopadding">
                        <div class="recent-listing-box-item">
                          <div class="listing-boxes-text">
                            <a href="#">
                              <h3>Hello Directory Listing</h3>
                            </a>
                            <a href="#">
                              <i class="fa fa-phone"></i> +91 087 654 3210
                            </a>
                            <p>
                              Eiusmod tempor incidiunt labore velit dolore magna
                              aliqu sed veniam quis nostrud lorem ipsum dolor
                              sit amet consectetur...
                            </p>
                          </div>
                          <div class="recent-feature-item-rating">
                            <h2>
                              <i class="fa fa-map-marker"></i> Your City Here
                            </h2>
                            <span>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star-o"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-6 col-xs-12 col-lg-4">
                    <div class="recent-listing-box-container-item">
                      <div class="col-xs-12 nopadding">
                        <div class="recent-listing-box-item">
                          <div class="listing-boxes-text">
                            <a href="#">
                              <h3>Hello Directory Listing</h3>
                            </a>
                            <a href="#">
                              <i class="fa fa-phone"></i> +91 087 654 3210
                            </a>
                            <p>
                              Eiusmod tempor incidiunt labore velit dolore magna
                              aliqu sed veniam quis nostrud lorem ipsum dolor
                              sit amet consectetur...
                            </p>
                          </div>
                          <div class="recent-feature-item-rating">
                            <h2>
                              <i class="fa fa-map-marker"></i> Your City Here
                            </h2>
                            <span>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star-o"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
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
        product_bool: false
      };
    },
    mounted() {
      $("#user_profile")
        .addClass("active")
        .siblings()
        .removeClass("active");
      this.getStartupDetails();
      this.getStProducts();
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
        });
      },

      getStProducts: function() {
        var payload = new FormData();
        payload.append("id", this.$route.params.id);
        this.$store.dispatch("getStProducts", payload).then(res => {
          this.product_list = res.data;
          if (res.data.length !== 0) {
            this.product_bool = true;
          }
        });
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
</style>