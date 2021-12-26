import {NEW_NOTIFICATION, READ_NOTIFICATION} from "./notificationType"


const initialState ={
    new: false,
    unreadNotifications: [],
    readNotifications: []
}

export const reducer= (state=initialState, action)=>{
    switch(action.type){
        case NEW_NOTIFICATION:
            return {
                ...state,
                new: true,
                unreadNotifications: [action.text, ...state.unreadNotifications]
            }
        case READ_NOTIFICATION:
            return {
                ...state,
                new:false,
                readNotifications: [...state.unreadNotifications, ...state.readNotifications],
                unreadNotifications: []
            }
        default:
            return state
    }
}