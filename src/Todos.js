import React, { Component } from 'react'
import Input from './input'
import List from './List'

export default class Todos extends Component {
  state = {
    list:[
      {id:1,title:"哈哈哈"},
      {id:2,title:"嘿嘿嘿"}
    ]
  }

  changeList = (title)=>{
    this.setState({
      list:[...this.state.list,{id:parseInt(Math.random()*10000),title}]
    })
  }

  render () {
    return (
      <div>
        <Input changeList={this.changeList}/>
        <List list={this.state.list}/>
      </div>
    )
  }
}