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
        <nut-collapse v-model="activeNames">
          <nut-collapse-item
            v-for="(item, index) in backList"
            :key="index"
            :title="'【' + item.cardOwner + '】' + item.bank"
            :name="index + 1"
          >
            <div>卡号：{{ item.account }}</div>
            <div>备注：{{ item.remark }}</div>
            <div style="text-align:right; color: #f0250f">
              <span @click="del(item.id, index)">删除</span>
            </div>
          </nut-collapse-item>
        </nut-collapse>

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
      activeNames: [],
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
  margin: 20px 4%;
  border-radius: 10px;
}
</style>
