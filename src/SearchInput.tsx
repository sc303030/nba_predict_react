import { Input, Space } from 'antd';
import React from 'react';
const { Search } = Input;

const onSearch = (value: string) => console.log(value);

const searchInput: React.FC = () => (
  <Space direction="vertical">
    <Search placeholder="input search text" onSearch={onSearch} enterButton />
  </Space>
);

export default searchInput;