<template>
  <figure class="figure">
    <img
      :src="url"
      style="display:block; margin-left:auto; margin-right: auto; width: 400px; padding: 10px;"
      alt="A generic square placeholder image with rounded corners in a figure."
    />
    <figcaption class="figure-caption" style="text-align: center">{{caption}}</figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      caption: this.data.data.caption,
      url: this.data.data.file.url
    };
  }
};
</script>

<style>
</style>
