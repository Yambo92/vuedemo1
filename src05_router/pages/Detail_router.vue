<template>
  <ul>
      <li> ID: {{$route.params.id}}</li>
      <li> TITLE: {{messageDetail.title}}</li>
      <li> CONTENT: {{messageDetail.content}}</li>
  </ul>
</template>

<script>
const messageDetails = [
      {id: 1, title: 'message001', content: 'message 001 content001'},
    {id: 2, title: 'message002', content: 'message 002 content002'},
    {id: 3, title: 'message003', content: 'message 003 content003'},
    {id: 4, title: 'message004', content: 'message 004 content004'},
]
export default {
    data() {
        return {
            messageDetail: {},
        }
    },
    mounted() {
        setTimeout(() => {
           const id = this.$route.params.id * 1;
           const detail = messageDetails.find(detail => detail.id === id)
           this.messageDetail = detail
        }, 500)
    },
    watch: {
        $route (value) {
             setTimeout(() => {
                const id = value.params.id * 1;
                const detail = messageDetails.find(detail => detail.id === id)
                this.messageDetail = detail
                }, 500)
        }
    },
}
</script>

<style>

</style>