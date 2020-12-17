import React, { Component } from 'react'

export default class Input extends Component {
  add = e => {
    if(e.keyCode === 13){
      // 当输入回车的时候 调用父元素的changeList方法 传入的参数是当前输入框的的value值
      //  而传入的value值是changeList的给数组添加的元素
      // 需要往todos的list数组中添加一项
      this.props.changeList(e.target.value)
      e.target.value=""
    }
  }

  render() {
    return (
      <input onKeyUp={this.add}/>
    )
  }
}