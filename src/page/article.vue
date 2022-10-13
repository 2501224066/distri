<template>
  <div>
    <nut-navbar
      :leftShow="true"
      :rightShow="false"
      @on-click-back="()=>{this.$router.back()}"
    >咨询</nut-navbar>

    <div class="content">
      <div class="title">《再别康桥》</div>
      <div>
        <p>轻轻的我走了，正如我轻轻的来；</p>
        <p>
          我轻轻的招手，作别西天的云彩。</p>
        <p>
          那河畔的金柳，是夕阳中的新娘；</p>
        <p>
          波光里的艳影，在我的心头荡漾。</p>
        <p>
          软泥上的青荇，油油的在水底招摇；</p>
        <p>
        </p>
        <p>
          在康桥的柔波里，
        </p>
        <p>
          我甘心做一条水草！
        </p>
        <p>
          那榆荫下的一潭，
        </p>
        <p>
          不是清泉，是天上虹
        </p>
        <p>
          揉碎在浮藻间，沉淀着彩虹似的梦。
        </p>
        <p>
          寻梦？撑一支长蒿，
        </p>
        <p>
          向青草更青处漫溯，
        </p>
        <p>
          满载一船星辉，在星辉斑斓里放歌。
        </p>
        <p>
          但我不能放歌，悄悄是别离的笙箫；
        </p>
        <p>
          夏虫也为我沉默，沉默是今晚的康桥！
        </p>
        <p>
          悄悄的我走了，正如我悄悄的来；
        </p>
        <p>
          我挥一挥衣袖，不带走一片云彩。</p>
      </div>

      <div>
        <p>轻轻的我走了，正如我轻轻的来；</p>
        <p>
          我轻轻的招手，作别西天的云彩。</p>
        <p>
          那河畔的金柳，是夕阳中的新娘；</p>
        <p>
          波光里的艳影，在我的心头荡漾。</p>
        <p>
          软泥上的青荇，油油的在水底招摇；</p>
        <p>
        </p>
        <p>
          在康桥的柔波里，
        </p>
        <p>
          我甘心做一条水草！
        </p>
        <p>
          那榆荫下的一潭，
        </p>
        <p>
          不是清泉，是天上虹
        </p>
        <p>
          揉碎在浮藻间，沉淀着彩虹似的梦。
        </p>
        <p>
          寻梦？撑一支长蒿，
        </p>
        <p>
          向青草更青处漫溯，
        </p>
        <p>
          满载一船星辉，在星辉斑斓里放歌。
        </p>
        <p>
          但我不能放歌，悄悄是别离的笙箫；
        </p>
        <p>
          夏虫也为我沉默，沉默是今晚的康桥！
        </p>
        <p>
          悄悄的我走了，正如我悄悄的来；
        </p>
        <p>
          我挥一挥衣袖，不带走一片云彩。</p>
      </div>
    </div>

    <nut-backtop :distance="400">
    </nut-backtop>
  </div>
</template>

<script>
export default {
  methods() {},
};
</script>

<style lang="less" scoped>
.content {
  padding: 0 4% 5vh 4%;
  .title {
    padding: 20px 0;
    font-size: 26px;
    font-weight: bold;
    text-align: center;
  }
}
</style>