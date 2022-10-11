<template>
  <div>
    <nut-swiper
      direction="horizontal"
      :loop="true"
      :canDragging="false"
      :paginationVisible="true"
      ref="demo3"
    >
      <div
        v-for="(item, index) in dataImgItem"
        :key="index"
        class="nut-swiper-slide"
      >
        <img :src="item.imgSrc" style="width:100%;" />
      </div>
    </nut-swiper>

    <nut-noticebar
      text="华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！"
    ></nut-noticebar>

    <div class="news" v-for="(item, index) in 3" :key="index">
      <div class="content">
        <div>
          <img
            src="https://img0.baidu.com/it/u=1684794258,1103853175&fm=253&fmt=auto&app=138&f=JPEG?w=534&h=500"
            style="width:100%;"
          />
        </div>
        <div class="title">
          <div>
            华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI
            WATCH等好礼，更多产品信
          </div>
        </div>
      </div>
    </div>

    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from "@/components/tabbar";

export default {
  components: { Tabbar },
  data() {
    return {
      dataImgItem: [
        {
          imgSrc:
            "https://img2.baidu.com/it/u=3728574222,3426081649&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=675"
        },
        {
          imgSrc:
            "https://img0.baidu.com/it/u=3993901385,893039060&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
        },
        {
          imgSrc:
            "https://img0.baidu.com/it/u=625289032,3987615589&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281"
        },
        {
          imgSrc:
            "https://img2.baidu.com/it/u=3667934843,56930964&fm=253&fmt=auto&app=138&f=JPG?w=889&h=500"
        }
      ]
    };
  },
  created() {},
  methods: {}
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
