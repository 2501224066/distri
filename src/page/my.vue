<template>
  <div>
    <div class="avatar">
      <div class="content">
        <div class="box">
          <nut-avatar
            size="large"
            bg-icon
            bg-image="http://img30.360buyimg.com/uba/jfs/t1/84318/29/2102/10483/5d0704c1Eb767fa74/fc456b03fdd6cbab.png"
          ></nut-avatar>
          <div>
            <div>野原新之助</div>
            <div
              style="font-size: 14px;font-weight: normal;margin-top: 6px;color:#666"
            >
              暂未设置银行卡号，<span style="color:#2B86C5" @click="show = true"
                >点击设置</span
              >
            </div>
            <!--  <div
              style="font-size: 14px;font-weight: normal;margin-top: 6px;color:#666"
            >
              卡号: 475635465324545
            </div> -->
          </div>
        </div>
      </div>

      <div class="num">
        <div class="box">
          <div class="item">
            <div>151235</div>
            <div class="tag">本金</div>
          </div>
          <div class="item">
            <div>1515</div>
            <div class="tag">收益</div>
          </div>
        </div>
      </div>
    </div>

    <div class="list">
      <div class="item">
        <div>账单</div>
        <nut-icon type="right" size="20px" color="#999"> </nut-icon>
      </div>
      <div class="item">
        <div>入金申请</div>
        <nut-icon type="right" size="20px" color="#999"> </nut-icon>
      </div>
      <div class="item">
        <div>出金申请</div>
        <nut-icon type="right" size="20px" color="#999"> </nut-icon>
      </div>
    </div>

    <div style="text-align:center;color:#2B86C5;font-size: 18px">退出登录</div>

    <nut-actionsheet :is-visible="show" @close="show = !show">
      <div slot="custom" class="custom-wrap">
        <div style="padding: 30px 10px 50px 10px">
          <nut-textinput
            v-model="bandCode"
            label="银行卡号："
            placeholder="请输入银行卡号"
            :has-border="false"
          />
          <nut-button style="margin-top:20px" block shape="circle">
            确定
          </nut-button>
        </div>
      </div>
    </nut-actionsheet>

    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from "@/components/tabbar";

export default {
  components: { Tabbar },
  data() {
    return { show: false, bandCode: null };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.avatar {
  height: 30vh;
  background-color: #a9c9ff;
  background-image: linear-gradient(180deg, #a9c9ff 0%, #ffbbec 100%);
  padding: 0 10%;
  .content {
    height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .box {
      display: flex;
      align-content: center;
      font-weight: bold;
      font-size: 28px;
    }
  }

  .num {
    height: 8vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 20px;
    font-weight: bolder;
    background: rgba(250, 250, 250, 0.4);
    border-radius: 10px;
    margin-bottom: 2vh;
    .box {
      display: flex;
      justify-content: space-around;
      font-size: 26px;
      font-family: Arial, Helvetica, sans-serif;
      .item {
        width: 30%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .tag {
        font-size: 14px;
        font-weight: normal;
        margin-top: 6px;
      }
    }
  }
}

.list {
  width: 94%;
  margin: 20px 3%;

  .item {
    background: #fff;
    padding: 14px 3%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    border-radius: 10px;
    border: 2px solid rgb(240, 243, 254);
  }
}
</style>
