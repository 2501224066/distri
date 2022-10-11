<template>
  <div>
    <nut-navbar :leftShow="false" :rightShow="false">推广二维码</nut-navbar>

    <div class="content">
      <img
        class="img"
        src="data:image/png;base64,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"
      />
      <span style="margin-top: 20px" @click="show = true">
        <span style=" font-size: 16px;font-weight: 800;margin-right:6px">
          推广规则
        </span>
        <nut-icon size="16px" type="action" color="#f0250f"> </nut-icon>
      </span>
    </div>

    <nut-actionsheet :is-visible="show" @close="show = !show">
      <div slot="custom" class="custom-wrap">
        <div style="padding: 10px">
          <p>豫章故郡，洪都新府。星分翼轸，地接衡庐。襟三江而带五湖，控蛮荆而引瓯越。物华天宝，龙光射牛斗之墟；人杰地灵，徐孺下陈蕃之榻。雄州雾列，俊采星驰。台隍枕夷夏之交，宾主尽东南之美。都督阎公之雅望，棨戟遥临；宇文新州之懿范，襜帷暂驻。十旬休假，胜友如云；千里逢迎，高朋满座。腾蛟起凤，孟学士之词宗；紫电青霜，王将军之武库。家君作宰，路出名区；童子何知，躬逢胜饯。</p>
          <p>时维九月，序属三秋。潦水尽而寒潭清，烟光凝而暮山紫。俨骖騑于上路，访风景于崇阿；临帝子之长洲，得天人之旧馆。层峦耸翠，上出重霄；飞阁流丹，下临无地。鹤汀凫渚，穷岛屿之萦回；桂殿兰宫，即冈峦之体势。</p>
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
      show: false
    };
  },
  methods: {}
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

  .img {
    width: 60%;
  }
}
</style>
