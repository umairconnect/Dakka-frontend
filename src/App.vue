<template>
  <div id="app">
      <header-area></header-area>

      <couses-list />

      <!--<router-view/>-->
  </div>
</template>

<style lang="scss">
    @import "~bootstrap/scss/bootstrap";
    @import "assets/scss/style";
</style>
<script>

import HeaderArea from './components/HeaderArea'
import CousesList from './components/Courses'

export default {
  name: 'App',
  components: {
      HeaderArea,
      CousesList
  }
}
</script>
