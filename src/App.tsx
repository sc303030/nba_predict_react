import { Layout} from 'antd';
import React from 'react';
import Header from './Header'
import Content from './Contents'
const {Footer } = Layout;

const App: React.FC = () => (
  <Layout className="layout">
    <Header/>
    <Content />
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
);


export default App;