<template>
  <div class="recivedList">
    <v-subheader class="subheader">
      <span class="title">一周口碑榜</span>
      <span class="moreReceived ml-3">更多榜单</span>
    </v-subheader>
    <v-divider class="mb-3"></v-divider>
    <ul v-for="(item,index) in recivedList" :key="index" class="nameList">
      <li>
        <span>{{ index+1 }}</span>
        <span class="name">{{ item.name }}</span>
      </li>
      <v-divider class="divider my-3"></v-divider>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      recivedList: [
        {
          name: '我的天才女友',
          path: ''
        },
        {
          name: '逃离比勒陀利亚',
          path: ''
        },
        {
          name: '与爱同居之永恒的爱',
          path: ''
        },
        {
          name: '热带雨',
          path: ''
        },
        {
          name: '德菲因与卡罗尔：反叛缪斯',
          path: ''
        },
        {
          name: '切尔诺贝利.禁区电影版',
          path: ''
        },
        {
          name: '夕雾公园',
          path: ''
        },
        {
          name: '真相',
          path: ''
        },
        {
          name: '伊丽莎白不见了',
          path: ''
        },
        {
          name: '窈窕淑男的日记',
          path: ''
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
.recivedList
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
      &:hover  // 鼠标停留改变字体颜色
        color: #ffffff;
        background-color: #2966a3
</style>
