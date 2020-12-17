import React, { Component } from 'react'
import axios from "axios"
export default class Proxy extends Component {
  componentDidMount(){
    // 进行异步操作 请求本地文件
      // axios.get('/data.json').then(res=>{
      //   console.log(res)
      // })

      // 请求远程接口 
      // 后端可以通过CORS解决跨域问题吗？ 设置 Access-Control-Allow-Origin : *

      // axios.get("https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=9847654",{
      //   headers:{
      //     'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1606899692769752628723713","bc":"110100"}',
      //     'X-Host': 'mall.film-ticket.film.list'
      //   }
      // }).then(res=>{

      //   console.log(res);
      // })

       // 请求猫眼的接口数据
        // 代理操作谁来做的？ 前端工程师 webpackdevserver  proxy代理
        // 安装其他插件模块， node_modules 又会打回原形。
        // yarn eject抽离 问题 远程管理代码
        // git init / git add / git commit -m 'xx' / git remote xxx / git push 

    // proxy: {
    //   "/api":{
    //     target:'https://m.maoyan.com',
    //     changeOrigin:true,
    //     pathRewrite:{
    //       "^/api":""
    //     }
    //   }
    // }

    // axios.get("/")

  }

 

  render(){
    return (
      <div>
        proxy111111
      </div>
    )
  }
}