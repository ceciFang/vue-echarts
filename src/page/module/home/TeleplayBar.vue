<template>
  <v-container class="teleplayBar">
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
          name: '最近热门电视剧',
          path: ''
        },
        {
          name: '热门',
          path: ''
        },
        {
          name: '国产剧',
          path: ''
        },
        {
          name: '综艺',
          path: ''
        },
        {
          name: '美剧',
          path: ''
        },
        {
          name: '日剧',
          path: ''
        },
        {
          name: '韩剧',
          path: ''
        },
        {
          name: '日本动画',
          path: ''
        },
        {
          name: '记录片',
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
          src: require('@/assets/picture/n1.jpg')
        },
        {
          name: '你的名字',
          status: '2',
          src: require('@/assets/picture/n4.jpg')
        },
        {
          name: '请回答1988',
          status: '2',
          src: require('@/assets/picture/n6.jpg')
        },
        {
          name: '副本：义体置换',
          status: '1',
          src: require('@/assets/picture/n2.jpg')
        },
        {
          name: '狗不穿裤子',
          status: '',
          src: require('@/assets/picture/n1.jpg')
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
.teleplayBar
  .movieType
    list-style-type: none
    display block
    font-size 13px
  .movieType:nth-child(1) // 编辑指定元素样式
    .name
      color #000000
  .movieType:nth-child(2)
    .name
      color #000000
</style>>
