export const state = () => ({
  logInUser: "http://127.0.0.1:8000/signin",

  registerUser: "http://127.0.0.1:8000/register",

  getCategories: "http://127.0.0.1:8000/category",

  getUser: "http://127.0.0.1:8000/user/",

  getAdditionalDetails: "http://127.0.0.1:8000/user_details/",

  userInfoPost: "http://127.0.0.1:8000/user_ext_post",

  getListing: "http://127.0.0.1:8000/startup/",

  submitStartup: "http://127.0.0.1:8000/startup_post",

  getStartUp: "http://127.0.0.1:8000/startupbyid/",

  changePassword: "http://127.0.0.1:8000/change_password",

  postProduct: "http://127.0.0.1:8000/product_post",

  getProducts: "http://127.0.0.1:8000/productbystartup/",

  productById: "http://127.0.0.1:8000/productbyid/",

  deleteStartup: "http://127.0.0.1:8000/deletestartupbyid/",

  logOutUser: "http://127.0.0.1:8000/user_logout/",

  updateProduct: "http://127.0.0.1:8000/editproduct/",

  deleteProduct: "http://127.0.0.1:8000/deleteproduct/",

  getStartups: "http://127.0.0.1:8000/all_startups",

  getStartupByCategory: "http://127.0.0.1:8000/startupbycat/",

  getStartupDetails: "http://127.0.0.1:8000/suwd/",

  getStProducts: "http://127.0.0.1:8000/startup-products/",

  getCategoryById: "http://127.0.0.1:8000/catbyid/",

  postUpdate: "http://127.0.0.1:8000/update_post",

  getUpdates: "http://127.0.0.1:8000/updatebyproduct/",

  UpdateById: "http://127.0.0.1:8000/updatebyid/",

  deleteUpdate: "http://127.0.0.1:8000/deleteproductupdate/",

  editProductUpdate: "http://127.0.0.1:8000/editProductUpdate/",

  getHomeCMS: "http://127.0.0.1:8000/activated_home_cms",

  getCategoryCMS: "http://127.0.0.1:8000/activated_category_cms",

  getActiveContactCMS: "http://127.0.0.1:8000/activated_contact_cms",

  activatedAboutCMS: "http://127.0.0.1:8000/activated_about_cms",

  activatedFooterCMS: "http://127.0.0.1:8000/activated_footer_cms",

  googleLogIn: "http://127.0.0.1:8000/oauth/login/",

  getBearerToken: "http://127.0.0.1:8000/auth/convert-token",

  getContactForm: "http://127.0.0.1:8000/get_contact_form/"
});
