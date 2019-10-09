import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// jsx表达式会被react转成一个对象
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

// 加载html文件、浏览器解析html生成DOM树
// link加载css文件、解析css规则、和DOM树结合生成render tree、浏览器渲染引擎渲染render tree

// 页面回流（重排）：内容改变、大小改变、结构改变
// 页面重绘：把字体颜色、背景颜色等样式改变

// node.offsetLeft、node.offsetWidth等慎用
// var root = document.getElementById('root');
// var width = root.offsetWidth;
// setInterval(function(){
//     width += 1
//     root.style.width = width + 'px';
// },100)

// display、width、height、font-size等会引起页面回流
// document.body.style.width = '100px';
// document.body.style.height = '100px';
// 声明一个css的一个类
// .change{
//     width: 100px;
//     height: 100px;
// }
// document.body.className = 'change';

// console.time('a');
// var str = '';
// for(var i=0;i<1000;i++){
//     str += '<li>'+i+'</li>';
// }
// document.body.innerHTML = str;
// console.timeEnd('a');
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

// var e = <h1>hello</h1>;
// ReactDOM.render(ele,document.getElementById('root'));

