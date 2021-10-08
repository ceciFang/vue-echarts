<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex d-flex xs12 sm8>
        <v-layout row wrap>
          <v-flex d-flex>
            <movie-bar></movie-bar>
          </v-flex>
          <v-flex d-flex>
            <v-layout row wrap>
              <v-flex d-flex xs12><teleplay-bar></teleplay-bar></v-flex>
              <v-flex d-flex xs12><raoul-ruiz-bar></raoul-ruiz-bar></v-flex>
              <v-flex d-flex xs12><hot-recommend></hot-recommend></v-flex>
              <v-flex d-flex xs12><favorite-film-review></favorite-film-review></v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex d-flex xs12 sm4>
        <v-layout column>
          <div>
            <v-sheet
              class="d-flex"
              color="#ecf2f9"
              height="50"
            >
              <v-card-text style="color:#4d79ff;">豆瓣电影评分八问</v-card-text>
            </v-sheet>
          </div>
          <received-list></received-list>
          <dou-list></dou-list>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import AppBar from '../../common/components/AppBars.vue'
import MovieBar from '../module/home/MovieBar'
import TeleplayBar from '../module/home/TeleplayBar.vue'
import RaoulRuizBar from '../module/home/RaoulRuizBar.vue'
import ReceivedList from '../module/home/receivedList.vue'
import DouList from '../module/home/DouList.vue'
import HotRecommend from '../module/home/HotRecommend.vue'
import FavoriteFilmReview from '../module/home/FavoriteFilmReview.vue'
export default {
  components: {
    MovieBar,
    TeleplayBar,
    RaoulRuizBar,
    ReceivedList,
    DouList,
    HotRecommend,
    FavoriteFilmReview,
    AppBar
  },
  data: () => ({
  })
}
</script>
<style lang="stylus" scoped>
  // .container
    // width 80%
    // height 100%
    // background-color #9fbfdf
</style>
