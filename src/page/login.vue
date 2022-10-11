<template>
  <div class="register">
    <div class="title">
      登录
    </div>

    <div class="content">
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
    </div>
    <nut-button block shape="circle" style="margin-top:50px">
      提交
    </nut-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: null
    };
  },
  created() {},
  methods: {}
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
    .item {
      padding: 0 10px;
      background: #fff;
      margin-top: 10px;
    }
  }
}
</style>
