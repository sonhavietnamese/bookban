/* eslint-disable prettier/prettier */
import PushNotification from "react-native-push-notification"

class NotificationManager {
    configure = () => {
        PushNotification.configure({
            onRegister: function (token) {
                console.log(token)
            },

            onNotification: function (notification) {
                console.log(notification)

                notification.userInteraction = true

            },

        })
    }

    _buildAndroidNotification = (id, title, message, data = {}, option = {}) => {
        return {
            id: id,
            autoCancel: true,
            largeIcon: option.largeIcon || "ic_launcher",
            smallIcon: option.smallIcon || "ic_launcher",
            bigText: message || "",
            subText: title || "",
            vibrate: option.vibrate || false,
            vibration: option.priority || "high",
            importance: option.importance || "high",
            data: data
        }
    }

    showNotification = (id, title, message, data = {}, option = {}) => {
        PushNotification.localNotification({
            ...this._buildAndroidNotification(id, title, message, message, data, option),
            title: title || "",
            message: message || "",
            userInteraction: false
        })
    }

    cancelAllLocalNotification = () => {
        PushNotification.cancelAllLocalNotifications()
    }

    unregister = () => {
        PushNotification.unregister()
    }
}

export const notificationManager = new NotificationManager()