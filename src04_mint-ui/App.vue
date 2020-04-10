<template>
  <mt-button type="primary" style="width: 100%" @click="hint">测试mint-ui</mt-button>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  name: "App",
  methods: {
    hint(){
      Toast({
        message: '提示',
        position: 'top',
        duration: 5000
      });

    }
  },
  components: {
 
  }
};
</script>

<style scoped>


</style>
