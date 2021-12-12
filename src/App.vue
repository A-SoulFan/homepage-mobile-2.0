<template>
  <div id="app">
      <keep-alive key="xx" >
        <router-view key="main" v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view key="name" v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      transitionName: '',
      navList : [
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
        ],
      },
      {
        name: '敬请期待',
      },
    ]
    }
  },
  watch: {
    $route(to, from) {
      if(to.meta.index > from.meta.index) {
        this.transtionName = 'slide-left'
      } else {
        this.transitionName = 'slide-right'
      }
    }
  },


  beforeCreate() {
    document.getElementsByTagName("body")[0].setAttribute("style", "margin:0");
  },
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color:transparent;
}
.slide-right-enter {
  opacity: 0;
  transition: all 0.5s;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-enter-active {
  opacity: 0;
  transition: all 0.5s;
  transform: translate3d(100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transition: all 0.5s;
  transform: translate3d(-100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transition: all 0.5s;
  transform: translate3d(-100%, 0, 0);
}
.slide-left-enter-active {
  opacity: 0;
  transition: all 0.5s;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transition: all 0.5s;
  transform: translate3d(-100%, 0, 0);
}
</style>
