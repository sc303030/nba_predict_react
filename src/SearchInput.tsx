import { Input, Space } from 'antd';
import React from 'react';



const SearchInput = (): JSX.Element  => {
    const log_test = (val:string) => {
      const searchValue:string = val.toUpperCase();
      const checkboxlist : any  = document.getElementsByClassName('each-card');
      for (let  item of checkboxlist as any) {
        const player_name:String = item.childNodes[0].getAttribute('id');
        if (searchValue === "") {
          item.style.display = "block";
        } else if (player_name.toUpperCase().indexOf(searchValue) > -1) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      }
    };
    const onSearch = (value: string) => log_test(value);
    return (
      <Space direction="vertical">
        <Input  placeholder="선수 이름을 입력하세요." onKeyUp={e =>onSearch(e.target.value)} />
      </Space>
    )
  };

export default SearchInput;