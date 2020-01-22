<template>
  <div v-if="loading_bool" class="spinner"></div>
  <div v-else>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>
<script>
  import Header from "@/components/header.vue";
  import Footer from "@/components/footer.vue";
  export default {
    data() {
      return {
        loading_bool: true
      };
    },
    components: {
      Header,
      Footer
    },
    mounted() {
      this.loading_bool = false;
    }
  };
</script>
<style>
/* html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
} */
body {
  padding: 0px !important;
}

#logo-header {
  position: relative;
  width: 100%;
  z-index: 10000;
}
</style>
