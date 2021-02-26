




import React from 'react'



import { Layout, Menu, Breadcrumb } from 'antd';
// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

import { Route, Link, Switch } from 'react-router-dom'



import MovieList from './MovieList.jsx'




import Moviecomment from './Moviecomment.jsx'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;














export default class Movie extends React.Component {

    constructor (props) {

        super(props)

        this.state= {

        }
    }

    render () {

        return <Layout style= { {height: '100%', marginBottom: '100px'} }>
        <Sider width={200} className="site-layout-background ">
          <Menu
            mode="inline"
            defaultSelectedKeys={[window.location.hash.split('/')[2]]}
            style={{ height: '100%', borderRight: 0 }}
          >
              <Menu.Item key="热门">
              <Link to= "/movie/热门/1">正在热映</Link>
                  </Menu.Item>
              <Menu.Item key="上映">
              <Link to= '/movie/上映/1'>即将上映</Link>
                  </Menu.Item>
              <Menu.Item key="top250">
                  
                    <Link to= '/movie/top250/1'>Top250</Link>
                  </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ paddingLeft: '1px' }}>
          <Content
            className="site-layout-background"
            style={{
              background: '#fff', 
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Switch>
              <Route exact path='/movie/datail/:id' component= { Moviecomment }></Route>
              <Route exact path='/movie/:type/:page' component= { MovieList }></Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    }
}