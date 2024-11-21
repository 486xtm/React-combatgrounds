import React from "react";
import styles from "./style.module.css";
const New = () => {
  return (
    <div className={styles["sign_container"]}>
      <div className="container mx-auto">
        <img className="w-[30%] mx-auto" src="/SignIn/mark.svg" />
        <div className="flex flex-col rounded-[24px] w-full lg:w-[30%] h-[50vh] bg-[rgba(255,255,255,0.1)] mx-auto text-center ">
          <div className="font-[900] text-[1rem] text-white">LOGIN</div>
        </div>
      </div>
    </div>
  );
};

export default New;
// import React, { useEffect } from 'react';

// const NotificationComponent = () => {
//     useEffect(() => {
//         // Request permission on component mount
//         if ('Notification' in window) {
//             Notification.requestPermission().then(permission => {
//                 if (permission === 'granted') {
//                     console.log('Notification permission granted.');
//                 } else {
//                     console.log('Notification permission denied.');
//                 }
//             });
//         }
//     }, []);

//     const showNotification = () => {
//         if (Notification.permission === 'granted') {
//             const notification = new Notification('Hello!', {
//                 body: 'This is a notification from your React app!',
//                 icon: 'http://localhost:5173/favicon.ico' // Optional: Add your icon URL
//             });

//             notification.onclick = () => {
//                 window.focus(); // Focus on the window when notification is clicked
//             };
//         } else {
//             console.error('Notification permission not granted.');
//         }
//     };

//     return (
//         <div>
//             <h1>Welcome to My React App</h1>
//             <button onClick={showNotification}>Show Notification</button>
//         </div>
//     );
// };

// export default NotificationComponent;