import React, { memo } from "react";
import { DiscoverWrapper, TopMenu } from "./style.js";
import { dicoverMenu } from '@/common/local-data'
import { NavLink } from "react-router-dom";

export default memo(() => {
  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {
            dicoverMenu.map(item => {
              return (
                <div className="item" key={item.title}>
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              )
            })
          }
        </TopMenu>
      </div>
    </DiscoverWrapper>
  );
});
