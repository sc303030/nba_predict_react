import { Select } from 'antd';
import React from 'react';
const { Option } = Select;

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const selectCategory: React.FC = () => (
    <Select
      defaultValue="lucy"
      style={{
        width: 120,
      }}
      onChange={handleChange}
    >
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
);

export default selectCategory;