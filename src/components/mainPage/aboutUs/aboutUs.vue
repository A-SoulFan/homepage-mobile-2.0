<template>
<div id="aboutUs">
  <div class="friend-link">
    <h4>友情链接</h4>
    <div class="link-item">
      <a href="https://asoulcnki.asia/">枝网查重</a>
      <a href="https://www.asdb.live">ASDB</a>
      <a href="https://www.asoul.cloud">一个魂二创</a>
      <a href="https://www.asoulwiki.com">ASWIKI</a>
      <a href="https://mew.fun">Mew</a>
      <a href="https://asoul.jp">asoul.jp</a>
      <a href="https://www.bilibili.com/video/BV1M64y1a7zh">Sir this way!</a>
    </div>
  </div>
  <hr style='background-color:#F3F4F6; height:1px; border:none;' />
  <div class="legal">
    <div class="copyright">联系我们：
      <a href="https://b23.tv/Gy58jE5" target="_blank">©ProJect ASF</a>
    </div>
    <div class="record">
      <a href="http://beian.miit.gov.cn/" target="_blank">鲁ICP备2021029881号</a>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "aboutUs",
}
</script>

<style scoped>
#aboutUs {
  position: relative;
  padding: 46px 63px 0px 63px;
  weight: 100%;
  height: 200px;
  background: #182233;
  color: #F3F4F6;
}

a {
  /*
  text-decoration: none;
  */
  display: inline-block;
  padding-right: 12px;
  font-family: OPPOSans;
  font-size: 24px;
  color: #9CA3AF;
}

h4 {
  padding-bottom: 8px;
  font-family: OPPOSans;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
}

.copyright {
  position: absolute;
  top: 80%;
  transform: translateY(-50%);
  left: 63px;
  font-family: OPPOSans;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  color: #9CA3AF;

}

.record {
  position: absolute;
  top: 80%;
  transform: translateY(-50%);
  right: 63px;
  font-family: OPPOSans;
  font-size: 24px;
  color: #9CA3AF;

}
</style>
