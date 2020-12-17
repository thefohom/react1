import React, { Component } from 'react'

export default class Form extends Component {
  state = {
    value:'张三',
    flag:true
  }

  render(){
    return(
      <div>
        <label htmlFor='username'>用户名：</label>
        <input id='username' value={this.state.value} onChange={(e)=>{this.setState({value:e.target.value})}}/>
        <input defaultValue="我是默认值"/>
        <input type="checkbox" checked={this.state.flag} onChange={(e)=>{this.setState({flag:!this.state.flag})}}/>
        <input type="checkbox" defaultChecked/>
        
      </div>
    )
  }
}