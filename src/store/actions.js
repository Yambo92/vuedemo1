/* 包含n个间接更新状态数据的方法的对象 */
import { REQUESTING, REQUEST_SUCCESS, REQUEST_ERROR } from "./mutation_types";
import axios from 'axios'

export default{
    // 异步action
   async search({commit}, searchName){
        //更新状态数据为请求中
        commit(REQUESTING)
        //发ajax获取users
        let url = `https://api.github.com/search/users?q=${searchName}`
           
        try{
            //请求成功更新数据
            const response = await axios(url);
            const users = response.data.items.map(item => ({
                username: item.login,
                url: item.html_url,
                avatar_url: item.avatar_url
            }))
            commit(REQUEST_SUCCESS,users)
        }catch(error){
            //请求失败更新数据
            commit(REQUEST_ERROR, error.message)
        }
    }
}