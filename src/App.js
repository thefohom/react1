import React,{Component} from "react"
import TodoList from "./TodoList"
import Other from "./Other"
import Todos from "./Todos"
import Proxy from "./Proxy"

class App extends Component{
  render(){
    return (
      <div>
        <TodoList/>
        <Proxy/>
        <hr/>
        <Other/>
        <hr/>
        <Todos/>
      </div>
    )
  }
}
export default App;
