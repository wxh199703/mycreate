import React from 'react'

import Sond from './Sond.jsx'

export const { Provider, Consumer } = React.createContext()

export default class App extends React.Component {

    render () {

        let name= '参数'

        return (
                <Provider value= { name }>
                    <div style={{border:'1px solid red',width:'30%',margin:'50px auto'}}></div>
                    <p>父组件定义的值 {name}</p>
                    <Sond></Sond>
                </Provider>
        )
    }
}