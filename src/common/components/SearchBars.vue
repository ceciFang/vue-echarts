<template>
  <v-card color="#ecf2f9" elevation="0">
    <v-container class="seachHead">
      <v-layout row class="mx-3">
        <v-flex xs8>
          <div class="layout row mt-5">
            <v-subheader class="headline font-weight-black">豆瓣电影</v-subheader>
            <v-text-field
               solo
               label="搜索电影、电视剧、综艺、影人"
               append-icon="search"
               class="mx-5"
            ></v-text-field>
          </div>
        </v-flex>
        <v-flex xs4 class="log mt-5">
          <div class="layout row icon">
            <v-icon size="70px" color="#4d79ff">radio</v-icon>
            <div class="layout column mt-3 title font-weight-black">
              <span>豆瓣</span>
              <span style="margin-top:-1px">2019</span>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
    <v-divider></v-divider>
    <v-container class="seachContent">
      <v-layout row class="mx-3">
        <v-flex class="xs8">
          <div class="menu layout row">
            <ul v-for="(item,index) in titleList" :key="index">
              <li class="name" @click="titleRouter(item)">{{ item.name }}</li>
            </ul>
         </div>
        </v-flex>
        <v-flex class="xs4">
          <div
            class="text-center title font-weight-black mr-3"
            style="margin-top:-16px"
          >年度电影榜单</div>
        </v-flex>
      </v-layout>
   </v-container>
  </v-card>
</template>
<script>
export default {
  data () {
    return {
      titleList: [
        {
          name: '我看',
          path: ''
        },
        {
          name: '影讯&购票',
          path: ''
        },
        {
          name: '选电影',
          path: 'learn'
        }, {
          name: '电视剧',
          path: ''
        },
        {
          name: '排行榜',
          path: ''
        },
        {
          name: '分类',
          path: ''
        },
        {
          name: '影评',
          path: ''
        },
        {
          name: '2019年度榜单',
          path: ''
        },
        {
          name: '2019书影报告',
          path: ''
        }
      ]
    }
  },
  methods: {
    titleRouter (item) {
      this.$router.push({name: item.path})
    }
  }
}
</script>
<style lang="stylus" scoped>
.seachHead
  min-width 1000px
  width 80%
  margin 0 auto
  height 100px
  .log
    .icon
      width 150px
      margin 0 auto
.seachContent
  min-width 1000px
  width 80%
  margin 0 auto
  height 43px
  // display flex
  .menu
    ul
      list-style-type:none;
      float center
      li
        display: block;
        color: #4d79ff;
        font-size: 15px
        cursor pointer
</style>
