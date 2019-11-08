import React, { Component } from 'react'

export default class Topic extends Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        let page = this.props.match.params.page;
        fetch('https://cnodejs.org/api/v1/topics?page='+page)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res.data});
        })
    }
    // shouldComponentUpdate(){
        
    // }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.page!==this.props.match.params.page){
            let page = this.props.match.params.page;
            fetch('https://cnodejs.org/api/v1/topics?page='+page)
                .then((res)=>res.json())
                .then((res)=>{
                        this.setState({data:res.data});
                    })
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.data.map((item)=>(
                        <div style={{width:800,overflow:'hidden'}} dangerouslySetInnerHTML={{__html:item.title}}></div>
                    ))
                }
            </div>
        )
    }
}
