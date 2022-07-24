import { Layout} from 'antd';
import React from 'react';
import Header from './Header'
import Content from './Contents'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
const {Footer } = Layout;


const App: React.FC = () => (
  <RecoilRoot>
    <Layout className="layout">
      <Header/>
      <Content />
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </RecoilRoot>
);


export default App;