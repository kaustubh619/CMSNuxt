<template>
  <div
    id="search-categorie-item"
    :style="{
        background: `linear-gradient( to right bottom, rgba(0, 0, 0, 0.801), rgba(128, 128, 128, 0.601) ), url(${header_img}) top center no-repeat`
      }"
  >
    <div class="container">
      <div class="row">
        <div class="col-sm-12 text-center">
          <div class="row">
            <div class="col-md-12 categories-heading bt_heading_3">
              <h1 style="color: white">
                Directory
                <span>Category</span>
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
            <div class="col-md-3 col-sm-6 col-xs-12" v-for="(x, y) in categoryList" :key="y">
              <div class="categorie_item" v-bind:id="x.id" @click="getListing(x.id)">
                <div class="cate_item_block hi-icon-effect-8">
                  <h1>
                    <a href="#">{{ x.category }}</a>
                  </h1>
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
  props: ["categoryList", "header_img", "getListing"]
};
</script>

<style>
</style>
