<template>
  <div class="register">
    <div class="title">
      注册
    </div>

    <div class="content">
      <div class="item">
        <nut-textinput
          v-model="val"
          label="昵称"
          placeholder="请输入昵称"
          :has-border="false"
        />
      </div>
      <div class="item">
        <nut-textinput
          v-model="val"
          label="手机号"
          placeholder="请输入手机号"
          :has-border="false"
        />
      </div>
      <div class="item">
        <nut-textinput
          placeholder="请输入密码"
          v-model="val"
          label="密码"
          type="password"
          :has-border="false"
        />
      </div>
      <div class="item">
        <nut-textinput
          placeholder="请输入重复密码"
          v-model="val"
          label="重复密码"
          type="password"
          :has-border="false"
        />
      </div>
      <div class="code">
        <div class="item">
          <nut-textinput
            placeholder="请输入验证码"
            v-model="val"
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
    <nut-button block shape="circle" style="margin-top:50px">
      提交
    </nut-button>
  </div>
</template>

<script>
import Identify from "@/components/identify";

export default {
  components: { Identify },
  data() {
    return {
      val: null,
      code: null
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
    }
  }
};
</script>

<style lang="less" scoped>
.register {
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
