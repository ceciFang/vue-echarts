<template>
  <v-container class="raoulRuizBar">
    <!-- <v-card> -->
      <v-card-text>
        <v-row >
          <ul class="movieType" v-for="(item,index) in  moviesTitle" :key="index">
            <li class="movieType name">{{ item.name }}</li>
          </ul>
          <v-spacer></v-spacer>
          <span>1</span>
          <span>/</span>
          <span>2</span>
          <v-avatar color="blue darken-3" size="20" class="ml-3" style="cursor: pointer;">
            <v-icon color="white">keyboard_arrow_left</v-icon>
          </v-avatar>
          <v-avatar color="blue darken-3" size="20" class="mx-2">
            <v-icon color="white">keyboard_arrow_right</v-icon>
          </v-avatar>
        </v-row>
      </v-card-text>
      <v-divider></v-divider>
      <v-layout row wrap >
        <div v-for="(item,index) in movies" :key="index">
          <cover-card :coverData="item"></cover-card>
        </div>
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
          name: '即将上映',
          path: ''
        },
        {
          name: '即将上映',
          path: ''
        },
        {
          name: '全部上映',
          path: ''
        }
      ],
      movies: [
        {
          name: '银行家',
          status: '',
          src: require('@/assets/picture/n1.jpg')
        },
        {
          name: '积极的体质',
          status: '1',
          src: require('@/assets/picture/n4.jpg')
        },
        {
          name: '你的名字',
          status: '2',
          src: require('@/assets/picture/n7.jpg')
        },
        {
          name: '请回答1988',
          status: '2',
          src: require('@/assets/picture/n1.jpg')
        },
        {
          name: '副本：义体置换',
          status: '1',
          src: require('@/assets/picture/n6.jpg')
        },
        {
          name: '狗不穿裤子',
          status: '',
          src: require('@/assets/picture/n7.jpg')
        },
        {
          name: '小妇人',
          status: '1',
          src: require('@/assets/picture/n8.jpg')
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
.raoulRuizBar
  .movieType
    list-style-type: none
    display block
    font-size 13px
    color: #4d94ff
  .movieType:nth-child(1) // 编辑指定元素样式
    .name
      color #000000
</style>>
