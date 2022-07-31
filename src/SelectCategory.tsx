
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
        <Option value="player">선수</Option>
        <Option value="guard">가드</Option>
        <Option value="forward">포워드</Option>
        <Option value="center">센터</Option>
      </Select>
    )
  };

export default SelectCategory;