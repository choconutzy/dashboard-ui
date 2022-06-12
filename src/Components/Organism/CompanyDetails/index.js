import React from "react";
import Desc from "../../Molecules/Desc";
import { Card } from "antd";
import logo from '../../../assets/logocrop.png'
import gedung from '../../../assets/gedung.jpg'
import styles from './style.module.scss'

export default function CompanyDetails(){
    return(
        <div className={styles.container}>
            <Card
                bordered={false}
                style={{
                    width:'100%'
                }}
                cover={<img src={gedung} alt='gambar-gedung' />}
                >
                <div className={styles.profil}>
                    <img src={logo} style={{width:'30%', boxShadow:'-2px 11px 33px -23px rgba(38,156,71,0.75)', borderRadius:'100%'}} alt='gambar-logo'/>
                </div>
                <h3 style={{textAlign:'center'}}>Mitramas Infosys Global</h3>
                <Desc/>
             </Card>
        </div>
    )
}