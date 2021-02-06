<template>
  <section class="footer">
    <div class="footer-container">
      <div class="top-section">
        <div class="left-section">
          <img src="@/assets/images/bottom-icon.svg" alt />
        </div>
        <div class="right-section">
          <img src="@/assets/images/facebook.svg" alt />
          <img src="@/assets/images/twitter.svg" alt />
        </div>
      </div>
      <div class="bottom-section">
        <span>Terms of Use</span>
        <span>Privacy Policy</span>
        <span>Trademarks</span>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch, Emit } from "vue-property-decorator";

@Component
export default class Footer extends Vue {}
</script>

<style lang="scss" scoped>
@import "@/styles/mixins";

.footer {
  height: 151px;
  background-color: #181819;
  position: fixed;
  bottom: 0;
  width: 100%;
  .footer-container {
    max-width: 1920px;
    padding: 36px 15% 12px 5%;
    margin: auto;
    .top-section {
      @include flexbox();
      @include justify-content(space-between);
      @include align-items(center);
      .left-section {
      }
      .right-section {
        img:first-child {
          margin-right: 22px;
        }
      }
    }
    .bottom-section {
      span {
        color: #5d5d5e;
        font-family: Inter Light;
        font-size: 14px;
        font-weight: 300;
        letter-spacing: 0;
        line-height: 38px;
        margin-right: 18px;
      }
    }
  }
}
</style>