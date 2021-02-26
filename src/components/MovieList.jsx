




import React from 'react'











import { Spin, Alert, Pagination } from 'antd'









// import fetchJSONP from 'fetch-jsonp'

import 'whatwg-fetch'

import axios from 'axios'

import Movieitem from './Movieitem.jsx'

// const json = require('../search_subjects.json')

// import data from '../datajsopn.json'

// console.log (data)




export default class MovieList extends React.Component {

    constructor (props) {

        super(props)

        this.state= {
            movies: [],
            nowPage: parseInt(props.match.params.page) || 1,
            pageSize: 14,
            total: 0,
            isloading: true,
            movieType: props.match.params.type
        }
    }

   componentWillMount () {

    this.loadMovieListByTypeAndPage()
   }


   componentWillReceiveProps (nextProps) {
    // console.log(nextProps)
    



    



    this.setState({
        isloading: true,
        nowPage: parseInt(nextProps.match.params.page) || 1,
        movieType: nextProps.match.params.type
    }, function () {
        this.loadMovieListByTypeAndPage()
    })
   }

    // componentDidMount () {
    //     this.loadMovieListByTypeAndPage()
    // }



    render () {

        return <div>

            { this.renderlist() }
           


        </div>
    }



    loadMovieListByTypeAndPage = () => {

            // console.log('this.state.movieType.type')

            const start= this.state.pageSize*(this.state.nowPage-1)

            const url=`/api/search_subjects?type=movie&tag=${ this.state.movieType}&page_limit=${this.state.pageSize}&page_start=${ start }`
    
            // /api/search_subjects?type=movie&tag=热门&page_limit=50&page_start=0
            axios.get(url).then((data) => {
                this.setState({
                    movies: data.data.subjects,
                    isloading: false,
                })
                console.log(data.data.subjects)
            })

            // const data= require ('../jsop/'+ this.state.movieType + '.json')
            // setTimeout( ()    => {
            //     this.setState({
            //                 movies: data.subjects,
            //                 isloading: false,
            //             })
            // },1000)


        // let api="https://movie.douban.com/j/search_subjects?type=tv&tag=%E7%83%AD%E9%97%A8&page_limit=50&page_start=0";
        // fetchJSONP(api).then((res)=>{
        //     //这里对数据进行操作   默认的
        //     return res.json();
        // }).then((res)=>{
        //     console.log(res);
        // }).catch((err)=>{
        //     console.log(err);
        // });

    //     fetchJSONP("http://www.liulongbin.top:3005/api/getlunbo", {
    //     method: "get",
    //     headers: new Headers({
    //         'Accept': 'application/json'
    //     }),
       
    // }).then(res => res.json())
    //     .then(data => console.log(data))
    //     .catch(e=>console.log(`错误为${e}`))


        
    }

    renderlist = () => {
        if (this.state.isloading) {
            return <Spin tip="Loading...">
                <Alert
                message="正在请求电影列表"
                description="精彩内容，即将呈现"
                type="info"
                />
            </Spin>
        }        else {
            return <div>
                <div style= {{ display: 'flex', flexWrap: 'wrap', }}>
                    { this.state.movies.map(item => {
                        return <Movieitem { ...item } key= { item.id } history= { this.props.history } ></Movieitem>
                    })}
                </div>
                <Pagination defaultCurrent={this.state.nowPage} total={500} pageSize= { this.state.pageSize} onChange= { this.pageChang}/>
            </div>
        }
    }

    




    pageChang= (page) => {

        window.location.href='/#/movie/'+ this.state.movieType+'/'+page
    }
}