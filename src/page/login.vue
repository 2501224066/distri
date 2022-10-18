<template>
  <div>
    <nut-navbar :leftShow="true" :rightShow="false">
      <a slot="back-icon" @click="$router.push({ name: 'home' })">返回首页</a>
      &nbsp;
    </nut-navbar>

    <div class="register">
      <div class="title">
        登录
      </div>

      <div class="content">
        <div class="item">
          <nut-textinput
            v-model="phone"
            maxlength="11"
            label="手机号"
            placeholder="请输入手机号"
            :has-border="false"
          />
        </div>
        <div class="item">
          <nut-textinput
            placeholder="请输入密码"
            v-model="pwd"
            label="密码"
            maxlength="10"
            type="password"
            :has-border="false"
          />
        </div>
      </div>
      <nut-button block shape="circle" style="margin-top:50px" @click="submit">
        提交
      </nut-button>

      <div
        style="display: flex;justify-content: space-between;margin-top: 50px;color: #f0250f"
      >
        <div
          @click="
            () => {
              this.$router.push({ name: 'forget' });
            }
          "
        >
          忘记密码
        </div>
        <div
          @click="
            () => {
              this.$router.push({ name: 'register' });
            }
          "
        >
          前往注册
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login, userInfo } from "@/axios/api";
export default {
  data() {
    return {
      phone: null,
      pwd: null
    };
  },
  methods: {
    // 校验
    verify() {
      try {
        if (!this.phone) throw "手机号必填";
        if (!this.pwd) throw "密码必填";
        if (!/^[1][0-9]{10}$/.test(this.phone)) throw "手机号不正确";
        if (this.pwd.length < 6) throw "密码最短为6位";
      } catch (e) {
        this.$toast.fail(e);
        return false;
      }
      return true;
    },

    // 提交
    async submit() {
      if (!this.verify()) return;
      let res = await login({
        phone: this.phone,
        password: this.pwd
      });
      sessionStorage.setItem("loginStatus", true);
      sessionStorage.setItem("token", res.token);
      await this.getUserInfo();
    },

    // 用户信息
    async getUserInfo() {
      let res = await userInfo();
      sessionStorage.setItem("userInfo", JSON.stringify(res.data));

      this.$toast.success("登录成功");
      setTimeout(() => {
        this.$router.push({ name: "my" });
      }, 2000);
    }
  }
};
</script>

<style lang="less" scoped>
/deep/.nut-navbar {
  background: rgba(0, 0, 0, 0);
}

.register {
  padding: 20px;

  .title {
    font-size: 30px;
    font-weight: bold;
    margin: 50px 0;
  }

  .content {
    .item {
      padding: 0 10px;
      background: #fff;
      margin-top: 10px;
    }
  }
}
</style>
