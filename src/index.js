import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import ShowTime from './ShowTime';
// import Todolist from './Todolist/Todolist'
import Requset from './Request';
import Parent from './Context/Parent';
import Hoc from './Hoc/Hoc';
// 组件交互
// 父组件--->子组件：调用时在子组件上添加属性
// 在子组件中通过props获取数据
// let {Provider,Comsumer} = React.createContext();
import {con} from './Context/Context'
import ParentPortal from './Portal/ParentPortal';
import App from './App';
let color = 'red';

ReactDOM.render(
    <App/>,
    document.getElementById('root'));
// ReactDOM.render(
//     <con.Provider value={color}>
//         <ParentPortal/>
//     </con.Provider>,
//     document.getElementById('root'));




// 函数定义组件（无生命周期函数）
// 当只是渲染结构时
// function Todo(props){
//     return (
//         <div>
//             {/* 条件渲染 */}
//             {props.list.length>=6?<h1>todo</h1>:''}
//             {props.list.length>=5 && <h1>todo</h1>}
//             <ul>
//                 {/* 循环渲染 */}
//                 {
//                     props.list.map(
//                         (item,index)=> index%2 === 0&&<li key={item}>{item}</li>
//                     )
//                 }
//             </ul>
//         </div>
//     )
// }
// var item = [1,2,3,4,5];
// ReactDOM.render(<Todo list={item}/>,document.getElementById('root'));





// react元素创建后不可改变
// function tick(){
//     var e = <div>
//                 <p>当前时间</p>
//                 <p>当前时间</p>
//                 <h1>{new Date().toLocaleString()}</h1>;
//             </div>
//     ReactDOM.render(e,document.getElementById('root'));
// }
// tick();
// setInterval(tick,1000);

// jsx表达式会被react转成一个对象，类似下面声明的obj对象
var ele = React.createElement(
    'div',
    {'id':'box'},
    'hello',
    React.createElement(
        'h1',
        {'id':'h'},
        'react'
    )
);
var obj = {
    type: 'div',
    props: {
        id: 'box',
        class: 'box',
        children: ['hello',{
            type: 'h1',
            props: {
                id: 'h',
                class: 'h',
                children: ['react']
            }
        }]
    }
}

// 自己声明render函数，实现页面渲染
function render(obj,container){
    var {type,props} = obj;
    // 文档碎片
    var fr = document.createDocumentFragment();

    var ele = document.createElement(type);
    for(var item in props){
        if(item === 'class'){
            ele.className = props[item];
        }else if(item === 'children'){
            for(var i=0;i<props[item].length;i++){
                if(typeof props[item][i] === 'object'){
                    render(props[item][i],ele);
                }else{
                    var txt = document.createTextNode(props[item][i]);
                    ele.appendChild(txt);
                }
            }
        }else{
            ele[item] = props[item];
        }
    }
    fr.appendChild(ele);
    container.appendChild(fr);
}
// render(obj,document.getElementById('root'));

// 注意以下性能问题及优化方法

// 加载html文件、浏览器解析html生成DOM树
// link加载css文件、解析css规则、和DOM树结合生成render tree、浏览器渲染引擎渲染render tree

// 页面回流（重排）：内容改变、大小改变、结构改变
// 页面重绘：把字体颜色、背景颜色等样式改变

// 1、node.offsetLeft、node.offsetWidth等慎用
// var root = document.getElementById('root');
// var width = root.offsetWidth;
// setInterval(function(){
//     width += 1
//     root.style.width = width + 'px';
// },100)

// display、width、height、font-size等会引起页面回流
// document.body.style.width = '100px';
// document.body.style.height = '100px';
// 2、声明一个css的一个类
// .change{
//     width: 100px;
//     height: 100px;
// }
// document.body.className = 'change';

// 3、对节点的操作先用变量代替
// console.time('a');
// var str = '';
// for(var i=0;i<1000;i++){
//     str += '<li>'+i+'</li>';
// }
// document.body.innerHTML = str;
// console.timeEnd('a');
// 4、文档碎片的概念


