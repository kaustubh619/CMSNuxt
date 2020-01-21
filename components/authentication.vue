<template>
  <div>
    <div
      class="modal fade"
      id="login"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
      style="z-index: 10000"
    >
      <div class="listing-modal-1 modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-hidden="true"
              id="closeLogin"
            >
              &times;
            </button>
            <h4 class="modal-title" id="myModalLabel">Login</h4>
          </div>
          <div class="modal-body">
            <div class="listing-login-form">
              <div>
                <div class="listing-form-field">
                  <i class="fa fa-user blue-1"></i>
                  <input
                    class="form-field bgwhite"
                    type="text"
                    name="user_name"
                    placeholder="Username"
                    v-model="username"
                  />
                </div>
                <div class="listing-form-field">
                  <i class="fa fa-lock blue-1"></i>
                  <input
                    class="form-field bgwhite"
                    type="password"
                    name="user_pass"
                    placeholder="Password"
                    v-model="password"
                  />
                </div>
                <div
                  class="listing-form-field clearfix margin-top-20 margin-bottom-20"
                >
                  <!-- <input type="checkbox" id="checkbox-1-1" class="regular-checkbox" />
              <label for="checkbox-1-1"></label>
                  <label class="checkbox-lable">Remember Me</label>-->
                  <a href="#" style="display: block; text-align: left"
                    >Forgot Password?</a
                  >
                </div>
                <div class="listing-form-field">
                  <input
                    type="submit"
                    class="submit"
                    value="login"
                    @click="logInUser"
                    style="cursor: pointer"
                  />
                </div>
                <div class="divider">
                  <span>OR</span>
                </div>
                <div style="display: flex; justify-content: center">
                  <button class="mybtn2" @click="google">
                    <i class="fa fa-google mybtn1"></i>Continue with Google
                  </button>
                </div>
              </div>
              <!-- <div class="bottom-links">
            <p>Not a Member?<a href="#" data-dismiss="modal" data-toggle="modal" data-target="#register">Create Account</a></p>
              </div>-->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="register"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
      style="z-index: 10000"
    >
      <div class="listing-modal-1 modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-hidden="true"
              id="closeSignUp"
            >
              &times;
            </button>
            <h4 class="modal-title" id="myModalLabel2">Registration</h4>
          </div>
          <div class="modal-body">
            <div class="listing-register-form">
              <div class="listing-form-field">
                <i class="fa fa-user blue-1"></i>
                <input
                  class="form-field bgwhite"
                  type="text"
                  name="user_name"
                  placeholder="Userame"
                  v-model="username"
                />
              </div>
              <div class="listing-form-field">
                <i class="fa fa-envelope blue-1"></i>
                <input
                  class="form-field bgwhite"
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  v-model="email"
                />
              </div>
              <div class="listing-form-field">
                <i class="fa fa-lock blue-1"></i>
                <input
                  class="form-field bgwhite"
                  type="password"
                  name="user_password"
                  placeholder="Password"
                  v-model="password1"
                />
              </div>
              <div class="listing-form-field">
                <i class="fa fa-lock blue-1"></i>
                <input
                  class="form-field bgwhite"
                  type="password"
                  name="user_confirm_password"
                  placeholder="Confirm Password"
                  v-model="password2"
                />
              </div>
              <!-- <div class="listing-form-field clearfix margin-top-20 margin-bottom-20 login_form_text_center">
              <input type="checkbox" id="checkbox-1-2" class="regular-checkbox" />
              <label for="checkbox-1-2"></label>
                <label class="checkbox-lable">i agree with</label> &nbsp; <a href="#">Terms & Conditions</a> </div>-->
              <div class="listing-form-field">
                <input
                  type="submit"
                  class="submit"
                  value="create account"
                  @click="registerUser"
                  style="cursor: pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import Cookies from "js-cookie";
  export default {
    data() {
      return {
        username: "",
        password: "",
        email: "",
        password1: "",
        password2: ""
      };
    },

    mounted() {
      if (window.location.href.includes("access_token")) {
        this.googleLogIn();
      }
    },

    methods: {
      logInUser: function() {
        var payload = new FormData();
        payload.append("username", this.username);
        payload.append("password", this.password);
        axios({
          method: "POST",
          url: this.$store.state.api.logInUser,
          data: payload
        })
          .then(res => {
            const token = res.data.token;
            Cookies.set("x-access-token", res.data.token);

            const user_id = res.data.id;

            localStorage.setItem("bearer", "token " + token);

            localStorage.setItem("user_id", user_id);

            axios.defaults.headers.common["Authorization"] = token;

            this.$store.commit("authentication", true);
            this.$store.commit("token", token);

            $("#closeLogin").click();
            alert("User logged in successfully");

            this.$router.push("/startup/listing");
          })
          .catch(err => {
            alert("Invalid user credentials!");
          });
      },

      registerUser: function() {
        var payload = new FormData();
        payload.append("username", this.username);
        payload.append("email", this.email);
        if (
          this.password1 === this.password2 &&
          this.username !== "" &&
          this.email !== "" &&
          this.password1 !== "" &&
          this.password2 !== ""
        ) {
          payload.append("password", this.password1);
          this.$store.dispatch("registerUser", payload).then(res => {
            $("#closeSignUp").click();
            alert(
              "User with username " +
                payload.get("username") +
                " created successfully"
            );
            this.$router.push("/");
          });
        } else {
          alert("Invalid form!");
        }
      },

      async google() {
        await this.$auth.loginWith("google").catch(e => {
          // this.$toast.show("Error", { icon: "fingerprint" });
          console.log(e);
        });
      },

      googleLogIn: function() {
        this.$store.commit("bearer");
        var payload = new FormData();
        var provider = "goole-oauth-2";
        payload.append("provider", "google-oauth2");
        this.token = window.location.href
          .split("#")[1]
          .split("=")[2]
          .split("&")[0];
        payload.append("access_token", this.token);
        this.$store.dispatch("googleLogIn", payload).then(res => {
          localStorage.setItem("user_id", res.data.id);
          var new_payload = new FormData();
          new_payload.append("grant_type", "convert_token");
          new_payload.append("token", this.token);
          new_payload.append("backend", "google-oauth2");
          new_payload.append(
            "client_id",
            "oyBLYzEeUfq1xwNYUscD0oF9rH8Gdm0FgYr8unCH"
          );
          new_payload.append(
            "client_secret",
            "1zxuIPtXtsHlzaAEfUNUo7Oqt1OOykvGaX8CLVRqtuCN1KYvRDgdPtEH0p1adprhzX6hH0K9Xd2duN8rdx7184JzFM91tpWT0SqPTu6GEt2hi7M7Ms1QqA9DkF9MlrSk"
          );
          payload.append("oauth", true);
          this.$store.dispatch("getBearerToken", new_payload).then(res => {
            localStorage.setItem("bearer", "Bearer " + res.data.access_token);
            this.$store.commit("bearer", res.data.access_token);
            this.$store.commit("authentication", true);
            this.$router.push("/startup/listing");
          });
        });
      }
    }
  };
</script>

<style>
.mybtn1 {
  background-color: #e7e7e7;
  padding: 10px;
  border-radius: 30px;
}

.mybtn2 {
  border: none;
  background-color: #e7e7e7;
  padding-right: 10px;
  border-radius: 30px;
}

.mybtn1:hover,
.mybtn2:hover {
  color: #999900;
}

.divider {
  height: 12px;
  margin: 16px 0 22px;
  text-align: center;
  border-bottom: 1px solid #e4e5e7;
}

.divider span {
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  text-transform: uppercase;
  padding: 0 8px;
  background-color: #f7fbfc;
  color: #404145;
}
</style>
