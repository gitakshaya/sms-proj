import React, { Component } from 'react';
import { Card, Table, DatePicker } from 'antd';
import isEmpty from 'lodash/isEmpty';
import moment from 'moment';

const { RangePicker } = DatePicker;
const columns = [
  {
    title: 'City',
    dataIndex: 'city',
    key: 'city',
    sorter: (a, b) => {
      return a.city.localeCompare(b.city)
    }
  },
  {
    title: 'Start Date',
    dataIndex: 'startDate',
    key: 'startDate',
    sorter: (a, b) => {
      let aDate = new Date(a.start_date);
      let bDate = new Date(b.start_date);
      return (aDate - bDate) > 0 ? 1 : -1;
    }
  },
  {
    title: 'End Date',
    dataIndex: 'endDate',
    key: 'endDate',
    sorter: (a, b) => {
      let aDate = new Date(a.end_date);
      let bDate = new Date(b.end_date);
      return (aDate - bDate) > 0 ? 1 : -1;
    }
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    sorter: (a, b) => a.price - b.price
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    sorter: (a, b) => {
      return a.status.localeCompare(b.status)
    }
  }
];
class MetalCosting extends Component {
  state = {
    columns: [...columns]
  }
  componentDidMount() {
    this.props.fetchMetalCosting({});
  }
  onDateChange = (key) => {
    console.log(key)
  }
  render() {
    const dateFormat = 'YYYY/MM/DD';
    return (
      <Card>
        <label>Please select a range</label>
        <RangePicker onChange={this.onDateChange} defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
          format={dateFormat} />
        {!isEmpty(this.props.metalCostings) ? <Table
          columns={this.state.columns}
          rowClassName={(record, index) => record.color}
          dataSource={this.props.metalCostings || []} /> : 'loading'}
      </Card>
    );
  }
}

export default MetalCosting;