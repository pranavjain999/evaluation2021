<template>
  <div class="home-page">
    <div class="top-news" v-if="this.topNews && this.topNews.length">
      <p class="title">Top News</p>
      <p class="border-bottom"></p>
      <Newscard
        v-if="this.topNews"
        :noBorder="true"
        :content="this.topNews[0]"
        type="top"
      />
    </div>
    <div class="all-news" v-if="popularNews">
      <p class="title">All News</p>
      <p class="border-bottom"></p>
      <div
        v-infinite-scroll="load"
        infinite-scroll-disabled="disabled"
        infinite-scroll-distance="600"
        class="infinite-list-wrapper pagination pagination-height"
      >
        <template v-for="(news, index) in popularNews">
          <Newscard
            :key="index"
            v-if="news"
            :noBorder="popularNews.length - 1 === index"
            :content="news"
            type=""
          />
        </template>
        <p v-if="loading" class="loading">Loading...</p>
      </div>
    </div>
  </div>
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
export default class Home extends Vue {
  topNews: any = null;
  popularNews: any = [];
  arr: any = [1, 2, 3, 4];
  loading: boolean = false;
  count: number = 0;
  totalResults: number = 100;
  isSearchPage: boolean = false;
  searchText: any = "";

  beforeMount() {
    this.launchProgram();
    EventBus.$on("SEARCH", (payLoad: any) => {
      this.isSearchPage = true;
      this.searchText = payLoad;
      this.topNews = [];
      this.count = 0;
      ApiService.searchNews(payLoad).then((res: any) => {
        if (res && res.articles && res.articles.length) {
          this.popularNews = res.articles;
        }
      });
    });
    EventBus.$on("HOME", (payLoad: any) => {
      setTimeout(() => {
        this.launchProgram(() => {
          this.loading = false;
          this.load();
        }, "HOME");
      }, 500);
    });
  }

  launchProgram(callback?: Function, from?: string) {
    this.topNews = [];
    this.count = 0;
    this.searchText = "";
    this.isSearchPage = false;
    this.topNews = [];
    this.popularNews = [];
    const query = this.$route.query;
    if (query && query.searchText && !from) {
      this.isSearchPage = true;
      this.searchText = query.searchText;
      ApiService.searchNews(this.searchText).then((res: any) => {
        if (res && res.articles && res.articles.length) {
          this.popularNews = res.articles;
        }
      });
    } else {
      ApiService.getTopNews(0, 1, "business").then((res: any) => {
        if (res && res.articles && res.articles.length) {
          this.topNews = res.articles;
          callback ? callback() : null;
        }
      });
    }
  }

  get disabled() {
    return this.loading || this.noMore;
  }

  get noMore() {
    return this.popularNews.length >= this.totalResults;
  }

  load() {
    this.loading = true;
    setTimeout(() => {
      this.count += 1;
      if (this.isSearchPage) {
        ApiService.searchNews(this.searchText).then((res: any) => {
          this.loading = false;
          this.totalResults = res.totalResults;
          if (res && res.articles && res.articles.length) {
            this.popularNews.push(...res.articles);
          }
        });
      } else {
        ApiService.getTopNews(this.count).then((res: any) => {
          this.loading = false;
          this.totalResults = res.totalResults;
          if (res && res.articles && res.articles.length) {
            this.popularNews.push(...res.articles);
          }
        });
      }
    }, 2000);
  }
}
</script>

<style lang="scss">
.home-page {
  margin-top: 78px;
  .title {
    color: #000000;
    font-family: Inter;
    font-size: 30px;
    letter-spacing: 0;
    line-height: 45px;
  }
  .border-bottom {
    width: 38.5px;
    border-bottom: 1px solid #5305ff;
    margin-bottom: 24px;
  }
  .top-news {
    margin-bottom: 54px;
  }
  .all-news {
    margin-bottom: 500px;
  }
}
.pagination {
  overflow: auto;
}
.pagination-height {
  height: calc(100vh - 70px);
  padding-bottom: 150px;
}
.loading {
  color: #5305ff;
  font-family: Inter;
  font-size: 15px;
  letter-spacing: 0;
  line-height: 19px;
  text-align: center;
  padding: 16px 0px;
}
</style>