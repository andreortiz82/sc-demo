import React from 'react'
import Head from 'next/head'
import { Header } from './components/header';
import { Alert, List, Layout, Card, Menu, Typography, Space, Select, Button, Checkbox, DatePicker, InputNumber, Row, Col } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { WeekdayBlock } from './components/WeekdayBlock';
import { CapacityBlock } from './components/CapacityBlock';

const HoursOfOperations = ({ siteName }) => {
  return (
    <section className='hours-of-operation'>
      <div>
        <div><Typography.Title level={3}>Operational Times</Typography.Title></div>
        <div>
          <Space>
            <InfoCircleOutlined />
            <Typography.Text type="secondary">Improve your scheduleing experience by adding the hours of operations for this site. </Typography.Text>
          </Space>
        </div>
      </div>

      <div className='timezone'>
        <Typography.Text >Set a timezone for <b>{siteName}</b></Typography.Text>
        <Select defaultValue={'US/Eastern'}>
          {['US/Eastern', 'US/Central', 'US/Mountain', 'US/Pacific'].map(tz => {
            return <Select.Option key={tz}>{tz}</Select.Option>
          })}
        </Select>
      </div>

      <Card className='weekday-availability' size='small' title="Set Weekday Availability ">

        <List >
          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(weekday => {
            return (
              <WeekdayBlock key={weekday} day={weekday} />
            )
          })}
        </List>
      </Card>
    </section>
  )
}

const PatientCapacity = () => {
  return (
    <section className='patient-capacity'>
      <div>
        <div><Typography.Title level={3}>Patient Capacity</Typography.Title></div>
        <div>
          <Space>
            <InfoCircleOutlined />
            <Typography.Text type="secondary">Improve your scheduleing experience by configuring this sites patient capacity.</Typography.Text>
          </Space>
        </div>

        <CapacityBlock />
      </div>
    </section>
  )
}

export default function Home() {
  const [currentView, setCurrentView] = React.useState('hours-of-operation');
  const siteName = "Southside Medical"
  return (
    <div >
      <Head>
        <title>Demo</title>
        <meta name="description" content="Demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <Header />
        <div className='main-layout-wrapper'>

          <Card title={siteName}>
            <Row gutter={24} wrap={false}>
              <Col span={6}>
                <Menu className='main-navigation' selectedKeys={[currentView]} onClick={(item) => {
                  setCurrentView(item.key)
                }}>
                  <Menu.ItemGroup title="Site Settings">
                    <Menu.Item key='hours-of-operation' >Operational Times</Menu.Item>
                    <Menu.Item key='patient-capacity' >Patient Capacity</Menu.Item>
                  </Menu.ItemGroup>
                </Menu>
              </Col>
              <Col>
                {currentView === 'hours-of-operation' ? <HoursOfOperations siteName={siteName} /> : <PatientCapacity />}
              </Col>
            </Row>
          </Card>
        </div>
      </main>
    </div>
  )
}
