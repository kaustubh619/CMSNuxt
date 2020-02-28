<template>
  <div :style="{background: `url(${bgImg})`}">
    <div class="row">
      <div id="quil-content" class="col content"></div>
      <div class="col btn-container"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["componentId", "bgImg", "btnUrl"],
  data() {
    return { componentData: {} };
  },
  async mounted() {
    const { data } = await axios(
      this.$store.state.api.getComponentData + this.componentId
    );
    this.componentData = data;

    var quill = new Quill("#quil-content", {
      modules: { toolbar: [] },
      readOnly: true,
      theme: "bubble"
    });
    quill.setContents(this.componentData);
  }
};
</script>

<style>
</style>
