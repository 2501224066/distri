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
            <div>{{ userInfo.nickname }}</div>

            <!-- <div
              style="font-size: 14px;font-weight: normal;margin-top: 6px;color:#2B86C5"
              @click="bankModal.show = true"
            >
              新增账户
            </div> -->
          </div>
        </div>
      </div>

      <div class="num">
        <div class="box">
          <div class="item">
            <div>{{ userInfo.balance }}</div>
            <div class="tag">余额</div>
          </div>
          <div class="item">
            <div>{{ userInfo.welfare }}</div>
            <div class="tag">收益</div>
          </div>
        </div>
      </div>
    </div>

    <div class="list">
      <div
        class="item"
        @click="
          () => {
            this.$router.push({ name: 'bill' });
          }
        "
      >
        <div>账单</div>
        <nut-icon type="right" size="20px" color="#999"> </nut-icon>
      </div>
      <!--       
      <div
        class="item"
        @click="
          () => {
            this.$router.push({ name: 'bank' });
          }
        "
      >
        <div>账户列表</div>
        <nut-icon type="right" size="20px" color="#999"> </nut-icon>
      </div>
-->
      <div
        class="item"
        @click="
          () => {
            this.$router.push({ name: 'with' });
          }
        "
      >
        <div>关联用户</div>
        <nut-icon type="right" size="20px" color="#999"> </nut-icon>
      </div>
      <div class="item" @click="insertModal.show = true">
        <div>入金申请</div>
        <nut-icon type="right" size="20px" color="#999"> </nut-icon>
      </div>
      <div class="item" @click="outModal.show = true">
        <div>出金申请</div>
        <nut-icon type="right" size="20px" color="#999"> </nut-icon>
      </div>
    </div>

    <div
      style="text-align:center;color:#2B86C5;font-size: 18px"
      v-if="loginStatus"
      @click="unLogin"
    >
      退出登录
    </div>

    <!-- 账户 -->
    <nut-actionsheet
      :is-visible="bankModal.show"
      @close="bankModal.show = !bankModal.show"
    >
      <div slot="custom" class="custom-wrap">
        <div class="memo">账户设置</div>
        <div style="padding: 30px 10px 50px 10px">
          <nut-textinput
            style="margin-bottom:10px"
            v-model="bankModal.name"
            label="用户名称："
            placeholder="请输入用户名称"
            :has-border="false"
          />
          <nut-textinput
            type="number"
            maxlength="19"
            style="margin-bottom:10px"
            v-model="bankModal.code"
            label="账户号："
            placeholder="请输入账户号"
            :has-border="false"
          />
          <nut-textinput
            style="margin-bottom:10px"
            v-model="bankModal.man"
            label="持卡人："
            placeholder="请输入持卡人"
            :has-border="false"
          />
          <nut-button
            style="margin-top:20px"
            block
            shape="circle"
            @click="bankSub"
          >
            确定
          </nut-button>
        </div>
      </div>
    </nut-actionsheet>

    <!-- 入金 -->
    <nut-actionsheet
      :is-visible="insertModal.show"
      @close="insertModal.show = !insertModal.show"
    >
      <div slot="custom" class="custom-wrap">
        <div class="memo">入金申请</div>

        <div class="url">
          充值链接：<a :href="payUrl" target="_blank">
            {{ payUrl }}
          </a>
        </div>

        <div style="padding: 30px 10px 50px 10px" class="insert">
          <nut-textinput
            type="number"
            v-model="insertModal.num"
            label="入金金额："
            placeholder="请输入入金金额"
            :has-border="false"
          />

          <div style="display: flex;margin-top:10px">
            <div>凭证：</div>
            <div class="imgs">
              <div
                class="item"
                v-for="(item, index) in insertModal.imgs"
                :key="index"
              >
                <span class="del" @click="insertModal.imgs.splice(index, 1)">
                  ✕
                </span>
                <img style="width:100%" :src="item" />
              </div>
              <nut-uploader
                name="file"
                :url="insertModal.url"
                :headers="{
                  Authorization: token
                }"
                :acceptType="['image/jpeg', 'image/png']"
                @success="
                  (file, res) => {
                    insertModal.imgs.push(JSON.parse(res).data);
                  }
                "
                @showMsg="
                  () => {
                    this.insertModal.show = false;
                    $toast.text(msg);
                  }
                "
                typeError="对不起，不支持上传该类型文件！"
                limitError="对不起，文件大小超过限制！"
              >
                <div class="add">
                  <nut-icon type="plus" color="#999"> </nut-icon>
                </div>
              </nut-uploader>
            </div>
          </div>
          <nut-button
            style="margin-top:20px"
            block
            shape="circle"
            @click="insertMoney"
          >
            确定
          </nut-button>
        </div>
      </div>
    </nut-actionsheet>

    <!-- 出金 -->
    <nut-actionsheet
      :is-visible="outModal.show"
      @close="outModal.show = !outModal.show"
    >
      <div slot="custom" class="custom-wrap">
        <div class="memo">出金申请</div>

        <div style="padding: 30px 10px 50px 10px">
          <nut-textinput
            style="margin-bottom:10px"
            v-model="outModal.bankName"
            label="用户名称："
            placeholder="请输入用户名称"
            :has-border="false"
          />
          <nut-textinput
            style="margin-bottom:10px"
            v-model="outModal.bankCode"
            label="账户号："
            placeholder="请输入账户号"
            :has-border="false"
          />
          <nut-textinput
            type="number"
            style="margin-bottom:10px"
            v-model="outModal.bankMan"
            label="用户电话："
            placeholder="请输入用户电话"
            :has-border="false"
          />
          <nut-textinput
            type="number"
            v-model="outModal.num"
            label="出金金额："
            placeholder="请输入出金金额"
            :has-border="false"
          />
          <nut-button
            style="margin-top:20px"
            block
            shape="circle"
            @click="outMoney"
          >
            确定
          </nut-button>
        </div>
      </div>
    </nut-actionsheet>

    <nut-picker
      :is-visible="outModal.bankCodeShow"
      :list-data="[pickerData]"
      @close="outModal.bankCodeShow = false"
      @confirm="
        val => {
          let key = 0;
          if (val.length != 0) {
            key = +val[0].label;
          }
          outModal.bankCode = this.bankList[key].account;
          outModal.bankName = this.bankList[key].bank;
          outModal.bankMan = this.bankList[key].cardOwner;
        }
      "
    ></nut-picker>

    <Tabbar></Tabbar>
  </div>
</template>

<script>
import { insert, out, bankAdd, bankList, userInfo, setting } from "@/axios/api";
import Tabbar from "@/components/tabbar";

export default {
  components: { Tabbar },
  data() {
    return {
      token: sessionStorage.getItem("token"),
      loginStatus: sessionStorage.getItem("loginStatus") || false,
      userInfo: sessionStorage.getItem("userInfo")
        ? JSON.parse(sessionStorage.getItem("userInfo"))
        : { nickname: "未登录", balance: 0, welfare: 0 },
      bankModal: {
        show: false,
        name: null,
        code: null,
        man: null,
        remark: null
      },
      insertModal: {
        show: false,
        url: "/jsonapi/recharge/upload",
        num: null,
        imgs: []
      },
      outModal: {
        show: false,
        bankCode: null,
        bankName: null,
        bankMan: null,
        num: null,
        bankCodeShow: false
      },
      pickerData: [],
      bankList: [],
      payUrl: null
    };
  },
  mounted() {
    this.loginVerify();
  },
  methods: {
    // 登录校验
    loginVerify() {
      if (!sessionStorage.getItem("loginStatus")) {
        this.$toast.fail("暂未登录,自动前往");
        setTimeout(() => {
          this.$router.push({ name: "login" });
        }, 2000);
        return;
      }
      this.getUserInfo();
      this.getBankList();
      this.getSetting();
    },

    async getSetting() {
      let res = await setting();
      this.payUrl = res.payUrl;
    },

    // 用户信息
    async getUserInfo() {
      let res = await userInfo();
      sessionStorage.setItem("userInfo", JSON.stringify(res.data));
      this.userInfo = res.data;
    },

    // 退出登录
    unLogin() {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("loginStatus");
      sessionStorage.removeItem("userInfo");
      this.$toast.success("操作成功");
      setTimeout(() => {
        this.$router.push({ name: "home" });
      }, 2000);
    },

    // 新增账户
    async bankSub() {
      if (!this.bankModal.name || !this.bankModal.code || !this.bankModal.man) {
        this.bankModal.show = false;
        this.$toast.fail("请将表单填写完全");
        return;
      }
      await bankAdd({
        bank: this.bankModal.name,
        account: this.bankModal.code,
        cardOwner: this.bankModal.man,
        remark: this.bankModal.remark
      });
      this.bankModal.name = null;
      this.bankModal.code = null;
      this.bankModal.man = null;
      this.bankModal.remark = null;
      this.bankModal.show = false;
      this.$toast.success("操作成功,可在账户列表查看");
    },

    // 账户列表
    async getBankList() {
      let res = await bankList(null, `?pageNum=1&pageSize=999`);
      this.bankList = res.rows;
      this.pickerData = res.rows.reduce((init, val, index) => {
        init.push({
          label: index,
          value: `【${val.cardOwner}】${val.bank}`
        });
        return init;
      }, []);
    },

    // 入金
    async insertMoney() {
      if (!this.insertModal.num || this.insertModal.imgs.length == 0) {
        this.insertModal.show = false;
        this.$toast.fail("请将表单填写完全");
        return;
      }
      await insert({
        amount: this.insertModal.num,
        imgUrls: this.insertModal.imgs.join()
      });
      this.insertModal.num = null;
      this.insertModal.imgs = [];
      this.insertModal.show = false;
      this.$toast.success("操作成功");
    },

    // 出金
    async outMoney() {
      if (
        !this.outModal.num ||
        !this.outModal.bankName ||
        !this.outModal.bankCode ||
        !this.outModal.bankMan
      ) {
        this.outModal.show = false;
        this.$toast.fail("请将表单填写完全");
        return;
      }
      if (+this.outModal.num > +this.userInfo.balance) {
        this.outModal.show = false;
        this.$toast.fail("出金金额超出");
        return;
      }
      await out({
        amount: this.outModal.num,
        bank: this.outModal.bankName,
        account: this.outModal.bankCode,
        payee: this.outModal.bankMan
      });
      this.outModal.num = null;
      this.outModal.bankName = null;
      this.outModal.bankCode = null;
      this.outModal.bankMan = null;
      this.outModal.show = false;
      this.$toast.success("操作成功");
    }
  }
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

.memo {
  font-size: 20px;
  font-weight: bold;
  padding: 16px;
  border-bottom: 1px solid #ddd;
}

.insert {
  .imgs {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    .item {
      width: 80px;
      height: 80px;
      margin-right: 10px;
      margin-bottom: 10px;
      background: #eee;
      border-radius: 4px;
      position: relative;
      overflow: hidden;
      top: 0;
      left: 0;
      .del {
        position: absolute;
        right: 0;
        top: 0;
        background: #999;
        color: #fff;
        font-size: 12px;
        width: 18px;
        display: inline-block;
        line-height: 18px;
        height: 18px;
        text-align: center;
        border-radius: 0 0 0 6px;
      }
    }
    .add {
      width: 80px;
      height: 80px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: #eee;
      border-radius: 4px;
      overflow: hidden;
    }
  }
}

.url {
  background: #fff;
  padding: 10px;
  box-sizing: border-box;
  width: 94%;
  margin: 10px 3%;
  border-radius: 10px;
  border: 2px solid rgb(240, 243, 254);
}
</style>
