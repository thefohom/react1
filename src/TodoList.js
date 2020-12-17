import React, {Component} from 'react'
import axios from 'axios'
export default class TodoList extends Component{
  state = {
    list:[],
    username:'',
    age:0
  }
  componentDidMount(){
    this.getData()
  }

  getData = ()=> {  // getData的作用是获取数据后 把数据赋值给list
    axios.get('http://localhost:4000/listtt').then(res=>{
      this.setState({
        list:res.data
      })
    })
  }

  handleChange = e =>{
    console.log(e.target.id);
    this.setState({
      // username:e.target.value ,
      // age:e.target.value 
      
      [e.target.id]:e.target.value 
    })
  }

  add = (e)=> {  // 这里add方法的作用是 将现在state里面的username age提交上去  提交完之后 最后再获取一遍然后赋值到list里面 以让页面显示出来
    axios.post("http://localhost:4000/listtt",{
      username:this.state.username,
      age:this.state.age
    }).then(res=>{
      // 需要重新请求
      
      this.getData()

    })

  }

  // 删除操作
  delete = id => {
    axios.delete("http://localhost:4000/listtt/"+ id).then(res=>{
      this.getData()
    })
  }

  // 更新
  update = ({username,age,id})=>{
    let value = prompt("请输入要修改后的内容",username+","+age)  // prompt的第二个参数是默认显示的内容 第一个参数是弹出的输入框外显示的提示语
    let arr = value.split(',') // 将获取到的数据 通过"," 转换为数组
    axios.patch("http://localhost:4000/listtt/"+id,{
      username:arr[0],
      age:arr[1]
    }).then(res=>{
      this.getData()
    })
  }

  // 模糊查询
  blur = ()=>{
    let keyword = prompt("请输入查询的用户名关键字！",'赶紧输入吧 :)')
    axios.get("http://localhost:4000/listtt?username_like="+keyword).then(res=>{
      this.setState({
        list:res.data
      })
    })
  }

  render() {
    let {list,username,age} = this.state;
    return (
      <div>
        <input id='username' type='text' value={username} onChange={this.handleChange}/>
        <input id='age' type='number' value={age} onChange={this.handleChange}/>
        <button onClick={this.add}>添加</button>
        <button onClick={this.blur}>模糊查询</button>
        <button onClick={()=>{this.getData()}}>返回</button>
        <ul>
          {
            list.map(item=>{
              return <li key={item.id}>用户名：{item.username}   | 年龄：{item.age}
                <button onClick={this.delete.bind(this,item.id)}>删除</button>
                <button onClick={this.update.bind(this,item)}>更新</button>
              </li>
            })
          }
        </ul>
      </div>
    )
  }
}