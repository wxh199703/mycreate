import React from 'react'


import { Consumer } from './App.jsx'

// import Grandson from './grandson.jsx'

function Grandson (props) {

    return (

        <Consumer>

            { (name ) => 
            <div style={{border:'1px solid green',width:'60%',margin:'50px auto',textAlign:'center'}}>
                <p>孙组件 { name }</p>

            </div> }
        </Consumer>
    )
}

export default Grandson