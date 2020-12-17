import React, { Component } from 'react'
import eventHub from './eventHub'
export default class Other extends Component {
  state={
    color:'red'
  }
  componentDidMount(){
    // 需要监听一个事件
    eventHub.on('chufaOne',(color)=>{
      this.setState({
        color
      })
    })
  }

  render(){
    return (
      <div style={{color:this.state.color}}>
        oneaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </div>
    )
  }
}
