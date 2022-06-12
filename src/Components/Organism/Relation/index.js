import React from "react";
import { Card } from "antd";
import styles from './style.module.scss'
import RelationCard from "../../Molecules/RelationCard";

export default function Relation(){
    return(
        <>
            <Card
                bordered={false}
                style={{
                    width:'100%'
                }}
                >
                <div className={styles.topContainer}>
                    <h4>Relasi</h4>
                    <p style={{color:'darkgreen'}} >Lihat Semua</p>
                </div>
                <RelationCard/>
                <RelationCard/>
                <RelationCard/>
             </Card>
        </>
    )
}