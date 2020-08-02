import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import Spinner from '../../spinner';

class DefaultLayout extends Component {
  static propTypes = {
    header: PropTypes.element.isRequired,
    content: PropTypes.element.isRequired,
    footer: PropTypes.element.isRequired
  };

  static defaultProps = {};

  render() {
    return (
      <Layout className="app">
        {this.props.header}
        <Spinner />
        <Layout.Content className="site-layout-content">
          <div>{this.props.content}</div>
        </Layout.Content>
        <footer className="w-100 footer">{this.props.footer}</footer>
      </Layout>
    );
  }
}

export default DefaultLayout;
