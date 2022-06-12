import React from "react";
import { Row, Col } from "antd";
import styles from './style.module.scss'
import { RiSearchLine } from 'react-icons/ri'
import { AiOutlineBell } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'

export default function TopBar(){
    const arrow = '>'
    return(
        <Row className={styles.container}>
            <Col span={16} md={12}>
                <div className={styles.leftside}>
                    <div className={styles.firstitem}>Perusahaan</div>
                    <div className={styles.item2}>{arrow}</div>
                    <div className={styles.item}>Mitramas Infosys Global</div>
                </div>
            </Col>
            <Col span={8} md={12}>
                <div className={styles.rightside}>
                    <div className={styles.item}><RiSearchLine/></div>
                    <div className={styles.item}><AiOutlineBell/></div>
                    <div className={styles.item}><CgProfile/></div>
                    <div className={styles.item}>John Doe</div>
                </div>
            </Col>
        </Row>
    )
}