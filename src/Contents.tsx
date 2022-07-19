import { Layout } from 'antd';
import React from 'react';
import SelectCategory from "./Select";
import SearchInput from './SearchInput'
const {Content } = Layout;

const contents: React.FC = () => (
      <Content>
        <section className="search-box-section bs">
          <div className="search-box-child-1-div bs">
            <div></div>
            <div></div>
            <div  className="search-box">
              <SelectCategory/>
              <SearchInput />
            </div>
          </div>
        </section>
        <div className="site-layout-content">Content</div>
      </Content>
  );
  
  
  export default contents;