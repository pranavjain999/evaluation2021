<template>
  <section class="news-card">
    <div
      :class="{ 'news-contents': true, 'no-border': noBorder }"
      @click="viewDetails()"
    >
      <div class="news-image">
        <img
          :class="{ image: true, 'top-image': type === 'top' }"
          :src="
            content.urlToImage
              ? content.urlToImage
              : require('@/assets/images/download.jpg')
          "
          alt="News"
        />
      </div>
      <div class="news-sub-contents">
        <div class="sub-contents-heading">
          <p class="sub-contents-text">
            {{ content.title }}
          </p>
          <img
            class="bookmark"
            :src="
              type === 'bookmark'
                ? require('@/assets/images/bookmark.png')
                : clicked
                ? require('@/assets/images/bookmark.png')
                : require('@/assets/images/home_bookmark.png')
            "
            alt="Bookmark"
            @click="bookmark($event)"
          />
        </div>
        <div></div>
        <p class="sub-contents-detail">
          {{ content.description }}
        </p>
        <p class="news-source">{{ content.source.name }}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import EventBus from "@/services/eventBus";

@Component({
  components: {},
})
export default class Newscard extends Vue {
  @Prop() content!: any;
  @Prop() type!: string;
  @Prop() noBorder!: boolean;
  clicked: boolean = false;

  viewDetails() {
    localStorage.setItem("newsData", JSON.stringify(this.content));
    const currentRoute = this.$route;
    if (currentRoute.path !== "/news-detail") {
      this.$router.replace({
        path: "/news-detail",
      });
    } else {
      EventBus.$emit("REFRESH_DETAIL");
    }
  }

  bookmark($event: any) {
    $event.stopPropagation();
    this.clicked = true;
    const tempList = localStorage.getItem("bookmark-news");
    if (tempList) {
      let localData = JSON.parse(tempList);
      let found = false;
      if (localData && localData.length) {
        localData.forEach((element: any, index: any) => {
          if (element.title === this.content.title) {
            found = found || true;
          }
          if (index === localData.length - 1) {
            if (!found) {
              localData.push(this.content);
              localStorage.setItem("bookmark-news", JSON.stringify(localData));
            }
          }
        });
      }
    } else {
      let news = [];
      news.push(this.content);
      localStorage.setItem("bookmark-news", JSON.stringify(news));
    }
  }
}
</script>

<style lang="scss" >
.news-card {
  cursor: pointer;
  .news-contents {
    display: flex;
    padding-bottom: 22px;
    border-bottom: 1px solid #d9d9d9;
    padding-top: 22px;
    .news-image {
      .image {
        height: 200px;
        width: 200px;
      }
      .top-image {
        height: 297px;
        width: 529px;
      }
    }
    .news-sub-contents {
      padding-left: 20px;
      padding-top: 15px;
      width: 100%;
      .sub-contents-heading {
        display: flex;
        justify-content: space-between;
        padding-bottom: 10px;
        .sub-contents-text {
          font-size: 22px;
          font-weight: 600;
          letter-spacing: 0;
          line-height: 34px;
          width: 70%;
        }
        .bookmark {
          height: 50px;
          width: 50px;
        }
      }
      .sub-contents-detail {
        color: #777777;
        font-size: 16px;
        letter-spacing: 0;
        line-height: 28px;
        padding-bottom: 10px;
      }
      .news-source {
        font-size: 12px;
        letter-spacing: 0;
        line-height: 15px;
        color: #575757;
        border: 1px solid #eff3f4;
        border-radius: 23px;
        background-color: #f7f4f4;
        width: fit-content;
        padding: 5px 14px;
        margin-top: 10px;
      }
    }
  }
  .no-border {
    border-bottom: 0px !important;
  }
}
</style>