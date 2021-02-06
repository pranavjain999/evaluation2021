<template>
  <section class="details-screen">
    <div class="news-detail" v-if="content">
      <div class="news-detail-content">
        <h1 class="detail-heading">{{ content.title }}</h1>
        <p class="news-source">CNN</p>
        <div class="detail-contents">
          <img
            class="detail-image"
            :src="
              content.urlToImage
                ? content.urlToImage
                : require('@/assets/images/download.jpg')
            "
            alt="Details Image"
          />
          <p class="detail-text" v-html="content.content"></p>
        </div>
      </div>
      <div class="news-detail-ad">
        <img class="detail-ad" src="@/assets/images/ads.png" alt="Ads" />
      </div>
    </div>
    <div class="news-read" v-if="recommendedNews">
      <h1>Don’t miss to read</h1>
      <p></p>
      <template v-for="(news, index) in recommendedNews">
        <Newscard
          :key="index"
          v-if="news"
          :noBorder="recommendedNews.length - 1 === index"
          :content="news"
          type=""
        />
      </template>
    </div>
  </section>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Newscard from "@/components/Newscard.vue";
import ApiService from "@/api/services/apiservice";
import EventBus from "@/services/eventBus";

@Component({
  components: {
    Newscard,
  },
})
export default class NewsDetails extends Vue {
  content: any = null;
  recommendedNews: any = [];

  beforeMount() {
    this.launchProgram();
    EventBus.$on("REFRESH_DETAIL", (payLoad: any) => {
      const newsData = localStorage.getItem("newsData");
      if (newsData) {
        this.content = JSON.parse(newsData);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  }

  launchProgram() {
    const newsData = localStorage.getItem("newsData");
    if (newsData) {
      this.content = JSON.parse(newsData);
    }
    ApiService.getTopNews(0, 3).then((res: any) => {
      if (res && res.articles && res.articles.length) {
        this.recommendedNews = res.articles;
      }
    });
  }
}
</script>
<style lang="scss" scoped>
.details-screen {
  height: calc(100vh - 150px);
  .news-detail {
    display: flex;
    padding-bottom: 10px;
    padding-top: 16px;
    .news-detail-content {
      .detail-heading {
        width: 70%;
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
      }
      .detail-contents {
        display: flex;
        padding-top: 25px;
        padding-bottom: 40px;
        .detail-image {
          height: 400px;
          width: 50%;
        }
        .detail-text {
          color: #777777;
          font-family: Inter;
          font-size: 16px;
          letter-spacing: 0;
          line-height: 28px;
          padding-left: 20px;
          padding-right: 20px;
        }
      }
      .additional-text {
        color: #777777;
        font-family: Inter;
        font-size: 16px;
        letter-spacing: 0;
        line-height: 28px;
        padding-right: 20px;
      }
    }
    .news-detail-ad {
      padding-top: 25px;
      img {
        height: 750px;
      }
    }
  }
  .news-read {
    padding-bottom: 150px;
    h1 {
      margin-bottom: 5px;
    }
    p {
      height: 1px;
      width: 38.5px;
      border: 1px solid #5305ff;
      margin-bottom: 24px;
    }
  }
}
</style>