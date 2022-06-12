import React from "react";
import { Col, Row, Card } from "antd";
import { MdMapsHomeWork } from 'react-icons/md'
import { TbBuildingWarehouse, TbTool } from 'react-icons/tb'
import styles from './style.module.scss'

// export const iconItems = [
//     {
//         id:1,
//         icon: `${MdMapsHomeWork}`,
//         capt:'Induk',
//         number: 20,
//     },
//     {
//         id:1,
//         icon: `${<TbTool/>}`,
//         capt:'Sub Lokasi Level 1',
//         number: 3,
//     },
//     {
//         id:1,
//         icon: `${<TbBuildingWarehouse/>}`,
//         capt:'Sub Lokasi Level 2',
//         number: 1,
//     },
// ]

export default function Location(){
    return(
        <>
            <Card
                bordered={false}
                style={{
                    width:'100%'
                }}
                >
                <h4>Lokasi</h4>
                <Row gutter={[12,12]}>
                    <Col span={24} sm={8} md={24} lg={8}>
                        <div className={styles.container}>
                            <MdMapsHomeWork size={24} color='white'/>
                            <div>
                                <h3 style={{color:'white', textAlign:'right'}}>20</h3>
                                <p style={{color:'white', fontSize:'6', textAlign:'right'}}>Induk</p>
                            </div>
                        </div>
                    </Col>
                    <Col span={24} sm={8} md={24} lg={8}>
                        <div className={styles.container}>
                            <TbTool size={24} color='white'/>
                            <div>
                                <h3 style={{color:'white', textAlign:'right'}}>3</h3>
                                <p style={{color:'white', fontSize:'6', textAlign:'right'}}>Sub Induk Level 1</p>
                            </div>
                        </div>
                    </Col>
                    <Col span={24} sm={8} md={24} lg={8}>
                        <div className={styles.container}>
                            <TbBuildingWarehouse size={24} color='white'/>
                            <div>
                                <h3 style={{color:'white', textAlign:'right'}}>1</h3>
                                <p style={{color:'white', fontSize:'6', textAlign:'right'}}>Sub Induk Level 2</p>
                            </div>
                        </div>
                    </Col>
                </Row>
             </Card>
        </>
    )
}