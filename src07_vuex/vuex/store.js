/* 
vuex核心的管理模块
*/
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const state = {
    count: 1
}
const mutations = {
    //加1的方法
    INCREMENT(state){
        state.count++
    },
    DECREMENT(state){
        state.count--
    }
}
const actions = {
    increment(context){
        context.commit('INCREMENT')
    },
    decrement({commit}){
        commit('DECREMENT')
    },
    incrementIfOdd({commit, state}){
        if(state.count % 2 == 1){
            commit('INCREMENT')
        }
    },
    incrementAsync({commit}){
        setTimeout(() => {
            commit('INCREMENT')
        }, 1000);
    }
}
const getters = {
    evenOrOdd(state){
        return state.count % 2 === 1 ? '奇数' : '偶数'
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})