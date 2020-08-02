import React from 'react';
import { Modal } from 'antd';

export const Spinner = (props) => {
  return <Modal title="Loading... please wait" visible={props.showSpinner}
    closable={false} footer={null}>
    <div class="spinner"></div>
  </Modal>
}