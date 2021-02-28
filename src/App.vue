<template>
  <div id="app">
      <header-area></header-area>
      <courses-list v-if="this.$route.name == 'courses'" />
      <course-view v-if="this.$route.name == 'course-view'"></course-view>
      <register v-if="this.$route.name == 'register'"></register>
      <trainer-list v-if="this.$route.name == 'trainer'"></trainer-list>
      <footer-area></footer-area>

      <!--<router-view/>-->
  </div>
</template>

<style lang="scss">
    @import "~bootstrap/scss/bootstrap";
    @import "assets/scss/variable";
    @import "assets/scss/style";

</style>


<script>

import HeaderArea from './components/HeaderArea'
import FooterArea from './components/FooterArea'
import CoursesList from './components/Courses'
import CourseView from "./components/CourseView"
import TrainerList from './components/Trainers'
import Register from './components/register'



export default {
  name: 'App',
  components: {
      HeaderArea,
      CoursesList,
      CourseView,
      Register,
      FooterArea,
      TrainerList
  }
}
</script>
