<template>
  <div id="aboutUS">
    <div class="copyright">©ProJect ASF</div>
    <div class="record">鲁ICP备2021029881号</div>
  </div>
</template>

<script>
export default {
  name: "aboutUs"
}
</script>

<style scoped>
#aboutUS{
  position: relative;
  width: 100vw;
  height: 105px;
  background: #F3F4F6;
}
.copyright {
  position: absolute;
  top: 50%;
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
  top: 50%;
  transform: translateY(-50%);
  right: 63px;
  font-family: OPPOSans;
  font-size: 24px;
  color: #9CA3AF;

}
</style>
