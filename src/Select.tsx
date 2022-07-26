import { Select } from 'antd';
import React from 'react';
const { Option } = Select;

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const selectCategory: React.FC = () => (
    <Select
      defaultValue="all"
      onChange={handleChange}
    >
      <Option value="all">전체</Option>
      <Option value="yellow">노란색</Option>
      <Option value="orange">주황색</Option>
      <Option value="blue">하늘색</Option>
      <Option value="green">초록색</Option>
      <Option value="red">빨간색</Option>
    </Select>
);

export default selectCategory;