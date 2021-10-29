<template>
  <div id="app">
    <main-page/>
  </div>
</template>

<script>

import MainPage from './components/mainPage/mainPage'

export default {

  beforeCreate() {
    document.getElementsByTagName("body")[0].setAttribute("style", "margin:0");
  },
  name: 'App',
  components: {
    MainPage,
  },
  data() {
    return {
      screen: {componentName: 'memberScreen', name: '团员介绍'}
    }
  },
  provide() {
    return {
      pageScreen: this.screen
    }
  },
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color:transparent;
}
</style>
