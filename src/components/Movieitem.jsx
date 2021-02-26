







import React from 'react'



import { Rate } from 'antd';



import styles from '../css/app.scss'

export default class Movieitem extends React.Component {

    constructor (props) {

        super(props)
        
        this.state = {
            arr: '/app'+(props.cover).slice( 58),
            src: 'https://images.weserv.nl/?url='+props.cover,
            mun: props.rate/2
        }
    }


    render () {
        
        return <div className= { styles.div } onClick= { this.goDatail}>
            {/* { 
            // this.state.arr= this.props.cover,
            // arr=arr.slice( 58),
            // console.log(arr)}
            this.setState({
                arr: (this.props.cover).slice( 58)
            }),

            console.log(this.state.arr)
    } */}
            <img src=    { this.state.src} alt="" className= { styles.img } />
            <h4 className={ styles.title}>评分： { this.props.rate}</h4>
            <h4 >{ this.props.title}</h4>
            <Rate disabled defaultValue={ this.state.mun} />
            <h4></h4>
        </div>
    }

    goDatail = () => {

        




        this.props.history.push('/movie/datail/'+ this.props.id)
    }
}