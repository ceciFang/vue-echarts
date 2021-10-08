<template>
  <v-app id="app" >
    <div class="headTitle">
      <app-bars></app-bars>
      <search-Bar></search-Bar>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </v-app>
</template>

<script>
import AppBars from './common/components/AppBars.vue'
import SearchBar from './common/components/SearchBars.vue'
export default {
  components: {
    AppBars,
    SearchBar
  },
  name: 'App'

}
</script>

<style >
#app {
  /* background-color: #2c3e50; */
  overflow: auto;
  height: calc(100vh - 0px);
}
.headTitle {
  min-width: 1000px;
}
.content {
  min-width: 1000px;
  height: 100%;
  width: 80%;
  margin: 0 auto ;
}
</style>
