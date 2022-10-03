
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
        <Option value="checkbox-all">전체</Option>
        <Option value="checkbox-guard">가드</Option>
        <Option value="checkbox-guard-forward">가드-포워드</Option>
        <Option value="checkbox-forward">포워드</Option>
        <Option value="checkbox-forward-guard">포워드-가드</Option>
        <Option value="checkbox-forward-center">포워드-센터</Option>
        <Option value="checkbox-center">센터</Option>
        <Option value="checkbox-center-forward">센터-포워드</Option>
      </Select>
    )
  };

export default SelectCategory;