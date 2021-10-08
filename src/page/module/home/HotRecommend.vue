<template>
  <v-container>
    <v-card-text>
      <v-row>
        <span>热门推荐</span>
        <v-spacer></v-spacer>
         <span>{{ carouselModel +1}}</span>
          <span>/</span>
          <span>{{slides.length }}</span>
          <v-avatar color="blue darken-3" size="20" class="ml-3" style="cursor: pointer;" @click="carouselModel--">
            <v-icon color="white">keyboard_arrow_left</v-icon>
          </v-avatar>
          <v-avatar color="blue darken-3" size="20" class="mx-2" style="cursor: pointer;"  @click="carouselModel++">
            <v-icon color="white">keyboard_arrow_right</v-icon>
          </v-avatar>
      </v-row>
    </v-card-text>
    <v-divider class="mb-4"></v-divider>
    <v-row>
      <v-carousel
        cycle
        height="300"
        hide-delimiter-background
        :hide-delimiters="true"
        :show-arrows="false"
         v-model="carouselModel"
      >
        <v-carousel-item
          v-for="(slide, i) in slides"
          :key="i"
        >
          <v-sheet
            color="#ebf0fa"
            height="100%"
          >
            <v-row
              class="fill-height"
              justify="center"
            >
              <v-col lg="6">
                <v-img :src="slide.coverSrc" height="300"></v-img>
              </v-col>
              <v-col>
                <v-card-title class="mt-7">
                  <span style="color: #000000;">{{ slide.coverTitle }}</span>
                </v-card-title>
                <v-card-text>
                  <span style="color: #607D8B;">{{ slide.coverText }}</span>
                </v-card-text>
              </v-col>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      slides: [
        {
          coverSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          coverTitle: '《西部世界》第三部正式预告',
          coverText: '埃文.蕾切尔.伍德、“小粉”亚纶.保尔主演，3月15日HBO播出'
        },
        {
          coverSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          coverTitle: 'Whitehaven Beach',
          coverText: 'Whitsunday Island, Whitsunday Islands'
        },
        {
          coverSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          coverTitle: 'Unlimited music now',
          coverText: 'Listen to your favorite artists and albums whenever and wherever, online and offline.'
        },
        {
          coverSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          coverTitle: 'My Music',
          coverText: '1,000 miles of wonder'
        }
      ],
      carouselModel: 0
    }
  }
}
</script>
