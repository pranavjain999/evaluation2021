<template>
  <div id="app">
    <Header />
    <section class="content">
      <router-view />
    </section>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

@Component({
  components: {
    Header,
    Footer,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss" scoped>
@import "@/styles/mixins";

.content {
  height: calc(100% - 298px);
  // min-height: calc(100vh - 221px);
  margin: auto;
  @media only screen and (min-width: 1024px) {
    max-width: 1301px !important;
  }
}
</style>