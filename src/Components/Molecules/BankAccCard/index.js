import { Col, Row } from "antd";
import React from "react";
import styles from './style.module.scss'
import {BsFillPencilFill, BsTrashFill} from 'react-icons/bs'

export default function BankAccCard(){
    return(
        <div className={styles.container}>
            <Row gutter={[12,4]}>
                <Col span={10}>
                    <div className={styles.card}>
                        <h5 style={{color:"white"}}>Visa</h5>
                    </div>
                </Col>
                <Col span={14}>
                    <Row gutter={[0,12]}>
                        <Col span={20}>
                            <h4>Bank Bukopin</h4>
                        </Col>
                        <Col span={4}>
                            <Row>
                                <Col span={12}>
                                    <BsFillPencilFill size={10} color='green'/>
                                </Col>
                                <Col span={12}>
                                    <BsTrashFill size={10} color='red'/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <p style={{color:'InactiveCaptionText', fontSize:'10'}}>****0876 - Yusron Tufiq</p>
                    </Row>
                    <Row>
                        <p style={{color:'InactiveCaptionText', fontSize:'10'}}>IDR</p>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}