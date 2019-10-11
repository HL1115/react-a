import React, { Component } from 'react'
import Axios from 'axios';
export default class Request extends Component {
    componentDidMount(){
        Axios.get('https://api.apiopen.top/musicRankingsDetails?type=1')
            .then((res)=>{
                console.log(res)
            })
    }
    render() {
        return (
            <div>
                <h1>请求接口</h1>
                <ul>
                    <li>
                        <h2>歌名</h2>
                        <p>作者</p>
                    </li>
                </ul>
            </div>
        )
    }
}
