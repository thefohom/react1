import React, { Component } from 'react'
import EventHub from "./eventHub"
export default class Two extends Component {
  changeColor = ()=>{
    // 需要触发chufaOne
    EventHub.trigger('chufaOne',this.color16())
  }

  color16(){// 16进制颜色随机
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    var color = '#'+r.toString(16)+g.toString(16)+b.toString(16);
    return color;
  }

  render() {
    return (
      <button onClick={this.changeColor}> two</button>
    )
  }
}