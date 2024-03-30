import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);
const SearchBtn = () => (
        <Search
            onSearch={onSearch}
            placeholder="Search..."
            allowClear
        />

);
export default SearchBtn;