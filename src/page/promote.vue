<template>
  <div>
    <nut-navbar :leftShow="false" :rightShow="false">推广二维码</nut-navbar>

    <div class="content">
      <span style="margin-bottom: 20px;font-size: 16px;font-weight: 800;">
        推广码：{{ invitCode }}
      </span>
      <span v-if="invitCode" class="qrcode" ref="qrCodeUrl"></span>
      <span
        v-else
        class="qrcode"
        @click="
          () => {
            $router.push({ name: 'login' });
          }
        "
        >请先登录</span
      >

      <span style="margin-top: 20px" @click="show = true">
        <span style="font-size: 16px;font-weight: 800;margin-right:6px">
          推广规则
        </span>
        <nut-icon size="19px" type="action" color="#f0250f"> </nut-icon>
      </span>
    </div>

    <nut-actionsheet :is-visible="show" @close="show = !show">
      <div slot="custom" class="custom-wrap">
        <div class="memo">推广规则</div>
        <div style="padding: 10px  10px 5vh 10px;white-space: pre-line;">
          {{ invitRemark }}
        </div>
      </div>
    </nut-actionsheet>

    <Tabbar></Tabbar>
  </div>
</template>

<script>
import QRCode from "qrcodejs2";
import Tabbar from "@/components/tabbar";
import { setting } from "@/axios/api";

export default {
  components: { Tabbar },
  data() {
    return {
      show: false,
      invitRemark: null,
      invitCode: sessionStorage.getItem("userInfo")
        ? JSON.parse(sessionStorage.getItem("userInfo")).invitCode
        : null
    };
  },
  mounted() {
    this.setCode();
    this.getSetting();
  },
  methods: {
    async getSetting() {
      let res = await setting();
      this.invitRemark = res.invitRemark;
    },

    // 创建二维码
    setCode() {
      if (!sessionStorage.getItem("loginStatus")) return;
      new QRCode(this.$refs.qrCodeUrl, {
        text: `${location.origin}/register?invitCode=${this.invitCode}`, // 需要转换为二维码的内容
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
      });
    }
  }
};
</script>

<style lang="less" scoped>
.content {
  width: 100%;
  display: flex;
  height: 80vh;
  position: fixed;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .qrcode {
    width: 240px;
    height: 240px;
    background: #fff;
    border: 2px solid rgb(240, 243, 254);
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    clear: #999;
  }
}

.memo {
  font-size: 20px;
  font-weight: bold;
  padding: 16px;
  border-bottom: 1px solid #ddd;
}
</style>
