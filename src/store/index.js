import {createStore} from 'redux';
import todo from './reducer';
let store = createStore(todo);
export default store;
// 1、设计Reducer，一个函数
// 2、结合Reducer，生成store

// 3、在需要state的组件引入store，
// 调用getState方法得到state，调用subscribe添加监听

// 4、在触发state更新的组件，引入store，
// 调用dispatch方法，传入action，更新state
