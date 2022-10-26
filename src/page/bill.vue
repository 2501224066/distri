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
      >账单</nut-navbar
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
            金额
          </div>
          <div>类型</div>
          <div>状态</div>
          <div>时间</div>
        </div>
        <div v-if="list.length == 0" class="none">暂无数据</div>
        <div class="li" v-else v-for="(item, index) in list" :key="index">
          <div>
            {{ item.debit == 0 ? "+ " : "- " }}
            {{ +item.credit + item.debit }}
          </div>
          <div>
            {{
              {
                RECHARGE: "充值",
                WITHDRAW: "提现",
                DIVIDEND: "分红",
                ADMIN_RECHARGE: "后台充值",
                ADMIN_CHANGE_BACK: "后台扣费"
              }[item.type]
            }}
          </div>
          <div>{{ item.statusName }}</div>
          <div>{{ item.createTime.substr(0, 10) }}</div>
        </div>

        <nut-backtop :distance="400"> </nut-backtop>
      </div>
    </nut-infiniteloading>
  </div>
</template>

<script>
import { bill } from "@/axios/api";

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
    // 获取列表
    async getList() {
      let res = await bill(
        null,
        `?pageNum=${this.page.num}&pageSize=${this.page.size}`
      );
      this.list = this.list.concat(res.rows);
    },

    // 加载更多
    async loadmore() {
      this.isLoading = true;
      this.page.num += 1;
      this.getList();
      this.isLoading = false;
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
      width: 25%;
      text-align: center;
    }
  }
}
</style>
