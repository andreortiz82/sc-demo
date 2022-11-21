import React from 'react'
import { List, Typography, Space, Button, Checkbox, TimePicker } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';

const Dateblock = ({ timeBlocks, setTimeBlocks }) => {
    return (
        <div className='date-block'>
            <TimePicker.RangePicker />

            <Button danger icon={<DeleteOutlined />} onClick={() => {
                let collection = [...timeBlocks]
                collection.pop();
                setTimeBlocks(collection)
            }}></Button>
        </div>
    )
}

export const WeekdayBlock = ({ day }) => {
    const [timeBlocks, setTimeBlocks] = React.useState([1]);
    const [selected, setSelected] = React.useState(false);

    return (
        <List.Item className={selected ? 'weekday-list-item active' : 'weekday-list-item inactive'}>
            <div>
                <Checkbox className='weekday-list-item-check' onChange={() => { setSelected(!selected) }}><span className='item-label'>{day}</span></Checkbox>
            </div>
            {selected ?
                <div className='date-block-wrapper'>
                    {timeBlocks.map(block => {
                        return (
                            <Dateblock key={block} timeBlocks={timeBlocks} setTimeBlocks={setTimeBlocks} />
                        )
                    })}
                    <div><Button onClick={() => { setTimeBlocks([...timeBlocks, 'new value']) }} block={true} type="dashed" icon={<PlusOutlined />}>Time Block</Button></div>

                </div>
                : null}
        </List.Item>
    )
}