<template>
  <div>
    <nut-navbar :leftShow="true" :rightShow="false">
      <a slot="back-icon" @click="$router.push({ name: 'home' })">返回首页</a>
      &nbsp;
    </nut-navbar>

    <div class="forget">
      <div class="title">
        重置密码
      </div>

      <div class="content">
        <div class="item">
          <nut-textinput
            v-model="nickname"
            label="昵称"
            placeholder="请输入昵称"
            maxlength="15"
            :has-border="false"
          />
        </div>
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
            placeholder="请输入新密码"
            v-model="pwd"
            label="新密码"
            maxlength="10"
            type="password"
            :has-border="false"
          />
        </div>
        <div class="item">
          <nut-textinput
            placeholder="请输入重复密码"
            v-model="pwd2"
            maxlength="10"
            label="重复密码"
            type="password"
            :has-border="false"
          />
        </div>
        <div class="code">
          <div class="item">
            <nut-textinput
              placeholder="请输入验证码"
              v-model="code2"
              maxlength="4"
              label="验证码"
              type="password"
              :has-border="false"
            />
          </div>
          <span style="margin-top: 10px" @click="setCode()">
            <Identify :identifyCode="code"></Identify>
          </span>
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
              this.$router.push({ name: 'login' });
            }
          "
        >
          前往登录
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { forget } from "@/axios/api";
import Identify from "@/components/identify";

export default {
  components: { Identify },
  data() {
    return {
      phone: null,
      nickname: null,
      pwd: null,
      pwd2: null,
      code: null,
      code2: null
    };
  },
  created() {
    this.setCode();
  },
  methods: {
    // 设置随机数
    setCode() {
      let code = Math.floor(Math.random() * 10000).toString();
      if (code < 1000) {
        code = this.setCode();
        return code;
      }
      this.code = code.toString();
    },

    // 校验
    verify() {
      try {
        if (!this.nickname) throw "昵称必填";
        if (!this.phone) throw "手机号必填";
        if (!this.pwd) throw "新密码必填";
        if (!this.pwd2) throw "重复新密码必填";
        if (!this.code2) throw "验证码必填";
        if (this.code != this.code2) throw "验证码错误";
        if (!/^[1][0-9]{10}$/.test(this.phone)) throw "手机号不正确";
        if (this.pwd.length < 6) throw "新密码最短为6位";
        if (this.pwd != this.pwd2) throw "重复新密码错误";
      } catch (e) {
        this.$toast.fail(e);
        return false;
      }
      return true;
    },

    // 提交
    async submit() {
      if (!this.verify()) return;
      await forget({
        phone: this.phone,
        nickname: this.nickname,
        password: this.pwd
      });
      this.$toast.success("操作成功");
      setTimeout(() => {
        this.$router.push({ name: "login" });
      }, 2000);
    }
  }
};
</script>

<style lang="less" scoped>
/deep/.nut-navbar {
  background: rgba(0, 0, 0, 0);
}

.forget {
  padding: 20px;

  .title {
    font-size: 30px;
    font-weight: bold;
    margin: 50px 0;
  }

  .content {
    .code {
      display: flex;
      align-items: center;
      justify-content: space-between;
      /deep/input {
        width: 150px;
      }
    }
    .item {
      padding: 0 10px;
      background: #fff;
      margin-top: 10px;
    }
  }
}
</style>
