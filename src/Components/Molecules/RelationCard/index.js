import React from "react";
import styles from './style.module.scss'
import {RiShareLine} from 'react-icons/ri'

export default function RelationCard(){
    return(
        <div className={styles.container}>
            <div className={styles.leftside}>
                <RiShareLine/>
            </div>
            <div className={styles.rightside}>
                <h3>20</h3>
                <p style={{color:'InactiveCaptionText'}}>Memiliki</p>               
            </div>
        </div>
    )
}