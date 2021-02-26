





import React from 'react'




import { Button } from 'antd';

import axios from 'axios'

import { Spin, Alert, Pagination } from 'antd'

export default class Moviecomment extends React.Component {




    constructor (props) {

        super (props)

        this.state = {
            info: {},
            img: '',
            isloading: true
        }
    }

    componentWillMount () {

        const url='https://movie.querydata.org/api?id='+ this.props.match.params.id
        // const url='https://api.xhboke.com/movie/search?s=肖申克的救赎&page=0'
        axios.get(url).then((data) => {
            
            this.setState({
                info: data.data
            })
        })

        const url2='https://movie.querydata.org/api/generateimage?id='+ this.props.match.params.id
        axios.get(url2).then((data) => {
            
            this.setState({
                isloading: false,
                img: data.data.image
            })
        })

    }

    render () {








        


        return <div>
           { this.renderlist() } 
        </div>
        
        // return <div>
        //     <Button type="primary" onClick= { this.goback}> &lt; 返回电影列表</Button>
        //     {/* <h3>详情 { this.props.match.params.id}</h3> */}

        //     <img src={ this.state.img} alt="" style= { {width: '100%', height: '500px'}}/>
        // </div>
    }



    renderlist = () => {
        if (this.state.isloading) {
            return <Spin tip="Loading...">
                <Alert
                message="正在请求电影详情"
                description="精彩内容，即将呈现"
                type="info"
                />
            </Spin>
        }        else {
            return <div>
            <Button type="primary" onClick= { this.goback}> &lt; 返回电影列表</Button>
            {/* <h3>详情 { this.props.match.params.id}</h3> */}

            <img src={ this.state.img} alt="" style= { {width: '100%', height: '500px'}}/>
        </div>
        }
    }

    goback = ()   => {
        this.props.history.go(-1)
    }
}