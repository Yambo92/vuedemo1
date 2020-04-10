<template>
  <div>
    <div v-if="!repoName">loading...</div>
    <div v-else>most star repo is 
      <a :href="repoUrl">{{ repoName }}</a>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "App",
  data() {
    return {
        repoName: '',
        repoUrl: ''
    };
  },
mounted() {
  //使用vue-resource发送请求
  const url = 'https://api.github.com/search/repositories?q=r&sort=stars'
  // this.$http.get(url).then(response => {
  //   const result = response.data
  //   const {name, html_url} = result.items[0]
  //   this.repoUrl = html_url
  //   this.repoName = name
  // }).catch(error => {
  //   alert('error')
  // })
  //使用axios发送请求
  axios.get(url).then(response => {
    const result = response.data
    const {name, html_url} = result.items[0]
    this.repoUrl = html_url
    this.repoName = name
  }).catch(error => {
    alert('error')
  })
},
};
</script>

<style scoped>


</style>
