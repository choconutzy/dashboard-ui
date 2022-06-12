import React from "react";
import { Row, Col, Switch } from "antd";
import {MailOutlined, PhoneOutlined} from '@ant-design/icons'
import {RiGlobalLine} from 'react-icons/ri'
import { useState } from "react";

export default function Desc(){
    const [active, setActive] = useState(true)
    const handleClick = () => {
        setActive(!active)
    }
    return(
        <div>
            <p style={{color:'InactiveCaptionText'}}>Status Perusahaan</p>
            <Row>
                <Col span={20}>
                    <p style={{color:active===true? 'green' : 'InactiveBorder', fontWeight:'bold'}}>{active===true? 'Active' : 'Inactive'}</p>
                </Col>
                <Col span={4}>
                    <Switch type='success' size="small" defaultChecked onClick={handleClick}/>
                </Col>
            </Row>
            <p style={{color:'InactiveCaptionText'}}>Singkatan</p>
            <p>MIG</p>
            <p style={{color:'InactiveCaptionText'}}>Alamat Perusahaan</p>
            <p>Jl. Tebet Raya No.42, Jakarta Selatan</p>
            <p style={{color:'InactiveCaptionText'}}>Penanggung Jawab (PIC)</p>
            <p>John Doe</p>
            <p style={{color:'InactiveCaptionText'}}>Tanggal PKP</p>
            <p>3 Maret 2021</p>
            <p style={{color:'InactiveCaptionText'}}>Email</p>
            <Row>
                <Col span={4}>
                    <MailOutlined />
                </Col>
                <Col span={20}>
                    <p style={{color:'green', textDecoration:'underline', textDecorationColor:'green'}}>mig@mitrasolusi.group</p>
                </Col>
            </Row>
            <p style={{color:'InactiveCaptionText'}}>No. Telp</p>
            <Row>
                <Col span={4}>
                    <PhoneOutlined />
                </Col>
                <Col span={20}>
                    <p style={{color:'green'}}>021-5678-1234</p>
                </Col>
            </Row>
            <p style={{color:'InactiveCaptionText'}}>Situs Web</p>
            <Row>
                <Col span={4}>
                    <RiGlobalLine/>
                </Col>
                <Col span={20}>
                    <p style={{color:'green', textDecoration:'underline', textDecorationColor:'green'}}>mitramas.com</p>
                </Col>
            </Row>
        </div>
    )
}