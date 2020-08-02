import React, { Component } from 'react';
import { Card, Table, DatePicker, Divider, Button, Modal, Popconfirm } from 'antd';
import isEmpty from 'lodash/isEmpty';
import moment from 'moment';
import { InlineSpinner } from '../spinner/InlineSpinner';
import { isEqual } from 'lodash';

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
    columns: []
  }
  componentDidMount() {
    this.props.fetchMetalCosting({});
    this.setState({
      columns: [...columns,
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <span>
            <Button type="primary" onClick={(e) => this.openAddRecord(e, 'UPDATE')}>Update {record.name}</Button>
            <Divider type="vertical" />
            <Popconfirm title="Are you sure？" okText="Yes" cancelText="No" onConfirm={() => this.deleteRecord(record)}>
              <Button type="link">Delete</Button>
            </Popconfirm>
          </span>
        )
      }]
    })
  }
  componentDidUpdate(prevProps, prevState) {
    if (!isEqual(prevProps.metalCostings, this.props.metalCostings)) {
      this.setState({
        metalCostings: [...this.props.metalCostings]
      })
    }
  }
  deleteRecord = record => this.props.deleteMetalCosting(record.id)
  onDateChange = (dateArray) => {
    dateArray && dateArray.length === 2 && this.setState({
      startDate: new Date(dateArray[0].format()),
      endDate: new Date(dateArray[1].format())
    })
  }
  openAddRecord = (e, type) => {
    this.setState({
      openModal: true,
      type
    })
  }
  toggleModal = () => {
    this.setState({ openModal: !this.state.openModal })
  }
  filterByDate = () => {
    const records = this.props.metalCostings.filter(record => {
      const aDate = new Date(record.startDate)
      const bDate = new Date(record.endDate)
      return (aDate >= this.state.startDate && bDate <= this.state.endDate)
    })
    this.setState({
      ...this.state,
      metalCostings: [...records]
    })
  }
  render() {
    const dateFormat = 'YYYY/MM/DD';
    return (
      <Card extra={<Button type="primary" onClick={(e) => this.openAddRecord(e, "ADD")}>Add</Button>}>
        <div>
          <label>Please select a range</label>
          <RangePicker onChange={this.onDateChange} defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
            format={dateFormat} />
          <Button type="primary" disabled={!this.state.startDate && !this.state.endDate} onClick={this.filterByDate}>Filter By Date</Button>
        </div>
        {!isEmpty(this.state.metalCostings) ? <Table
          columns={this.state.columns}
          rowClassName={(record, index) => record.color}
          dataSource={this.state.metalCostings}
        /> : <InlineSpinner />}
        <Modal title={`${this.state.type === 'ADD' ? "Add " : "Update"} a Record`} visible={this.state.openModal}
          onCancel={this.toggleModal}>
          <div></div>
        </Modal>
      </Card>
    );
  }
}

export default MetalCosting;