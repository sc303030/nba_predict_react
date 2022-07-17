import { Breadcrumb, Layout, Menu } from 'antd';
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
      <section className="search-box-parent" style={{background: 'url(img/nba-ball-general-view-iso.jpg)'}}>
        {/* <img src="img/nba-ball-general-view-iso.jpg" className="nba-01" alt="main-01"/> */}
        <section className="search-box">
          검색 창
        </section>
      </section>
      <div className="site-layout-content">Content</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
);


export default App;