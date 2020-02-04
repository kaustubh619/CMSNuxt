if (process.env.NODE_ENV == "development") {
  var url = "http://127.0.0.1:8000";
} else {
  var url = "/backend";
}

export const state = () => ({
  logInUser: url + "/signin",

  registerUser: url + "/register",

  getCategories: url + "/category",

  getUser: url + "/user/",

  getAdditionalDetails: url + "/user_details/",

  userInfoPost: url + "/user_ext_post",

  getListing: url + "/startupwithproducts/",

  submitStartup: url + "/startup_post",

  getStartUp: url + "/startupbyid/",

  changePassword: url + "/change_password",

  postProduct: url + "/product_post",

  getProducts: url + "/productbystartup/",

  productById: url + "/productbyid/",

  deleteStartup: url + "/deletestartupbyid/",

  logOutUser: url + "/user_logout/",

  updateProduct: url + "/editproduct/",

  deleteProduct: url + "/deleteproduct/",

  getStartups: url + "/all_startups",

  getStartupByCategory: url + "/startupbycat/",

  getStartupDetails: url + "/suwd/",

  getStProducts: url + "/startup-products/",

  getCategoryById: url + "/catbyid/",

  postUpdate: url + "/update_post",

  getUpdates: url + "/updatebyproduct/",

  UpdateById: url + "/updatebyid/",

  deleteUpdate: url + "/deleteproductupdate/",

  editProductUpdate: url + "/editProductUpdate/",

  getHomeCMS: url + "/activated_home_cms",

  getCategoryCMS: url + "/activated_category_cms",

  getActiveContactCMS: url + "/activated_contact_cms",

  activatedAboutCMS: url + "/activated_about_cms",

  activatedFooterCMS: url + "/activated_footer_cms",

  googleLogIn: url + "/oauth/login/",

  getBearerToken: url + "/auth/convert-token",

  getContactForm: url + "/get_contact_form/",

  getUserCount: url + "/user_count",

  getFeaturedStartups: url + "/featured_startups",

  postRating: url + "/post_ratings",

  getUserRatings: url + "/update_ratings/",

  updateRatings: url + "/update_ratings/",

  user_ratings_update: url + "/user_update_ratings/",

  allProductRatings: url + "/all_ratings",

  getFilteredStartups: url + "/startup_search?search="
});
