import React from "react";
import { Col, Row, Card, Button } from "antd";
import BankAccCard from "../../Molecules/BankAccCard";
import styles from './style.module.scss'

export default function BankAccount(){
    return(
        <>
            <Card
                bordered={false}
                style={{
                    width:'100%'
                }}
                >
                <Row>
                    <Col span={13} md={10} lg={8}>
                        <h4>Akun Bank</h4>
                    </Col>
                    <Col span={11} md={14} lg={16}>
                        <div className={styles.button}>
                            <Button type="primary" style={{background:'#35763b', border:'none'}} block>
                                + Tambahkan Akun Baru
                            </Button>
                        </div>
                    </Col>
                </Row>
                <BankAccCard/>
                <BankAccCard/>
             </Card>
        </>
    )
}