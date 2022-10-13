<template>
  <div>
    <nut-navbar
      :leftShow="true"
      :rightShow="false"
      @on-click-back="()=>{this.$router.back()}"
    >账单</nut-navbar>

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
            v-for="(item, index) in int"
            :key="index"
            title="标题1"
            :name="index+1"
          >
            京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
          </nut-collapse-item>
        </nut-collapse>

        <nut-backtop :distance="400">
        </nut-backtop>
      </div>
    </nut-infiniteloading>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      int: 20,
      activeNames: [],
    };
  },
  methods: {
    // 加载更多
    async loadmore() {
      this.isLoading = true;
      this.timer = setTimeout(() => {
        this.int += 5;
        this.isLoading = false;
      }, 100);
    },
  },
};
</script>

<style lang="less" scoped>
.content {
  width: 92%;
  margin: 20px 4%;
  border-radius: 10px;
}
</style>