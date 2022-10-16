<template>
  <div>
    <nut-navbar
      :leftShow="true"
      :rightShow="false"
      @on-click-back="
        () => {
          this.$router.back();
        }
      "
      >咨询</nut-navbar
    >

    <div class="content">
      <div class="img">
        <img :src="detail.coverImg" alt="img" style="width:100%;" />
      </div>
      <div class="title">{{ detail.title }}</div>
      <div v-html="detail.content"></div>
    </div>

    <nut-backtop :distance="400"> </nut-backtop>
  </div>
</template>

<script>
import { newsDetail } from "@/axios/api";
export default {
  data() {
    return {
      detail: {}
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      let res = await newsDetail(null, `?articleId=${this.$route.query.id}`);
      this.detail = res.data;
    }
  }
};
</script>

<style lang="less" scoped>
.content {
  padding: 20px 4% 5vh 4%;
  .img {
    width: 100%;
    height: 160px;
    background: #ddd;
    border-radius: 10px;
    overflow: hidden;
  }
  .title {
    padding: 20px 0;
    font-size: 26px;
    font-weight: bold;
    text-align: center;
  }
}
</style>
