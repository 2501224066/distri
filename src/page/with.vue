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
      >关联用户</nut-navbar
    >

    <nut-infiniteloading
      @loadmore="loadmore"
      :has-more="true"
      :is-loading="isLoading"
      :is-show-mod="true"
      :threshold="200"
    >
      <div class="content">
        <nut-collapse v-model="activeNames">
          <nut-collapse-item
            v-for="(item, index) in list"
            :key="index"
            :title="item.memberName"
            :name="index + 1"
          >
            <div>注册时间：{{ item.createTime }}</div>
            <div>联系方式：{{ item.invitPhone }}</div>
          </nut-collapse-item>
        </nut-collapse>

        <nut-backtop :distance="400"> </nut-backtop>
      </div>
    </nut-infiniteloading>
  </div>
</template>

<script>
import { withList } from "@/axios/api";

export default {
  data() {
    return {
      isLoading: false,
      activeNames: [],
      list: [],
      page: {
        num: 1,
        size: 20
      }
    };
  },
  created() {
    this.getList();
  },
  methods: {
    // 加载更多
    async loadmore() {
      this.isLoading = true;
      this.page.num += 1;
      this.getList();
      this.isLoading = false;
    },

    // 账户列表
    async getList() {
      let res = await withList(
        null,
        `?pageNum=${this.page.num}&pageSize=${this.page.size}`
      );
      this.list = this.list.concat(res.rows);
    }
  }
};
</script>

<style lang="less" scoped>
.content {
  width: 92%;
  margin: 20px 4%;
  border-radius: 10px;
}
</style>
