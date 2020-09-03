import React from 'react';
import styles from './notify.module.css'

const Notification = ({text}) => {
    return (
        <div className={styles.notifyBlock}>
            <h2 className={styles.alert}>{`${text}`}</h2>
        </div>
    )
}

export default Notification