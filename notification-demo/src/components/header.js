import React, {useState} from 'react'
import { readNotification } from '../redux'
import { connect } from 'react-redux'

const Header = (props) => {
    
    const [open, setOpen] = useState(false)
    const dropDown = ()=>{
        if(open){
            return(
                <div className='dropdown-content'>
                    <ul>
                        {props.unreadNotifications.map((notification, index) => <li key={index} className='unread-notification'>{notification}</li>)}
                        {props.readNotifications.map((notification, index) => <li key={index} className='read-notification'>{notification}</li>)}
                    </ul>
                </div>
            )
        }
    }

    const clickHandler = ()=>{
        if(open){
            setOpen(false)
            props.readNotification();
        }
        else{
            setOpen(true)
        }
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="*#">
                    <strong>Notification Creator</strong>
                    </a>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <i className="fa fa-bell bell-icon" onClick={clickHandler} style={{color: props.new? "#8813FC":"white"}}></i>
                    </li>
                </ul>
                {dropDown()}
            </div>
        </nav>
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
        readNotification: ()=> dispatch(readNotification())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
