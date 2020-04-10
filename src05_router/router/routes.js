/* 
所有路由配置的数组模块
*/
import About from "../pages/About";
import Home from "../pages/Home";
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'
export default [
    {
        path: '/about',
        component: About
    },
    {
        path: '/home',
        component: Home,
        children: [
            {
                path: 'news',
                component: News
            },
            {
                path: 'messages',
                component: Message,
                children: [
                    {
                        path: 'detail/:id',
                        component: Detail,
                        //把路由中的参数属性映射为props,来解耦
                        props: (route) => ({id: route.params.id*1})
                    }
                ]
            },
            {
                path: '', component: News
            }
        ]
    },
    {
        path: '/',
       redirect: '/home'
    },
]