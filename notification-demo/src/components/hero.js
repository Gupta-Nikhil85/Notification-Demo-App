import React from 'react'
import { connect } from 'react-redux'
import {useState} from 'react'
import { newNotification } from '../redux'

const Hero = (props) => {
    const [input, setInput] = useState('')
    return (
        <div className='container d-flex flex-column'>
            <input className= "input-box" type ="text" value= {input} onChange={e => setInput(e.target.value)} />
            <button className='push-button' onClick= {()=> input ? (props.newNotification(input), setInput('')):null}>Push Notification</button>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        new: state.new,
        unreadNotifications: state.unreadNotifications,
        readNotifications: state.readNotifications
    }
}

const mapDispatchToProps = dispatch => {
    return {
        newNotification: input => dispatch(newNotification(input))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hero)