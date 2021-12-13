<!--用户中心 登录与其他功能导航-->
<template>
  <div class=" nav-area-phone">
    <div class="nav-area-header">
      <div class="logo-icon">
      <svg  viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.286 27.0414H38.749L23.056 0.462402L5.097 30.8766L0 39.4687H12.465L16.569 32.5517L23.056 21.5751L26.286 27.0414Z" fill="#182233"/>
        <path d="M49.722 2.67514C42.864 2.67514 37.285 7.508 37.285 13.4567V13.6457C37.2685 15.8172 38.0249 17.9406 39.452 19.7291C39.9069 20.3427 40.4373 20.9121 41.034 21.4275L41.056 21.4465C43.3748 23.3947 46.4858 24.4815 49.722 24.4739H63.588C64.4161 24.4797 65.2084 24.7662 65.7941 25.2715C66.3798 25.7768 66.7119 26.4604 66.719 27.1751C66.7081 27.8887 66.3747 28.5705 65.7899 29.0751C65.205 29.5797 64.4149 29.8672 63.588 29.8763L22.788 29.9704L17.312 39.4272H63.98C64.036 39.4169 64.117 39.4014 64.213 39.3815C70.03 38.1975 77.406 33.5467 77.779 27.2554C77.984 23.7982 76.007 20.9908 74.579 19.402L74.504 19.3209L74.418 19.2466C74.403 19.2337 74.36 19.1888 74.329 19.1603C74.253 19.0809 74.151 18.9765 74.021 18.86C72.6883 17.6063 71.0683 16.6051 69.2638 15.92C67.4592 15.2348 65.5095 14.8806 63.538 14.8798H49.722C49.3587 14.8758 49.0115 14.7495 48.7545 14.5279C48.4975 14.3062 48.3509 14.0067 48.346 13.6932V13.5033C48.3525 13.1895 48.5002 12.8901 48.758 12.6686C49.0158 12.4471 49.3633 12.3209 49.727 12.3167L114.412 12.1829L120 2.71916L49.722 2.67514Z" fill="#182233"/>
        <path d="M80.248 25.8426V39.4273H91.334L91.365 25.8426C91.3697 25.5291 91.516 25.2295 91.7728 25.0077C92.0297 24.7859 92.3767 24.6594 92.74 24.6551H107.048L112.712 15.0619H92.685C85.827 15.0619 80.248 19.8982 80.248 25.8426Z" fill="#182233"/>
      </svg>
    </div>
    <div class="close" @click="close">
      <svg  viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M41.3671 0L23 18.3671L4.63286 0L0 4.63286L18.3671 23L0 41.3671L4.63286 46L23 27.6329L41.3671 46L46 41.3671L27.6329 23L46 4.63286L41.3671 0Z" fill="#182233"/>
      </svg>
    </div>
  </div>
    <!---
    <div class="login-container">
      <div class="avatar">
        <img />
      </div>
      <div class="login-option">登录 / 注册</div>
    </div>
     -->
  <div class = "nav-area-phone-main">
    <div class="elementary">
      <div
          v-for="(elementary, index) in navList"
          :key="elementary.name"
          class="elementary-item-box"
        >
      <div class="elementary-item">
         <div>{{ elementary.name }}</div>
         <div @click="selectElementary(elementary, index, 'phone')">
           <img src="@/assets/navbar/addIcon.svg" />
         </div>
      </div>
      <div
         v-show="phoneMenu.navIndex === index && phoneMenu.isShowSecondary"
      >
         <div
              v-for="item in elementary.secondaryList"
              :key="item.name"
              class="secondary-item"
              @click="selectSecondary(item)"
         >
              {{ item.name }}
            </div>
         </div>
        </div>
      </div>
     </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'personalCenter',
  data() {
    return {
      phoneMenu :{
      phoneMenuShow: false,
      navIndex: 0,
      isShowSecondary: false,
    },
data :{
      navIndex: 2,
      secondaryList: [],
      isShowSecondary: false,
    },
toolsUrl:"https://tools.asoulfan.com",
 navList: [
      {
        name: '敬请期待',
      },
      {
        name: '敬请期待',

      },
      {
        name: '实用工具',
        secondaryList: [
          { name: '枝网查重', methods: 'router', link: '/duplicateChecking' },
          { name: '今日溜什么', methods: 'router', link: '/randomVideo' },
          { name: '成分姬', methods: 'router', link: '/ingredientChecking' },
          // { name: "表情包", methods: "router", link: "/emojicollect" },
          { name: '方言词典', methods: 'router', link: '/zhijiangDict' },
           { name: '表情包', methods: 'router', link: '/emojicollect' },
        ],
      },
      {
        name: '敬请期待',
      },
    ]
    }
  },
  methods: {
    selectElementary  (item, index) {
        if (this.$data.phoneMenu.isShowSecondary && this.$data.phoneMenu.navIndex === index) {
          this.$data.phoneMenu.isShowSecondary = false
          return
        }
        if (item.link) {
          this.$data.phoneMenu.isShowSecondary = false
          window.open(item.link)
          return
        }
        this.$data.phoneMenu.navIndex = index
        this.$data.phoneMenu.isShowSecondary = true
    }
    ,
     selectSecondary  (item)  {
      if (item.methods === 'router') {
        window.open( this.$data.toolsUrl + item.link)
      }
    },
    close() {
      this.$router.push({name: 'main'})
    }
  }
}
</script>

<style scoped lang="less">
@import "../../assets/css/keyframes.css";



  .nav-area-phone {
    display: block;
    padding: 20px 5.83vw;
    z-index: 1000;
    width: 80%;

    position: fixed;
    top: 0;
    background-color: #fff;
    .nav-area-header {
      height: 8rem;
      display: flex;
      justify-content: space-between;
    .logo-icon{
  position: absolute;
  width: 20vw;
  height: 20vw;
}
.close {
  position: absolute;
  
  right: 0px;
  width: 8vw;
  height: 8vw;
}
.login-container {
  display: flex;
  justify-items: auto;
  align-items: center;
  padding-top: 218px;
  height: 145px;
  .avatar {
    margin-left: 63px;
    width: 145px;
    height: 145px;
    border-radius: 50%;
    background-color: #9CA3AF;
  }
  .login-option {
    margin-left: 40px;
    font-family: OPPOSans;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 24px;
    color: #9CA3AF;
  }
}

    }
    .nav-area-phone-main {
      position: relative;
      height: 100%;
      .elementary {
        
        .elementary-item-box {
          border-top: 1px solid #d1d5db;
         
        }
        .elementary-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 3rem;
          font-size: 1rem;
           margin-top: 2vh;
           margin-bottom: 2vh;
          img {
            height: 1rem;
          }
        }
        .secondary-item {
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-left: 20vw;
          height: 2.5rem;
          font-size: 1rem;
            margin-top: 1vh;
           margin-bottom: vh;
          border-top: 1px solid #d1d5db;
        }
      }
    }}
</style>