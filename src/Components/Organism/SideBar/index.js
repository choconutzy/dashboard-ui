import React from "react";
import styles from './style.module.scss'
import {HiOutlineTicket, HiOutlineClipboardCheck, HiOutlineOfficeBuilding, HiOutlineHome, HiOutlineInbox, HiOutlineUsers, HiCube} from 'react-icons/hi'
import { Row, Col } from "antd";


export default function SideBars(){
    return(
        <div className={styles.container}>
          <Row gutter={[0,24]}>
            <Col span={24}>
              <div className={styles.menu}>
                <HiOutlineHome/>
              </div>
            </Col>
            <Col span={24}>
              <div className={styles.menu}>
                <HiOutlineTicket/>
              </div>
            </Col>
            <Col span={24}>
              <div className={styles.menu}>
                <HiOutlineClipboardCheck/>
              </div>
            </Col>
            <Col span={24}>
              <div className={styles.menu}>
                <HiOutlineInbox/>
              </div>
            </Col>
            <Col span={24}>
              <div className={styles.menu}>
                <HiOutlineUsers/>
              </div>
            </Col>
            <Col span={24}>
              <div className={styles.selected}>
                <HiOutlineOfficeBuilding/>
              </div>
            </Col>
            <Col span={24}>
              <div className={styles.menu}>
                <HiOutlineUsers/>
              </div>
            </Col>
            <Col span={24}>
              <div className={styles.menu}>
                <HiCube/>
              </div>
            </Col>
          </Row>
        </div>
    )
}