<template>
  <div>
    <v-app-bar
      color="blue-grey darken-2"
      dense
      dark
    >
    <v-row>
      <ul v-for="(item,index) in titleList" :key="index" class="topnav my-5">
        <li class="topnav name">{{item.name}}</li>
      </ul>

      <v-spacer></v-spacer>
      <div class="topnavRight my-2 mr-10">
        <span class="topnavRight name mr-2">下载豆瓣客户端</span>
        <span class="topnavRight name mr-2">提醒</span>
        <span class="topnavRight name mr-2">豆邮</span>
        <!-- <span class="topnavRight name" @click="login">登录</span> -->
        <span class="topnavRight userInfo">{{ userInfo.name }}</span>
        <span class="topnavRight userInfo">({{ userInfo.id }})</span>
         <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn
              icon
              text
              dark
              v-on="on"
            >
              <v-avatar size="36px">
                <img
                  :src="userInfo.img"
                  class="topnavRight img"
                >
              </v-avatar>
            </v-btn>
          </template>
          <v-list>
            <v-list-item class="" @click="logOut">
              <v-list-item-title>退出</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <!-- <v-avatar size="36px">
          <img
            :src="userInfo.img"
            class="topnavRight img"
          >
        </v-avatar> -->
      </div>
    </v-row>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  data () {
    return {
      titleList: [
        {
          name: '豆瓣',
          path: ''
        },
        {
          name: '读书',
          path: ''
        },
        {
          name: '电影',
          path: ''
        },
        {
          name: '音乐',
          path: ''
        },
        {
          name: '同城',
          path: ''
        },
        {
          name: '小组',
          path: ''
        },
        {
          name: '阅读',
          path: ''
        },
        {
          name: 'FM',
          path: ''
        },
        {
          name: '时间',
          path: ''
        },
        {
          name: '豆品',
          path: ''
        },
        {
          name: '更多',
          path: ''
        }
      ],
      userInfo: {
        name: 'ceci fang',
        id: 'F1334081',
        img: 'https://cdn.vuetifyjs.com/images/john.jpg',
        uut: 123242424234
      }
    }
  },
  created () {
  //   this.userInfo = this.$cookies.get('userInfo')
  //   console.log(this.userInfo, 'cookies 用户信息')
  },
  methods: {
    logOut (e) {
      this.$router.push({name: 'login'})
    }
  }
}
</script>
<style lang="stylus" scoped>
.topnav
  list-style-type: none;
  overflow: hidden;
  .name
    display: block;
    cursor: pointer;
    font-size: 12px;
.topnavRight
  .name
    font-size: 12px;
    cursor: pointer;
  .img
    cursor pointer;

</style>
