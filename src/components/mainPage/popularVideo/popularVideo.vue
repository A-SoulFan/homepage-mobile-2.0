<template>
    <div id="popularVideo">
        <div class="title">热门内容</div>
        <div class="section" v-for="item of list" :key="item.id">
            <div class="section-headline">
                <div class="section-title">{{ item.type }}</div>
                <div class="section-more">更多></div>
            </div>
            <div class="section-video">
                <div class="video-container" v-for="video_info of video_list" :key="video_info.name">
                    <div class="video">
                        <img class="video_card-img" :src="video_info.pic" :alt="video_info.name"
                             @click="openWindow(video_info.url)"/>
                    </div>
                    <div class="section-video-title">{{ stringFold(video_info.name, 12) }}</div>
                    <div class="section-video-hot">
                        <div class="section-video-hot-icon">
                            <svg viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.46496 10.4701L4.00162 7.80178C2.76697 9.73893 1.82996 12.0233 1.82996 14.4951C1.82996 16.6301 2.67808 18.6777 4.18774 20.1873C5.69742 21.697 7.74494 22.5451 9.87996 22.5451C12.015 22.5451 14.0625 21.697 15.5722 20.1873C17.0818 18.6777 17.93 16.6301 17.93 14.4951C17.93 7.25011 10.685 1.61511 10.685 1.61511L7.46496 10.4701Z"
                                      stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="section-video-hot-num">{{video_info.view}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios';

export default {
    name: 'popularVideo',
    data() {
        return {
            list: [
                {id: 1, type: '切片', url: ''},
                {id: 2, type: '二创', url: ''},
            ],
            video_list: []
        }
    },
    mounted() {
        axios.get("https://api.asoul.cloud:8000/getBV?page=1&tag_id=0&sort=4&part=0&rank=0&ctime=0&type=1")
            .then(
                res => {
                    let {data} = res;
                    this.$data.video_list = data.map(element => {
                        return {
                            name: element.title,
                            pic: element.pic,
                            hot: "",
                            url: "https://www.bilibili.com/video/" + element.bvid,
                            view: element.stat_view
                        }
                    }).slice(0, 4);
                }
            );
    },
    methods: {
        stringFold(str, maxLength) {
            if (str.length <= maxLength) return str;
            else return str.substring(0, maxLength) + "…"

        },
        openWindow(str) {
            window.open(str);
        }
    }
}
</script>

<style scoped lang="less">
#popularVideo {
  padding: 46px 63px 0px 63px;
  height: 100%;
}
.title {
  font-family: Microsoft YaHei;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 63px;
}
.section {
  margin: 20px 0px;
  .section-headline {
    margin: 20px 0px;
    display: flex;
    justify-content: space-between;
    .section-title {
      font-family: OPPOSans;
      font-size: 36px;
    }
    .section-more {
      font-family: OPPOSans;
      font-size: 12px;
    }
  }
  .section-video {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    .video-container {
      margin-bottom: 51px;
      .video_card-img {
        width: 460px;
        height: 263.12px;
        background: #182233;
        border-radius: 4px;
      }
      .section-video-title {
        margin-top: 20px;
        margin-bottom: 5.62px;
        font-family: OPPOSans;
        font-weight: 400;
        font-size: 36px;
        line-height: 47px;
      }
      .section-video-hot {
        display: flex;
        justify-items: left;
        .section-video-hot-icon {
          margin-right: 8.51px;
          width: 24px;
          height: 24px;
        }
        .section-video-hot-num {
          font-family: OPPOSans;
          font-size: 18px;
          line-height: 40px;
          color: #6B7280;
        }
      }
    }
  }
}
</style>
