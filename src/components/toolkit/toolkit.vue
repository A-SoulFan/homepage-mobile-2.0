<template>
<div id="toolkit">
  <div class='title'>常用工具</div>
  <div class="tool">
    <div class="tool-item" v-for="item of list" :key="item.id">
      <a :href=item.href style="text-decoration:none;">
        <div class="tool-item">
          <div class="tool-icon">
            <img :src="processUrl(item.icon)">
          </div>
          <div class="tool-name">{{item.name}}</div>
        </div>
      </a>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'toolkit',
  data() {
    return {
      list: [{
          id: 1,
          icon: 'book',
          name: '方言词典',
          href: 'https://tools-demo.asoulfan.com/zhijiangDict'
        },
        {
          id: 2,
          icon: 'cross',
          name: '成分姬',
          href: 'https://tools-demo.asoulfan.com/ingredientChecking'
        },
        {
          id: 3,
          icon: 'cube',
          name: '枝网查重',
          href: 'https://tools-demo.asoulfan.com/duplicateChecking'
        },
        {
          id: 4,
          icon: 'transcube',
          name: '今天溜什么',
          href: 'https://tools-demo.asoulfan.com/randomVideo'
        }

        // 暂时未有相关网站，故不添加
        // {id: 6,icon: 'emoji', name: '表情包'}, href: '',
        // {id: 5,icon: 'linechart', name: '数据分析', href: ''},
      ]
    }
  },
  methods: {
    processUrl(icon) {
      return require(`../../assets/images/toolkit/${icon}.svg`)
    }
  }
}
</script>

<style lang="less" scoped>
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
    margin-bottom: 80px;
    width: 450px;
    height: 400px;
    background: #182233;
    border-radius: 30px;

    .tool-icon {
      margin: 0 auto;
      margin-top: 40px;
      margin-bottom: 14px;
      width: 255px;
      height: 255px;
    }

    .tool-name {
      margin: 0 auto;
      text-align: center;
      font-family: OPPOSans;
      font-size: 59px;
      color: #F3F4F6;

    }
  }
}
</style>
