<template>
  <div class="course-card-page">
    <v-hover>
      <v-card
        flat
        tile
        slot-scope="{ hover }"
        :class="`elevation-${hover ? 12 : 2}`"
        class="course-card"
      >
        <v-img :src="coverData.src" height="160">
        </v-img>
        <v-card-text>
          <v-avatar tile color="teal darken-1" size="25px">
            <span style="font-size:15px;color:#ffffff">新</span>
          </v-avatar>
          <span style="font-size:15px;">{{ coverData.name }}</span>
        </v-card-text>
      </v-card>
    </v-hover>
  </div>
</template>

<script>
export default {
  props: ['coverData'],
  data () {
    return {
      // src: '../../assets/picture/n1.jpg'
    }
  }
}
</script>

<style lang="stylus" scoped>
.course-card-page
  margin 0 10px 25px 0 // 右间距为10px 下间距为25px
  .course-card
    cursor pointer
    .course-card-title
      font-size 17px
      margin 3px 0 10px 7px
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
    .course-card-text
      font-size 13px
      margin 0 0 5px 7px
</style>
