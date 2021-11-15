<template>
  <div id="toolkit">
    <div class='title'>常用工具</div>
    <div class="tool">
      <div class="tool-item" v-for="item of list" :key="item.id" @click="jumpToAsfTool(item)">
        <div class="tool-icon">
          <img :src="processUrl(item.icon)">
        </div>
        <div class="tool-name">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'toolkit',
  data() {
    return {
      list: [
        {id: 1,icon: 'book', name: '方言词典', postfix: ''},
        {id: 2,icon: 'cross', name: '成分姬',postfix: 'part'},
        {id: 3,icon: 'cube', name: '枝网查重', postfix: 'checkArticle'},
        {id: 4,icon: 'emoji', name: '表情包', postfix: 'emoji'},
        {id: 5,icon: 'linechart', name: '数据分析', postfix: 'fanQuery'},
        {id: 6,icon: 'transcube', name: '今天溜什么', postfix: 'randomVideo'}
      ]
    }
  },
  methods: {
    processUrl(icon) {
      return require(`../../../assets/images/toolkit/${icon}.svg`)
    },
    jumpToAsfTool() {

    }
  }
}
</script>

<style scoped lang="less">
#toolkit {
  margin-bottom: 78px;
  padding: 46px 63px 0px 63px;
  height: 100%;
}
.title {
  margin-top: 20px;
  margin-bottom: 37px;
  font-family: Microsoft YaHei;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 63px;

}
.tool {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  .tool-item {
    margin-bottom: 49px;
    width: 273px;
    height: 273px;
    background: #182233;
    border-radius: 10px;
    .tool-icon {
      margin: 0 auto;
      margin-top: 35px;
      margin-bottom: 14px;
      width: 155px;
      height: 155px;
    }
    .tool-name {
      margin:  0 auto;
      text-align: center;
      font-family: OPPOSans;
      font-size: 36px;
      color: #F3F4F6;

    }
  }
}
</style>
