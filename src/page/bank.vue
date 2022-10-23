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
      >账户列表</nut-navbar
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
            用户名称
          </div>
          <div>账户号</div>
          <div>持卡人</div>
        </div>
        <div v-if="backList.length == 0" class="none">暂无数据</div>
        <div class="li" v-else v-for="(item, index) in backList" :key="index">
          <div>
            {{ item.bank }}
          </div>
          <div>{{ item.account }}</div>
          <div>{{ item.cardOwner }}</div>
        </div>

        <nut-backtop :distance="400"> </nut-backtop>
      </div>
    </nut-infiniteloading>
  </div>
</template>

<script>
import { bankList, backDel } from "@/axios/api";

export default {
  data() {
    return {
      isLoading: false,
      backList: [],
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
      let res = await bankList(
        null,
        `?pageNum=${this.page.num}&pageSize=${this.page.size}`
      );
      this.backList = this.backList.concat(res.rows);
    },

    // 删除
    async del(id, index) {
      await backDel(null, `?id=${id}`);
      this.backList.splice(index, 1);
      this.$toast.success("操作成功");
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
