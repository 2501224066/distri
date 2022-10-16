<template>
  <div>
    <nut-swiper
      direction="horizontal"
      :loop="true"
      :canDragging="false"
      :paginationVisible="true"
      ref="demo3"
      :swiperData="bannerList"
    >
      <div
        v-for="(item, index) in bannerList"
        :key="index"
        class="nut-swiper-slide"
      >
        <img :src="item.imgSrc" style="width:100%;" />
      </div>
    </nut-swiper>

    <nut-noticebar :text="notice"></nut-noticebar>

    <nut-infiniteloading
      @loadmore="loadmore"
      :has-more="true"
      :is-loading="isLoading"
      :is-show-mod="true"
      :threshold="200"
    >
      <div class="news" v-for="(item, index) in newsList" :key="index">
        <div class="content" @click="toArticle(item.articleId)">
          <div>
            <img :src="item.coverImg" style="width:100%;" />
          </div>
          <div class="title">
            <div>
              {{ item.title }}
            </div>
          </div>
        </div>
      </div>
    </nut-infiniteloading>

    <Tabbar></Tabbar>
  </div>
</template>

<script>
import { newsList, noticeList, banner } from "@/axios/api";
import Tabbar from "@/components/tabbar";

export default {
  components: { Tabbar },
  data() {
    return {
      isLoading: false,
      notice: "",
      newsList: [],
      bannerList: [],
      page: {
        num: 1,
        size: 5
      }
    };
  },
  created() {
    this.getNoticeList();
    this.getNewsList();
    this.getBannerList();
  },
  methods: {
    // 加载更多
    async loadmore() {
      this.isLoading = true;
      this.page.num += 1;
      await this.getNewsList();
      this.isLoading = false;
    },

    // 轮播
    async getBannerList() {
      let res = await banner(null, `?pageNum=1&pageSize=999`);
      res.rows.forEach(item => {
        item.imgSrc = item.coverImg;
      });
      this.bannerList = res.rows;
    },

    // 公告
    async getNoticeList() {
      let res = await noticeList(null, `?pageNum=1&pageSize=1`);
      this.notice = res.rows[0].noticeTitle;
    },

    // 咨询列表
    async getNewsList() {
      let res = await newsList(
        null,
        `?pageNum=${this.page.num}&pageSize=${this.page.size}`
      );
      this.newsList = this.newsList.concat(res.rows);
    },

    // 去咨询
    toArticle(id) {
      this.$router.push({
        name: "article",
        query: {
          id
        }
      });
    }
  },
  destroyed() {
    clearTimeout(this.timer);
  }
};
</script>

<style lang="less" scoped>
.news {
  width: 90%;
  padding-top: 60%;
  margin: 10px 5% 0 5%;
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    overflow: hidden;
    background: #ddd;
    border: 2px solid rgb(240, 243, 254);

    img {
      border-radius: 10px;
      overflow: hidden;
    }

    .title {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);
      height: 70px;
      font-size: 18px;
      font-weight: 800;
      padding: 10px;
      box-sizing: border-box;
      div {
        height: 50px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
}
</style>
