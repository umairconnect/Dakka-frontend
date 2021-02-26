<template>
  <div id="app">
      <header-area></header-area>
      <courses-list v-if="this.$route.name == 'courses'" />
      <register v-if="this.$route.name == 'register'"></register>
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
import Register from './components/register'



export default {
  name: 'App',
  components: {
      HeaderArea,
      CoursesList,
      Register,
      FooterArea
  }
}
</script>
