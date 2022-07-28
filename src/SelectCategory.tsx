
import {
  useRecoilState,
} from 'recoil';
import { Select } from 'antd';
import React from 'react';

import {selectValueState} from './SelectValue';




const SelectCategory = (): JSX.Element => {
  const [searchValue, setSearchValue] = useRecoilState(selectValueState);
  const handleChange = (value: string) => {
    setSearchValue(value);
  };
  const { Option } = Select;
    return (
      <Select
        defaultValue={searchValue}
        onChange={handleChange}
      >
        <Option value="all">전체</Option>
        <Option value="yellow">노란색</Option>
        <Option value="orange">주황색</Option>
        <Option value="blue">하늘색</Option>
        <Option value="green">초록색</Option>
        <Option value="red">빨간색</Option>
      </Select>
    )
  };

export default SelectCategory;