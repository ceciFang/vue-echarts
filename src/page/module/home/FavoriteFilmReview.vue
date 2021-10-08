<template>
  <v-container class="filemReview">
    <v-card-text>
      <v-row>
        <span>最受欢迎的影评</span>
        <span class="mx-3" style="color:#4d79ff;cursor: pointer;">更多热门影评</span>
        <span style="color:#4d79ff;cursor: pointer;">新片影评</span>
      </v-row>
    </v-card-text>
    <!-- <v-divider></v-divider> -->
    <template>
    <v-list three-line>
      <template v-for="(item, index) in reviewList">
        <v-divider
          :key="index"
        ></v-divider>

        <v-list-item
          :key="item.title"

        >
          <v-list-item-avatar>
            <v-img :src="item.coverPath"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>
              <span style="color: #4d94ff">{{ item.title }}</span>
            </v-list-item-title>
            <v-list-item-subtitle >
              <span>{{ item.userName }}</span>
              <span>评论</span>
              <span>{{ item.filmName }}</span>
              <v-icon></v-icon>
              <br/>
              <span>{{ item.filmText }}</span>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
</template>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      reviewList: [
        {
          title: '出于不忿，我打七分',
          userName: '我愿是一块红烧肉',
          filmName: '《大赢家》',
          grade: 5,
          filmText: '七七八八',
          coverPath: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
        },
        {
          title: '吃，被吃，这都不是问题',
          userName: '朋氪雷',
          filmName: '《饥饿台》',
          grade: 3,
          filmText: '哈哈',
          coverPath: ''
        },
        {
          title: '全景电影的可能与不可能',
          userName: '皮德帕( •̀ ω •́ )y夫斯基',
          filmName: '《大象席地而坐》',
          grade: 8,
          filmText: '横额还能',
          coverPath: ''
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
// .filemReview
</style>>
