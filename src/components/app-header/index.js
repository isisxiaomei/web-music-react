import React, { memo } from "react";
import { NavLink } from "react-router-dom";

import Input from "antd/lib/input/Input";
import { SearchOutlined } from "@ant-design/icons";

import {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight,
} from "@/components/app-header/style";

import { headerLinks } from "@/common/local-data";

export default memo(() => {
  // 前3个是跳2级路由，后3个是a标签
  const showSelectItem = (item, index) => {
    return index < 3 ? (
      <NavLink to={item.link}>{item.title}</NavLink>
    ) : (
      <a href={item.link}>{item.title}</a>
    );
  };

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="/" className="logo sprite_01">网易云音乐</a>
          <div className="select-list">
            {headerLinks.map((item, index) => <div className="select-item" key={item.link}>{showSelectItem(item, index)}</div>)}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            className="search-input"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
          />
          <div className="creator-center">创作者中心</div>
          <div className="login">登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
});
