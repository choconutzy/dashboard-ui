import React from "react";
import { Card } from "antd";
import ActivityCard from "../../Molecules/ActivityCard";

export default function Activity(){
    return(
        <>
            <Card
                bordered={false}
                >
                <h3>Aktivitas</h3>
                <ActivityCard/>
                <ActivityCard/>
                <ActivityCard/>
             </Card>
        </>
    )
}