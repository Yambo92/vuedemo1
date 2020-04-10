/* 全局事件总线对象模块 */

const eventBus = {}

//缓存监听函数{eventName: [listener1, listener2]}
const listenersContainer = {}

/* 绑定自定义事件监听的方法 on(eventName, listener)*/
eventBus.on = function (eventName, listener) {
    //取出对应的listener值
    let listeners = listenersContainer[eventName] 
    if(!listeners){//如果不存在创建一个空数组保存
        listenersContainer[eventName] = listeners = []
    }
    listeners.push(listener)
}

/* 分发自定义事件的方法 emit(eventName, data)*/
eventBus.emit = function (eventName, data) {
    //得到对应的listeners
    const listeners = listenersContainer[eventName]
    if(listeners && listeners.length){
        //如果有则调用所有的listener
        listeners.forEach(listener => {
            listener(data)
        })

    }
    
}

/* 解绑事件监听方法 off(eventName) */
eventBus.off = function (eventName) {
    //解绑所有监听
    if(!eventName){
        listenersContainer = {}
    }else{//解绑对应的监听
        listenersContainer[eventName] = []
    }
}



export default eventBus