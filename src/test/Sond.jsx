import React from 'react'


import { Consumer } from './App.jsx'

import Grandson from './grandson.jsx'

function Sond (props) {

    return (

        <Consumer>

            { (name ) => 
            <div style={{ border: '1px solid blue', width: '60%', margin: '20px auto'}}>
                <p>子组件 { name }</p>

                <Grandson></Grandson>
            </div> }
        </Consumer>
    )
}

export default Sond