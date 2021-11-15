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
      transitionName: ''
    }
  },
  watch: {
    $route(to, from) {
      if(to.meta.index > from.meta.index) {
        this.transitionName = 'slide-left'
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
