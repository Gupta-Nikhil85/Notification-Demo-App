import {NEW_NOTIFICATION, READ_NOTIFICATION} from "./notificationType"

export const newNotification = (input) => {
    return {
        type: NEW_NOTIFICATION,
        text: input
    }
}

export const readNotification = () => {
    return {
        type: READ_NOTIFICATION
    }
}

