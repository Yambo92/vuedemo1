<template>
  <div>
      <h2>Home</h2>
      <div>
      <span>
           <router-link to="/home/news">News</router-link>
          </span> &nbsp;&nbsp;
          <span>
             <router-link to="/home/messages">Messages</router-link>
          </span>
     
      </div>
        <div>
            <router-view></router-view>
        </div>
    
  </div>
  
</template>

<script>
export default {
  props: {
    msg: String
  }
}
</script>

<style>

</style>