<!-- 头部组件顶栏 -->
<template>
  <div id="navBar">
    <div class="logo-icon">
      <svg  viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.286 27.0414H38.749L23.056 0.462402L5.097 30.8766L0 39.4687H12.465L16.569 32.5517L23.056 21.5751L26.286 27.0414Z" fill="#182233"/>
        <path d="M49.722 2.67514C42.864 2.67514 37.285 7.508 37.285 13.4567V13.6457C37.2685 15.8172 38.0249 17.9406 39.452 19.7291C39.9069 20.3427 40.4373 20.9121 41.034 21.4275L41.056 21.4465C43.3748 23.3947 46.4858 24.4815 49.722 24.4739H63.588C64.4161 24.4797 65.2084 24.7662 65.7941 25.2715C66.3798 25.7768 66.7119 26.4604 66.719 27.1751C66.7081 27.8887 66.3747 28.5705 65.7899 29.0751C65.205 29.5797 64.4149 29.8672 63.588 29.8763L22.788 29.9704L17.312 39.4272H63.98C64.036 39.4169 64.117 39.4014 64.213 39.3815C70.03 38.1975 77.406 33.5467 77.779 27.2554C77.984 23.7982 76.007 20.9908 74.579 19.402L74.504 19.3209L74.418 19.2466C74.403 19.2337 74.36 19.1888 74.329 19.1603C74.253 19.0809 74.151 18.9765 74.021 18.86C72.6883 17.6063 71.0683 16.6051 69.2638 15.92C67.4592 15.2348 65.5095 14.8806 63.538 14.8798H49.722C49.3587 14.8758 49.0115 14.7495 48.7545 14.5279C48.4975 14.3062 48.3509 14.0067 48.346 13.6932V13.5033C48.3525 13.1895 48.5002 12.8901 48.758 12.6686C49.0158 12.4471 49.3633 12.3209 49.727 12.3167L114.412 12.1829L120 2.71916L49.722 2.67514Z" fill="#182233"/>
        <path d="M80.248 25.8426V39.4273H91.334L91.365 25.8426C91.3697 25.5291 91.516 25.2295 91.7728 25.0077C92.0297 24.7859 92.3767 24.6594 92.74 24.6551H107.048L112.712 15.0619H92.685C85.827 15.0619 80.248 19.8982 80.248 25.8426Z" fill="#182233"/>
      </svg>
    </div>
    <div class="cube-content">
      <svg class="cube-icon" viewBox="0 0 44 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 -6.10352e-05H44V5.99994H0V-6.10352e-05Z" fill="#182233"/>
        <path d="M0 40H44V46H0V40Z" fill="#182233"/>
        <path d="M0 20.0711H44V26.0711H0V20.0711Z" fill="#182233"/>
      </svg>
    </div>
    <div v-if="layerFlag" class="mask-layer" @touchmove.prevent>
      <div class="mask-close" @click="closeLayer"></div>
      <div class="mask-content">
        <div  v-for="(item,index) in meumList" :key="index">
          <div class="choose-title" @click="chooseComponent(item)">{{item.title}}
            <div v-if="pageScreen.componentName === item.componentName" class="active"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navBar",
  inject: ['pageScreen'],
  data() {
    return {
      layerFlag: false,
      meumList: [
        {title: '成员介绍',componentName: 'memberScreen'},
        {title: '团队介绍',componentName: 'teamScreen'}
      ]
    }
  },
  methods: {
    openLayer() {
      //  弹出遮罩层
      this.layerFlag = true
      console.log(this.pageScreen)
    },
    closeLayer() {
      this.layerFlag = false
    },
    chooseComponent(item) {
      if(item.componentName === this.pageScreen) {
        return
      } else {
        this.pageScreen.componentName = item.componentName
      }
    }
  }
}
</script>

<style lang="less" scoped>
#navBar{
  position: relative;
  align-items:center;
  width: 100vw;
  height: 129px;
  background-color: #FFFFFF;

  .cube-content {
    position: absolute;
    right: 63px;
    display: flex;
    justify-content: right;
    align-items:center;
    height: 100%;
    .cube-icon {
      width: 44px;
      height: 46px;
    }
  }
  .logo-icon{
    position: absolute;
    top: 50%;
    left: 63px;
    transform: translateY(-50%);
    width: 120px;
    height: 40px;
  }

  .mask-layer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(255,255,255, 0.6);

    .mask-close{
      position: absolute;
      top: 30px;
      right: 40px;
      width: 50px;
      height: 50px;
      background-image: url("../../assets/images/navbar/close.png");
      background-size: 100% 100%;

    }
    .mask-content {
      margin: 0 auto;
      margin-top: 180px;
      .choose-title {
        position: relative;
        margin-top: 60px;
        text-align: center;
        font-size: 35px;
        z-index: 5;
        .active{
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          display: block;
          width: 300px;
          height: 15px;
          background-color: rgba(255,135,114, 0.6);
          z-index: 0;
        }
      }
    }
  }

}

</style>
