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
              暂未设置银行卡号，<span
                style="color:#2B86C5"
                @click="bandModal.show = true"
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
      <div class="item" @click="insertModal.show = true">
        <div>入金申请</div>
        <nut-icon type="right" size="20px" color="#999"> </nut-icon>
      </div>
      <div class="item" @click="outModal.show = true">
        <div>出金申请</div>
        <nut-icon type="right" size="20px" color="#999"> </nut-icon>
      </div>
    </div>

    <div style="text-align:center;color:#2B86C5;font-size: 18px">退出登录</div>

    <!-- 银行卡 -->
    <nut-actionsheet
      :is-visible="bandModal.show"
      @close="bandModal.show = !bandModal.show"
    >
      <div slot="custom" class="custom-wrap">
        <div class="memo">银行卡设置</div>
        <div style="padding: 30px 10px 50px 10px">
          <nut-textinput
            v-model="bandModal.code"
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

    <!-- 入金 -->
    <nut-actionsheet
      :is-visible="insertModal.show"
      @close="insertModal.show = !insertModal.show"
    >
      <div slot="custom" class="custom-wrap">
        <div class="memo">入金申请</div>
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
              <div class="item" v-for="(item, index) in 6" :key="index"></div>
              <div class="item"></div>
              <nut-uploader
                name="uploader-demo"
                :url="insertModal.url"
                :acceptType="['image/jpeg', 'image/png']"
                @success="
                  file => {
                    this.insertModal.img = file;
                    $toast.success('上传成功');
                  }
                "
                @fail="
                  () => {
                    $toast.fail('上传失败！');
                  }
                "
                @showMsg="
                  () => {
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
          <nut-button style="margin-top:20px" block shape="circle">
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
            type="number"
            v-model="outModal.num"
            label="出金金额："
            placeholder="请输入出金金额"
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
    return {
      bandModal: {
        show: false,
        code: null
      },
      insertModal: {
        show: false,
        url: "https://my-json-server.typicode.com/linrufeng/demo/posts",
        num: 999,
        img: null
      },
      outModal: {
        show: false,
        num: 111
      }
    };
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
      width: 50px;
      height: 50px;
      margin-right: 10px;
      margin-bottom: 10px;
      background: #ddd;
      border-radius: 4px;
      overflow: hidden;
    }
    .add {
      width: 50px;
      height: 50px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: #ddd;
      border-radius: 4px;
      overflow: hidden;
    }
  }
}
</style>
