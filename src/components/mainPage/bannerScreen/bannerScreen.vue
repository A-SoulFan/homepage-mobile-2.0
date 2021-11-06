<template>
  <div id="topContents">
    <div class="swiper-container banner-top">
      <div class="swiper-wrapper top-wrapper">
        <div class="swiper-slide top-swiper-slide" v-for="item of 3" :key="item">
          <div class="slide-item top-slide-item" >
            <div class="describe">
              <h1>ASOUL FAN</h1>
              <h2>属于一个魂的小城捏</h2>
<!--              <div>按钮</div>-->
            </div>
            <img  class="slide-img" src="../../../assets/images/top/banner.png">
          </div>
        </div>
      </div>
      <div class="swiper-pagination slider-top">
        <div class="slider-top-item" v-for="item of 3" :key="item"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: "bannerScreen",
  mounted() {
    this.topSwiper = new Swiper('.banner-top', {
      loop: true, // 循环模式选项
      autoplay: true,
      // 如果需要分页器
      pagination: {
          el: '.slider-top',
          clickable: true,
          type: 'custom',
          renderCustom(swiper, current) {
            const pagination = document.querySelectorAll('.slider-top-item')
            // 判断是不是激活焦点，是的话添加active类
            pagination.forEach(item => {
              if (pagination[current - 1] === item) {
                item.classList.add('slider-top-item-active')
              } else {
                item.classList.remove('slider-top-item-active')
              }
            })
          }
        }
      })
    }
  }
</script>

<style lang="less" scoped>
#topContents{
  position: relative;
  width: 100vw;
  font-family: FZLTCHJW, serif;
}
.banner-top {
  position: relative;
  width: 100vw;
  height: 624px;
  .top-swiper-slide {
    .top-slide-item {
      width: 100vw;
      height: 100%;
      display: flex;
      justify-content: space-between;
      .slide-img {
        filter: brightness(0.6);
      }
      .describe {
        position: absolute;
        top:300px;
        left: 122px;
        z-index: 10;
        & h1 {
          font-family: Montserrat;
          font-size: 40px;
          font-weight: 350;
          line-height: 49px;
          letter-spacing: 0.11em;
          color: #FFFFFF;
        }
        & h2 {
          font-size: 25px;
          font-family: Montserrat;
          font-weight: 400;
          line-height: 50px;
          color: #FFFFFF;
        }
        & div {
          width: 240px;
          height: 72px;
          text-align: center;
          font-family: OPPOSans;
          font-weight: 500;
          font-size: 36px;
          line-height: 72px;
          color: black;
          background: #FFFFFF;
          border-radius: 2px;
        }
      }
    }
  }
}
.slider-top {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 42px;
}
.slider-top-item {
  margin-right: 30px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.65);
}
.slider-top-item-active {
  background-color: #FC996E;
}


</style>
