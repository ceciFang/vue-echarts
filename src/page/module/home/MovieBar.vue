<template>
  <v-container class="movieBar">
    <!-- <v-card> -->
      <v-card-text>
        <v-row >
          <ul class="movieType" v-for="(item,index) in  moviesTitle" :key="index">
            <li class="movieType name">{{ item.name }}</li>
          </ul>
          <v-spacer></v-spacer>
          <span>更多</span>
        </v-row>
      </v-card-text>
      <v-divider></v-divider>
      <v-layout row wrap >
        <v-flex xs3 v-for="(item,index) in movies" :key="index">
        <cover-card :coverData="item"></cover-card>
        </v-flex>
      </v-layout>
    <!-- </v-card> -->
  </v-container>
</template>
<script>
import CoverCard from '../../../common/components/CoverCard.vue'
export default {
  components: {
    CoverCard
  },
  data () {
    return {
      moviesTitle: [
        {
          name: '最近热门电影',
          path: ''
        },
        {
          name: '热门',
          path: ''
        },
        {
          name: '最新',
          path: ''
        },
        {
          name: '豆瓣高分',
          path: ''
        },
        {
          name: '冷门佳片',
          path: ''
        },
        {
          name: '华语',
          path: ''
        },
        {
          name: '欧美',
          path: ''
        },
        {
          name: '韩国',
          path: ''
        },
        {
          name: '日本',
          path: ''
        }
      ],
      movies: [
        {
          name: '银行家',
          status: '',
          src: require('@/assets/picture/n7.jpg')
        },
        {
          name: '积极的体质',
          status: '1',
          src: require('@/assets/picture/n7.jpg')
        },
        {
          name: '你的名字',
          status: '2',
          src: require('@/assets/picture/n7.jpg')
        },
        {
          name: '请回答1988',
          status: '2',
          src: require('@/assets/picture/n7.jpg')
        },
        {
          name: '副本：义体置换',
          status: '1',
          src: require('@/assets/picture/n7.jpg')
        },
        {
          name: '狗不穿裤子',
          status: '',
          src: require('@/assets/picture/n7.jpg')
        },
        {
          name: '小妇人',
          status: '1',
          src: require('@/assets/picture/n7.jpg')
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
.movieBar
  .movieType
    list-style-type: none
    display block
    font-size 13px
    cursor pointer
  .movieType:nth-child(1) // 编辑指定元素样式
    .name
      color #000000
  .movieType:nth-child(2)
    .name
      color #000000

</style>>
