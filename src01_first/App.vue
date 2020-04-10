<template>
  <div>
    <h1>App</h1>
    <img src="./assets/logo.png" alt="">
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWrold'
export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
    .router-link-active{
      color: #ff5168 !important
    }
</style>
