<template>
<div>
  <ul>
      <li v-for="(m, index) in messages" :key="m.id">
         <router-link :to="`/home/messages/detail/${m.id}`">{{m.title}}</router-link>
         --<button @click="pushShow(m.id)">push查看</button>
         --<button @click="replaceShow(m.id)">replace查看</button>
      </li>
  </ul>
  <button @click="$router.back()">回退</button>
  <hr>
  <router-view></router-view>
</div>

</template>

<script>
export default {
    data() {
        return {
            messages: []
        }
    },
    mounted() {
        setTimeout(() => {
            const messages = [
                {id: 1, title: 'message001'},
                {id: 2, title: 'message002'},
                {id: 3, title: 'message003'},
                {id: 4, title: 'message004'},
            ]
            this.messages = messages
        } ,2000)
    },
    methods: {
        pushShow(id){
            this.$router.push(`/home/messages/detail/${id}`)
        },
        replaceShow(id){
            this.$router.replace(`/home/messages/detail/${id}`)
        }
    },
}
</script>

<style>
 .router-link-active{
      color: #ff5168 !important
    }
</style>