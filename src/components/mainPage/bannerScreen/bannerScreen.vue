<template>
<div id="topContents">
  <div class="swiper-container banner-top">
    <div class="swiper-wrapper top-wrapper">
      <div class="swiper-slide top-swiper-slide" v-for="item of list" :key="item">
        <div class="slide-item top-slide-item">
          <a :href=item.href style="text-decoration:none;">
            <img :src="processUrl(item.img)">
          </a>
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
  data() {
    return {
      list: [{
          id: 1,
          name: "维基",
          img: "wiki",
          href: "https://wiki.asoulfan.com/zh/home"
        },
        {
          id: 2,
          name: "ASDB",
          img: "asdb",
          href: "https://livedb.asoulfan.com/web/index.html#/./index"
        },
        {
          id: 3,
          name: "工具",
          img: "tool",
          href: "https://tools.asoulfan.com/#/tools/index"
        }
      ]
    }
  },
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
  },
  methods: {
    processUrl(img) {
      return require(`../../assets/images/bannerScreen/${img}.jpg`)
    }
  }

}
</script>

<style lang="less" scoped>
#topContents {
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

      img {
        height: 624px;
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
