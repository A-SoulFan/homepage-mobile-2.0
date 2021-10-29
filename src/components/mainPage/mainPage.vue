<template>
  <div>
    <nav-bar></nav-bar>
    <banner-screen></banner-screen>
    <popular-video></popular-video>
    <toolkit></toolkit>
    <about-us></about-us>
  </div>
</template>

<script type="text/ecmascript-6">
import BannerScreen from '../bannerScreen/bannerScreen'
import NavBar from '../navBar/navBar'
import PopularVideo from '../popularVideo/popularVideo'
import AboutUs from '../aboutUs/aboutUs'
import Toolkit from '../toolkit/toolkit'
export default {
  name: 'mainPage',
  components: {Toolkit, AboutUs, PopularVideo, NavBar, BannerScreen}
}
</script>

<style scoped lang="less">

</style>
