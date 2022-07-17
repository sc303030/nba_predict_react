import { Layout, Menu } from 'antd';
import React from 'react';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => (
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={new Array(15).fill(null).map((_, index) => {
          const key = index + 1;
          return {
            key,
            label: `nav ${key}`,
          };
        })}
      />
    </Header>
    <Content>
      <section className="search-box-section bs">
        <div className="search-box-child-1-div bs">
          <div></div>
          <div></div>
          <section className="search-box">
            검색 창
          </section>
        </div>
      </section>
      <div className="site-layout-content">Content</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
);


export default App;