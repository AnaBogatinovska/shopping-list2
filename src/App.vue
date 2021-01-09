<template>
  <div id="app">
    <LandingPage/>
    <router-view/>
  </div>
</template>

<script>
import LandingPage from "./pages/LandingPage.vue"


export default {
  components: { LandingPage },
  name: 'App',
}
</script>

<style>
</style>
