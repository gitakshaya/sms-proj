import React, { Component } from 'react';
import { Layout } from 'antd';
const { Header } = Layout;

class PageHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  render() {
    return (<Header className="header">
      <div className="logo" />
    </Header>)
  }
}

export default PageHeader;
