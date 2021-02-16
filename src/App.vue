<template>
  <div id="app">
      <header-area></header-area>
      <router-view/>
  </div>
</template>

<style lang="scss">
    @import "~bootstrap/scss/bootstrap";
    @import "assets/scss/style";
</style>
<script>
import HeaderArea from './components/HeaderArea'

export default {
  name: 'App',
  components: {
      HeaderArea
  }
}
</script>
