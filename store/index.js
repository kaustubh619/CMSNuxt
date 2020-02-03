import axios from "axios";
import cookie from "cookie";

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

export const state = () => {
  return {
    authentication: false,
    authenticated: false,
    category: 0,
    header_img: "",
    // token: "token " + localStorage.getItem("token"),
    bearer: localStorage.getItem("bearer")
  };
};

export const mutations = {
  signin_user(state) {
    state.authenticated = true;
  },
  authentication(state, userSignedIn) {
    state.authentication = userSignedIn;
  },
  get_header_img(state, url) {
    state.header_img = url;
  },
  category(state, selectedCat) {
    state.category = selectedCat;
  },
  bearer(state) {
    state.bearer = localStorage.getItem("bearer");
  },
  token(state) {
    state.bearer = localStorage.getItem("bearer");
  }
};

export const actions = {
  registerUser({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "POST",
        data: payload,
        url: state.api.registerUser,
        contentType: "application/json"
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  getCategories({ commit, state }) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.getCategories,
        contentType: "application/json"
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  getUser({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.getUser + payload,
        contentType: "application/json",
        headers: {
          Authorization: state.bearer
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  getUserAdditionalDetails({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.getAdditionalDetails + payload,
        contentType: "application/json",
        headers: {
          Authorization: state.bearer
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  userInfoPost({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "POST",
        data: payload,
        url: state.api.userInfoPost,
        contentType: "application/json"
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  updateUser({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "PUT",
        data: payload,
        url: state.api.getUser + localStorage.getItem("user_id"),
        contentType: "application/json",
        headers: {
          Authorization: state.bearer
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  updateUserExt({ commit, state }, payload2) {
    return new Promise((resolve, reject) => {
      axios({
        method: "PUT",
        data: payload2,
        url: state.api.getAdditionalDetails + localStorage.getItem("user_id"),
        contentType: "application/json",
        headers: {
          Authorization: state.bearer
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  getListing({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.getListing + payload,
        contentType: "application/json",
        headers: {
          Authorization: state.bearer
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  submitStartup({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "POST",
        data: payload,
        url: state.api.submitStartup,
        contentType: "application/json",
        headers: {
          Authorization: state.bearer
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  getStartUp({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.getStartUp + payload,
        contentType: "application/json",
        headers: {
          Authorization: state.bearer
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  editStartup({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "PUT",
        data: payload,
        url: state.api.getStartUp + localStorage.getItem("startupId"),
        contentType: "application/json",
        headers: {
          Authorization: state.bearer
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  deleteStartup({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "PUT",
        data: payload,
        url: state.api.deleteStartup + payload.get("id"),
        contentType: "application/json",
        headers: {
          Authorization: state.bearer
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log("error in request", err);
        });
    });
  },

  changePassword({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "PUT",
        data: payload,
        url: state.api.changePassword,
        contentType: "application/json",
        headers: {
          Authorization: state.bearer
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  postProduct({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "POST",
        data: payload,
        url: state.api.postProduct,
        contentType: "application/json",
        headers: {
          Authorization: state.bearer
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  getProducts({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.getProducts + payload,
        contentType: "application/json",
        headers: {
          Authorization: state.bearer
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  productById({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.productById + payload,
        contentType: "application/json"
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  logOutUser({ commit, state }, payload2) {
    return new Promise((resolve, reject) => {
      axios({
        method: "PUT",
        data: payload2,
        url: state.api.logOutUser + localStorage.getItem("user_id"),
        contentType: "application/json",
        headers: {
          Authorization: state.bearer
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  updateProduct({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "PUT",
        data: payload,
        url: state.api.updateProduct + payload.get("id"),
        contentType: "application/json",
        headers: {
          Authorization: state.bearer
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  deleteProduct({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "PUT",
        data: payload,
        url: state.api.deleteProduct + payload.get("id"),
        contentType: "application/json",
        headers: {
          Authorization: state.bearer
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  getStartups({ commit, state }) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.getStartups,
        contentType: "application/json"
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  getStartupByCategory({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.getStartupByCategory + payload.get("id"),
        contentType: "application/json"
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  getStartupDetails({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.getStartupDetails + payload.get("id"),
        contentType: "application/json"
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  getStProducts({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.getStProducts + payload.get("id"),
        contentType: "application/json"
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  getCategoryById({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.getCategoryById + payload.get("id"),
        contentType: "application/json"
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  postUpdate({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "POST",
        data: payload,
        url: state.api.postUpdate,
        contentType: "application/json",
        headers: {
          Authorization: state.bearer
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  getUpdates({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.getUpdates + payload.get("id"),
        contentType: "application/json"
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  UpdateById({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.UpdateById + payload,
        contentType: "application/json"
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  deleteUpdate({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "PUT",
        data: payload,
        url: state.api.deleteUpdate + payload.get("id"),
        contentType: "application/json",
        headers: {
          Authorization: state.bearer
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log("error in request", err);
        });
    });
  },

  editProductUpdate({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "PUT",
        data: payload,
        url: state.api.editProductUpdate + payload.get("id"),
        contentType: "application/json",
        headers: {
          Authorization: state.bearer
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  getHomeCMS({ commit, state }) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.getHomeCMS,
        contentType: "application/json"
        // headers: {
        //   Authorization: "Token " + localStorage.getItem("token")
        // }
      })
        .then(res => {
          // commit("get_header_img", res.data[0].header_img);
          resolve(res);
        })
        .catch(err => {
          console.log("Error In HTTP Request - ", err);
        });
    });
  },

  getCategoryCMS({ commit, state }) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.getCategoryCMS,
        contentType: "application/json"
        // headers: {
        //   Authorization: "Token " + localStorage.getItem("token")
        // }
      })
        .then(res => {
          // commit("get_header_img", res.data[0].header_img);
          resolve(res);
        })
        .catch(err => {
          console.log("Error In HTTP Request - ", err);
        });
    });
  },

  getActiveContactCMS({ commit, state }) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.getActiveContactCMS,
        contentType: "application/json"
        // headers: {
        //   Authorization: "Token " + localStorage.getItem("token")
        // }
      })
        .then(res => {
          // commit("get_header_img", res.data[0].header_img);
          resolve(res);
        })
        .catch(err => {
          console.log("Error In HTTP Request - ", err);
        });
    });
  },

  activatedAboutCMS({ commit, state }) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.activatedAboutCMS,
        contentType: "application/json"
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log("Error In HTTP Request - ", err);
        });
    });
  },

  activatedFooterCMS({ commit, state }) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.activatedFooterCMS,
        contentType: "application/json"
        // headers: {
        //   Authorization: "Token " + localStorage.getItem("token")
        // }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log("Error In HTTP Request - ", err);
        });
    });
  },

  googleLogIn({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "POST",
        data: payload,
        url: state.api.googleLogIn,
        contentType: "application/json"
        // headers: {
        //   Authorization: "token " + localStorage.getItem("token")
        // }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  getBearerToken({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "POST",
        data: payload,
        url: state.api.getBearerToken,
        contentType: "application/json"
        // headers: {
        //   Authorization: "token " + localStorage.getItem("token")
        // }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  getContactForm({ commit, state }) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.getContactForm + 1,
        contentType: "application/json"
        // headers: {
        //   Authorization: "Token " + localStorage.getItem("token")
        // }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log("Error In HTTP Request - ", err);
        });
    });
  },

  getUserCount({ commit, state }) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.getUserCount,
        contentType: "application/json"
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  getFeaturedStartups({ commit, state }) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.getFeaturedStartups,
        contentType: "application/json"
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  postRating({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "POST",
        data: payload,
        url: state.api.postRating,
        contentType: "application/json",
        headers: {
          Authorization: state.bearer
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  getUserRatings({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.getUserRatings + payload,
        contentType: "application/json",
        headers: {
          Authorization: state.bearer
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  updateRatings({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "PUT",
        data: payload,
        url: state.api.user_ratings_update + payload.get("id"),
        contentType: "application/json",
        headers: {
          Authorization: state.bearer
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  allProductRatings({ commit, state }) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.allProductRatings,
        contentType: "application/json"
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  getFilteredStartups({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.getFilteredStartups + payload,
        contentType: "application/json"
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  }
};
