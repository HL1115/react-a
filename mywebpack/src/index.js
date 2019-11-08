// 初始化：yarn init -y
// 安装 yarn add webpack webpack-cli -D
// 创建 webpack.config.js
// yarn add webpack-dev-server -D
// yarn add html-webpack-plugin -D
// 下载loader
// yarn add css-loader style-loader -D
// yarn add less-loader less -D
// yarn add react react-dom
// yarn add babel-loader@8.0.0-beta.0 @babel/core @babel/preset-env -D
// yarn add @babel/preset-react -D

// yarn add mini-css-extract-plugin -D
// yarn add file-loader -D
// yarn add filemanager-webpack-plugin -D
import React from 'react';
import {render} from 'react-dom';
import './index.css';
import './index.less';
import img from './imgs/react.jpg';
// JSX
// let app1 = React.createElement('h1',{},'hello web')
let app = <div>
    <h1>hello webpack</h1>
    <img src={require('./imgs/react.jpg')} alt=""/>
</div>;
render(
    app,
    document.getElementById('root')
);