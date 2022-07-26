import { Layout } from 'antd';
import React from 'react';
import SelectCategory from "./SelectCategory";
import SearchInput from './SearchInput';
import Information from "./Information";
const {Content } = Layout;

const contents: React.FC = () => (
      <Content>
        <section className="search-box-section bs">
          <div className="search-box-child-1-div bs ps">
            <div></div>
            <div></div>
            <div  className="search-box">
              <SelectCategory/>
              <SearchInput/>
            </div>
          </div>
        </section>
        <div className="site-layout-content ps">
          <Information/>
        </div>
      </Content>
  );
  
  
  export default contents;