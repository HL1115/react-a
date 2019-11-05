import {createStore,applyMiddleware,compose} from 'redux';
import todo from './reducer';
import thunk from 'redux-thunk';
let store = createStore(
    todo,
    compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);
export default store;
// redux（action、Reducer、store）：可预测的状态管理的容器
// 组件嵌套层级比较多、跨组件交互较多、setState
// redux的状态存在一个唯一的store，
// 更新只能用action（抽离成一个文件，常量），
// 需要reducer（纯函数），相当于处理状态的一个系统

// 1、设计Reducer，一个纯函数
// 2、结合Reducer，生成store

// 3、在需要state的组件引入store，
// 调用getState方法得到state，调用subscribe添加监听

// 4、在触发state更新的组件，引入store，
// 调用dispatch方法，传入action，更新state

// react-redux（Provider，connect）

// redux-thunk(中间件)


