import React from 'react'
import { List, Card, Typography, Space, Button, InputNumber, DatePicker } from 'antd';
import { PlusOutlined, DeleteOutlined, InfoCircleOutlined } from '@ant-design/icons';

const Simple = () => {
    return (
        <div className='simple-block'>
            <Card>
                <div className='block'>
                    <div>
                        <div><Typography.Text>Concurrent Patient Appointments</Typography.Text></div>
                        <div>
                            <Space>
                                <InfoCircleOutlined />
                                <Typography.Text type="secondary">Maximum appointments at once.</Typography.Text>
                            </Space>
                        </div>
                    </div>
                    <div><InputNumber /></div>
                </div>

                <div className='block'>
                    <div>
                        <div><Typography.Text>Appointment Buffer Time</Typography.Text></div>
                        <div>
                            <Space>
                                <InfoCircleOutlined />
                                <Typography.Text type="secondary">Minutes between patient appointments.</Typography.Text>
                            </Space>
                        </div>
                    </div>
                    <div><InputNumber /></div>
                </div>
            </Card>
        </div>
    )
}

const Advanced = () => {
    const [capacityBlocks, setCapacityBlocks] = React.useState([1]);

    return (
        <div className='advanced-block'>
            <div className='advanced-list'>
                {capacityBlocks.map(block => {
                    return (
                        <Card title="Capacity Range" key={block} extra={
                            <Button danger icon={<DeleteOutlined />} onClick={() => {
                                let collection = [...capacityBlocks]
                                collection.pop();
                                setCapacityBlocks(collection)
                            }} />
                        }>
                            <div>
                                <div className='block'>

                                    <div><div><Typography.Text>Effective Dates</Typography.Text></div>
                                        <div>
                                            <Space>
                                                <InfoCircleOutlined />
                                                <Typography.Text type="secondary">Date range to apply.</Typography.Text>
                                            </Space>
                                        </div></div>
                                    <div><DatePicker.RangePicker /></div>
                                </div>
                                <div className='block'>

                                    <div><div><Typography.Text>Concurrent Patient Appointments</Typography.Text></div>
                                        <div>
                                            <Space>
                                                <InfoCircleOutlined />
                                                <Typography.Text type="secondary">Maximum appointments at once.</Typography.Text>
                                            </Space>
                                        </div></div>
                                    <div><InputNumber /></div>
                                </div>

                                <div className='block'>
                                    <div><div><Typography.Text>Appointment Buffer Time</Typography.Text></div>
                                        <div>
                                            <Space>
                                                <InfoCircleOutlined />
                                                <Typography.Text type="secondary">Minutes between patient appointments.</Typography.Text>
                                            </Space>
                                        </div></div>
                                    <div><InputNumber /></div>
                                </div>

                            </div>
                        </Card>
                    )
                })}
            </div>
            <div><Button onClick={() => { setCapacityBlocks([...capacityBlocks, 'new value']) }} block={true} type="dashed" icon={<PlusOutlined />}>Capacity Block</Button></div>
        </div>
    )
}

const CapacityBlock = () => {
    const [configType, setConfigType] = React.useState('Simple');

    return (
        <div className='capcity-block'>
            {(configType === 'Simple') ? <Simple /> : <Advanced />}

            <Button onClick={() => {
                (configType === 'Simple') ? setConfigType('Advanced') : setConfigType('Simple')
            }} type='link'>{
                    (configType === 'Simple') ? `Advanced Options` : `Simple Options`
                }</Button>
        </div>
    )
}

export { CapacityBlock }