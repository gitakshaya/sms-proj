import React from 'react';
import intl from 'react-intl-universal';
import { Layout } from 'antd';
const { Footer } = Layout;
const PageFooter = () => {
  const getYear = () => new Date().getFullYear();
  return <Footer className="footer text-center">{intl.get('FOOTER_TEXT', { year: getYear() })}</Footer>;
}
export default PageFooter;
