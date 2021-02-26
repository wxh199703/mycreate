


import React from 'react'



//导入路由模块
import { HashRouter, Route, Link} from 'react-router-dom'


import { Layout, Menu } from 'antd';
// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';


import Home from './components/Home.jsx'

import Movie from './components/Movie.jsx'

import About from './components/About.jsx'

import  stylescss from'./css/app.scss'

import 'antd/dist/antd.css'
import resolve from 'resolve';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;





export default class App extends React.Component {

    constructor (props) {
        super(props)

        this.state = {

        }
    }





    render ()  {
        return <HashRouter>
            <Layout style= { {height: "100%" }}>
                <Header className="header">
                    <div className= { stylescss.logo } />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[window.location.hash.split('/')[1]]}>
                        <Menu.Item key="home">
                            <Link to= '/home'>首页</Link>
                            </Menu.Item>
                        <Menu.Item key="movie">
                            <Link to= "/movie/热门/1">电影</Link>
                        </Menu.Item>
                        <Menu.Item key="about">
                            <Link to= '/about'>关于</Link>
                        </Menu.Item>
                    </Menu>
                </Header>

                <Content style={{ background: '#fff', flex: 1, }}>
                <Route path='/home' component=      {Home}></Route>
                <Route path='/movie' component=     {Movie}></Route>
                <Route path='/about' component=     { About }></Route>
                </Content>
                <Footer style={{ textAlign: 'center', position: 'fixed', bottom: 0, width: '100%', }}>汪新鸿 ©2020 最终版权归属于</Footer>
            </Layout>
        </HashRouter>
    }
}