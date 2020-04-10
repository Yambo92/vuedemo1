<template>
<div>
  <div>
    click {{ count }} times, count is {{ evenOrOdd2 }}
  </div>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
  <button @click="incrementIfOdd">increment if odd</button>
  <button @click="incrementAsync">increment async</button>
</div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
export default {
  name: "App",
  // computed: {
  //   count(){
  //     return this.$store.state.count
  //   },
  //   evenOrOdd(){
  //     return this.$store.getters.evenOrOdd
  //   }
  // },
  computed: {
    ...mapState(['count']),
    ...mapGetters({'evenOrOdd2': "evenOrOdd"})
  },
//  methods: {
//    increment(){
//     this.$store.dispatch('increment')
//    },
//    decrement(){
//      this.$store.commit('DECREMENT')
//    },
//    incrementIfOdd(){
//      this.$store.dispatch('incrementIfOdd')
//    },
//    incrementAsync(){
//       this.$store.dispatch('incrementAsync')
//    }
//  },
methods: {
  ...mapMutations({
    increment: 'INCREMENT',
    decrement: 'DECREMENT'
  }),
  ...mapActions(['incrementIfOdd', 'incrementAsync'])
},
 mounted() {
   console.log('mounted()', this.$store)
 },
};
</script>

<style scoped>

</style>
