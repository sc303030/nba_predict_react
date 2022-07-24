import { Input, Space } from 'antd';
import React from 'react';
import {
  useRecoilState,
} from 'recoil';
import {SelectValueState} from './SelectValue';






const SearchInput= ():JSX.Element  => (
  const [text, setSearchValue] = useRecoilState<string>(SelectValueState);

  const { Search } = Input;
  const onSearch = (value: string) => console.log(value);

  <Space direction="vertical">
    <Search placeholder="input search text" onSearch={onSearch} enterButton />
  </Space>
);

export default SearchInput;