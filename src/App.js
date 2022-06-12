import React from 'react';
import './App.css';
import CompanyDetails from './Components/Organism/CompanyDetails';
import Relation from './Components/Organism/Relation';
import SideBars from './Components/Organism/SideBar';
import {Row, Col} from 'antd'
import BankAccount from './Components/Organism/BankAccount';
import Activity from './Components/Organism/Activity';
import Location from './Components/Organism/Location';
import TopBar from './Components/Organism/Topbar';
import styles from './style.module.scss'

function App() {
  return (
    <div className='main-wrapper'>
      <Row>
        <Col span={2} lg={1}>
          <SideBars/>
        </Col>
        <Col span={22} lg={23}>
          <div className={styles.content}>
            <TopBar/>
            <Row gutter={[12,12]}>
              <Col span={24} md={10} lg={6}>
                <CompanyDetails/>
              </Col>
              <Col span={24} md={14} lg={18}>
                <Row gutter={[12,12]}>
                  <Col span={24}>
                    <Location/>                  
                  </Col>
                </Row>
                <Row gutter={[12,12]} className={styles.wrapper}>
                    <Col span={24} lg={11}>
                      <Row gutter={[0,12]}>
                        <BankAccount/>
                        <Relation/>
                      </Row>
                    </Col>
                    <Col span={24} lg={13}>
                        <Activity/>
                    </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default App;
