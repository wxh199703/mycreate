

import React from 'react'


import axios from 'axios'

export default class App extends React.Component {

    constructor (props) {
        super (props)

        this.state = {

        }
    }

    componentDidMount () {
        this.ajaxfun()
    }

    ajaxfun= () => {
        axios.get("/api/search_subjects?type=movie&tag=热门&page_limit=50&page_start=0").then((data) => {
            console.log(data)
        })
    }
    render () {

        return <div>

        </div>
    }
}
