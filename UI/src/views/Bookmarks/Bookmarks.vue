<template>
  <div class="bookmark-page">
    <div class="bookmark-news" v-if="newsList && newsList.length">
      <p class="title">Bookmark News</p>
      <p class="border-bottom"></p>
      <template v-for="(news, index) in newsList">
        <Newscard
          :key="index"
          v-if="news"
          :noBorder="newsList.length - 1 === index"
          :content="news"
          type="bookmark"
        />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Newscard from "@/components/Newscard.vue";
import ApiService from "@/api/services/apiservice";

@Component({
  components: {
    Newscard,
  },
})
export default class Bookmarks extends Vue {
  newsList: any = [];

  mounted() {
    const tempNews = localStorage.getItem("bookmark-news");
    if (tempNews) {
      this.newsList = JSON.parse(tempNews);
    }
  }
}
</script>

<style lang="scss" scoped>
.bookmark-page {
  margin-top: 78px;
  padding-bottom: 150px;
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
  .bookmark-news {
    margin-bottom: 54px;
  }
}
</style>