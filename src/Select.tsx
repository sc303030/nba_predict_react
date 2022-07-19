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
      <Option value="team">팀</Option>
      <Option value="palyer">선수</Option>
    </Select>
);

export default selectCategory;