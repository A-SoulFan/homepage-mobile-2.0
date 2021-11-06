<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>

export default {

  beforeCreate() {
    document.getElementsByTagName("body")[0].setAttribute("style", "margin:0");
  },
  name: 'App'
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color:transparent;
}
</style>
