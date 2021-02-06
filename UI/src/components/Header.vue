<template>
  <section class="header" v-if="!hideHeader">
    <div class="header-container">
      <div class="left-section">
        <img src="@/assets/images/top_icon.svg" alt />
      </div>
      <div class="right-section">
        <div
          :class="{ 'home-tab': true, 'active-tab': activeRoute('/') }"
          @click="navigateTo('/')"
        >
          Home
        </div>
        <div
          :class="{
            'bookmark-tab': true,
            'active-tab': activeRoute('/bookmarks'),
          }"
          @click="navigateTo('/bookmarks')"
        >
          Bookmarks
        </div>
        <div class="search-section">
          <img
            class="search-icon"
            src="@/assets/images/search_icon.png"
            alt=""
            v-if="!searchText.length"
          />
          <input
            class="search-input"
            placeholder="Search"
            v-model="searchText"
            v-on:keyup.enter="searchNews()"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch, Emit } from "vue-property-decorator";
import EventBus from "@/services/eventBus";

@Component
export default class Header extends Vue {
  searchText: string = "";

  navigateTo(path: string) {
    const currentRoute = this.$router.currentRoute;
    this.searchText = "";
    if (currentRoute.path !== path) {
      this.$router.push({
        path: path,
      });
      this.$forceUpdate();
    } else {
      if (currentRoute.name === "Home") {
        EventBus.$emit("HOME");
      }
    }
  }

  activeRoute(path: string): boolean {
    const currentRoute = this.$route;
    if (currentRoute.path === path) {
      return true;
    } else {
      return false;
    }
  }

  get hideHeader(): boolean {
    const currentRoute = this.$route;
    if (currentRoute.path === "/news-detail") {
      return true;
    } else return false;
  }

  searchNews() {
    const currentRoute = this.$router.currentRoute;
    if (currentRoute.name === "Home") {
      EventBus.$emit("SEARCH", this.searchText);
    } else {
      this.$router.push({
        path: "/",
        query: {
          searchText: this.searchText,
        },
      });
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/mixins";

.header {
  min-height: 70px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  .header-container {
    max-width: 1920px;
    @include flexbox();
    @include justify-content(space-between);
    @include align-items(center);
    margin: auto;
    padding: 0px 15% 0px 5%;
    .left-section {
    }
    .right-section {
      @include flexbox();
      @include justify-content(space-between);
      @include align-items(center);
      .home-tab {
        color: #000000;
        font-family: Inter Medium;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0;
        line-height: 17px;
        text-align: center;
        padding: 25px 40px;
        border-bottom: 3px solid #ffffff;
        cursor: pointer;
      }
      .bookmark-tab {
        color: #000000;
        font-family: Inter Medium;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0;
        line-height: 17px;
        text-align: center;
        padding: 25px 25px;
        border-bottom: 3px solid #ffffff;
        cursor: pointer;
      }
      .search-section {
        position: relative;
        margin-left: 24px;
        .search-input {
          border: 1px solid #ffffff;
          border-radius: 3px;
          height: 45px;
          min-width: 20vw;
          border-radius: 20px;
          background-color: #f1f1f1;
          box-sizing: border-box;
          text-indent: 20px;
          color: #9c9c9c;

          @media only screen and (max-width: 720px) {
            max-width: 400px !important;
          }
        }
        ::-webkit-input-placeholder {
          /* Edge */
          color: #9c9c9c;
          font-family: Inter;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0;
          line-height: 17px;
          opacity: 1 !important;
          padding: 10px;
        }

        :-ms-input-placeholder {
          /* Internet Explorer 10-11 */
          color: #9c9c9c;
          font-family: Inter;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0;
          line-height: 17px;
          opacity: 1 !important;
          padding: 10px;
        }
        ::placeholder {
          color: #9c9c9c;
          font-family: Inter;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0;
          line-height: 17px;
          opacity: 1 !important;
          padding: 10px;
        }
        .search-icon {
          height: 22px;
          width: 22px;
          position: absolute;
          left: 10px;
          top: 12px;
          cursor: pointer;
        }
      }
      .active-tab {
        // height: 2px;
        border-bottom: 3px solid #5305ff;
      }
    }
  }
}
</style>