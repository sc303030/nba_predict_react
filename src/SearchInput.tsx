import { Input, Space } from 'antd';
import React from 'react';
import {
  useRecoilState,
} from 'recoil';
import {SelectValueState} from './SelectValue';






const SearchInput = (): JSX.Element  => {
    const [searchValue, setSearchValue] = useRecoilState<string>(SelectValueState);
    const log_test = (val:string) => {
    }
    const { Search } = Input;
    const onSearch = (value: string) => log_test(value);
    return (
      <Space direction="vertical">
        <Search placeholder="input search text" onSearch={onSearch} enterButton />
      </Space>
    )
  };

export default SearchInput;