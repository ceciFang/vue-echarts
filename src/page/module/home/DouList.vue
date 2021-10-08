<template>
  <div class="douList">
    <v-subheader class="subheader">
      <span class="title">热门豆列</span>
    </v-subheader>
    <v-divider class="mb-3"></v-divider>
    <ul v-for="(item,index) in douList.slice(0,2)" :key="index" class="nameList">
      <li>
        <!-- <span>{{ index+1 }}</span> -->
        <span class="name">{{ item.name }}</span>
        <span class="num">{{ item.num }}推荐</span>
      </li>
      <v-divider class="divider my-3"></v-divider>
    </ul>
  </div>
</template>
<script>
import { hhapi } from '../../../api/index'
export default {
  data () {
    return {
      douList: []
      // douList: [
      //   {
      //     name: '我的天才女友',
      //     num: 405,
      //     path: ''
      //   },
      //   {
      //     name: '逃离比勒陀利亚',
      //     num: 405,
      //     path: ''
      //   },
      //   {
      //     name: '与爱同居之永恒的爱',
      //     num: 405,
      //     path: ''
      //   },
      //   {
      //     name: '热带雨',
      //     num: 4035,
      //     path: ''
      //   },
      //   {
      //     name: '德菲因与卡罗尔：反叛缪斯',
      //     num: 405,
      //     path: ''
      //   },
      //   {
      //     name: '切尔诺贝利.禁区电影版',
      //     num: 405,
      //     path: ''
      //   },
      //   {
      //     name: '夕雾公园',
      //     num: 405,
      //     path: ''
      //   },
      //   {
      //     name: '真相',
      //     num: 405,
      //     path: ''
      //   },
      //   {
      //     name: '伊丽莎白不见了',
      //     num: 405,
      //     path: ''
      //   },
      //   {
      //     name: '窈窕淑男的日记',
      //     num: 405,
      //     path: ''
      //   }
      // ]
    }
  },
  mounted () {
    this.douLists()
  },
  methods: {
    douLists () {
      console.log('========>')
      hhapi.getDouList(null, true).then(response => {
        console.log(response, '获取数据')
        if (response && response.status === 200) {
          this.douList = response.data
        } else {
          console.log('Request Error!')
          console.log(response)
        }
      }).catch(error => {
        console.log(error.message)
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.douList
  .subheader
    .title
      color: #000000
    .moreReceived
      color: #4d94ff
  .nameList
    list-style-type: none
    .name
      color: #4d94ff
      font-size: 15px
      cursor: pointer;
      &:hover  // 鼠标停留改变字体颜色
        color: #ffffff;
        background-color: #2966a3
    .num
      color: #5c6670
      font-size: 13px
      float:right;  // 靠右边

</style>
