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
        <div class="li" style="color:#f0250f">
          <div>
            账户
          </div>
          <div>自购</div>
          <div>团队</div>
        </div>
        <div v-if="list.length == 0" class="none">暂无数据</div>
        <div class="li" v-else v-for="(item, index) in list" :key="index">
          <div>
            {{ item.memberName }}
            {{ item.memberPhone }}
          </div>
          <div>{{ item.balance }}</div>
          <div>{{ item.teamBalance }}</div>
        </div>
      </div>

      <nut-backtop :distance="400"> </nut-backtop>
    </nut-infiniteloading>
  </div>
</template>

<script>
import { withList } from "@/axios/api";

export default {
  data() {
    return {
      isLoading: false,
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
  margin: 10px 4%;
  border-radius: 10px;
  background: #fff;
  overflow: hidden;
  padding: 10px;
  box-sizing: border-box;
  border: 2px solid rgb(240, 243, 254);
  font-size: 14px;
  .li {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    min-height: 40px;
    border-bottom: 1px solid #ddd;
    div {
      width: 33.3%;
      text-align: center;
    }
  }
}
</style>
