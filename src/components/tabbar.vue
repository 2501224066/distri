<template>
  <div>
    <div class="h"></div>
    <nut-tabbar
      :tabbar-list="list"
      :bottom="true"
    ></nut-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          tabTitle: "首页",
          curr: false,
          icon: "../../static/img/home.png",
          activeIcon: "../../static/img/homeSel.png",
          href: "/",
          name: "home",
        },
        {
          tabTitle: "推广",
          curr: false,
          icon: "../../static/img/promote.png",
          activeIcon: "../../static/img/promoteSel.png",
          href: "/promote",
          name: "promote",
        },
        {
          tabTitle: "我的",
          curr: false,
          icon: "../../static/img/my.png",
          activeIcon: "../../static/img/mySel.png",
          href: "/my",
          name: "my",
        },
      ],
    };
  },
  created() {
    this.setCurr();
  },
  methods: {
    setCurr() {
      this.list.forEach((item) => {
        item.curr = false;
        if (item.name == this.$route.name) {
          item.curr = true;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.h {
  height: 90px;
}
</style>