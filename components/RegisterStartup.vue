<template>
  <div class="container-fluid st-sb-back">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <span class="banner-text-1">"Whether you think you can,</span>
          <span class="banner-text-2" style="display: block">or think you can't--you're right."</span>
          <br />
          <span class="banner-text-3">
            Starting your own business is like riding a roller coaster. There
            are highs and lows and every turn you take is another twist. The
            lows are really low, but the highs can be really high. You have to
            be strong, keep your stomach tight, and ride along with the roller
            coaster that you started.
          </span>
          <br />
          <button class="st-bt-11" @click="register_startup">
            Register Your Startup
            <i
              class="fa fa-angle-right"
              aria-hidden="true"
              style="background-color: #ffbe2e; border-radius: 50%; padding: 6px 13px"
            ></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["register_startup"]
};
</script>

<style>
</style>
